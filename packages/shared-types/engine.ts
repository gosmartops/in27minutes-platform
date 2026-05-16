import { 
  FieldMerchant, 
  InventoryItem, 
  Order, 
  UserIntent, 
  MerchantScoreSnapshot,
  MerchantEvent
} from '../types';

// 3. AI ROUTING ENGINE (CORE LOGIC)

/**
 * Step 3 & 4: Scoring Function + Location Efficiency
 * Final Merchant Score = (0.40 × Speed) + (0.25 × Accuracy) + (0.15 × Reliability) + (0.10 × Satisfaction) + (0.10 × Location Efficiency)
 */
export function calculateFinalMerchantScore(
  merchant: FieldMerchant, 
  snapshot: MerchantScoreSnapshot, 
  userLocation: { lat: number, lng: number }
): number {
  // Step 4: Location Efficiency Score
  // Location Efficiency = 1 / distance_to_user (simplified distance)
  const distance = Math.sqrt(
    Math.pow(merchant.location.lat - userLocation.lat, 2) + 
    Math.pow(merchant.location.lng - userLocation.lng, 2)
  ) || 0.001; // Avoid div by zero
  
  // Normalize distance to a 0-1000 score. 
  // Let's say 5km (0.05 units) is a perfect score of 1000.
  const locationScore = Math.min(1000, Math.round(1 / (distance * 20) * 1000));

  const finalScore = (
    (0.40 * snapshot.speed_score) +
    (0.25 * snapshot.accuracy_score) +
    (0.15 * snapshot.reliability_score) +
    (0.10 * snapshot.satisfaction_score) +
    (0.10 * locationScore)
  );

  return Math.round(finalScore);
}

/**
 * Step 5: AI Selection
 */
export function routeDemand(intent: UserIntent, merchants: FieldMerchant[], snapshots: MerchantScoreSnapshot[], inventory: InventoryItem[]): FieldMerchant | null {
  // Step 2: Merchant Filtering
  const eligible = merchants.filter(m => {
    // 1. Status Check
    if (m.active_status !== 'online') return false;

    // 2. Stock Check
    const hasStock = inventory.some(item => 
      item.merchant_id === m.id && 
      item.product_name.toLowerCase().includes(intent.product.toLowerCase()) &&
      item.stock_qty > 0 &&
      item.price <= intent.budget
    );
    if (!hasStock) return false;

    // 3. Score Threshold
    const snapshot = snapshots.find(s => s.merchant_id === m.id);
    if (!snapshot || snapshot.total_score < 650) return false;

    // 4. Radius Check (Tier A: 5-10km)
    const distance = Math.sqrt(
      Math.pow(m.location.lat - intent.location.lat, 2) + 
      Math.pow(m.location.lng - intent.location.lng, 2)
    );
    if (intent.delivery_target === '27_minutes' && distance > 0.1) return false; // approx 10km

    return true;
  });

  if (eligible.length === 0) return null;

  // Step 5: AI Selection
  const ranked = eligible.map(m => ({
    merchant: m,
    score: calculateFinalMerchantScore(m, snapshots.find(s => s.merchant_id === m.id)!, intent.location)
  })).sort((a, b) => b.score - a.score);

  return ranked[0].merchant;
}

/**
 * 6. SCORING ENGINE (REAL-TIME UPDATES)
 */
export function updateScoreFromEvent(currentScore: MerchantScoreSnapshot, event: MerchantEvent, order: Order): MerchantScoreSnapshot {
  const newSnapshot = { ...currentScore, updated_at: Date.now() };

  // Speed Score
  if (event.event_type === 'delivery') {
    if (order.actual_delivery_time_minutes! <= 27) {
      newSnapshot.speed_score = Math.min(1000, newSnapshot.speed_score + 10);
    } else {
      const delay = order.actual_delivery_time_minutes! - 27;
      newSnapshot.speed_score = Math.max(0, newSnapshot.speed_score - (delay * 2));
    }
  }

  // Accuracy Score
  if (event.event_type === 'failure' && event.metadata.reason === 'wrong_item') {
    newSnapshot.accuracy_score = Math.max(0, newSnapshot.accuracy_score - 50);
  } else if (event.event_type === 'delivery') {
    newSnapshot.accuracy_score = Math.min(1000, newSnapshot.accuracy_score + 10);
  }

  // Reliability Score
  if (event.event_type === 'failure' && event.metadata.reason === 'cancellation') {
    newSnapshot.reliability_score = Math.max(0, newSnapshot.reliability_score - 30);
  } else if (event.event_type === 'acceptance' && event.metadata.late) {
    newSnapshot.reliability_score = Math.max(0, newSnapshot.reliability_score - 10);
  }

  // Satisfaction Score (metadata should contain rating)
  if (event.event_type === 'delivery' && event.metadata.rating) {
    if (event.metadata.rating === 5) newSnapshot.satisfaction_score = Math.min(1000, newSnapshot.satisfaction_score + 10);
    if (event.metadata.rating === 1) newSnapshot.satisfaction_score = Math.max(0, newSnapshot.satisfaction_score - 50);
  }

  // Recalculate Total Score
  newSnapshot.total_score = Math.round(
    (0.40 * newSnapshot.speed_score) +
    (0.25 * newSnapshot.accuracy_score) +
    (0.15 * newSnapshot.reliability_score) +
    (0.10 * newSnapshot.satisfaction_score) +
    (0.10 * newSnapshot.location_efficiency_score)
  );

  return newSnapshot;
}

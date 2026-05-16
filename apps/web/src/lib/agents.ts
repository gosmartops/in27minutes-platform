import type { 
  IntentOutput, 
  ProductMatchingOutput, 
  MerchantRoutingOutput, 
  SLAOutput, 
  OrderExecutionOutput, 
  ScoringOutput, 
  FailureHandlingOutput,
  FieldMerchant,
  MerchantScoreSnapshot,
  InventoryItem,
  Order
} from '../types';

// 1. INTENT ENGINE
export async function intentEngine(message: string): Promise<IntentOutput> {
  const isIphone = message.toLowerCase().includes('iphone');
  return {
    product_type: isIphone ? 'smartphone' : 'electronics',
    brand: isIphone ? 'Apple' : null,
    budget: 500000,
    location: "Lagos",
    urgency: "high",
    use_case: "personal",
    preferences: [],
    quantity: 1
  };
}

// 2. PRODUCT MATCHING ENGINE
export async function productMatchingEngine(intent: IntentOutput, inventory: InventoryItem[]): Promise<ProductMatchingOutput> {
  const matches = inventory
    .filter(item => item.product_name.toLowerCase().includes(intent.brand?.toLowerCase() || ''))
    .map(item => ({
      product_id: item.id,
      merchant_id: item.merchant_id,
      title: item.product_name,
      price: item.price,
      relevance_score: 95,
      eta_minutes: 22,
      reason: "Best price and closest availability."
    }))
    .slice(0, 7);
  return { matches };
}

// 3. MERCHANT ROUTING ENGINE
export async function merchantRoutingEngine(
  _intent: IntentOutput, 
  merchants: FieldMerchant[], 
  snapshots: MerchantScoreSnapshot[]
): Promise<MerchantRoutingOutput> {
  const sorted = merchants
    .map(m => ({
      m,
      snapshot: snapshots.find(s => s.merchant_id === m.id)!
    }))
    .sort((a, b) => b.snapshot.total_score - a.snapshot.total_score);

  return {
    selected_merchant: {
      merchant_id: sorted[0].m.id,
      score: sorted[0].snapshot.total_score,
      eta_minutes: 19,
      reason: "Highest reputation and optimal distance."
    },
    backup_merchant: {
      merchant_id: sorted[1].m.id,
      score: sorted[1].snapshot.total_score,
      eta_minutes: 25,
      reason: "Secondary performance match."
    },
    risk_assessment: {
      delay_risk: "low",
      stock_risk: "low"
    }
  };
}

// 4. DELIVERY SLA ENGINE
export async function deliverySLAEngine(eta: number): Promise<SLAOutput> {
  const tier = eta <= 27 ? 'A' : eta <= 180 ? 'B' : 'C';
  return {
    tier,
    estimated_delivery_minutes: eta,
    is_27_min_eligible: eta <= 27,
    reason: eta <= 27 ? "Merchant within speed radius." : "Standard delivery zone."
  };
}

// 5. ORDER EXECUTION AGENT
export async function orderExecutionAgent(orderId: string, status: Order['status']): Promise<OrderExecutionOutput> {
  const transitions: Record<string, string> = {
    'pending': 'accepted',
    'accepted': 'processing',
    'processing': 'out_for_delivery',
    'out_for_delivery': 'delivered'
  };
  return {
    order_id: orderId,
    new_status: transitions[status] || status,
    next_action: status === 'pending' ? 'PUSH_TO_MERCHANT' : 'MONITOR_GPS',
    alerts: []
  };
}

// 6. MERCHANT SCORING ENGINE
export async function merchantScoringEngine(snapshot: MerchantScoreSnapshot, event: any): Promise<ScoringOutput> {
  // Simplified calculation
  const delta = event.type === 'success' ? 15 : -30;
  return {
    merchant_id: snapshot.merchant_id,
    new_total_score: snapshot.total_score + delta,
    score_breakdown: {
      speed: snapshot.speed_score + delta,
      accuracy: snapshot.accuracy_score,
      reliability: snapshot.reliability_score,
      satisfaction: snapshot.satisfaction_score,
      compliance: snapshot.compliance_score
    },
    delta,
    reason: delta > 0 ? "Successful 27-min delivery bonus." : "SLA breach penalty."
  };
}

// 7. CUSTOMER EXPLANATION AGENT
export function customerExplanationAgent(routing: MerchantRoutingOutput, product: string) {
  return `
- Why this fits: High-spec ${product} matching your budget.
- Why this merchant: ${routing.selected_merchant.reason}
- Expected arrival: ${routing.selected_merchant.eta_minutes} minutes
- Confidence level: High (SLA Tier A)
  `;
}

// 8. FAILURE HANDLING AGENT
export async function failureHandlingAgent(reason: string, backupId: string): Promise<FailureHandlingOutput> {
  return {
    action: "reroute",
    new_merchant_id: backupId,
    updated_eta: 25,
    reason: `Primary merchant failed due to ${reason}. Rerouting to backup.`
  };
}

// ORCHESTRATION LAYER
export const api = {
  query: async (_userId: string, message: string) => {
    // 1. Intent
    const intent = await intentEngine(message);
    
    // Mock Database
    const merchants: FieldMerchant[] = [
      { id: 'm1', name: 'Gadget Hub', phone: '123', location: { lat: 6.5, lng: 3.3, address: 'Ikeja' }, merchant_type: 'retail', active_status: 'online', base_score: 910, created_at: 0 },
      { id: 'm2', name: 'Tech Store', phone: '456', location: { lat: 6.55, lng: 3.4, address: 'Lekki' }, merchant_type: 'retail', active_status: 'online', base_score: 740, created_at: 0 }
    ];
    const snapshots: MerchantScoreSnapshot[] = [
      { merchant_id: 'm1', speed_score: 900, accuracy_score: 950, reliability_score: 920, satisfaction_score: 900, compliance_score: 850, location_efficiency_score: 940, total_score: 910, updated_at: 0 },
      { merchant_id: 'm2', speed_score: 700, accuracy_score: 800, reliability_score: 750, satisfaction_score: 850, compliance_score: 800, location_efficiency_score: 600, total_score: 740, updated_at: 0 }
    ];
    const inventory: InventoryItem[] = [
      { id: 'p1', merchant_id: 'm1', product_name: 'Apple iPhone 13', category: 'phones', price: 495000, stock_qty: 5, avg_preparation_time_minutes: 5, last_updated: 0 }
    ];

    // 2. Product Match
    const matches = await productMatchingEngine(intent, inventory);
    
    // 3. Routing
    const routing = await merchantRoutingEngine(intent, merchants, snapshots);
    
    // 4. SLA check
    const sla = await deliverySLAEngine(routing.selected_merchant.eta_minutes);
    
    // 7. Explanation
    const explanation = customerExplanationAgent(routing, intent.product_type);

    return {
      intent,
      results: matches.matches.map(m => ({
        ...m,
        merchant_name: merchants.find(merch => merch.id === m.merchant_id)?.name,
        sla_tier: sla.tier
      })),
      explanation
    };
  }
};

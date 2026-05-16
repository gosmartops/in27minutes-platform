// 1. CORE TYPES & INTERFACES

export interface MerchantScoreSnapshot {
  merchant_id: string;
  speed_score: number;
  accuracy_score: number;
  reliability_score: number;
  satisfaction_score: number;
  compliance_score: number;
  location_efficiency_score: number;
  total_score: number;
  updated_at: number;
}

export interface MerchantEvent {
  event_id: string;
  merchant_id: string;
  event_type: 'delivery' | 'failure' | 'acceptance' | 'rejection';
  metadata: {
    reason?: string;
    late?: boolean;
    rating?: number;
    delta_time?: number;
  };
  timestamp: number;
}

export interface UserIntent {
  product: string;
  budget: number;
  location: { lat: number, lng: number };
  delivery_target: '27_minutes' | 'standard';
}


export interface FieldMerchant {
  id: string;
  name: string;
  phone: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  merchant_type: 'retail' | 'micro' | 'warehouse';
  active_status: 'online' | 'offline' | 'busy';
  base_score: number; // 0-1000
  created_at: number;
}

export interface InventoryItem {
  id: string;
  merchant_id: string;
  product_name: string;
  category: string;
  price: number;
  stock_qty: number;
  avg_preparation_time_minutes: number;
  last_updated: number;
}

export interface Order {
  id: string;
  user_id: string;
  merchant_id?: string;
  status: 'pending' | 'accepted' | 'processing' | 'out_for_delivery' | 'delivered' | 'failed';
  product_name: string;
  quantity: number;
  price: number;
  created_at: number;
  promised_delivery_time: '27 min' | 'same-day' | '3-day';
  actual_delivery_time_minutes?: number;
  user_location: { lat: number; lng: number };
}

// 1. INTENT ENGINE OUTPUT
export interface IntentOutput {
  product_type: string;
  brand: string | null;
  budget: number | null;
  location: string;
  urgency: 'low' | 'medium' | 'high';
  use_case: string;
  preferences: string[];
  quantity: number;
}

// 2. PRODUCT MATCHING ENGINE OUTPUT
export interface ProductMatch {
  product_id: string;
  merchant_id: string;
  title: string;
  price: number;
  relevance_score: number; // 0-100
  eta_minutes: number;
  reason: string;
}

export interface ProductMatchingOutput {
  matches: ProductMatch[];
}

// 3. MERCHANT ROUTING ENGINE OUTPUT
export interface MerchantRoutingOutput {
  selected_merchant: {
    merchant_id: string;
    score: number;
    eta_minutes: number;
    reason: string;
  };
  backup_merchant: {
    merchant_id: string;
    score: number;
    eta_minutes: number;
    reason: string;
  };
  risk_assessment: {
    delay_risk: 'low' | 'medium' | 'high';
    stock_risk: 'low' | 'medium' | 'high';
  };
}

// 4. DELIVERY SLA ENGINE OUTPUT
export interface SLAOutput {
  tier: 'A' | 'B' | 'C';
  estimated_delivery_minutes: number;
  is_27_min_eligible: boolean;
  reason: string;
}

// 5. ORDER EXECUTION AGENT OUTPUT
export interface OrderExecutionOutput {
  order_id: string;
  new_status: string;
  next_action: string;
  alerts: string[];
}

// 6. MERCHANT SCORING ENGINE OUTPUT
export interface ScoringOutput {
  merchant_id: string;
  new_total_score: number;
  score_breakdown: {
    speed: number;
    accuracy: number;
    reliability: number;
    satisfaction: number;
    compliance: number;
  };
  delta: number;
  reason: string;
}

// 8. FAILURE HANDLING AGENT OUTPUT
export interface FailureHandlingOutput {
  action: 'reroute' | 'delay' | 'cancel' | 'refund';
  new_merchant_id: string | null;
  updated_eta: number | null;
  reason: string;
}

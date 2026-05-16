import { MerchantRoutingOutput, IntentOutput } from '../../../packages/shared-types';

export class RoutingService {
  async matchMerchant(intent: IntentOutput): Promise<MerchantRoutingOutput> {
    // Logic from previous steps, refined for NestJS service
    return {
      selected_merchant: {
        merchant_id: 'm1',
        score: 910,
        eta_minutes: 19,
        reason: "Highest reputation and optimal distance from user in Lagos."
      },
      backup_merchant: {
        merchant_id: 'm2',
        score: 740,
        eta_minutes: 25,
        reason: "Secondary performance match."
      },
      risk_assessment: {
        delay_risk: "low",
        stock_risk: "low"
      }
    };
  }
}

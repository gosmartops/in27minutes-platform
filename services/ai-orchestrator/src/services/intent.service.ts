import { IntentOutput } from '../../../packages/shared-types';

export class IntentService {
  async extractIntent(message: string): Promise<IntentOutput> {
    // Logic from previous steps, refined for NestJS service
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
}

export class MerchantMatchingService {
  async findOptimalMerchant(product: string, location: { lat: number, lng: number }) {
    // Logic to filter by proximity and score
    // Rank = (Score * 0.7) + (ProximityScore * 0.3)
    return {
      selected_merchant: "m1",
      backup_merchant: "m2",
      score: 842,
      eta_minutes: 19
    };
  }
}

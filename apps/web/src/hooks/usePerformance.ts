import { useState, useEffect } from 'react';
import { MerchantScoreSnapshot, FieldMerchant } from '../types';

export const usePerformanceSimulation = () => {
  const [merchant] = useState<FieldMerchant>({
    id: 'M-001',
    name: 'Gadget Hub Central',
    phone: '+1 234 567 890',
    location: { lat: 40.7128, lng: -74.0060, address: 'Broadway, NY' },
    merchant_type: 'retail',
    active_status: 'online',
    base_score: 850,
    created_at: Date.now() - 1000000,
  });

  const [snapshot, setSnapshot] = useState<MerchantScoreSnapshot>({
    merchant_id: 'M-001',
    speed_score: 880,
    accuracy_score: 950,
    reliability_score: 920,
    satisfaction_score: 900,
    compliance_score: 850,
    location_efficiency_score: 940,
    total_score: 892,
    updated_at: Date.now(),
  });

  // Simulate scoring updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSnapshot(prev => ({
        ...prev,
        speed_score: Math.min(1000, Math.max(0, prev.speed_score + (Math.random() - 0.5) * 5)),
        total_score: Math.round(
          (0.40 * prev.speed_score) +
          (0.25 * prev.accuracy_score) +
          (0.15 * prev.reliability_score) +
          (0.10 * prev.satisfaction_score) +
          (0.10 * prev.location_efficiency_score)
        ),
        updated_at: Date.now(),
      }));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return { merchant, snapshot };
};

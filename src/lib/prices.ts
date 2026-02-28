export type PlanTier = 'essential' | 'professional';
export type PaymentMethod = 'card' | 'pix';

export const BRL_PRICES: Record<PlanTier, Record<PaymentMethod, number>> = {
  essential:    { card: 690,  pix: 620  },
  professional: { card: 1800, pix: 1620 },
};

export const TIER_LABELS_PT: Record<PlanTier, string> = {
  essential:    'Plano Essencial',
  professional: 'Plano Profissional',
};

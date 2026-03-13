export type PlanTier = 'essential' | 'professional';
export type PaymentMethod = 'card' | 'pix';

export const BRL_PRICES: Record<PlanTier, Record<PaymentMethod, number>> = {
  essential:    { card: 797,  pix: 717  },
  professional: { card: 1497, pix: 1347 },
};

export const TIER_LABELS_PT: Record<PlanTier, string> = {
  essential:    'Plano Essencial',
  professional: 'Plano Profissional',
};

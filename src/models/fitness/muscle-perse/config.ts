import type { ModelConfig } from '@/models/_config/types';

export const config: ModelConfig = {
  id: 'muscle-perse',
  type: 'react',
  niche: 'fitness',
  category: 'fitness',
  objective: 'leads',
  locales: ['pt', 'en'] as const,
  colors: ['#FF4D00', '#050505'], // Orange, Black
  features: {
    pt: [
      'Consultoria personalizada de treino',
      'Acompanhamento nutricional',
      'Suporte online 24/7',
      'Planos presenciais e híbridos',
    ],
    en: [
      'Personalized training consultation',
      'Nutritional guidance',
      '24/7 online support',
      'In-person and hybrid plans',
    ],
  },
};

import type { ModelConfig } from '@/models/_config/types';

export const config: ModelConfig = {
  id: 'personal-trainer-masc',
  type: 'react',
  niche: 'fitness',
  category: 'fitness',
  objective: 'leads',
  locales: ['pt', 'en'] as const,
  colors: ['#FF6B00', '#1A1A1A'], // Orange energético, Preto
  features: {
    pt: [
      'Planos de treino personalizados',
      'Acompanhamento online',
      'Avaliação física completa',
      'Suporte via WhatsApp',
    ],
    en: [
      'Customized training plans',
      'Online coaching',
      'Complete physical assessment',
      'WhatsApp support',
    ],
  },
};

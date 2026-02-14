import type { ModelConfig } from '@/models/_config/types';

export const config: ModelConfig = {
  id: 'home-nursing',
  type: 'react',
  niche: 'health',
  category: 'health',
  objective: 'leads',
  locales: ['pt', 'en'] as const,
  colors: ['#10B981', '#047857'],
  features: {
    pt: [
      'Cuidados com feridas e curativos',
      'Administração de medicamentos',
      'Acompanhamento de idosos',
      'Reabilitação pós-cirúrgica',
      'Sondagens e suporte nutricional',
      'Disponibilidade 24h',
    ],
    en: [
      'Wound care and dressings',
      'Medication administration',
      'Elderly care',
      'Post-surgical rehabilitation',
      'Tube feeding and nutritional support',
      '24/7 availability',
    ],
  },
};

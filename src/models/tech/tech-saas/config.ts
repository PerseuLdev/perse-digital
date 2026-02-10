import type { ModelConfig } from '@/models/_config/types';

export const config: ModelConfig = {
  id: 'tech-saas',
  type: 'react',
  niche: 'tech',
  category: 'tech',
  objective: 'leads',
  locales: ['pt', 'en'] as const,
  colors: ['#6366F1', '#0F172A'], // Roxo tech, Azul escuro profundo
  features: {
    pt: [
      'Captura de trials/demos',
      'Integração com CRM',
      'Pricing dinâmico',
      'Dashboard de produto',
    ],
    en: [
      'Trial/demo capture',
      'CRM integration',
      'Dynamic pricing',
      'Product dashboard',
    ],
  },
};

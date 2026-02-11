import type { ModelConfig } from '@/models/_config/types';

export const config: ModelConfig = {
  id: 'dental-clinic',
  type: 'react',
  niche: 'health',
  category: 'health',
  objective: 'leads',
  locales: ['pt', 'en'] as const,
  colors: ['#000000', '#FFFFFF'],
  features: {
    pt: [
      'Feature 1 - Editar manualmente',
      'Feature 2 - Editar manualmente',
      'Feature 3 - Editar manualmente',
    ],
    en: [
      'Feature 1 - Edit manually',
      'Feature 2 - Edit manually',
      'Feature 3 - Edit manually',
    ],
  },
};

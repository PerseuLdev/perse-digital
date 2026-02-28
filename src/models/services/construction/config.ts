import type { ModelConfig } from '@/models/_config/types';

export const config: ModelConfig = {
  id: 'construction',
  type: 'react',
  niche: 'services',
  category: 'services',
  objective: 'leads',
  locales: ['pt', 'en'] as const,
  colors: ['#38b6ff', '#ffde59', '#ffffff', '#000000'],
  features: {
    pt: [
      'Obras residenciais e comerciais',
      'Reformas completas',
      'Gerenciamento de projetos',
      'Garantia de Qualidade',
    ],
    en: [
      'Residential and commercial construction',
      'Complete renovations',
      'Project management',
      'Quality Guarantee',
    ],
  },
};

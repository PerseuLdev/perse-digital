import type { ModelConfig } from '@/models/_config/types';

export const config: ModelConfig = {
  id: 'beauty-glow',
  type: 'react',
  niche: 'beauty',
  category: 'beauty',
  objective: 'portfolio',
  locales: ['pt', 'en'] as const,
  colors: ['#DB2777', '#FFF5F7'], // Rosa vibrante, Rosa claro suave
  features: {
    pt: [
      'Portfolio de serviços',
      'Galeria de antes/depois',
      'Agendamento online',
      'Produtos e tratamentos',
    ],
    en: [
      'Services portfolio',
      'Before/after gallery',
      'Online booking',
      'Products and treatments',
    ],
  },
};

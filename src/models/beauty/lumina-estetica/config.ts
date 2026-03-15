import type { ModelConfig } from '@/models/_config/types';

export const config: ModelConfig = {
  id: 'lumina-estetica',
  type: 'react',
  niche: 'beauty',
  category: 'beauty',
  objective: 'leads',
  locales: ['pt', 'en'] as const,
  colors: ['#C89B6B', '#7C5C3E'],
  features: {
    pt: [
      'Harmonização facial e bioestimuladores',
      'Galeria de resultados interativa',
      'Agendamento via WhatsApp integrado',
      'Depoimentos reais de clientes',
    ],
    en: [
      'Facial harmonization & biostimulators',
      'Interactive results gallery',
      'Integrated WhatsApp scheduling',
      'Real client testimonials',
    ],
  },
};

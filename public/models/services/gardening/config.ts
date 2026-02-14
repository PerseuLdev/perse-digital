import type { ModelConfig } from '@/models/_config/types';

export const config: ModelConfig = {
  id: 'gardening',
  type: 'static',
  niche: 'services',
  category: 'services', // Mantido para compatibilidade
  objective: 'portfolio',
  locales: ['pt', 'en'] as const,
  colors: ['#2C4A3B', '#8C9A83', '#D4AF37'], // Verde floresta, Verde sálvia, Dourado
  features: {
    pt: [
      'Design paisagístico personalizado',
      'Execução de obras completa',
      'Manutenção e consultoria',
      'Sustentabilidade e eco-design',
    ],
    en: [
      'Customized landscape design',
      'Complete project execution',
      'Maintenance and consulting',
      'Sustainability and eco-design',
    ],
  },
};

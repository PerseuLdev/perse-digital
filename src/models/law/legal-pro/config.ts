import type { ModelConfig } from '@/models/_config/types';

export const config: ModelConfig = {
  id: 'legal-pro',
  type: 'react',
  niche: 'law',
  category: 'law',
  objective: 'leads',
  locales: ['pt', 'en'] as const,
  colors: ['#1E293B', '#C5A059'], // Azul escuro profissional, Dourado advocacia
  features: {
    pt: [
      'Captura de leads qualificados',
      'Áreas de atuação destacadas',
      'Depoimentos de clientes',
      'Formulário de contato otimizado',
    ],
    en: [
      'Qualified lead capture',
      'Featured practice areas',
      'Client testimonials',
      'Optimized contact form',
    ],
  },
};

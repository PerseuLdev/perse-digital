import type { ModelConfig } from '@/models/_config/types';

export const config: ModelConfig = {
  id: 'dental-clinic',
  type: 'react',
  niche: 'health',
  category: 'health',
  objective: 'leads',
  locales: ['pt', 'en'] as const,
  colors: ['#14B8A6', '#0F766E'],
  features: {
    pt: [
      'Agendamento online inteligente',
      'Tecnologia odontológica avançada',
      'Galeria antes e depois interativa',
      'Atendimento emergencial 24h',
    ],
    en: [
      'Smart online scheduling',
      'Advanced dental technology',
      'Interactive before & after gallery',
      '24/7 emergency service',
    ],
  },
};

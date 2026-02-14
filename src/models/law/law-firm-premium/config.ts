import type { ModelConfig } from '@/models/_config/types';

export const config: ModelConfig = {
  id: 'law-firm-premium',
  type: 'react',
  niche: 'law',
  category: 'law',
  objective: 'leads',
  locales: ['pt', 'en'] as const,
  colors: ['#050505', '#080808'],
  features: {
    pt: [
      'Design premium com animações sofisticadas',
      '6 áreas de atuação (Civil, Trabalhista, Família, Criminal, Empresarial, Digital)',
      'Formulário de contato e integração WhatsApp',
      'Seção de cases, depoimentos e FAQ',
    ],
    en: [
      'Premium design with sophisticated animations',
      '6 practice areas (Civil, Labor, Family, Criminal, Business, Digital)',
      'Contact form and WhatsApp integration',
      'Case studies, testimonials and FAQ section',
    ],
  },
};

import type { ModelConfig } from '@/models/_config/types';

export const config: ModelConfig = {
  id: 'fitness-pro',
  type: 'react',
  niche: 'fitness',
  category: 'fitness',
  objective: 'scheduling',
  locales: ['pt', 'en'] as const,
  colors: ['#EF4444', '#171717'], // Vermelho energia, Preto intenso
  features: {
    pt: [
      'Agendamento de treinos online',
      'Planos de assinatura',
      'Galeria de transformações',
      'Área do aluno',
    ],
    en: [
      'Online training scheduling',
      'Subscription plans',
      'Transformation gallery',
      'Student area',
    ],
  },
};

import type { ModelConfig } from '@/models/_config/types';

export const config: ModelConfig = {
  id: 'health-pro',
  type: 'react',
  niche: 'health',
  category: 'health', // Mantido para compatibilidade
  objective: 'scheduling',
  locales: ['pt', 'en'] as const,
  colors: ['#004AAD', '#F8FAFC'], // Azul médico profissional, Off-white
  features: {
    pt: [
      'Agendamento online integrado',
      'Blog de saúde',
      'Área do paciente',
      'Gestão de consultas',
    ],
    en: [
      'Integrated online booking',
      'Health blog',
      'Patient area',
      'Appointment management',
    ],
  },
};

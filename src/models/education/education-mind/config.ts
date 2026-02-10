import type { ModelConfig } from '@/models/_config/types';

export const config: ModelConfig = {
  id: 'education-mind',
  type: 'react',
  niche: 'education',
  category: 'education',
  objective: 'portfolio',
  locales: ['pt', 'en'] as const,
  colors: ['#10B981', '#ECFDF5'], // Verde educação, Verde claro suave
  features: {
    pt: [
      'Catálogo de cursos',
      'Área do aluno',
      'Certificados digitais',
      'Fórum de discussão',
    ],
    en: [
      'Course catalog',
      'Student area',
      'Digital certificates',
      'Discussion forum',
    ],
  },
};

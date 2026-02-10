// Definições de nichos/categorias

import type { Niche } from './types';

export interface NicheDefinition {
  id: Niche;
  name: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  icon: string;  // Emoji ou nome de ícone
}

export const NICHES: Record<Niche, NicheDefinition> = {
  health: {
    id: 'health',
    name: {
      pt: 'Saúde',
      en: 'Health',
    },
    description: {
      pt: 'Consultórios, clínicas e profissionais da saúde',
      en: 'Offices, clinics and healthcare professionals',
    },
    icon: '🏥',
  },
  law: {
    id: 'law',
    name: {
      pt: 'Advocacia',
      en: 'Law',
    },
    description: {
      pt: 'Escritórios de advocacia e serviços jurídicos',
      en: 'Law firms and legal services',
    },
    icon: '⚖️',
  },
  fitness: {
    id: 'fitness',
    name: {
      pt: 'Fitness',
      en: 'Fitness',
    },
    description: {
      pt: 'Academias, personal trainers e esportes',
      en: 'Gyms, personal trainers and sports',
    },
    icon: '💪',
  },
  beauty: {
    id: 'beauty',
    name: {
      pt: 'Beleza',
      en: 'Beauty',
    },
    description: {
      pt: 'Salões, clínicas de estética e beleza',
      en: 'Salons, aesthetic clinics and beauty',
    },
    icon: '💄',
  },
  tech: {
    id: 'tech',
    name: {
      pt: 'Tecnologia',
      en: 'Technology',
    },
    description: {
      pt: 'SaaS, startups e empresas de tecnologia',
      en: 'SaaS, startups and tech companies',
    },
    icon: '💻',
  },
  education: {
    id: 'education',
    name: {
      pt: 'Educação',
      en: 'Education',
    },
    description: {
      pt: 'Escolas, cursos online e educação',
      en: 'Schools, online courses and education',
    },
    icon: '📚',
  },
  services: {
    id: 'services',
    name: {
      pt: 'Serviços',
      en: 'Services',
    },
    description: {
      pt: 'Serviços diversos (jardinagem, reformas, etc)',
      en: 'Various services (gardening, renovations, etc)',
    },
    icon: '🌱',
  },
};

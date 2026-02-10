// Definições de objetivos dos modelos

import type { Objective } from './types';

export interface ObjectiveDefinition {
  id: Objective;
  name: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  icon: string;
}

export const OBJECTIVES: Record<Objective, ObjectiveDefinition> = {
  scheduling: {
    id: 'scheduling',
    name: {
      pt: 'Agendamento',
      en: 'Scheduling',
    },
    description: {
      pt: 'Sistema de agendamento online integrado',
      en: 'Integrated online scheduling system',
    },
    icon: '📅',
  },
  ecommerce: {
    id: 'ecommerce',
    name: {
      pt: 'E-commerce',
      en: 'E-commerce',
    },
    description: {
      pt: 'Loja virtual com carrinho de compras',
      en: 'Online store with shopping cart',
    },
    icon: '🛒',
  },
  portfolio: {
    id: 'portfolio',
    name: {
      pt: 'Portfolio',
      en: 'Portfolio',
    },
    description: {
      pt: 'Vitrine de trabalhos e apresentação',
      en: 'Showcase of work and presentation',
    },
    icon: '🎨',
  },
  leads: {
    id: 'leads',
    name: {
      pt: 'Captura de Leads',
      en: 'Lead Generation',
    },
    description: {
      pt: 'Formulários e captura de potenciais clientes',
      en: 'Forms and potential customer capture',
    },
    icon: '🎯',
  },
  dashboard: {
    id: 'dashboard',
    name: {
      pt: 'Dashboard',
      en: 'Dashboard',
    },
    description: {
      pt: 'Painel administrativo e gestão',
      en: 'Administrative panel and management',
    },
    icon: '📊',
  },
  blog: {
    id: 'blog',
    name: {
      pt: 'Blog',
      en: 'Blog',
    },
    description: {
      pt: 'Publicação de conteúdo e artigos',
      en: 'Content and article publishing',
    },
    icon: '📝',
  },
};

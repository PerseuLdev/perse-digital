// TypeScript types compartilhados para todos os modelos

export type Locale = 'pt' | 'en';
export type ModelType = 'react' | 'static';

export type Niche =
  | 'health'      // Saúde e bem-estar
  | 'law'         // Advocacia e jurídico
  | 'fitness'     // Fitness e academia
  | 'beauty'      // Beleza e estética
  | 'tech'        // Tecnologia e SaaS
  | 'education'   // Educação e ensino
  | 'services';   // Serviços diversos (jardinagem, etc)

export type Objective =
  | 'scheduling'  // Agendamento online
  | 'ecommerce'   // E-commerce/vendas
  | 'portfolio'   // Portfolio/institucional
  | 'leads'       // Geração de leads
  | 'dashboard'   // Dashboard/área administrativa
  | 'blog';       // Blog/conteúdo

export interface ModelConfig {
  id: string;
  type: ModelType;
  niche: Niche;
  category: string;  // Mantido para compatibilidade
  objective: Objective;
  locales: readonly Locale[];
  colors: string[];
  features?: {
    [key in Locale]?: string[];
  };
}

export interface ModelRegistryEntry {
  id: string;
  type: ModelType;
  niche: Niche;
  locales: readonly Locale[];
  path: string;
  config: ModelConfig;
}

import { Model } from '@/components/sections/model-card';
import { MODELS_REGISTRY } from '@/models/_config/models.registry';

// Mapeamento de IDs do registry para IDs de exibição (compatibilidade)
const ID_MAP: Record<string, string> = {
  'health-pro': 'medical-premium',
  'legal-pro': 'legal-advisor',
  'fitness-pro': 'fitness-pro',
  'beauty-glow': 'beauty-glow',
  'tech-saas': 'tech-startup',
  'education-mind': 'education-mind',
  'gardening': 'gardening-botanica',
  'personal-trainer-masc': 'personal-trainer-masc',
  'home-nursing': 'home-nursing',
};

// Mapeamento de imagens por modelo
const MODEL_IMAGES: Record<string, { image: string; mobileImage: string }> = {
  'health-pro': {
    image: 'https://images.unsplash.com/photo-1576091160550-217359f42f8c?w=1200&h=1800&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1576091160550-217359f42f8c?w=600&h=1000&fit=crop',
  },
  'legal-pro': {
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=1800&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=1000&fit=crop',
  },
  'fitness-pro': {
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=1800&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=1000&fit=crop',
  },
  'beauty-glow': {
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&h=1800&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=1000&fit=crop',
  },
  'tech-saas': {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=1800&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=1000&fit=crop',
  },
  'education-mind': {
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=1800&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=1000&fit=crop',
  },
  'gardening': {
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&h=1800&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=1000&fit=crop',
  },
  'personal-trainer-masc': {
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=1800&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=1000&fit=crop',
  },
  'muscle-perse': {
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&h=1800&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=1000&fit=crop',
  },
  'home-nursing': {
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&h=1800&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=1000&fit=crop',
  },
};

// Transforma modelos do registry para o formato de exibição
export const MODELS: Model[] = MODELS_REGISTRY.map((config) => {
  const displayId = ID_MAP[config.id] || config.id;
  const images = MODEL_IMAGES[config.id] || {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=1800&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=1000&fit=crop',
  };

  return {
    id: displayId,
    category: config.category,
    objective: config.objective as 'leads' | 'scheduling' | 'portfolio' | 'visual',
    title: displayId, // Temporary fallback, i18n will override
    description: `Model ${displayId}`, // Temporary fallback, i18n will override
    image: images.image,
    mobileImage: images.mobileImage,
    features: config.features?.pt || [], // Use PT features as fallback
    colors: config.colors,
    demoUrl: `/${config.id}`, // URL baseada no ID do registro
  };
});

// Todos os modelos agora vêm do MODELS_REGISTRY
// Não há mais placeholders separados

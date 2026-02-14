import { Model } from '@/components/sections/model-card';
import { MODELS_REGISTRY } from '@/models/_config/models.registry';

// Mapeamento de IDs do registry para IDs de exibição (compatibilidade)
const ID_MAP: Record<string, string> = {
  'gardening': 'gardening-botanica',
  'personal-trainer-masc': 'personal-trainer-masc',
  'home-nursing': 'home-nursing',
  'dental-clinic': 'dental-clinic',
};

// Mapeamento de imagens por modelo
const MODEL_IMAGES: Record<string, { image: string; mobileImage: string }> = {
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
  'dental-clinic': {
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=1800&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=1000&fit=crop',
  },
  'law-firm-premium': {
    image: 'https://images.unsplash.com/photo-1589578527966-fd71649f435d?w=1200&h=1800&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1589578527966-fd71649f435d?w=600&h=1000&fit=crop',
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

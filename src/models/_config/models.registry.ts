// Registro centralizado de todos os modelos do sistema

import { config as gardeningConfig } from '../services/gardening/config';
import { config as personalTrainerMascConfig } from '../fitness/personal-trainer-masc/config';
import { config as musclePerseConfig } from '../fitness/muscle-perse/config';
import { config as homeNursingConfig } from '../health/home-nursing/config';
import { config as dentalClinicConfig } from '../health/dental-clinic/config';
import { config as lawFirmPremiumConfig } from '../law/law-firm-premium/config';
import type { ModelConfig } from './types';

/**
 * MODELS_REGISTRY - Fonte única de verdade para todos os modelos
 *
 * Adicione novos modelos aqui após criar sua estrutura em src/models/{niche}/{model-id}/
 */
export const MODELS_REGISTRY: ModelConfig[] = [
  gardeningConfig,
  personalTrainerMascConfig,
  musclePerseConfig,
  homeNursingConfig,
  dentalClinicConfig,
  lawFirmPremiumConfig,
];

/**
 * Helper para buscar modelo por ID
 */
export function getModelById(id: string): ModelConfig | undefined {
  return MODELS_REGISTRY.find(model => model.id === id);
}

/**
 * Helper para buscar modelos por nicho
 */
export function getModelsByNiche(niche: string): ModelConfig[] {
  return MODELS_REGISTRY.filter(model => model.niche === niche);
}

/**
 * Helper para buscar modelos por tipo
 */
export function getModelsByType(type: 'react' | 'static'): ModelConfig[] {
  return MODELS_REGISTRY.filter(model => model.type === type);
}

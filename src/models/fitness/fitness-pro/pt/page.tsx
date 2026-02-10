import { ModelPlaceholder } from '@/components/placeholders/model-placeholder';
import { config } from '../config';

export default function FitnessProPT() {
  return (
    <ModelPlaceholder
      modelName="Fitness Pro"
      colors={config.colors}
      locale="pt"
    />
  );
}

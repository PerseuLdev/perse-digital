import { ModelPlaceholder } from '@/components/placeholders/model-placeholder';
import { config } from '../config';

export default function FitnessProEN() {
  return (
    <ModelPlaceholder
      modelName="Fitness Pro"
      colors={config.colors}
      locale="en"
    />
  );
}

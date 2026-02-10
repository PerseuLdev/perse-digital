import { ModelPlaceholder } from '@/components/placeholders/model-placeholder';
import { config } from '../config';

export default function LegalProPT() {
  return (
    <ModelPlaceholder
      modelName="Legal Pro"
      colors={config.colors}
      locale="pt"
    />
  );
}

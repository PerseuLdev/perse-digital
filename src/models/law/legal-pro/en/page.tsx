import { ModelPlaceholder } from '@/components/placeholders/model-placeholder';
import { config } from '../config';

export default function LegalProEN() {
  return (
    <ModelPlaceholder
      modelName="Legal Pro"
      colors={config.colors}
      locale="en"
    />
  );
}

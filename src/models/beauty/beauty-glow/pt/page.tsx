import { ModelPlaceholder } from '@/components/placeholders/model-placeholder';
import { config } from '../config';

export default function BeautyGlowPT() {
  return (
    <ModelPlaceholder
      modelName="Beauty Glow"
      colors={config.colors}
      locale="pt"
    />
  );
}

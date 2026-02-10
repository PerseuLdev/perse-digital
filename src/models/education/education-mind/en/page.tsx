import { ModelPlaceholder } from '@/components/placeholders/model-placeholder';
import { config } from '../config';

export default function EducationMindEN() {
  return (
    <ModelPlaceholder
      modelName="Education Mind"
      colors={config.colors}
      locale="en"
    />
  );
}

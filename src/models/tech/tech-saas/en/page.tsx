import { ModelPlaceholder } from '@/components/placeholders/model-placeholder';
import { config } from '../config';

export default function TechSaaSEN() {
  return (
    <ModelPlaceholder
      modelName="Tech SaaS"
      colors={config.colors}
      locale="en"
    />
  );
}

import ConstructionModel from '@/models/services/construction/pt/App';
import ConstructionModelEn from '@/models/services/construction/en/App';
import { useLocale } from 'next-intl';

export default function ConstructionPage() {
  const locale = useLocale();

  if (locale === 'en') {
    return <ConstructionModelEn />;
  }

  return <ConstructionModel />;
}

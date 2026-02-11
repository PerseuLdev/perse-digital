import type { Locale } from '@/models/_config/types';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'MUSCLE PERSE | Consultoria Personal Training',
  description: 'Método exclusivo focado em hipertrofia, definição e performance atlética. Consultoria personalizada com Carlos Iron Mendes.',
};

interface MusclePersePageProps {
  params: {
    locale: Locale;
  };
}

export default async function MusclePersePage({ params }: MusclePersePageProps) {
  const { locale } = await params;

  // Validar locale
  if (locale !== 'pt' && locale !== 'en') {
    notFound();
  }

  // Importação dinâmica do componente App baseado no locale
  try {
    const ModelApp = (await import(`@/models/fitness/muscle-perse/${locale}/App`)).default;
    return <ModelApp />;
  } catch (error) {
    console.error(`Failed to load muscle-perse for locale ${locale}:`, error);
    notFound();
  }
}

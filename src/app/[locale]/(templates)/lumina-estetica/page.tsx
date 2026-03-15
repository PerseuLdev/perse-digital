import type { Locale } from '@/models/_config/types';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Lumina Estética',
  description: 'Modelo React Lumina Estética — Clínica de Beleza e Estética Avançada',
};

interface LuminaEsteticaPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function LuminaEsteticaPage({ params }: LuminaEsteticaPageProps) {
  const { locale } = await params;

  if (locale !== 'pt' && locale !== 'en') {
    notFound();
  }

  try {
    const ModelApp = (await import(`@/models/beauty/lumina-estetica/${locale}/App`)).default;
    return <ModelApp />;
  } catch (error) {
    console.error(`Failed to load lumina-estetica for locale ${locale}:`, error);
    notFound();
  }
}

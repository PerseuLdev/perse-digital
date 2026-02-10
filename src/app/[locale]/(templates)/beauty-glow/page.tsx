import type { Locale } from '@/models/_config/types';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Beauty Glow | Salão de Beleza',
  description: 'Portfolio profissional para salões de beleza e estética.',
};

interface BeautyGlowPageProps {
  params: {
    locale: Locale;
  };
}

export default async function BeautyGlowPage({ params }: BeautyGlowPageProps) {
  const { locale } = await params;

  if (locale !== 'pt' && locale !== 'en') {
    notFound();
  }

  try {
    const ModelPage = (await import(`@/models/beauty/beauty-glow/${locale}/page`)).default;
    return <ModelPage />;
  } catch (error) {
    console.error(`Failed to load beauty-glow for locale ${locale}:`, error);
    notFound();
  }
}

import type { Locale } from '@/models/_config/types';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Home Nursing',
  description: 'Modelo React Home Nursing',
};

interface HomeNursingPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function HomeNursingPage({ params }: HomeNursingPageProps) {
  const { locale } = await params;

  if (locale !== 'pt' && locale !== 'en') {
    notFound();
  }

  try {
    const ModelApp = (await import(`@/models/health/home-nursing/${locale}/App`)).default;
    return <ModelApp />;
  } catch (error) {
    console.error(`Failed to load home-nursing for locale ${locale}:`, error);
    notFound();
  }
}

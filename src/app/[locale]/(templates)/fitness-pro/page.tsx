import type { Locale } from '@/models/_config/types';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Fitness Pro | Academia Premium',
  description: 'Sistema completo para academias com agendamento online.',
};

interface FitnessProPageProps {
  params: {
    locale: Locale;
  };
}

export default async function FitnessProPage({ params }: FitnessProPageProps) {
  const { locale } = await params;

  if (locale !== 'pt' && locale !== 'en') {
    notFound();
  }

  try {
    const ModelPage = (await import(`@/models/fitness/fitness-pro/${locale}/page`)).default;
    return <ModelPage />;
  } catch (error) {
    console.error(`Failed to load fitness-pro for locale ${locale}:`, error);
    notFound();
  }
}

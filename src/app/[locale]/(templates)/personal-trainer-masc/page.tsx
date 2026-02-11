import type { Locale } from '@/models/_config/types';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Personal Trainer | Physical Transformation',
  description: 'Personalized training and professional guidance to achieve your fitness goals.',
};

interface PersonalTrainerPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function PersonalTrainerPage({ params }: PersonalTrainerPageProps) {
  const { locale } = await params;

  if (locale !== 'pt' && locale !== 'en') {
    notFound();
  }

  try {
    const ModelApp = (await import(`@/models/fitness/personal-trainer-masc/${locale}/App`)).default;
    return <ModelApp />;
  } catch (error) {
    console.error(`Failed to load personal-trainer-masc for locale ${locale}:`, error);
    notFound();
  }
}

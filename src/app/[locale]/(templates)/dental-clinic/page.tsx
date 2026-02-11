import type { Locale } from '@/models/_config/types';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Dental Clinic',
  description: 'Modelo React Dental Clinic',
};

interface DentalClinicPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function DentalClinicPage({ params }: DentalClinicPageProps) {
  const { locale } = await params;

  if (locale !== 'pt' && locale !== 'en') {
    notFound();
  }

  try {
    const ModelApp = (await import(`@/models/health/dental-clinic/${locale}/App`)).default;
    return <ModelApp />;
  } catch (error) {
    console.error(`Failed to load dental-clinic for locale ${locale}:`, error);
    notFound();
  }
}

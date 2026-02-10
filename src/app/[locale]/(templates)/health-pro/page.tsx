import type { Locale } from '@/models/_config/types';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Health Pro | Consultório Médico Premium',
  description: 'Sistema completo para consultórios médicos com agendamento online.',
};

interface HealthProPageProps {
  params: {
    locale: Locale;
  };
}

export default async function HealthProPage({ params }: HealthProPageProps) {
  const { locale } = params;

  // Validar locale
  if (locale !== 'pt' && locale !== 'en') {
    notFound();
  }

  // Importação dinâmica do componente App baseado no locale
  try {
    const ModelApp = (await import(`@/models/health/health-pro/${locale}/App`)).default;
    return <ModelApp />;
  } catch (error) {
    console.error(`Failed to load health-pro for locale ${locale}:`, error);
    notFound();
  }
}

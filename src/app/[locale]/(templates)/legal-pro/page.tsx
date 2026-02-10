import type { Locale } from '@/models/_config/types';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Legal Pro | Advocacia de Elite',
  description: 'Sistema completo para escritórios de advocacia com captura de leads.',
};

interface LegalProPageProps {
  params: {
    locale: Locale;
  };
}

export default async function LegalProPage({ params }: LegalProPageProps) {
  const { locale } = await params;

  if (locale !== 'pt' && locale !== 'en') {
    notFound();
  }

  try {
    const ModelPage = (await import(`@/models/law/legal-pro/${locale}/page`)).default;
    return <ModelPage />;
  } catch (error) {
    console.error(`Failed to load legal-pro for locale ${locale}:`, error);
    notFound();
  }
}

import type { Locale } from '@/models/_config/types';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Law Firm Premium',
  description: 'Modelo React Law Firm Premium',
};

interface LawFirmPremiumPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function LawFirmPremiumPage({ params }: LawFirmPremiumPageProps) {
  const { locale } = await params;

  if (locale !== 'pt' && locale !== 'en') {
    notFound();
  }

  try {
    const ModelApp = (await import(`@/models/law/law-firm-premium/${locale}/App`)).default;
    return <ModelApp />;
  } catch (error) {
    console.error(`Failed to load law-firm-premium for locale ${locale}:`, error);
    notFound();
  }
}

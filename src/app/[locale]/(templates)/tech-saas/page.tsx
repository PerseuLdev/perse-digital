import type { Locale } from '@/models/_config/types';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Tech SaaS | Startup Inovadora',
  description: 'Landing page para startups tech e SaaS com captura de leads.',
};

interface TechSaaSPageProps {
  params: {
    locale: Locale;
  };
}

export default async function TechSaaSPage({ params }: TechSaaSPageProps) {
  const { locale } = params;

  if (locale !== 'pt' && locale !== 'en') {
    notFound();
  }

  try {
    const ModelPage = (await import(`@/models/tech/tech-saas/${locale}/page`)).default;
    return <ModelPage />;
  } catch (error) {
    console.error(`Failed to load tech-saas for locale ${locale}:`, error);
    notFound();
  }
}

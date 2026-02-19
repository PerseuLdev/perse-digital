import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { MODELS_REGISTRY } from '@/models/_config/models.registry';
import TemplatesContent from './_content';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://persedigital.com.br';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('models');

  const isDefaultLocale = locale === 'pt';
  const canonicalUrl = isDefaultLocale ? `${BASE_URL}/modelos` : `${BASE_URL}/${locale}/models`;
  const title = `${t('pageTitle')} ${t('pageTitleHighlight')}`;
  const description = t('subtitle');
  const modelNames = MODELS_REGISTRY.map((m) => m.id).join(', ');

  return {
    title,
    description,
    keywords: modelNames,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'pt-BR': `${BASE_URL}/modelos`,
        'en-US': `${BASE_URL}/en/models`,
      },
    },
    openGraph: {
      type: 'website',
      title,
      description,
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function ModelsPage() {
  return <TemplatesContent />;
}

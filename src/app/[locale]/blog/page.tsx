import { getTranslations } from 'next-intl/server';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { AnimatedBackground } from '@/components/layout/animated-background';
import { ArticlesSection } from '@/components/sections/articles-section';
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://persedigital.com.br';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('blog');

  const isDefaultLocale = locale === 'pt';
  const canonicalUrl = isDefaultLocale ? `${BASE_URL}/blog` : `${BASE_URL}/${locale}/blog`;
  const title = t('title');
  const description = t('subtitle');

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'pt-BR': `${BASE_URL}/blog`,
        'en-US': `${BASE_URL}/en/blog`,
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

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations('blog');

  return (
    <>
      <AnimatedBackground />
      <Navbar />

      <main className="relative pt-20">
        {/* Reusing ArticlesSection but we could customize it for a full list later */}
        <ArticlesSection />
      </main>

      <Footer />
    </>
  );
}

import { articles } from '@/lib/articles-data';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { AnimatedBackground } from '@/components/layout/animated-background';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://persedigital.com.br';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = articles[locale]?.find((a) => a.slug === slug);
  if (!article) return {};

  const isDefaultLocale = locale === 'pt';
  const canonicalUrl = isDefaultLocale
    ? `${BASE_URL}/blog/${slug}`
    : `${BASE_URL}/${locale}/blog/${slug}`;

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.description,
      url: canonicalUrl,
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 600,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const article = articles[locale]?.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const t = await getTranslations('blog');

  const isDefaultLocale = locale === 'pt';
  const articleUrl = isDefaultLocale
    ? `${BASE_URL}/blog/${slug}`
    : `${BASE_URL}/${locale}/blog/${slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Perse Digital',
      url: BASE_URL,
    },
    url: articleUrl,
    inLanguage: locale === 'pt' ? 'pt-BR' : 'en-US',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <AnimatedBackground />
      <Navbar />

      <main className="relative pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <div className="mb-12">
             <Link href={`/${locale}`}>
                <Button variant="ghost" className="gap-2 -ml-4">
                    <ArrowLeft className="w-4 h-4" />
                    {t('backToBlog')}
                </Button>
             </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 backdrop-blur-sm">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-y border-white/10 py-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(article.date).toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>
               <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="relative aspect-video rounded-3xl overflow-hidden mb-16 shadow-2xl">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          {/* Content */}
          <GlassCard variant="bordered" className="p-8 md:p-12">
            <div 
              className="prose prose-invert prose-royal max-w-none 
                prose-headings:font-bold prose-headings:text-white
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-lg
                prose-li:text-muted-foreground prose-strong:text-white"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </GlassCard>

          {/* Related Articles Suggestion (Simple for now) */}
          <div className="mt-24">
             <h2 className="text-2xl font-bold mb-8">{t('relatedArticles')}</h2>
             <div className="grid md:grid-cols-2 gap-8">
                {articles[locale]
                    .filter(a => a.slug !== slug)
                    .slice(0, 2)
                    .map(a => (
                        <Link key={a.slug} href={`/${locale}/blog/${a.slug}`}>
                            <GlassCard variant="bordered" className="p-6 h-full hover:border-primary transition-colors group">
                                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{a.title}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">{a.description}</p>
                            </GlassCard>
                        </Link>
                    ))
                }
             </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}


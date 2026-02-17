import { articles } from '@/lib/articles-data';
import { getTranslations } from 'next-intl/server';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { AnimatedBackground } from '@/components/layout/animated-background';
import { ArticlesSection } from '@/components/sections/articles-section';

interface Props {
  params: Promise<{ locale: string }>;
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

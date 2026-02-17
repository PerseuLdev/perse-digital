'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { articles } from '@/lib/articles-data';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';

export function ArticlesSection() {
  const t = useTranslations('blog');
  const locale = useLocale();
  const currentArticles = articles[locale] || articles['en'];

  return (
    <section className="relative z-10 px-6 py-32" id="articles">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {t('homeSection.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {t('homeSection.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {currentArticles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/${locale}/blog/${article.slug}`}>
                <GlassCard variant="bordered" className="group h-full overflow-hidden flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-semibold backdrop-blur-md">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(article.date).toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {article.author}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                      {article.description}
                    </p>

                    <div className="flex items-center text-primary font-semibold text-sm group/btn">
                      {t('readMore')}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
             <Link href={`/${locale}/blog`}>
                <Button variant="outline" size="lg">
                    {t('backToBlog').replace('Voltar para o ', 'Ver todos os ')}
                </Button>
             </Link>
        </div>
      </div>
    </section>
  );
}

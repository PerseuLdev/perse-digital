import { MetadataRoute } from 'next';
import { MODELS_REGISTRY } from '@/models/_config/models.registry';
import { articles } from '@/lib/articles-data';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://persedigital.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Páginas estáticas principais
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          pt: BASE_URL,
          en: `${BASE_URL}/en`,
        },
      },
    },
    {
      url: `${BASE_URL}/modelos`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          pt: `${BASE_URL}/modelos`,
          en: `${BASE_URL}/en/models`,
        },
      },
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
      alternates: {
        languages: {
          pt: `${BASE_URL}/blog`,
          en: `${BASE_URL}/en/blog`,
        },
      },
    },
  ];

  // Páginas de modelos (templates)
  const modelRoutes: MetadataRoute.Sitemap = MODELS_REGISTRY.flatMap((model) => {
    const ptUrl = `${BASE_URL}/${model.id}`;
    const enUrl = `${BASE_URL}/en/${model.id}`;
    return [
      {
        url: ptUrl,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: {
          languages: {
            pt: ptUrl,
            en: enUrl,
          },
        },
      },
    ];
  });

  // Artigos do blog
  const ptArticles = articles['pt'] || [];
  const enArticles = articles['en'] || [];

  const articleRoutes: MetadataRoute.Sitemap = ptArticles.map((article) => {
    const enArticle = enArticles.find((a) => a.slug === article.slug);
    const ptUrl = `${BASE_URL}/blog/${article.slug}`;
    const enUrl = `${BASE_URL}/en/blog/${article.slug}`;
    return {
      url: ptUrl,
      lastModified: new Date(article.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: {
        languages: {
          pt: ptUrl,
          ...(enArticle ? { en: enUrl } : {}),
        },
      },
    };
  });

  return [...staticRoutes, ...modelRoutes, ...articleRoutes];
}

import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import '../globals.css';
import { notFound } from 'next/navigation';
import { Providers } from '@/components/providers';
import { routing } from '@/i18n/routing';
import { type Locale } from '@/i18n/config';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://persedigital.com.br';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages();
  const t = messages.metadata as Record<string, string>;

  const title = t?.title || 'Perse Digital';
  const description = t?.description || 'Sites profissionais';
  const isDefaultLocale = locale === 'pt';
  const canonicalUrl = isDefaultLocale ? BASE_URL : `${BASE_URL}/${locale}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: title,
      template: `%s | Perse Digital`,
    },
    description,
    icons: {
      icon: '/favicon.ico',
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'pt-BR': BASE_URL,
        'en-US': `${BASE_URL}/en`,
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'Perse Digital',
      title,
      description,
      url: canonicalUrl,
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      alternateLocale: locale === 'pt' ? 'en_US' : 'pt_BR',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Perse Digital',
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.ico`,
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-14-99107-1072',
    contactType: 'customer service',
    availableLanguage: ['Portuguese', 'English'],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Perse Digital',
  url: BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/modelos?category={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <Providers>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}


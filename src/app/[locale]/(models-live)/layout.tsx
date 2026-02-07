import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import '@/app/globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ModelsLiveLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Ensure the locale is active for this route group
  setRequestLocale(locale);

  return (
    <div className="models-live-container">
      {children}
    </div>
  );
}

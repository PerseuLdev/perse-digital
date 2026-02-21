import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { XCircle } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const WHATSAPP_NUMBER = '5514991071072';

const content = {
  pt: {
    title: 'Pagamento Cancelado',
    subtitle: 'Nenhum valor foi cobrado.',
    description: 'Você pode tentar novamente ou falar com nosso suporte pelo WhatsApp.',
    modelsLink: 'Ver Modelos Novamente',
    waMessage: 'Olá! Tive um problema ao tentar realizar o pagamento e preciso de ajuda.',
    waButton: 'Falar com suporte no WhatsApp',
  },
  en: {
    title: 'Payment Cancelled',
    subtitle: 'You have not been charged.',
    description: 'You can try again or reach out to our support team on WhatsApp.',
    modelsLink: 'View Models Again',
    waMessage: 'Hi! I had an issue trying to complete the payment and need some help.',
    waButton: 'Contact support on WhatsApp',
  },
};

export default async function CheckoutCancelPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = locale === 'pt' ? content.pt : content.en;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.waMessage)}`;
  const modelsHref = locale === 'pt' ? '/modelos' : '/en/modelos';

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-lg w-full space-y-8 text-center">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
              <XCircle className="w-14 h-14 text-muted-foreground" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">{t.title}</h1>
            <p className="text-lg font-medium text-muted-foreground">{t.subtitle}</p>
            <p className="text-sm text-muted-foreground">{t.description}</p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <Link
              href={modelsHref}
              className="inline-flex items-center justify-center w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-colors"
            >
              {t.modelsLink}
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full h-12 rounded-xl border border-border hover:bg-muted text-foreground font-semibold transition-colors text-sm"
            >
              {t.waButton}
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

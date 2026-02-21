import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const WHATSAPP_NUMBER = '5514991071072';

const content = {
  pt: {
    title: 'Pagamento Confirmado!',
    subtitle: 'Seu recibo foi enviado para o seu e-mail.',
    stepsTitle: 'Próximos passos',
    steps: [
      'Você receberá um e-mail de confirmação da Stripe',
      'Nossa equipe entrará em contato em até 24 horas',
      'Prepare seu Brandkit (logo, cores e textos da marca)',
      'Entrega do site em até 72 horas após receber o Brandkit',
    ],
    waMessage:
      'Olá! Acabei de realizar o pagamento e quero enviar meu Brandkit para dar início ao projeto.',
    waButton: 'Enviar Brandkit pelo WhatsApp',
    backLink: 'Voltar ao início',
  },
  en: {
    title: 'Payment Confirmed!',
    subtitle: 'Your receipt has been sent to your email.',
    stepsTitle: 'Next steps',
    steps: [
      'You will receive a confirmation email from Stripe',
      'Our team will reach out within 24 hours',
      'Prepare your Brandkit (logo, brand colors and copy)',
      'Your site will be delivered within 72 hours of receiving the Brandkit',
    ],
    waMessage:
      'Hi! I just completed my payment and would like to send my Brandkit to get started.',
    waButton: 'Send Brandkit via WhatsApp',
    backLink: 'Back to home',
  },
};

export default async function CheckoutSuccessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = locale === 'pt' ? content.pt : content.en;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.waMessage)}`;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-lg w-full space-y-8 text-center">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center">
              <CheckCircle2 className="w-14 h-14 text-emerald-500" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">{t.title}</h1>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>

          {/* Steps */}
          <div className="glass rounded-2xl border border-border/50 p-6 text-left space-y-4">
            <h2 className="font-semibold text-foreground">{t.stepsTitle}</h2>
            <ol className="space-y-3">
              {t.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-colors"
            >
              {t.waButton}
            </a>
            <Link
              href={locale === 'pt' ? '/' : '/en'}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.backLink}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

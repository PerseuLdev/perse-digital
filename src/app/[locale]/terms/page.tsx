import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isPt = locale === 'pt';
  return {
    title: isPt ? 'Termos de Serviço' : 'Terms of Service',
    description: isPt
      ? 'Termos de Serviço da Perse Digital para contratação de sites e landing pages.'
      : 'Perse Digital Terms of Service for website and landing page development.',
    robots: { index: true, follow: true },
  };
}

const LAST_UPDATED_PT = '24 de fevereiro de 2026';
const LAST_UPDATED_EN = 'February 24, 2026';
const COMPANY_NAME = 'Perse Digital';
const COMPANY_EMAIL = 'contato@persedigital.com.br';
const COMPANY_WHATSAPP = '+55 14 99107-1072';

function TermsPT() {
  return (
    <article className="prose prose-invert prose-sm sm:prose-base max-w-3xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-bold mb-2 not-prose">Termos de Serviço</h1>
      <p className="text-muted-foreground text-sm mb-10 not-prose">Última atualização: {LAST_UPDATED_PT}</p>

      <Section title="1. Objeto">
        <p>
          A <strong>{COMPANY_NAME}</strong> presta serviços de desenvolvimento de sites e landing pages utilizando modelos (templates) próprios, personalizados com os materiais fornecidos pelo contratante. Ao realizar uma compra em nosso site, você concorda com os termos descritos nesta página.
        </p>
      </Section>

      <Section title="2. Planos e preços">
        <p>Os serviços são comercializados nos planos <strong>Essencial</strong> e <strong>Profissional</strong>, com pagamento único (setup), sem mensalidades ou taxas recorrentes. Os valores são exibidos no momento da compra e podem ser alterados sem aviso prévio — o preço vigente na data da contratação é o que prevalece.</p>
      </Section>

      <Section title="3. Pagamento">
        <p>O pagamento é realizado integralmente no ato da contratação, via plataforma Stripe, por PIX, cartão de crédito à vista ou parcelado. Após a confirmação do pagamento, o projeto entra na fila de produção.</p>
        <p><strong>Não há reembolso</strong> após o início do desenvolvimento, exceto em caso de não entrega por culpa exclusiva da {COMPANY_NAME} dentro do prazo contratado.</p>
      </Section>

      <Section title="4. Prazo de entrega">
        <p>O prazo de entrega é de até <strong>7 (sete) dias úteis</strong>, contados a partir do recebimento completo do Brandkit (logotipo, cores, textos e imagens). Envios parciais não iniciam a contagem do prazo.</p>
        <p>Atrasos no envio do Brandkit pelo contratante prorrogam automaticamente o prazo de entrega pelo mesmo período.</p>
      </Section>

      <Section title="5. Obrigações do contratante">
        <ul>
          <li>Fornecer o Brandkit completo em até 5 dias úteis após o pagamento;</li>
          <li>Garantir que todos os materiais enviados são de sua propriedade ou que possui autorização de uso;</li>
          <li>Revisar e solicitar ajustes em até 7 dias após o envio da versão inicial.</li>
        </ul>
      </Section>

      <Section title="6. Escopo e revisões">
        <p>Cada contratação inclui até <strong>2 (duas) rodadas de ajustes</strong> dentro do escopo do plano. Alterações fora do escopo ou solicitadas após o prazo de revisão serão orçadas separadamente.</p>
        <p>Não estão inclusos: hospedagem, domínio, criação de logotipo, SEO avançado, tráfego pago, integrações customizadas e produção de conteúdo.</p>
      </Section>

      <Section title="7. Propriedade intelectual">
        <p>Após a entrega e quitação, os direitos de uso do site personalizado são transferidos ao contratante. A {COMPANY_NAME} reserva-se o direito de exibir o projeto em seu portfólio, salvo solicitação expressa em contrário.</p>
        <p>A {COMPANY_NAME} não se responsabiliza por penalizações ou remoções do site por parte de plataformas como Google ou Meta, decorrentes de conteúdo fornecido pelo contratante.</p>
      </Section>

      <Section title="8. Garantia">
        <p>A {COMPANY_NAME} garante o funcionamento do site entregue por <strong>15 (quinze) dias corridos</strong> após a entrega, para correção de erros técnicos relacionados ao desenvolvimento. Após este prazo, suporte adicional é cobrado à parte.</p>
      </Section>

      <Section title="9. Limitação de responsabilidade">
        <p>A {COMPANY_NAME} não se responsabiliza por perdas indiretas, perda de receita, danos à reputação ou qualquer consequência decorrente do uso ou indisponibilidade do site entregue. Nossa responsabilidade é limitada ao valor pago pelo serviço contratado.</p>
      </Section>

      <Section title="10. Rescisão">
        <p>O contrato poderá ser encerrado em caso de descumprimento de qualquer cláusula ou por impossibilidade de execução. O não envio do Brandkit em até 15 dias após o pagamento encerra automaticamente o contrato sem direito a reembolso.</p>
      </Section>

      <Section title="11. Foro e legislação aplicável">
        <p>Estes termos são regidos pelas leis brasileiras. Fica eleito o foro da Comarca de Botucatu/SP para dirimir eventuais litígios.</p>
      </Section>

      <Section title="12. Contato">
        <ul>
          <li><strong>E-mail:</strong> <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a></li>
          <li><strong>WhatsApp:</strong> <a href="https://wa.me/5514991071072" target="_blank" rel="noopener noreferrer">{COMPANY_WHATSAPP}</a></li>
        </ul>
      </Section>
    </article>
  );
}

function TermsEN() {
  return (
    <article className="prose prose-invert prose-sm sm:prose-base max-w-3xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-bold mb-2 not-prose">Terms of Service</h1>
      <p className="text-muted-foreground text-sm mb-10 not-prose">Last updated: {LAST_UPDATED_EN}</p>

      <Section title="1. Overview">
        <p>
          <strong>{COMPANY_NAME}</strong> provides website and landing page development services using proprietary templates, customized with materials provided by the client. By placing an order on our website, you agree to the terms described on this page.
        </p>
      </Section>

      <Section title="2. Plans and pricing">
        <p>Services are offered in <strong>Essential</strong> and <strong>Professional</strong> plans as a one-time setup fee — no subscriptions or recurring charges. Prices are displayed at the time of purchase and may change without prior notice; the price at the time of your order is final.</p>
      </Section>

      <Section title="3. Payment">
        <p>Payment is collected in full at the time of purchase through Stripe, via credit card. Once payment is confirmed, your project enters the production queue.</p>
        <p><strong>No refunds</strong> are issued after development has started, except in the case of non-delivery caused solely by {COMPANY_NAME} within the agreed timeframe.</p>
      </Section>

      <Section title="4. Delivery timeline">
        <p>Projects are delivered within <strong>7 (seven) business days</strong> from the date we receive your complete Brandkit (logo, colors, copy, and images). Partial submissions do not start the countdown.</p>
        <p>Delays in providing your Brandkit will extend the delivery deadline by the same number of days.</p>
      </Section>

      <Section title="5. Client responsibilities">
        <ul>
          <li>Provide the complete Brandkit within 5 business days of payment;</li>
          <li>Ensure all submitted materials are owned by you or that you have the rights to use them;</li>
          <li>Review the delivered site and request revisions within 7 days of delivery.</li>
        </ul>
      </Section>

      <Section title="6. Scope and revisions">
        <p>Each order includes up to <strong>2 (two) rounds of revisions</strong> within the plan scope. Changes outside the scope or requested after the revision window will be quoted separately.</p>
        <p>The following are not included: hosting, domain registration, logo design, advanced SEO, paid advertising, custom integrations, and content creation.</p>
      </Section>

      <Section title="7. Intellectual property">
        <p>Upon delivery and full payment, usage rights to the customized website are transferred to the client. {COMPANY_NAME} reserves the right to display the project in its portfolio unless explicitly requested otherwise.</p>
        <p>{COMPANY_NAME} is not responsible for any penalties or removals by platforms such as Google or Meta resulting from content provided by the client.</p>
      </Section>

      <Section title="8. Warranty">
        <p>{COMPANY_NAME} guarantees the delivered website for <strong>15 (fifteen) calendar days</strong> after delivery, covering technical issues directly related to our development work. After this period, additional support is charged separately.</p>
      </Section>

      <Section title="9. Limitation of liability">
        <p>{COMPANY_NAME} is not liable for indirect losses, loss of revenue, reputational damage, or any consequences arising from the use or unavailability of the delivered website. Our liability is limited to the amount paid for the contracted service.</p>
      </Section>

      <Section title="10. Termination">
        <p>The service agreement may be terminated in the event of a breach of any term or impossibility of execution. Failure to provide the Brandkit within 15 days of payment automatically terminates the agreement without entitlement to a refund.</p>
      </Section>

      <Section title="11. Governing law">
        <p>These Terms of Service are governed by the laws of Brazil. Any disputes shall be subject to the jurisdiction of the courts of Botucatu, São Paulo, Brazil.</p>
      </Section>

      <Section title="12. Contact">
        <ul>
          <li><strong>Email:</strong> <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a></li>
          <li><strong>WhatsApp:</strong> <a href="https://wa.me/5514991071072" target="_blank" rel="noopener noreferrer">{COMPANY_WHATSAPP}</a></li>
        </ul>
      </Section>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3 text-foreground">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3 [&_strong]:text-foreground/90 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5">
        {children}
      </div>
    </section>
  );
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {locale === 'pt' ? <TermsPT /> : <TermsEN />}
      </main>
      <Footer />
    </div>
  );
}

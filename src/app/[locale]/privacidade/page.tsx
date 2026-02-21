import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isPt = locale === 'pt';
  return {
    title: isPt ? 'Política de Privacidade' : 'Privacy Policy',
    description: isPt
      ? 'Política de Privacidade da Perse Digital. Saiba como coletamos e usamos seus dados.'
      : 'Perse Digital Privacy Policy. Learn how we collect and use your data.',
    robots: { index: true, follow: true },
  };
}

const LAST_UPDATED_PT = '21 de fevereiro de 2026';
const LAST_UPDATED_EN = 'February 21, 2026';
const COMPANY_NAME = 'Perse Digital';
const COMPANY_EMAIL = 'contato@persedigital.com.br';
const COMPANY_WHATSAPP = '+55 14 99107-1072';
const DOMAINS = 'persedigital.com.br e persedigital.com';
const DOMAINS_EN = 'persedigital.com.br and persedigital.com';

function PrivacyPT() {
  return (
    <article className="prose prose-invert prose-sm sm:prose-base max-w-3xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-bold mb-2 not-prose">Política de Privacidade</h1>
      <p className="text-muted-foreground text-sm mb-10 not-prose">Última atualização: {LAST_UPDATED_PT}</p>

      <Section title="1. Quem somos">
        <p>
          Os sites <strong>{DOMAINS}</strong> são operados por <strong>{COMPANY_NAME}</strong>, empresa especializada em criação de sites profissionais para autônomos e pequenas empresas. Nesta política, explicamos quais dados pessoais coletamos, como os utilizamos, com quem os compartilhamos e quais são os seus direitos.
        </p>
      </Section>

      <Section title="2. Dados que coletamos">
        <p>Coletamos dados pessoais nas seguintes situações:</p>
        <ul>
          <li><strong>Formulários de contato e leads:</strong> nome, e-mail, telefone e mensagem quando você preenche um formulário em nosso site.</li>
          <li><strong>Newsletter:</strong> endereço de e-mail quando você se inscreve para receber novidades.</li>
          <li><strong>Navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de sessão e origem do acesso, coletados automaticamente por ferramentas de análise.</li>
          <li><strong>Cookies e pixels de rastreamento:</strong> identificadores gerados por cookies e pixels de terceiros (veja a seção 5).</li>
        </ul>
        <p>Não coletamos dados sensíveis como documentos de identidade, dados bancários ou informações de saúde.</p>
      </Section>

      <Section title="3. Como utilizamos seus dados">
        <p>Utilizamos suas informações para:</p>
        <ul>
          <li>Responder solicitações de contato e orçamento;</li>
          <li>Enviar conteúdos da newsletter, quando solicitado;</li>
          <li>Melhorar a experiência de navegação no site;</li>
          <li>Exibir anúncios relevantes em plataformas como Meta (Facebook e Instagram) e Google;</li>
          <li>Analisar o desempenho das nossas campanhas de marketing;</li>
          <li>Cumprir obrigações legais.</li>
        </ul>
        <p>A base legal para o tratamento é o seu consentimento, a execução de contrato e o legítimo interesse, conforme a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).</p>
      </Section>

      <Section title="4. Compartilhamento de dados">
        <p>Podemos compartilhar seus dados com:</p>
        <ul>
          <li><strong>Meta Platforms (Facebook/Instagram):</strong> para exibição de anúncios personalizados via Meta Pixel. A Meta tem sua própria política de privacidade disponível em <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">facebook.com/privacy/policy</a>.</li>
          <li><strong>Google LLC:</strong> para análise de tráfego via Google Analytics e exibição de anúncios via Google Ads. Consulte a política em <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.</li>
          <li><strong>Prestadores de serviços:</strong> plataformas de hospedagem, e-mail marketing e CRM que nos auxiliam na operação do site, sempre sob acordo de confidencialidade.</li>
          <li><strong>Autoridades públicas:</strong> quando exigido por lei ou decisão judicial.</li>
        </ul>
        <p>Não vendemos, alugamos ou cedemos seus dados pessoais a terceiros para fins comerciais próprios.</p>
      </Section>

      <Section title="5. Cookies e tecnologias de rastreamento">
        <p>Utilizamos os seguintes tipos de cookies:</p>
        <ul>
          <li><strong>Cookies essenciais:</strong> necessários para o funcionamento básico do site.</li>
          <li><strong>Cookies analíticos:</strong> Google Analytics para entender como os visitantes usam o site.</li>
          <li><strong>Cookies de publicidade:</strong> Meta Pixel para medir o desempenho dos nossos anúncios no Facebook e Instagram e exibir anúncios relevantes.</li>
        </ul>
        <p>Você pode gerenciar suas preferências de cookies nas configurações do navegador. Note que desativar certos cookies pode afetar a funcionalidade do site.</p>
      </Section>

      <Section title="6. Retenção de dados">
        <p>Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política, respeitando os seguintes critérios:</p>
        <ul>
          <li>Dados de contato/leads: até 2 anos após o último contato;</li>
          <li>Dados de newsletter: enquanto você permanecer inscrito;</li>
          <li>Dados de navegação: conforme configurado nas ferramentas analíticas (normalmente 14 meses no Google Analytics);</li>
          <li>Obrigações legais: pelo prazo exigido pela legislação aplicável.</li>
        </ul>
      </Section>

      <Section title="7. Seus direitos (LGPD)">
        <p>Como titular de dados pessoais, você tem direito a:</p>
        <ul>
          <li>Confirmar a existência de tratamento de seus dados;</li>
          <li>Acessar os dados que mantemos sobre você;</li>
          <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
          <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>Portabilidade dos dados a outro fornecedor de serviço;</li>
          <li>Revogar o consentimento a qualquer momento;</li>
          <li>Se opor ao tratamento realizado com base em legítimo interesse.</li>
        </ul>
        <p>Para exercer seus direitos, entre em contato pelo e-mail <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>. Responderemos em até 15 dias úteis.</p>
      </Section>

      <Section title="8. Segurança dos dados">
        <p>Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda, destruição ou divulgação indevida, incluindo transmissão criptografada via HTTPS e controles de acesso restritos.</p>
      </Section>

      <Section title="9. Links externos">
        <p>Nosso site pode conter links para sites de terceiros. Esta política de privacidade se aplica apenas aos domínios <strong>{DOMAINS}</strong>. Recomendamos que você leia as políticas de privacidade dos sites que visitar.</p>
      </Section>

      <Section title="10. Alterações nesta política">
        <p>Podemos atualizar esta Política de Privacidade periodicamente. Alterações significativas serão comunicadas por e-mail (para assinantes) ou por aviso em destaque no site. A data de &quot;última atualização&quot; no topo desta página indica quando a política foi revisada pela última vez.</p>
      </Section>

      <Section title="11. Contato e Encarregado (DPO)">
        <p>Para dúvidas, solicitações ou reclamações relacionadas a esta política e ao tratamento dos seus dados pessoais, entre em contato:</p>
        <ul>
          <li><strong>E-mail:</strong> <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a></li>
          <li><strong>WhatsApp:</strong> <a href={`https://wa.me/5514991071072`} target="_blank" rel="noopener noreferrer">{COMPANY_WHATSAPP}</a></li>
        </ul>
        <p>Você também pode registrar uma reclamação junto à Autoridade Nacional de Proteção de Dados (ANPD) em <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer">gov.br/anpd</a>.</p>
      </Section>
    </article>
  );
}

function PrivacyEN() {
  return (
    <article className="prose prose-invert prose-sm sm:prose-base max-w-3xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-bold mb-2 not-prose">Privacy Policy</h1>
      <p className="text-muted-foreground text-sm mb-10 not-prose">Last updated: {LAST_UPDATED_EN}</p>

      <Section title="1. Who we are">
        <p>
          The websites <strong>{DOMAINS_EN}</strong> are operated by <strong>{COMPANY_NAME}</strong>, a company specializing in professional website creation for freelancers and small businesses. In this policy, we explain what personal data we collect, how we use it, with whom we share it, and what your rights are.
        </p>
      </Section>

      <Section title="2. Data we collect">
        <p>We collect personal data in the following situations:</p>
        <ul>
          <li><strong>Contact and lead forms:</strong> name, email, phone, and message when you fill out a form on our site.</li>
          <li><strong>Newsletter:</strong> email address when you subscribe to receive updates.</li>
          <li><strong>Browsing data:</strong> IP address, browser type, pages visited, session duration, and traffic source, automatically collected by analytics tools.</li>
          <li><strong>Cookies and tracking pixels:</strong> identifiers generated by cookies and third-party pixels (see section 5).</li>
        </ul>
        <p>We do not collect sensitive data such as identity documents, banking information, or health data.</p>
      </Section>

      <Section title="3. How we use your data">
        <p>We use your information to:</p>
        <ul>
          <li>Respond to contact and quote requests;</li>
          <li>Send newsletter content, when requested;</li>
          <li>Improve the browsing experience on the site;</li>
          <li>Display relevant ads on platforms such as Meta (Facebook and Instagram) and Google;</li>
          <li>Analyze the performance of our marketing campaigns;</li>
          <li>Comply with legal obligations.</li>
        </ul>
        <p>The legal basis for processing is your consent, contract performance, and legitimate interest, in accordance with Brazil&apos;s General Data Protection Law (LGPD — Law No. 13,709/2018).</p>
      </Section>

      <Section title="4. Data sharing">
        <p>We may share your data with:</p>
        <ul>
          <li><strong>Meta Platforms (Facebook/Instagram):</strong> for displaying personalized ads via Meta Pixel. Meta has its own privacy policy available at <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">facebook.com/privacy/policy</a>.</li>
          <li><strong>Google LLC:</strong> for traffic analysis via Google Analytics and ad display via Google Ads. See the policy at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.</li>
          <li><strong>Service providers:</strong> hosting platforms, email marketing, and CRM that help us operate the site, always under confidentiality agreements.</li>
          <li><strong>Public authorities:</strong> when required by law or court order.</li>
        </ul>
        <p>We do not sell, rent, or transfer your personal data to third parties for their own commercial purposes.</p>
      </Section>

      <Section title="5. Cookies and tracking technologies">
        <p>We use the following types of cookies:</p>
        <ul>
          <li><strong>Essential cookies:</strong> necessary for basic website functionality.</li>
          <li><strong>Analytics cookies:</strong> Google Analytics to understand how visitors use the site.</li>
          <li><strong>Advertising cookies:</strong> Meta Pixel to measure the performance of our Facebook and Instagram ads and display relevant ads.</li>
        </ul>
        <p>You can manage your cookie preferences in your browser settings. Note that disabling certain cookies may affect site functionality.</p>
      </Section>

      <Section title="6. Data retention">
        <p>We keep your personal data for as long as necessary to fulfill the purposes described in this policy:</p>
        <ul>
          <li>Contact/lead data: up to 2 years after last contact;</li>
          <li>Newsletter data: while you remain subscribed;</li>
          <li>Browsing data: as configured in analytics tools (typically 14 months in Google Analytics);</li>
          <li>Legal obligations: for the period required by applicable law.</li>
        </ul>
      </Section>

      <Section title="7. Your rights">
        <p>As a personal data subject, you have the right to:</p>
        <ul>
          <li>Confirm whether your data is being processed;</li>
          <li>Access the data we hold about you;</li>
          <li>Correct incomplete, inaccurate, or outdated data;</li>
          <li>Request anonymization, blocking, or deletion of unnecessary data;</li>
          <li>Data portability to another service provider;</li>
          <li>Withdraw consent at any time;</li>
          <li>Object to processing based on legitimate interest.</li>
        </ul>
        <p>To exercise your rights, contact us at <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>. We will respond within 15 business days.</p>
      </Section>

      <Section title="8. Data security">
        <p>We adopt appropriate technical and organizational measures to protect your data against unauthorized access, loss, destruction, or improper disclosure, including HTTPS encrypted transmission and restricted access controls.</p>
      </Section>

      <Section title="9. External links">
        <p>Our websites may contain links to third-party sites. This privacy policy applies only to the domains <strong>{DOMAINS_EN}</strong>. We recommend reading the privacy policies of any sites you visit.</p>
      </Section>

      <Section title="10. Changes to this policy">
        <p>We may update this Privacy Policy periodically. Significant changes will be communicated by email (to subscribers) or by a prominent notice on the site. The &quot;last updated&quot; date at the top of this page indicates when the policy was last revised.</p>
      </Section>

      <Section title="11. Contact">
        <p>For questions, requests, or complaints related to this policy and the processing of your personal data, please contact us:</p>
        <ul>
          <li><strong>Email:</strong> <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a></li>
          <li><strong>WhatsApp:</strong> <a href={`https://wa.me/5514991071072`} target="_blank" rel="noopener noreferrer">{COMPANY_WHATSAPP}</a></li>
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

export default async function PrivacidadePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {locale === 'pt' ? <PrivacyPT /> : <PrivacyEN />}
      </main>
      <Footer />
    </div>
  );
}

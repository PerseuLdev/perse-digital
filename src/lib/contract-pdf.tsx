import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

const ROYAL = '#38b6ff';
const DARK = '#0f172a';
const MUTED = '#64748b';
const LIGHT_BG = '#f8fafc';
const BORDER = '#e2e8f0';

const styles = StyleSheet.create({
  page: {
    paddingTop: 0,
    paddingBottom: 48,
    paddingHorizontal: 0,
    fontFamily: 'Helvetica',
    fontSize: 9.5,
    color: DARK,
    lineHeight: 1.65,
    backgroundColor: '#ffffff',
  },

  /* ── Top accent bar ── */
  accentBar: {
    height: 5,
    backgroundColor: ROYAL,
    width: '100%',
  },

  /* ── Header ── */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 52,
    paddingTop: 28,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },
  logo: {
    width: 110,
    height: 30,
    objectFit: 'contain',
  },
  headerRight: {
    alignItems: 'flex-end',
  },
  docTitle: {
    fontSize: 8,
    color: MUTED,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  docNumber: {
    fontSize: 8,
    color: MUTED,
    marginTop: 2,
  },

  /* ── Body ── */
  body: {
    paddingHorizontal: 52,
    paddingTop: 28,
  },

  /* ── Parties block ── */
  partiesBlock: {
    backgroundColor: LIGHT_BG,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 16,
    marginBottom: 28,
  },
  partiesTitle: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: ROYAL,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 12,
  },
  partyRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  partyLabel: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: MUTED,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    width: 90,
    paddingTop: 1,
  },
  partyValue: {
    flex: 1,
    fontSize: 9.5,
    color: DARK,
  },
  tierBadge: {
    backgroundColor: ROYAL,
    color: '#ffffff',
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 100,
    alignSelf: 'flex-start',
  },

  /* ── Clauses ── */
  clause: {
    marginBottom: 16,
  },
  clauseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    gap: 8,
  },
  clauseNumber: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: ROYAL,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    backgroundColor: '#eff9ff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
  },
  clauseTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: DARK,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  clauseText: {
    color: '#334155',
    marginBottom: 4,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 3,
    paddingLeft: 4,
  },
  bullet: {
    width: 12,
    color: ROYAL,
    fontFamily: 'Helvetica-Bold',
  },
  listText: {
    flex: 1,
    color: '#334155',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    marginVertical: 14,
  },

  /* ── Footer ── */
  footer: {
    marginTop: 24,
    paddingTop: 14,
    paddingHorizontal: 52,
    borderTopWidth: 1,
    borderTopColor: BORDER,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  footerLeft: {
    flex: 1,
  },
  footerAcceptance: {
    fontSize: 8,
    color: MUTED,
    marginBottom: 2,
  },
  footerDate: {
    fontSize: 8,
    color: '#94a3b8',
  },
  footerBrand: {
    fontSize: 8,
    color: ROYAL,
    fontFamily: 'Helvetica-Bold',
  },
});

function Clause({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <View style={styles.clause}>
      <View style={styles.clauseHeader}>
        <Text style={styles.clauseNumber}>{number}</Text>
        <Text style={styles.clauseTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <Text style={styles.clauseText}>{children}</Text>;
}

function Li({ children }: { children: string }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.bullet}>›</Text>
      <Text style={styles.listText}>{children}</Text>
    </View>
  );
}

export interface ContractData {
  clientName?: string;
  clientCpf?: string;
  clientCity?: string;
  tier?: string;
  logoBase64?: string;
  date?: string;
}

export function ContractPDF({
  clientName = '___________________________',
  clientCpf = '___.___.___-__',
  clientCity = '__________________',
  tier = 'Essencial',
  logoBase64,
  date = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }),
}: ContractData) {
  return (
    <Document title="Contrato de Prestação de Serviços — Perse Digital" author="Perse Digital">
      <Page size="A4" style={styles.page}>

        {/* Accent bar */}
        <View style={styles.accentBar} />

        {/* Header */}
        <View style={styles.header}>
          {logoBase64 ? (
            <Image style={styles.logo} src={`data:image/png;base64,${logoBase64}`} />
          ) : (
            <Text style={{ fontSize: 13, fontFamily: 'Helvetica-Bold', color: ROYAL }}>Perse Digital</Text>
          )}
          <View style={styles.headerRight}>
            <Text style={styles.docTitle}>Contrato de Prestação de Serviços</Text>
            <Text style={styles.docNumber}>persedigital.com.br</Text>
          </View>
        </View>

        {/* Body */}
        <View style={styles.body}>

          {/* Parties */}
          <View style={styles.partiesBlock}>
            <Text style={styles.partiesTitle}>Partes do Contrato</Text>

            <View style={styles.partyRow}>
              <Text style={styles.partyLabel}>Contratado</Text>
              <Text style={styles.partyValue}>
                Perseu Diego Silva de Lima, CPF 418.422.398-21, Botucatu/SP — Perse Digital
              </Text>
            </View>

            <View style={styles.partyRow}>
              <Text style={styles.partyLabel}>Contratante</Text>
              <Text style={styles.partyValue}>
                {clientName}, CPF {clientCpf}, {clientCity}
              </Text>
            </View>

            <View style={styles.partyRow}>
              <Text style={styles.partyLabel}>Plano</Text>
              <Text style={styles.tierBadge}>{tier}</Text>
            </View>
          </View>

          {/* Clauses */}
          <Clause number="Cláusula 1" title="Objeto">
            <P>
              Prestação de serviços de desenvolvimento de site ou landing page utilizando modelos (templates) da
              Perse Digital, personalizados com o Brandkit fornecido pelo CONTRATANTE, conforme o plano contratado.
            </P>
          </Clause>

          <View style={styles.divider} />

          <Clause number="Cláusula 2" title="Escopo dos Serviços">
            <Li>Personalizar o modelo com os materiais do Brandkit;</Li>
            <Li>Entregar com design responsivo (mobile, tablet e desktop);</Li>
            <Li>Realizar até 2 (duas) rodadas de ajustes dentro do escopo.</Li>
            <P>Não inclusos: hospedagem, domínio, logotipo, SEO avançado, tráfego pago, integrações customizadas e produção de conteúdo.</P>
          </Clause>

          <View style={styles.divider} />

          <Clause number="Cláusula 3" title="Obrigações do Contratante">
            <Li>Fornecer o Brandkit completo em até 5 dias úteis após o pagamento;</Li>
            <Li>Garantir que os materiais enviados são de sua propriedade ou possuem autorização de uso;</Li>
            <Li>Revisar e solicitar ajustes em até 7 dias corridos após o envio da versão inicial.</Li>
          </Clause>

          <View style={styles.divider} />

          <Clause number="Cláusula 4" title="Pagamento">
            <P>
              Pagamento integral no ato da contratação via Stripe (PIX, cartão à vista ou parcelado).
              Não há reembolso após o início do desenvolvimento, exceto por não entrega por culpa exclusiva do CONTRATADO.
            </P>
          </Clause>

          <View style={styles.divider} />

          <Clause number="Cláusula 5" title="Prazo de Entrega">
            <P>
              Até 7 (sete) dias úteis a partir do recebimento completo do Brandkit.
              Atrasos no envio pelo CONTRATANTE prorrogam o prazo proporcionalmente.
              Após a entrega, o CONTRATANTE tem 7 dias corridos para solicitar ajustes.
            </P>
          </Clause>

          <View style={styles.divider} />

          <Clause number="Cláusula 6" title="Propriedade Intelectual e Garantia">
            <P>
              Direitos de uso transferidos ao CONTRATANTE após a entrega. Garantia técnica de 15 dias corridos
              após a entrega. A Perse Digital reserva-se o direito de exibir o projeto em portfólio.
            </P>
          </Clause>

          <View style={styles.divider} />

          <Clause number="Cláusula 7" title="Rescisão">
            <P>
              O não envio do Brandkit em até 15 dias após o pagamento encerra o contrato sem reembolso.
              Descumprimento de qualquer cláusula por qualquer das partes também enseja rescisão.
            </P>
          </Clause>

          <View style={styles.divider} />

          <Clause number="Cláusula 8" title="Aceitação Digital">
            <P>
              A marcação do checkbox "Li e aceito os termos do contrato" no momento da compra, com registro de
              data, hora e dados do pedido na plataforma Stripe, equivale à assinatura deste instrumento,
              nos termos do art. 10 da MP 2.200-2/2001.
            </P>
          </Clause>

          <View style={styles.divider} />

          <Clause number="Cláusula 9" title="Disposições Gerais">
            <P>
              Foro eleito: Comarca de Botucatu/SP. Legislação aplicável: leis brasileiras.
              Este contrato não gera vínculo empregatício entre as partes.
            </P>
          </Clause>

        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerLeft}>
            <Text style={styles.footerAcceptance}>
              Contrato aceito digitalmente via plataforma persedigital.com.br.
            </Text>
            <Text style={styles.footerDate}>Data de geração: {date}</Text>
          </View>
          <Text style={styles.footerBrand}>Perse Digital</Text>
        </View>

      </Page>
    </Document>
  );
}

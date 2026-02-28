Plan to implement                                                                                                                                              │
│                                                                                                                                                                │
│ Plano: Pricing Section + Tier Lock System                                                                                                                      │
│                                                                                                                                                                │
│ Contexto                                                                                                                                                       │
│                                                                                                                                                                │
│ A seção de pricing atual é baseada em assinatura mensal (R$ 49/99/199). O modelo de negócio real é:                                                            │
│ - Setup: pagamento único para entrega do site (obrigatório)                                                                                                    │
│ - Assinatura: manutenção mensal opcional (não aparece na home)                                                                                                 │
│                                                                                                                                                                │
│ Cada nicho entrega features diferentes por tier. O lead deve poder visualizar o modelo completo mas com seções bloqueadas (blur) para tiers superiores ao      │
│ selecionado.                                                                                                                                                   │
│                                                                                                                                                                │
│ Parte 1: Redesign da Seção de Pricing (home)                                                                                                                   │
│                                                                                                                                                                │
│ Arquivos a modificar                                                                                                                                           │
│                                                                                                                                                                │
│ - src/app/[locale]/page.tsx — seção pricing (linhas 201-331) + PricingCard (487-581)                                                                           │
│ - src/messages/pt.json — bloco "pricing" (linhas 179-259)                                                                                                      │
│ - src/messages/en.json — bloco "pricing" equivalente                                                                                                           │
│                                                                                                                                                                │
│ Mudanças em page.tsx                                                                                                                                           │
│                                                                                                                                                                │
│ 1. Remover isAnnual state, adicionar selectedNiche: 'health' | 'fitness' | 'law' (default: 'health')                                                           │
│ 2. Substituir toggle mensal/anual por 3 tab pills (Saúde | Fitness | Jurídico)                                                                                 │
│ 3. Dados de features por nicho como objeto estático inline (não via i18n — muito granular)                                                                     │
│ 4. Atualizar PricingCard: remover period prop, adaptar exibição de preço para setup único                                                                      │
│ 5. Remover handleSubscribe, CTAs passam a ser links de navegação                                                                                               │
│                                                                                                                                                                │
│ Nova estrutura de preços                                                                                                                                       │
│                                                                                                                                                                │
│ ┌──────────────┬──────────────────┬──────────────┬─────────────────────────────────────┐                                                                       │
│ │     Tier     │      Preço       │    Âncora    │                 CTA                 │                                                                       │
│ ├──────────────┼──────────────────┼──────────────┼─────────────────────────────────────┤                                                                       │
│ │ Essential    │ R$ 690           │ ~~R$ 999~~   │ "Ver Modelo" → /pt/{model-id}       │                                                                       │
│ ├──────────────┼──────────────────┼──────────────┼─────────────────────────────────────┤                                                                       │
│ │ Professional │ R$ 1.800         │ ~~R$ 2.499~~ │ "Ver Modelo" → /pt/{model-id}       │                                                                       │
│ ├──────────────┼──────────────────┼──────────────┼─────────────────────────────────────┤                                                                       │
│ │ Premium      │ R$ 5k+ / Projeto │ —            │ "Falar com especialista" → WhatsApp │                                                                       │
│ └──────────────┴──────────────────┴──────────────┴─────────────────────────────────────┘                                                                       │
│                                                                                                                                                                │
│ Features por nicho (objeto inline em page.tsx)                                                                                                                 │
│                                                                                                                                                                │
│ const nicheData = {                                                                                                                                            │
│   health: {                                                                                                                                                    │
│     label: 'Saúde',                                                                                                                                            │
│     modelUrl: '/pt/dental-clinic',                                                                                                                             │
│     essential: ['Bio + Especialidades', 'Localização + WhatsApp', 'Página de contato'],                                                                        │
│     professional: ['Agendamento Online', 'Blog de saúde + SEO', 'Google Maps integrado'],                                                                      │
│     premium: ['Área do Paciente', 'Histórico de consultas', 'Lembretes automáticos'],                                                                          │
│   },                                                                                                                                                           │
│   fitness: {                                                                                                                                                   │
│     label: 'Fitness',                                                                                                                                          │
│     modelUrl: '/pt/muscle-perse',                                                                                                                              │
│     essential: ['Apresentação + Bio', 'Serviços + Preços', 'WhatsApp direto'],                                                                                 │
│     professional: ['Planos de Aula em vídeo', 'Calendário de aulas', 'Captação de leads'],                                                                     │
│     premium: ['Área de Membros', 'App-like (PWA)', 'Acompanhamento de treino'],                                                                                │
│   },                                                                                                                                                           │
│   law: {                                                                                                                                                       │
│     label: 'Jurídico',                                                                                                                                         │
│     modelUrl: '/pt/law-firm-premium',                                                                                                                          │
│     essential: ['Site Institucional', 'Áreas de atuação + OAB', 'Formulário de contato'],                                                                      │
│     professional: ['Blog Jurídico + SEO', 'Landing Page por causa', 'Captação de leads'],                                                                      │
│     premium: ['Chatbot IA', 'Triagem de processos', 'Área do cliente'],                                                                                        │
│   },                                                                                                                                                           │
│ }                                                                                                                                                              │
│                                                                                                                                                                │
│ Mudanças em pt.json / en.json                                                                                                                                  │
│                                                                                                                                                                │
│ - Remover: toggle, period, preços mensais/anuais BRL/USD por plano                                                                                             │
│ - Atualizar: title, subtitle, plans.*.name, plans.*.description, plans.*.price                                                                                 │
│ - Premium CTA passa a ser "Falar com especialista" em vez de "Começar Agora"                                                                                   │
│ - Remover guarantee (era da assinatura)                                                                                                                        │
│                                                                                                                                                                │
│ ---                                                                                                                                                            │
│ Parte 2: Sistema de Tier Lock nos Modelos                                                                                                                      │
│                                                                                                                                                                │
│ Novos arquivos                                                                                                                                                 │
│                                                                                                                                                                │
│ 1. src/contexts/tier-context.tsx — TierContext + TierProvider (client)                                                                                         │
│ 2. src/components/ui/tier-lock.tsx — blur overlay + lock icon + badge de tier (client)                                                                         │
│ 3. src/components/ui/tier-selector.tsx — floating pill fixo no bottom (client)                                                                                 │
│ 4. src/app/[locale]/(templates)/layout.tsx — wraps todos os templates com TierProvider + TierSelector                                                          │
│                                                                                                                                                                │
│ Arquivos de modelo a modificar                                                                                                                                 │
│                                                                                                                                                                │
│ - src/models/health/dental-clinic/pt/App.tsx                                                                                                                   │
│ - src/models/fitness/muscle-perse/pt/App.tsx                                                                                                                   │
│ - src/models/law/law-firm-premium/pt/App.tsx                                                                                                                   │
│                                                                                                                                                                │
│ tier-context.tsx                                                                                                                                               │
│                                                                                                                                                                │
│ type Tier = 'essential' | 'professional' | 'premium';                                                                                                          │
│ // Expõe: selectedTier, setSelectedTier                                                                                                                        │
│ // Default: 'essential'                                                                                                                                        │
│                                                                                                                                                                │
│ tier-lock.tsx                                                                                                                                                  │
│                                                                                                                                                                │
│ // Props: requiredTier: 'professional' | 'premium', children                                                                                                   │
│ // Se selectedTier < requiredTier:                                                                                                                             │
│ //   - blur-sm + pointer-events-none no children                                                                                                               │
│ //   - overlay com: Lock icon + "Disponível no plano {tier}" + badge colorido                                                                                  │
│ // Se tier suficiente: renderiza children normalmente                                                                                                          │
│                                                                                                                                                                │
│ tier-selector.tsx                                                                                                                                              │
│                                                                                                                                                                │
│ // Fixed bottom-center floating bar                                                                                                                            │
│ // 3 botões: Essential | Professional | Premium                                                                                                                │
│ // Estilo: pill branco/dark com backdrop-blur, sombra                                                                                                          │
│ // Botão ativo: bg-primary text-white                                                                                                                          │
│                                                                                                                                                                │
│ (templates)/layout.tsx                                                                                                                                         │
│                                                                                                                                                                │
│ // Server component que importa client wrapper                                                                                                                 │
│ // Renderiza: <TierProvider><>{children}<TierSelector /></></TierProvider>                                                                                     │
│                                                                                                                                                                │
│ Mapeamento de seções por tier                                                                                                                                  │
│                                                                                                                                                                │
│ dental-clinic:                                                                                                                                                 │
│ - Essential (sem lock): Navbar, Hero, About, Services, Contact, MapSection, Footer                                                                             │
│ - Professional (lock): BeforeAfter, Team, Testimonials, FAQ, SchedulingModal, EmergencyFloat                                                                   │
│                                                                                                                                                                │
│ muscle-perse:                                                                                                                                                  │
│ - Essential (sem lock): Navbar, Hero section, Contact section, Footer                                                                                          │
│ - Professional (lock): Stats Strip div, Methodology section, Services section, Testimonials section, FAQ section                                               │
│                                                                                                                                                                │
│ law-firm-premium:                                                                                                                                              │
│ - Essential (sem lock): Navbar, Hero, About, PracticeAreas, ContactForm, Footer                                                                                │
│ - Professional (lock): CaseStudies, Trust, Features, Team, Testimonials, BlogSection, FAQ, CTA                                                                 │
│                                                                                                                                                                │
│ ---                                                                                                                                                            │
│ Ordem de implementação                                                                                                                                         │
│                                                                                                                                                                │
│ 1. tier-context.tsx                                                                                                                                            │
│ 2. tier-lock.tsx                                                                                                                                               │
│ 3. tier-selector.tsx                                                                                                                                           │
│ 4. (templates)/layout.tsx                                                                                                                                      │
│ 5. Atualizar os 3 App.tsx com TierLock                                                                                                                         │
│ 6. Redesign pricing section em page.tsx                                                                                                                        │
│ 7. Atualizar pt.json + en.json                                                                                                                                 │
│                                                                                                                                                                │
│ Verificação                                                                                                                                                    │
│                                                                                                                                                                │
│ - Home: tabs de nicho mudam features dos cards ✓                                                                                                               │
│ - Home: preço ancorado aparece riscado ✓                                                                                                                       │
│ - Home: CTA Essential/Professional abre modelo correto ✓                                                                                                       │
│ - Home: CTA Premium abre WhatsApp ✓                                                                                                                            │
│ - Modelo: floating selector visível no bottom ✓                                                                                                                │
│ - Modelo: seções Professional aparecem com blur no tier Essential ✓                                                                                            │
│ - Modelo: trocar para Professional remove o blur ✓                                                                                                             │
│ - Modelo: tier persiste ao scrollar ✓  
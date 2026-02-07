# 🚀 Perse Digital - Roadmap de Implementação

## 📋 Visão Geral

Este documento contém o roadmap completo do projeto Perse Digital, com milestones organizados, dependências identificadas e status de cada tarefa.

**Legenda:**
- ✅ Concluído
- 🔄 Em progresso
- ⏳ Aguardando dependências
- 📦 Pode ser paralelizado
- ⛔ Bloqueado

---

## 🎯 Milestone 1: Fundação (Semana 1)
**Objetivo:** Setup completo do projeto e configurações base

### Tarefas Críticas (Sequenciais)

- [ ] **1.1** - Inicializar projeto Next.js 15 + shadcn/ui
  - **Dependências:** Nenhuma
  - **Tempo estimado:** 30 min
  - **Bloqueia:** Todas as outras tarefas

- [ ] **1.2** - Configurar TypeScript com paths e strict mode
  - **Dependências:** 1.1
  - **Tempo estimado:** 15 min
  - **Bloqueia:** 1.3, 1.4, 1.5

- [ ] **1.3** - Configurar Tailwind com tema customizado
  - **Dependências:** 1.2
  - **Tempo estimado:** 45 min
  - **Paleta:** Black, White, Steel Gray, Royal Blue, Light Blue
  - **Bloqueia:** 2.1, 2.2

### Tarefas Paralelas (Independentes após 1.2)

- [ ] **1.4** 📦 - Instalar dependências principais
  - **Dependências:** 1.2
  - **Tempo estimado:** 20 min
  - **Pacotes:** framer-motion, three, @react-three/fiber, @react-three/drei, react-hook-form, zod, lucide-react
  - **Bloqueia:** 3.1 (Three.js), 4.1 (Forms)

- [ ] **1.5** 📦 - Configurar next-intl (i18n PT/EN)
  - **Dependências:** 1.2
  - **Tempo estimado:** 30 min
  - **Bloqueia:** Todas as seções de conteúdo

- [ ] **1.6** 📦 - Configurar next-themes (dark/light mode)
  - **Dependências:** 1.2
  - **Tempo estimado:** 20 min
  - **Bloqueia:** 2.2 (Navbar), 2.3 (Theme toggle)

- [ ] **1.7** 📦 - Configurar PostHog analytics
  - **Dependências:** 1.2
  - **Tempo estimado:** 15 min
  - **Bloqueia:** Tracking de eventos (pode ser adicionado depois)

---

## 🎯 Milestone 2: Componentes Core (Semana 1-2)
**Objetivo:** Componentes base e navegação

### Sequencial

- [ ] **2.1** - Criar componentes UI base (Button, Card)
  - **Dependências:** 1.3 (Tailwind config)
  - **Tempo estimado:** 1 hora
  - **Features:** Glassmorphism pronunciado, bordas arredondadas
  - **Bloqueia:** 2.2, 3.1, 4.1, 5.1

### Paralelas (após 2.1)

- [ ] **2.2** 📦 - Criar Navbar flutuante
  - **Dependências:** 2.1, 1.6 (themes)
  - **Tempo estimado:** 2 horas
  - **Features:** Glassmorphism, integração Hero → fixed com margem
  - **Bloqueia:** 3.1 (Hero depende da Navbar)

- [ ] **2.3** 📦 - Criar Toggle Dark/Light
  - **Dependências:** 1.6 (themes)
  - **Tempo estimado:** 30 min
  - **Features:** Ícone animado sol/lua

- [ ] **2.4** 📦 - Criar Language Selector
  - **Dependências:** 1.5 (i18n)
  - **Tempo estimado:** 30 min
  - **Features:** PT/EN toggle

- [ ] **2.5** 📦 - Criar Back to Top button
  - **Dependências:** 2.1
  - **Tempo estimado:** 30 min
  - **Features:** Glassmorphism, aparece após 500px scroll

- [ ] **2.6** 📦 - Criar Mobile Menu (hamburger → X)
  - **Dependências:** 2.2 (Navbar)
  - **Tempo estimado:** 1 hora
  - **Features:** Animação framer-motion, glassmorphism

---

## 🎯 Milestone 3: Hero 3D (Semana 2)
**Objetivo:** Seção Hero com elementos 3D

### Sequencial

- [ ] **3.1** - Setup Three.js / React Three Fiber
  - **Dependências:** 1.4 (three instalado), 2.2 (Navbar)
  - **Tempo estimado:** 1 hora
  - **Bloqueia:** 3.2

- [ ] **3.2** - Criar cena 3D com mockups de dispositivos
  - **Dependências:** 3.1
  - **Tempo estimado:** 3 horas
  - **Features:** Laptop + smartphone flutuantes, iluminação, rotação sutil
  - **Bloqueia:** 3.3

- [ ] **3.3** - Integrar conteúdo da Hero
  - **Dependências:** 3.2, 1.5 (i18n)
  - **Tempo estimado:** 1 hora
  - **Features:** Headline, subheadline, CTAs, glassmorphism cards
  - **Copy PT:** "Seu site profissional por menos de R$ 2/dia"
  - **Copy EN:** "Your professional website for less than $2/day"

---

## 🎯 Milestone 4: Landing Page Sections (Semana 2-3)
**Objetivo:** Todas as seções da landing page principal

### Paralelas (após 2.1 e 1.5)

- [ ] **4.1** 📦 - Seção "Templates Gallery"
  - **Dependências:** 2.1 (UI), 1.5 (i18n)
  - **Tempo estimado:** 2 horas
  - **Features:** Grid responsivo, filtros por nicho, cards glassmorphism

- [ ] **4.2** 📦 - Seção "Por que Next.js?"
  - **Dependências:** 2.1 (UI), 1.5 (i18n)
  - **Tempo estimado:** 1.5 horas
  - **Features:** Cards velocidade/segurança/SEO, ícones

- [ ] **4.3** 📦 - Seção "Preços" (3 planos)
  - **Dependências:** 2.1 (UI), 1.5 (i18n)
  - **Tempo estimado:** 2 horas
  - **Features:** Toggle R$/$, cards glassmorphism, destaque Profissional
  - **Planos:** Essencial, Profissional, Elite

- [ ] **4.4** 📦 - Seção "Como Funciona"
  - **Dependências:** 2.1 (UI), 1.5 (i18n)
  - **Tempo estimado:** 1.5 horas
  - **Features:** Timeline 3 passos, ícones

- [ ] **4.5** 📦 - Seção "Depoimentos"
  - **Dependências:** 2.1 (UI), 1.5 (i18n)
  - **Tempo estimado:** 2 horas
  - **Features:** Carrossel glassmorphism, imagens Unsplash
  - **Imagens:** Profissionais felizes atendendo

- [ ] **4.6** 📦 - Seção "FAQ"
  - **Dependências:** 2.1 (UI), 1.5 (i18n)
  - **Tempo estimado:** 1.5 horas
  - **Features:** Acordeão glassmorphism

- [ ] **4.7** 📦 - Footer
  - **Dependências:** 2.1 (UI), 1.5 (i18n)
  - **Tempo estimado:** 1 hora
  - **Features:** Links, redes sociais, newsletter

---

## 🎯 Milestone 5: Otimizações (Semana 3)
**Objetivo:** Performance e SEO

### Paralelas

- [ ] **5.1** 📦 - Implementar animações de scroll
  - **Dependências:** 1.4 (framer-motion)
  - **Tempo estimado:** 1.5 horas
  - **Features:** Reveal on scroll, stagger effects

- [ ] **5.2** 📦 - Page transitions
  - **Dependências:** 1.1 (Next.js app)
  - **Tempo estimado:** 1 hora
  - **Features:** Animação suave entre rotas

- [ ] **5.3** 📦 - SEO técnico
  - **Dependências:** Todas as páginas criadas
  - **Tempo estimado:** 1.5 horas
  - **Features:** Meta tags, Open Graph, Schema.org, sitemap

- [ ] **5.4** 📦 - Otimização de imagens
  - **Dependências:** Todas as seções
  - **Tempo estimado:** 1 hora
  - **Features:** Next.js Image, lazy loading, WebP

- [ ] **5.5** 📦 - Testes de responsividade
  - **Dependências:** Todas as seções
  - **Tempo estimado:** 1 hora
  - **Features:** Mobile, tablet, desktop

---

## 🎯 Milestone 6: Template Cuidador (Semana 3-4)
**Objetivo:** Migração e adaptação do template React

### Sequencial

- [ ] **6.1** - Setup estrutura do template
  - **Dependências:** Milestone 1 completo
  - **Tempo estimado:** 30 min
  - **Path:** `app/templates/cuidador/`

- [ ] **6.2** - Adaptar tema para tons verdes
  - **Dependências:** 6.1
  - **Tempo estimado:** 1 hora
  - **Cores:** Emerald 600/400/900

- [ ] **6.3** - Migrar componentes do template React
  - **Dependências:** 6.2
  - **Tempo estimado:** 3 horas
  - **Componentes:** Hero, About, Services, Pricing, Testimonials, Contact, Footer, FloatingWhatsApp

- [ ] **6.4** - Configurar Sanity CMS
  - **Dependências:** 6.3
  - **Tempo estimado:** 2 horas
  - **Schemas:** Testimonials, Services, About, Gallery

- [ ] **6.5** - Implementar dark mode para template
  - **Dependências:** 6.3, 1.6 (themes)
  - **Tempo estimado:** 1.5 horas
  - **Features:** Background dark, cards glassmorphism verde

---

## 🎯 Milestone 7: Checkout & Pagamentos (Semana 4)
**Objetivo:** Sistema de pagamentos completo

### Paralelas (Setup inicial)

- [ ] **7.1** 📦 - Configurar Stripe
  - **Dependências:** Nenhuma (só conta Stripe)
  - **Tempo estimado:** 1.5 horas
  - **Features:** Produtos, preços, Checkout Session

- [ ] **7.2** 📦 - Configurar Mercado Pago
  - **Dependências:** Nenhuma (só conta MP)
  - **Tempo estimado:** 1.5 horas
  - **Features:** Pix, cartão, parcelamento 12x

### Sequencial (Integração)

- [ ] **7.3** - Criar página de checkout unificada
  - **Dependências:** 7.1, 7.2, 1.5 (i18n)
  - **Tempo estimado:** 2 horas
  - **Features:** Seleção de plano, escolha de gateway

- [ ] **7.4** - Implementar webhooks
  - **Dependências:** 7.3
  - **Tempo estimado:** 2 horas
  - **Features:** Confirmação de pagamento, automação

- [ ] **7.5** - Criar middleware de geolocalização
  - **Dependências:** 1.1 (Next.js)
  - **Tempo estimado:** 1.5 horas
  - **Features:** Detectar IP, redirecionar PT/EN, moeda

- [ ] **7.6** - Página de sucesso
  - **Dependências:** 7.4
  - **Tempo estimado:** 1 hora
  - **Features:** Agradecimento, próximos passos

---

## 🎯 Milestone 8: Automação (Semana 4)
**Objetivo:** Fluxo pós-venda automatizado

### Paralelas

- [ ] **8.1** 📦 - Configurar Resend (emails)
  - **Dependências:** Nenhuma (só conta Resend)
  - **Tempo estimado:** 1 hora
  - **Features:** Email transacional, confirmação de compra

- [ ] **8.2** 📦 - Integração Trello/Notion
  - **Dependências:** 7.4 (webhooks)
  - **Tempo estimado:** 1.5 horas
  - **Features:** Criar card automaticamente após venda

- [ ] **8.3** 📦 - Sistema de acesso ao template
  - **Dependências:** 7.4 (webhooks), 6.x (template)
  - **Tempo estimado:** 1.5 horas
  - **Features:** Gerar link de acesso, enviar email

---

## 🎯 Milestone 9: Deploy & Lançamento (Semana 5)
**Objetivo:** Site no ar e testado

### Sequencial

- [ ] **9.1** - Configurar Vercel
  - **Dependências:** Todo o código pronto
  - **Tempo estimado:** 30 min
  - **Features:** Projeto, configurações

- [ ] **9.2** - Configurar domínio persedigital.com
  - **Dependências:** 9.1
  - **Tempo estimado:** 30 min
  - **Features:** DNS, SSL

- [ ] **9.3** - Variáveis de ambiente
  - **Dependências:** 9.1
  - **Tempo estimado:** 20 min
  - **Features:** Stripe, MP, Sanity, Resend, PostHog keys

### Paralelas (Testes)

- [ ] **9.4** 📦 - Testes de fluxo de compra
  - **Dependências:** 9.3
  - **Tempo estimado:** 2 horas
  - **Features:** PT e EN, ambos gateways

- [ ] **9.5** 📦 - Testes de i18n
  - **Dependências:** 9.3
  - **Tempo estimado:** 1 hora
  - **Features:** Todas as páginas em PT/EN

- [ ] **9.6** 📦 - Testes de responsividade
  - **Dependências:** 9.3
  - **Tempo estimado:** 1 hora
  - **Features:** Mobile, tablet, desktop

- [ ] **9.7** 📦 - Performance audit
  - **Dependências:** 9.3
  - **Tempo estimado:** 1 hora
  - **Features:** Lighthouse 90+, Core Web Vitals

- [ ] **9.8** 📦 - Documentação
  - **Dependências:** 9.4, 9.5, 9.6, 9.7
  - **Tempo estimado:** 2 horas
  - **Features:** Como editar no Sanity, FAQ técnico

---

## 📊 Análise de Dependências

### 🔴 Caminho Crítico (Não pode ser paralelizado)
```
1.1 → 1.2 → 1.3 → 2.1 → 2.2 → 3.1 → 3.2 → 3.3
```
**Tempo total crítico:** ~10 horas

### 🟢 Tarefas Altamente Paralelizáveis
- **Configurações iniciais:** 1.4, 1.5, 1.6, 1.7 (podem rodar simultâneos após 1.2)
- **Landing page sections:** 4.1 a 4.7 (independentes entre si)
- **Templates:** 6.x pode começar após Milestone 5
- **Checkout:** 7.1 e 7.2 podem ser feitos em paralelo

### 🟡 Dependências Médias
- Milestone 6 (Template) depende de Milestone 5 completo
- Milestone 7 (Checkout) pode começar após Milestone 4
- Milestone 8 (Automação) depende de 7.4 (webhooks)

---

## ⏱️ Estimativa de Tempo Total

| Milestone | Tempo Sequencial | Tempo Paralelo |
|-----------|------------------|----------------|
| 1: Fundação | 2h | 2h |
| 2: Componentes Core | 4h | 2.5h |
| 3: Hero 3D | 5h | 5h |
| 4: Landing Sections | 11h | 3h |
| 5: Otimizações | 5.5h | 2h |
| 6: Template Cuidador | 7.5h | 7.5h |
| 7: Checkout | 6h | 3.5h |
| 8: Automação | 4h | 4h |
| 9: Deploy | 8h | 5h |
| **TOTAL** | **53h** | **~34h** |

**Tempo real estimado:** 4-5 semanas trabalhando 2-3h/dia

---

## 🎯 Próximos Passos Imediatos

1. ✅ **Aprovar este roadmap**
2. 🔄 **Iniciar Milestone 1.1** (Setup Next.js)
3. 📦 **Preparar contas:** Stripe, Mercado Pago, Sanity, Resend, PostHog
4. 🎨 **Coletar assets:** Logo, favicon (já tem), mockups 3D (opcional)

---

## 📝 Notas

- **Prioridade:** Milestones 1-5 são essenciais para o lançamento
- **Opcional:** Milestones 6-8 podem ser adicionados após o lançamento inicial
- **Iterações:** Recomendado revisar a cada milestone completo
- **Feedback:** Usuário deve testar após Milestone 5 (Landing Page completa)

---

**Última atualização:** 05/02/2026
**Status:** 🔄 Aguardando aprovação para iniciar

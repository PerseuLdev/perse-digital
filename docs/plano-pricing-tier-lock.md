# Plano: Pricing Section + Tier Lock System

> **Data:** 2026-02-22
> **Branch:** main
> **Estimativa:** ~7 arquivos novos, ~8 modificados

---

## Visão Geral

```
Parte 1: Redesign da seção Pricing na home (page.tsx + i18n)
Parte 2: Sistema de Tier Lock nos modelos (contexto + componentes + App.tsx)
```

---

## Milestones

### M1 — Infraestrutura do Tier Lock
> Pode ser implementado em paralelo com qualquer outra coisa (sem dependências)

- [ ] Criar `src/contexts/tier-context.tsx` (TierContext + TierProvider + useTier)
- [ ] Criar `src/components/ui/tier-lock.tsx` (blur overlay + lock icon + badge)
- [ ] Criar `src/components/ui/tier-selector.tsx` (floating pill fixo no bottom)

**Paralelizável:** os 3 arquivos são independentes entre si ✓

---

### M2 — Layout dos Templates
> Depende de M1 (TierProvider + TierSelector devem existir)

- [ ] Criar `src/app/[locale]/(templates)/layout.tsx`
  - Wraps templates com `<TierProvider>` + `<TierSelector />`

---

### M3 — Atualização dos Modelos
> Depende de M1 (TierLock deve existir)
> Os 3 App.tsx são independentes entre si — podem ser feitos em paralelo

#### M3a — dental-clinic
- [ ] Modificar `src/models/health/dental-clinic/pt/App.tsx`
  - Essential (sem lock): Navbar, Hero, About, Services, Contact, MapSection, Footer
  - Professional (lock): BeforeAfter, Team, Testimonials, FAQ, SchedulingModal, EmergencyFloat

#### M3b — muscle-perse
- [ ] Modificar `src/models/fitness/muscle-perse/pt/App.tsx`
  - Essential (sem lock): Navbar, Hero section, Contact section, Footer
  - Professional (lock): Stats Strip, Methodology, Services, Testimonials, FAQ

#### M3c — law-firm-premium
- [ ] Modificar `src/models/law/law-firm-premium/pt/App.tsx`
  - Essential (sem lock): Navbar, Hero, About, PracticeAreas, ContactForm, Footer
  - Professional (lock): CaseStudies, Trust, Features, Team, Testimonials, BlogSection, FAQ, CTA

**Paralelizável:** M3a, M3b, M3c são independentes entre si ✓

---

### M4 — Redesign da Seção de Pricing (home)
> Independente de M1/M2/M3 — pode rodar em paralelo

#### M4a — Atualizar `src/messages/pt.json`
- [ ] Remover: `toggle`, `period`, `guarantee`, `annualPrices`, preços mensais/anuais BRL/USD
- [ ] Atualizar: `title`, `subtitle`
- [ ] Substituir estrutura de preços por: `price`, `anchorPrice` (setup único)
- [ ] Adicionar: `setupLabel`, `ctaPremium`
- [ ] Premium: `priceLabel` (ex: "/ Projeto")

#### M4b — Atualizar `src/messages/en.json`
- [ ] Mesmas mudanças que pt.json, versão inglês

**Paralelizável:** M4a e M4b são independentes entre si ✓

#### M4c — Atualizar `src/app/[locale]/page.tsx`
- [ ] Remover state `isAnnual`, `loadingPlan`
- [ ] Remover `handleSubscribe`
- [ ] Adicionar state `selectedNiche: 'health' | 'fitness' | 'law'` (default: `'health'`)
- [ ] Adicionar `nicheData` object inline com features por nicho + modelUrl
- [ ] Substituir billing toggle por **3 tab pills** (Saúde | Fitness | Jurídico)
- [ ] Atualizar os 3 `<PricingCard />` com novos props
- [ ] Remover `pricing.guarantee` do JSX
- [ ] Refatorar componente `PricingCard`:
  - Remover props: `period`, `onClick`, `isLoading`
  - Adicionar props: `anchorPrice?`, `priceLabel?`, `setupLabel`, `ctaHref`, `isExternal?`
  - CTA vira `<Link>` ou `<a target="_blank">`

> Depende de M4a/M4b (para não quebrar t() calls)

---

## Tabela de Paralelizações

| Rodada | Tarefas simultâneas | Dependência prévia |
|--------|--------------------|--------------------|
| 1 | M1 (tier-context + tier-lock + tier-selector) + M4a + M4b | — |
| 2 | M2 (templates layout) + M3a + M3b + M3c | M1 concluído |
| 3 | M4c (page.tsx) | M4a + M4b concluídos |

---

## Estrutura de Arquivos

### Novos arquivos
```
src/contexts/tier-context.tsx
src/components/ui/tier-lock.tsx
src/components/ui/tier-selector.tsx
src/app/[locale]/(templates)/layout.tsx
```

### Arquivos modificados
```
src/models/health/dental-clinic/pt/App.tsx
src/models/fitness/muscle-perse/pt/App.tsx
src/models/law/law-firm-premium/pt/App.tsx
src/messages/pt.json
src/messages/en.json
src/app/[locale]/page.tsx
```

---

## Detalhes de Implementação

### tier-context.tsx
```typescript
type Tier = 'essential' | 'professional' | 'premium';
// Context: selectedTier + setSelectedTier
// Default: 'essential'
```

### tier-lock.tsx
```typescript
// Props: requiredTier: 'professional' | 'premium', children
// Se tier insuficiente: blur-sm + pointer-events-none + overlay (Lock icon + badge)
// Se tier suficiente: renderiza children normalmente
```

### tier-selector.tsx
```typescript
// Fixed bottom-center floating pill
// 3 botões: Essencial | Profissional | Premium
// Botão ativo: bg-primary text-white
// Estilo: bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-2xl
```

### Nova estrutura nicheData (inline em page.tsx)
```typescript
const nicheData = {
  health: {
    label: 'Saúde', modelUrl: '/pt/dental-clinic',
    essential: ['Bio + Especialidades', 'Localização + WhatsApp', 'Página de contato'],
    professional: ['Agendamento Online', 'Blog de saúde + SEO', 'Google Maps integrado'],
    premium: ['Área do Paciente', 'Histórico de consultas', 'Lembretes automáticos'],
  },
  fitness: {
    label: 'Fitness', modelUrl: '/pt/muscle-perse',
    essential: ['Apresentação + Bio', 'Serviços + Preços', 'WhatsApp direto'],
    professional: ['Planos de Aula em vídeo', 'Calendário de aulas', 'Captação de leads'],
    premium: ['Área de Membros', 'App-like (PWA)', 'Acompanhamento de treino'],
  },
  law: {
    label: 'Jurídico', modelUrl: '/pt/law-firm-premium',
    essential: ['Site Institucional', 'Áreas de atuação + OAB', 'Formulário de contato'],
    professional: ['Blog Jurídico + SEO', 'Landing Page por causa', 'Captação de leads'],
    premium: ['Chatbot IA', 'Triagem de processos', 'Área do cliente'],
  },
}
```

### Nova estrutura pt.json (pricing)
```json
{
  "pricing": {
    "title": "Planos & Preços",
    "subtitle": "Site profissional com setup único — sem assinatura obrigatória",
    "currency": { "symbol": "R$" },
    "setupLabel": "setup único",
    "plans": {
      "essential": {
        "name": "Essencial",
        "description": "Presença digital profissional",
        "price": "690",
        "anchorPrice": "999"
      },
      "professional": {
        "name": "Profissional",
        "description": "Site completo com mais funcionalidades",
        "price": "1.800",
        "anchorPrice": "2.499",
        "badge": "Recomendado"
      },
      "premium": {
        "name": "Premium",
        "description": "Projeto personalizado por completo",
        "price": "5k+",
        "priceLabel": "/ Projeto"
      }
    },
    "cta": "Ver Modelo",
    "ctaPremium": "Falar com especialista"
  }
}
```

---

## Verificação Final

- [ ] Home: tabs de nicho mudam features dos cards
- [ ] Home: preço ancorado aparece riscado
- [ ] Home: CTA Essential/Professional abre modelo correto
- [ ] Home: CTA Premium abre WhatsApp
- [ ] Modelo: floating selector visível no bottom
- [ ] Modelo: seções Professional aparecem com blur no tier Essential
- [ ] Modelo: trocar para Professional remove o blur
- [ ] Modelo: tier persiste ao scrollar

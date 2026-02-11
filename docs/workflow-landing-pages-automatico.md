# Workflow Automático de Landing Pages - Plano de Implementação

## 📋 Context

**Problema atual:**
O sistema possui scripts CLI excelentes para conversão de templates React e customização via brandkit, mas o workflow completo (desde escolha do template até entrega) é 100% manual. Clientes pagam, enviam dados por WhatsApp/email, e você executa scripts manualmente.

**Objetivo:**
Criar um workflow semi-automático que:
1. Cliente escolhe template na galeria
2. Paga via gateway de pagamento
3. Preenche dados (formulário web + fallback WhatsApp para clientes leigos)
4. Sistema automaticamente customiza o template
5. Envia preview + entrega final por email/WhatsApp

**Decisões estratégicas (baseadas nas suas respostas):**
- ✅ Preview usa templates como estão (React standalone) - conversão Next.js só após pagamento
- ✅ Formulário web + WhatsApp (híbrido para clientes leigos em tech)
- ✅ Hospedar em subdomínio (cliente.persedigital.com) até cliente ter domínio próprio
- ✅ Logo gerada por IA como upsell
- ✅ Scripts reorganizados: `prepare-model` (conversão) + `setup-client` (brandkit)

---

## 🔄 Workflow Completo End-to-End

```
┌─────────────────────────────────────────────────────────────────────┐
│                    1. ESCOLHA DO TEMPLATE                             │
│  /templates → Cliente vê galeria com 9 modelos                       │
│  Preview ao vivo em iframe (scaled) + Botão "Visualizar Demo"        │
│  → /templates/{id}/preview (4 viewports + sidebar de vendas)         │
└──────────────────────────┬──────────────────────────────────────────┘
                           │
                           ↓
┌─────────────────────────────────────────────────────────────────────┐
│                    2. PAGAMENTO                                       │
│  Cliente clica "Quero este modelo" (sidebar de vendas)               │
│  → Checkout Stripe/Mercado Pago                                      │
│  → Webhook dispara: /api/orders/webhook (payment.succeeded)          │
└──────────────────────────┬──────────────────────────────────────────┘
                           │
                           ↓
┌─────────────────────────────────────────────────────────────────────┐
│                    3. COLETA DE DADOS                                 │
│  Sistema envia 2 opções ao cliente:                                  │
│                                                                       │
│  OPÇÃO A - Formulário Web (automático):                              │
│    → Link único: /setup/{orderId}/{token}                            │
│    → Cliente preenche: nome, cores, contatos, redes sociais          │
│    → Validação client-side + server-side                             │
│    → Dados salvos → dispara setup automático                         │
│                                                                       │
│  OPÇÃO B - WhatsApp (manual):                                        │
│    → Cliente envia dados formatados por WhatsApp                     │
│    → Você cola no painel admin /admin/orders/{orderId}               │
│    → Salva → dispara setup automático                                │
└──────────────────────────┬──────────────────────────────────────────┘
                           │
                           ↓
┌─────────────────────────────────────────────────────────────────────┐
│                    3.5. ASSETS FALTANDO                               │
│                                                                       │
│  DOMÍNIO: Sistema provisiona subdomínio automaticamente              │
│    → {cliente-slug}.persedigital.com                                 │
│    → Cliente pode apontar domínio próprio depois (instruções)        │
│                                                                       │
│  LOGO: Oferece upsell de logo gerada por IA                          │
│    → Checkbox "Não tenho logo, quero criar uma (+R$ 50)"             │
│    → Se aceitar: gera com DALL-E/Replicate baseado em cores+nome     │
│    → Se não: usa placeholder (iniciais + cores da marca)             │
└──────────────────────────┬──────────────────────────────────────────┘
                           │
                           ↓
┌─────────────────────────────────────────────────────────────────────┐
│                    4. AUTOMAÇÃO DE SETUP                              │
│                                                                       │
│  Sistema executa (via API routes):                                   │
│                                                                       │
│  4.1. [NOVO] POST /api/models/setup-client                           │
│       ├─ Cria brandkit.json com dados do cliente                     │
│       ├─ Valida via validate-brandkit (lógica extraída)              │
│       └─ Salva em src/models/{niche}/{model-id}/clients/{orderId}/   │
│                                                                       │
│  4.2. POST /api/models/prepare                                       │
│       ├─ Executa prepare-model (conversão React → Next.js)           │
│       ├─ Copia arquivos do template base                             │
│       └─ Registra no models.registry.ts (entry dinâmica)             │
│                                                                       │
│  4.3. POST /api/models/apply                                         │
│       ├─ Executa apply-brandkit                                      │
│       ├─ Substitui textos, cores, contatos                           │
│       └─ Gera build otimizado                                        │
│                                                                       │
│  4.4. POST /api/deploy                                               │
│       ├─ Deploy em subdomínio via Vercel API                         │
│       ├─ URL: https://{cliente-slug}.persedigital.com                │
│       └─ Configura DNS + SSL automático                              │
└──────────────────────────┬──────────────────────────────────────────┘
                           │
                           ↓
┌─────────────────────────────────────────────────────────────────────┐
│                    5. NOTIFICAÇÃO DE CONCLUSÃO                        │
│                                                                       │
│  Sistema envia (via email + WhatsApp):                               │
│    ✅ Link do site: https://{slug}.persedigital.com                  │
│    ✅ Preview em iframe: /preview/{orderId}                          │
│    ✅ Instruções para apontar domínio próprio                        │
│    ✅ Login no painel de edição (futuro upsell)                      │
│                                                                       │
│  Email template com:                                                 │
│    - Screenshot do site                                              │
│    - QR code para mobile preview                                     │
│    - Checklist de próximos passos                                    │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🏗️ Arquitetura Técnica

### 1. Nova Estrutura de Pastas

```
src/
├── app/
│   ├── [locale]/
│   │   ├── templates/              # Galeria (já existe)
│   │   │   ├── [id]/
│   │   │   │   └── preview/        # Preview completo (já existe)
│   │   │   └── page.tsx
│   │   ├── setup/
│   │   │   └── [orderId]/
│   │   │       └── [token]/        # [NOVO] Formulário de setup cliente
│   │   │           └── page.tsx
│   │   └── admin/                   # [NOVO] Painel admin
│   │       └── orders/
│   │           └── [orderId]/
│   │               └── page.tsx
│   ├── api/
│   │   ├── orders/
│   │   │   └── webhook/             # [NOVO] Webhook pagamento
│   │   │       └── route.ts
│   │   ├── models/
│   │   │   ├── setup-client/        # [NOVO] Criar brandkit
│   │   │   │   └── route.ts
│   │   │   ├── prepare/             # [NOVO] Converter React→Next
│   │   │   │   └── route.ts
│   │   │   ├── apply/               # [NOVO] Apply brandkit
│   │   │   │   └── route.ts
│   │   │   └── generate-logo/       # [NOVO] IA logo generator
│   │   │       └── route.ts
│   │   └── deploy/
│   │       └── route.ts             # [NOVO] Deploy Vercel
├── models/
│   └── {niche}/
│       └── {model-id}/
│           ├── clients/             # [NOVO] Cada cliente = subpasta
│           │   └── {orderId}/       # Isolamento por pedido
│           │       ├── brandkit.json
│           │       ├── pt/
│           │       └── en/
│           └── base/                # Template base (original)
│               ├── pt/
│               └── en/
├── lib/
│   ├── scripts/                     # [REFACTOR] Scripts como library
│   │   ├── prepare-model.ts         # Extraído de scripts/
│   │   ├── apply-brandkit.ts
│   │   └── validate-brandkit.ts
│   └── services/
│       ├── payment.ts               # Stripe/MercadoPago
│       ├── email.ts                 # Resend/SendGrid
│       ├── whatsapp.ts              # WhatsApp Business API
│       └── deploy.ts                # Vercel API
└── scripts/                         # [MANTÉM] CLI para uso manual
    ├── prepare-react-model.js       # Conversão manual (apenas)
    ├── create-react-model.js        # Scaffold novo modelo
    └── [REMOVE] apply-brandkit.js   # Movido para lib/scripts/

database/                            # [NOVO] Banco de dados
└── schema.prisma                    # Prisma ORM
    models:
      - Order
      - Client
      - Template
      - Deployment
```

### 2. Banco de Dados (Prisma + PostgreSQL/SQLite)

```prisma
model Order {
  id            String   @id @default(cuid())
  orderId       String   @unique
  templateId    String   // muscle-perse, health-pro, etc.
  status        OrderStatus // PENDING, PAID, SETUP_COMPLETE, DEPLOYED

  // Payment
  paymentId     String
  amount        Float
  currency      String
  paidAt        DateTime?

  // Client
  clientEmail   String
  clientPhone   String?
  clientName    String

  // Setup
  setupToken    String   @unique
  setupUrl      String?
  brandkit      Json?    // brandkit.json como JSON

  // Deployment
  deployedUrl   String?
  subdomain     String?

  // Upsells
  needsLogo     Boolean  @default(false)
  logoUrl       String?

  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  @@index([orderId])
  @@index([setupToken])
}

enum OrderStatus {
  PENDING
  PAID
  AWAITING_SETUP
  SETUP_COMPLETE
  DEPLOYING
  DEPLOYED
  ERROR
}
```

### 3. Reorganização dos Scripts

#### Antes (CLI-only):
```
scripts/
├── prepare-react-model.js    → Faz tudo: conversão + brandkit
├── apply-brandkit.js         → Aplica customizações
└── validate-brandkit.js      → Valida dados
```

#### Depois (Library + CLI):
```
lib/scripts/                      [NOVO] Lógica reutilizável
├── prepare-model.ts              → Apenas conversão React→Next.js
├── setup-client.ts               → [NOVO] Criar brandkit do cliente
├── apply-brandkit.ts             → Aplicar customizações
└── validate-brandkit.ts          → Validar dados

scripts/                          [CLI wrappers]
├── prepare-react-model.js        → Chama lib/scripts/prepare-model
└── create-react-model.js         → Scaffold (mantém)
```

**Separação clara:**
- `prepare-model`: Conversão técnica (React standalone → Next.js)
- `setup-client`: Criar brandkit.json do cliente específico
- `apply-brandkit`: Customização (cores, textos, contatos)

### 4. APIs Críticas

#### POST /api/orders/webhook
```typescript
// Webhook do Stripe/MercadoPago
export async function POST(req: Request) {
  // 1. Verificar assinatura do webhook
  // 2. Salvar Order no banco (status: PAID)
  // 3. Gerar setupToken único
  // 4. Enviar email + WhatsApp com link /setup/{orderId}/{token}
  // 5. Retornar 200 OK
}
```

#### POST /api/models/setup-client
```typescript
// Criar brandkit do cliente
export async function POST(req: Request) {
  const { orderId, brandkit } = await req.json();

  // 1. Validar via validate-brandkit
  // 2. Salvar em src/models/{niche}/{template}/clients/{orderId}/brandkit.json
  // 3. Atualizar Order (status: SETUP_COMPLETE)
  // 4. Disparar prepare + apply + deploy em background
  // 5. Retornar 200 + job ID
}
```

#### POST /api/models/prepare
```typescript
// Converter template React → Next.js para cliente específico
export async function POST(req: Request) {
  const { orderId, templateId } = await req.json();

  // 1. Chamar lib/scripts/prepare-model
  // 2. Copiar de models/{template}/base/ → models/{template}/clients/{orderId}/
  // 3. Retornar status
}
```

#### POST /api/models/apply
```typescript
// Aplicar brandkit
export async function POST(req: Request) {
  const { orderId } = await req.json();

  // 1. Ler brandkit de models/{template}/clients/{orderId}/brandkit.json
  // 2. Chamar lib/scripts/apply-brandkit
  // 3. Atualizar cores, contatos, textos
  // 4. Build otimizado
  // 5. Retornar status
}
```

#### POST /api/deploy
```typescript
// Deploy no Vercel via API
export async function POST(req: Request) {
  const { orderId, subdomain } = await req.json();

  // 1. Criar projeto Vercel via API
  // 2. Deploy de models/{template}/clients/{orderId}/
  // 3. Configurar DNS: {subdomain}.persedigital.com
  // 4. Aguardar SSL provisioning
  // 5. Atualizar Order (deployedUrl, status: DEPLOYED)
  // 6. Enviar email de conclusão
}
```

---

## 🚀 Implementação - Fases

### **FASE 1: Setup & Database** (1 dia)

**Objetivo:** Infraestrutura base

- [ ] Instalar dependências:
  ```bash
  npm install prisma @prisma/client stripe resend @vercel/node
  ```

- [ ] Setup Prisma:
  ```bash
  npx prisma init
  # Criar schema.prisma com Order model
  npx prisma migrate dev --name init
  ```

- [ ] Criar arquivo `.env.local`:
  ```env
  DATABASE_URL="postgresql://..."
  STRIPE_SECRET_KEY="sk_test_..."
  STRIPE_WEBHOOK_SECRET="whsec_..."
  VERCEL_TOKEN="..."
  RESEND_API_KEY="..."
  WHATSAPP_API_TOKEN="..."
  BASE_URL="https://persedigital.com"
  ```

- [ ] Setup Stripe webhook localmente (CLI):
  ```bash
  stripe listen --forward-to localhost:3000/api/orders/webhook
  ```

**Arquivos críticos:**
- `prisma/schema.prisma`
- `.env.local`

---

### **FASE 2: Refatorar Scripts → Library** (1 dia)

**Objetivo:** Extrair lógica dos scripts CLI para funções reutilizáveis

- [ ] Criar `lib/scripts/prepare-model.ts`:
  - Extrair lógica de `scripts/prepare-react-model.js`
  - Remover `_originals` detection (vai para setup-client)
  - Função: `prepareModel(templateId, outputPath)`
  - Retorno: `{ success, files, errors }`

- [ ] Criar `lib/scripts/setup-client.ts`:
  - Nova função: `setupClient(orderId, templateId, brandkitData)`
  - Cria brandkit.json em `models/{template}/clients/{orderId}/`
  - Valida via `validate-brandkit`
  - Retorno: `{ success, brandkitPath, errors }`

- [ ] Refatorar `lib/scripts/apply-brandkit.ts`:
  - Extrair de `scripts/apply-brandkit.js`
  - Função: `applyBrandkit(orderId, templateId)`
  - Retorno: `{ success, modifiedFiles, errors }`

- [ ] Refatorar `lib/scripts/validate-brandkit.ts`:
  - Extrair de `scripts/validate-brandkit.js`
  - Função: `validateBrandkit(brandkit)`
  - Retorno: `{ valid, errors, warnings }`

- [ ] Atualizar scripts CLI para chamar lib:
  ```javascript
  // scripts/prepare-react-model.js
  const { prepareModel } = require('../lib/scripts/prepare-model');
  prepareModel(source, niche, modelId);
  ```

**Arquivos críticos:**
- `lib/scripts/prepare-model.ts` (novo)
- `lib/scripts/setup-client.ts` (novo)
- `lib/scripts/apply-brandkit.ts` (refactor)
- `lib/scripts/validate-brandkit.ts` (refactor)

---

### **FASE 3: APIs de Conversão & Setup** (2 dias)

**Objetivo:** Endpoints para automação

- [ ] Criar `app/api/orders/webhook/route.ts`:
  - Verificar signature do Stripe
  - Criar Order no banco (status: AWAITING_SETUP)
  - Gerar setupToken único
  - Enviar email via Resend com link `/setup/{orderId}/{token}`
  - Enviar mensagem WhatsApp (opcional)

- [ ] Criar `app/api/models/setup-client/route.ts`:
  - Receber brandkit do formulário
  - Validar via `validateBrandkit()`
  - Chamar `setupClient(orderId, templateId, brandkit)`
  - Atualizar Order (status: SETUP_COMPLETE)
  - Disparar job em background (prepare → apply → deploy)

- [ ] Criar `app/api/models/prepare/route.ts`:
  - Receber orderId + templateId
  - Chamar `prepareModel()`
  - Copiar base → clients/{orderId}
  - Retornar status

- [ ] Criar `app/api/models/apply/route.ts`:
  - Receber orderId
  - Chamar `applyBrandkit()`
  - Retornar arquivos modificados

- [ ] Criar background job runner:
  - Usar Vercel Cron ou BullMQ
  - Pipeline: setup-complete → prepare → apply → deploy
  - Retry logic em caso de erro

**Arquivos críticos:**
- `app/api/orders/webhook/route.ts`
- `app/api/models/setup-client/route.ts`
- `app/api/models/prepare/route.ts`
- `app/api/models/apply/route.ts`
- `lib/services/payment.ts`
- `lib/services/email.ts`

---

### **FASE 4: Formulário de Setup do Cliente** (1 dia)

**Objetivo:** Interface para cliente enviar dados

- [ ] Criar `app/[locale]/setup/[orderId]/[token]/page.tsx`:
  - Validar token (proteger contra acesso não autorizado)
  - Form com React Hook Form + Zod validation:
    - Nome da empresa (text)
    - Cores (color picker: primary, secondary)
    - Telefone (input com mask)
    - Email (email validation)
    - Instagram (URL validation)
    - Facebook (opcional)
    - LinkedIn (opcional)
    - Endereço (textarea)
    - Tagline/slogan (text)
    - [ ] Checkbox: "Não tenho logo, quero criar uma (+R$ 50)"
  - Submit → POST /api/models/setup-client

- [ ] Criar componentes:
  - `ColorPicker.tsx` (react-colorful)
  - `PhoneMaskInput.tsx` (react-input-mask)
  - `SocialMediaInput.tsx` (validação de URL)

- [ ] Feedback visual:
  - Loading state durante submit
  - Success: "Setup concluído! Você receberá um email em até 24h"
  - Error: Mostrar erros de validação inline

**Arquivos críticos:**
- `app/[locale]/setup/[orderId]/[token]/page.tsx`
- `components/forms/BrandkitForm.tsx`
- `components/ui/ColorPicker.tsx`

---

### **FASE 5: Painel Admin (fallback WhatsApp)** (1 dia)

**Objetivo:** Interface para você colar dados do WhatsApp manualmente

- [ ] Criar `app/[locale]/admin/orders/[orderId]/page.tsx`:
  - Proteger com auth (NextAuth ou Clerk)
  - Listar Order details (template, cliente, status)
  - Form idêntico ao /setup mas pré-populado
  - Textarea "Colar dados do WhatsApp" → parser automático:
    ```
    Nome: Empresa XYZ
    Telefone: (14) 99123-4567
    Email: contato@xyz.com
    Instagram: @xyz
    Cores: #FF0000, #000000
    ```
  - Submit → POST /api/models/setup-client (mesmo endpoint)

- [ ] Criar parser de texto:
  ```typescript
  function parseWhatsAppData(text: string): Partial<Brandkit> {
    // Regex para extrair campos
    const patterns = {
      nome: /Nome:\s*(.+)/i,
      telefone: /Telefone:\s*(.+)/i,
      email: /Email:\s*(.+)/i,
      // ...
    };
    // Retornar objeto estruturado
  }
  ```

**Arquivos críticos:**
- `app/[locale]/admin/orders/[orderId]/page.tsx`
- `lib/utils/whatsapp-parser.ts`
- `middleware.ts` (auth protection)

---

### **FASE 6: Deploy Automation** (1 dia)

**Objetivo:** Deploy automático em subdomínio Vercel

- [ ] Criar `app/api/deploy/route.ts`:
  - Receber orderId
  - Buscar Order no banco
  - Gerar subdomain slug: `slugify(clientName).persedigital.com`
  - Criar projeto Vercel via API:
    ```typescript
    const vercel = new VercelClient(token);
    const deployment = await vercel.createDeployment({
      name: subdomain,
      files: models/{template}/clients/{orderId}/,
      projectSettings: {
        framework: 'nextjs',
        buildCommand: 'npm run build',
        outputDirectory: '.next',
      },
    });
    ```
  - Configurar DNS (A record ou CNAME)
  - Aguardar SSL provisioning (polling)
  - Atualizar Order (deployedUrl, status: DEPLOYED)
  - Enviar email de conclusão

- [ ] Criar `lib/services/deploy.ts`:
  - Wrapper para Vercel API
  - Funções: `createProject()`, `deploy()`, `configureDNS()`

- [ ] Email de conclusão (template HTML):
  - Link do site: https://{subdomain}.persedigital.com
  - Screenshot automático (Puppeteer ou API)
  - QR code para mobile preview
  - Instruções para apontar domínio próprio
  - Upsell: "Quer editar sozinho? Painel de controle por +R$ X/mês"

**Arquivos críticos:**
- `app/api/deploy/route.ts`
- `lib/services/deploy.ts`
- `lib/services/email.ts` (template de conclusão)

---

### **FASE 7: Logo Generator (Upsell)** (1 dia)

**Objetivo:** Gerar logo com IA se cliente não tiver

- [ ] Criar `app/api/models/generate-logo/route.ts`:
  - Receber: businessName, primaryColor, secondaryColor, niche
  - Gerar prompt para DALL-E:
    ```
    "Minimalist logo for '{businessName}', a {niche} business.
    Primary color: {primaryColor}. Secondary color: {secondaryColor}.
    Clean, modern, professional. No text, icon only."
    ```
  - Chamar OpenAI DALL-E API ou Replicate Flux
  - Salvar logo em `/public/logos/{orderId}.png`
  - Retornar URL

- [ ] Integrar no formulário de setup:
  - Checkbox: "Não tenho logo, gerar com IA (+R$ 50)"
  - Se marcado: Chamar /api/models/generate-logo após submit
  - Exibir preview + opção de regenerar (3 tentativas)

- [ ] Adicionar à Order:
  - Campo `logoGenerated: boolean`
  - Campo `logoUrl: string`
  - Cobrar upsell no checkout (adicionar line item no Stripe)

**Arquivos críticos:**
- `app/api/models/generate-logo/route.ts`
- `lib/services/ai-logo.ts`

---

### **FASE 8: Notificações & Feedback** (1 dia)

**Objetivo:** Manter cliente informado do progresso

- [ ] Email de boas-vindas (após pagamento):
  ```
  Assunto: ✅ Pedido confirmado! Próximos passos

  Olá {clientName},

  Seu pedido #{orderId} foi confirmado!
  Template escolhido: {templateName}

  📝 Próximo passo: Envie seus dados

  OPÇÃO 1 - Formulário Online (recomendado):
  👉 {setupUrl}

  OPÇÃO 2 - WhatsApp:
  👉 Envie para (14) 99107-1072 no formato:
     Nome: Sua Empresa
     Telefone: (XX) XXXXX-XXXX
     Email: contato@exemplo.com
     ...

  ⏰ Entrega: 24h após envio dos dados
  ```

- [ ] Email de status (durante setup):
  ```
  Assunto: 🚀 Seu site está sendo criado!

  Status atual: Personalizando seu template
  - ✅ Dados recebidos
  - 🔄 Aplicando suas cores e informações
  - ⏳ Preparando deploy

  Em breve você receberá o link!
  ```

- [ ] Email de conclusão (após deploy):
  ```
  Assunto: 🎉 Seu site está no ar!

  {screenshot do site}

  🌐 Acesse agora: {deployedUrl}
  📱 QR Code: {qrcode}

  📋 Próximos passos:
  1. Revisar o site
  2. Apontar seu domínio próprio (instruções abaixo)
  3. [Upsell] Contratar painel de edição
  ```

- [ ] WhatsApp notifications (via WhatsApp Business API):
  - Enviar mensagens nos mesmos momentos
  - Formato curto e objetivo

**Arquivos críticos:**
- `lib/services/email.ts` (templates)
- `lib/services/whatsapp.ts`
- `lib/templates/email/` (HTML templates)

---

### **FASE 9: Monitoramento & Error Handling** (meio dia)

**Objetivo:** Detectar e recuperar de erros

- [ ] Logging estruturado:
  ```typescript
  import { logger } from '@/lib/logger';

  logger.info('Order created', { orderId, templateId });
  logger.error('Deploy failed', { orderId, error });
  ```

- [ ] Webhook de erro:
  - POST /api/internal/error-notification
  - Envia Telegram/Slack para você

- [ ] Retry logic:
  - Se prepare falhar → retry 3x com backoff
  - Se deploy falhar → notificar admin + pausar Order

- [ ] Admin dashboard simples:
  - `/admin/orders` - Lista todos os pedidos
  - Filtros: status, data, template
  - Botão "Reprocessar" para erros

**Arquivos críticos:**
- `lib/logger.ts`
- `app/api/internal/error-notification/route.ts`
- `app/[locale]/admin/orders/page.tsx` (listagem)

---

### **FASE 10: Testes & Ajustes** (1 dia)

**Objetivo:** Validar workflow end-to-end

- [ ] Teste completo:
  1. Criar pedido de teste no Stripe (modo test)
  2. Receber webhook → verificar Order criado
  3. Acessar /setup/{orderId}/{token}
  4. Preencher formulário → submit
  5. Verificar background job executou
  6. Verificar deploy no Vercel
  7. Acessar {subdomain}.persedigital.com
  8. Verificar emails recebidos

- [ ] Casos de erro:
  - Token inválido no /setup
  - Dados inválidos no form
  - Falha no deploy
  - Webhook duplicado

- [ ] Performance:
  - Tempo total: pagamento → site no ar < 5 minutos
  - Se > 5min: otimizar gargalo (prepare? apply? deploy?)

**Checklist final:**
- [ ] Todos os emails enviados corretamente
- [ ] WhatsApp funciona (se implementado)
- [ ] Subdomínio provisiona SSL
- [ ] Logo IA gera resultado aceitável
- [ ] Admin pode colar dados do WhatsApp
- [ ] Erros são logados e notificados

---

## 📁 Arquivos Críticos para Modificar/Criar

### Novos Arquivos (criar):

```
prisma/
└── schema.prisma                                    [DB schema]

lib/
├── scripts/
│   ├── prepare-model.ts                             [Refactor de scripts/]
│   ├── setup-client.ts                              [NOVO]
│   ├── apply-brandkit.ts                            [Refactor]
│   └── validate-brandkit.ts                         [Refactor]
├── services/
│   ├── payment.ts                                   [Stripe]
│   ├── email.ts                                     [Resend]
│   ├── whatsapp.ts                                  [WhatsApp API]
│   ├── deploy.ts                                    [Vercel API]
│   └── ai-logo.ts                                   [OpenAI DALL-E]
├── utils/
│   └── whatsapp-parser.ts                           [Parser texto]
└── logger.ts                                        [Logging]

app/
├── api/
│   ├── orders/
│   │   └── webhook/
│   │       └── route.ts                             [Stripe webhook]
│   ├── models/
│   │   ├── setup-client/
│   │   │   └── route.ts                             [Setup brandkit]
│   │   ├── prepare/
│   │   │   └── route.ts                             [Conversão]
│   │   ├── apply/
│   │   │   └── route.ts                             [Apply brandkit]
│   │   └── generate-logo/
│   │       └── route.ts                             [IA logo]
│   ├── deploy/
│   │   └── route.ts                                 [Deploy Vercel]
│   └── internal/
│       └── error-notification/
│           └── route.ts                             [Alertas]
└── [locale]/
    ├── setup/
    │   └── [orderId]/
    │       └── [token]/
    │           └── page.tsx                         [Form cliente]
    └── admin/
        └── orders/
            ├── page.tsx                             [Listagem]
            └── [orderId]/
                └── page.tsx                         [Editar/colar WhatsApp]

components/
├── forms/
│   └── BrandkitForm.tsx                             [Form de setup]
└── ui/
    ├── ColorPicker.tsx                              [Seletor de cores]
    └── PhoneMaskInput.tsx                           [Input tel com mask]

models/
└── {niche}/
    └── {model-id}/
        ├── base/                                    [REORGANIZAR: template base]
        │   ├── pt/
        │   └── en/
        └── clients/                                 [NOVO: clientes individuais]
            └── {orderId}/
                ├── brandkit.json
                ├── pt/
                └── en/
```

### Arquivos a Modificar:

```
scripts/
├── prepare-react-model.js                           [SIMPLIFICAR: só conversão]
└── [REMOVE] apply-brandkit.js                       [Movido para lib/]

.env.local                                           [ADICIONAR: keys de API]

package.json                                         [ADICIONAR: novas deps]
```

---

## ✅ Verificação Final

### Teste Manual Completo:

1. **Simular pagamento:**
   ```bash
   stripe trigger payment_intent.succeeded
   ```
   - ✅ Webhook recebido
   - ✅ Order criada no banco
   - ✅ Email enviado ao cliente

2. **Preencher formulário:**
   - Acessar `/setup/{orderId}/{token}`
   - ✅ Form carrega corretamente
   - ✅ Validação client-side funciona
   - ✅ Submit salva dados

3. **Verificar automação:**
   - ✅ Background job disparado
   - ✅ prepare-model executou
   - ✅ apply-brandkit executou
   - ✅ Deploy iniciado

4. **Verificar deploy:**
   - Acessar `{subdomain}.persedigital.com`
   - ✅ Site carregou
   - ✅ SSL ativo (https)
   - ✅ Cores corretas aplicadas
   - ✅ Contatos corretos

5. **Verificar notificações:**
   - ✅ Email de conclusão recebido
   - ✅ Screenshot anexado
   - ✅ QR code gerado

6. **Testar fallback WhatsApp:**
   - Acessar `/admin/orders/{orderId}`
   - Colar dados:
     ```
     Nome: Teste LTDA
     Telefone: (14) 99123-4567
     Email: teste@teste.com
     Instagram: @teste
     Cores: #FF0000, #000000
     ```
   - ✅ Parser extraiu dados corretamente
   - ✅ Submit aplicou mudanças

7. **Testar geração de logo:**
   - Marcar checkbox "Gerar logo com IA"
   - ✅ Logo gerada e salva
   - ✅ Preview exibido
   - ✅ Opção de regenerar funciona

### Testes Automatizados (opcional):

```typescript
// __tests__/workflow.test.ts
describe('Landing Page Workflow', () => {
  it('should create order from webhook', async () => {});
  it('should validate brandkit data', async () => {});
  it('should apply brandkit correctly', async () => {});
  it('should deploy to Vercel', async () => {});
});
```

---

## 🎯 Resultado Final

### Antes (Manual):
```
Cliente paga → Você executa 5 scripts CLI → Deploy manual → Envia email
Tempo: ~2-4 horas de trabalho manual por cliente
```

### Depois (Automatizado):
```
Cliente paga → Formulário web → Automação completa → Email automático
Tempo: ~5 minutos (sem intervenção sua, exceto se cliente escolher WhatsApp)
```

### Escalabilidade:
- ✅ 10 clientes/dia = sem esforço adicional
- ✅ 100 clientes/dia = apenas monitorar erros
- ✅ Upsell de logo = receita extra passiva
- ✅ Subdomínio → migração para domínio próprio = cliente retido

### Próximos Passos (Fase 11+):
- [ ] Painel de edição (CMS) para cliente atualizar conteúdo
- [ ] Integração com Google Analytics automática
- [ ] Sistema de revisões (cliente pede ajustes)
- [ ] Marketplace de templates (outros designers vendem)

---

## 💰 Estimativa de Custos Mensais

| Serviço | Custo | Uso |
|---------|-------|-----|
| Vercel Pro | $20/mês | Deploy de até 100 projetos |
| PostgreSQL (Supabase) | $0-25/mês | Até 500MB, depois $25 |
| Stripe | 2.9% + $0.30 | Por transação |
| Resend Email | $0-20/mês | 3000 emails grátis, depois $20 |
| OpenAI DALL-E | ~$0.02/logo | Se 50% dos clientes = $1-5/mês |
| WhatsApp Business API | $0-50/mês | Depende do volume |
| **Total** | **~$50-100/mês** | Para até 100 clientes/mês |

---

**Está claro o plano?** Podemos ajustar qualquer fase antes de começar a implementação!

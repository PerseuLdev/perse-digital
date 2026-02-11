# MVP: Conversão de Templates React para Preview - Plano de Implementação

## 📋 Context

**Situação atual:**
- Sistema de preview funcionando (`/templates` galeria + `/templates/{id}/preview`)
- Scripts de conversão testados e funcionando (`prepare-model`, `apply-brandkit`)
- Apenas 2 templates completos: `muscle-perse`, `personal-trainer-masc`
- Você tem vários templates React prontos que precisam ser convertidos

**Objetivo do MVP:**
Converter todos os templates React existentes para Next.js e colocá-los no sistema de preview para começar a anunciar e vender.

**NÃO É O OBJETIVO AGORA:**
- ❌ Automação de pedidos/pagamentos
- ❌ Projetos de clientes dentro do perse-digital
- ❌ Sistema de deploy automático
- ❌ Formulários de coleta de dados

**Foco: Templates → Preview → Anúncio → Venda manual**

Workflow manual atual (e ok para MVP):
```
Cliente vê galeria → Escolhe template → Paga → Você executa scripts CLI manualmente → Deploy manual em projeto separado
```

---

## 🎯 Objetivo do MVP

**Ter todos os templates React convertidos e funcionando no preview para:**

1. ✅ Cliente pode ver galeria completa em `/templates`
2. ✅ Cliente pode testar preview interativo em `/templates/{id}/preview`
3. ✅ Você pode começar a anunciar os templates
4. ✅ Vendas manuais (WhatsApp/email) com scripts CLI
5. ✅ Deploy manual em projetos separados (Vercel, Netlify, etc.)

---

## 📦 Inventário de Templates

### Templates já convertidos:
- ✅ `muscle-perse` (fitness)
- ✅ `personal-trainer-masc` (fitness)

### Templates para converter:
Você mencionou que vai enviar mais projetos React. Vamos assumir estrutura comum:

```
templates-react/               # Pasta externa com templates fonte
├── health-clinic/             # Clínica de saúde
├── lawyer-portfolio/          # Portfólio advogado
├── beauty-salon/              # Salão de beleza
├── personal-trainer-fem/      # Personal trainer feminino
├── yoga-studio/               # Estúdio de yoga
├── barbershop/                # Barbearia
├── gym-crossfit/              # Academia CrossFit
└── nutrition-coach/           # Coach de nutrição
```

**Total estimado: 8-10 novos templates**

---

## 🔄 Workflow de Conversão (MVP)

Para cada template React:

```
1. Preparar modelo
   npm run prepare-model ../templates-react/{template} {niche} {model-id}

2. Testar localmente
   npm run dev
   http://localhost:3000/pt/{model-id}
   http://localhost:3000/en/{model-id}

3. Verificar preview
   http://localhost:3000/pt/templates/{model-id}/preview

4. Ajustar traduções (se necessário)
   src/messages/pt.json
   src/messages/en.json

5. Adicionar imagens
   src/lib/models-data.ts

6. Commit
   git add .
   git commit -m "feat: add {model-id} template"
```

**Repetir para todos os templates.**

---

## ✅ Milestones

### **MILESTONE 1: Setup & Organização** (1-2 horas)

**Objetivo:** Preparar ambiente e organizar templates fonte

- [ ] Criar pasta `templates-react/` fora do projeto perse-digital
- [ ] Copiar todos os templates React para `templates-react/`
- [ ] Verificar estrutura de cada template:
  - [ ] Tem pasta `pt/` e `en/`? Ou apenas uma versão?
  - [ ] Tem `App.tsx` ou `index.tsx`?
  - [ ] Tem componentes organizados?
  - [ ] Tem `vite.config.ts` ou `package.json`?
- [ ] Criar planilha de inventário:
  ```
  | Template          | Niche     | Locales | Status      |
  |-------------------|-----------|---------|-------------|
  | health-clinic     | health    | pt      | Pendente    |
  | lawyer-portfolio  | law       | pt/en   | Pendente    |
  | ...               | ...       | ...     | ...         |
  ```

**Arquivos:**
- `templates-react/` (pasta externa)
- `docs/templates-inventory.md` (inventário)

---

### **MILESTONE 2: Converter Template #1** (30min - 1h)

**Objetivo:** Converter primeiro template novo e validar processo

**Escolher template mais simples primeiro** (ex: portfólio, landing page estática)

- [ ] Executar `prepare-model`:
  ```bash
  npm run prepare-model ../templates-react/lawyer-portfolio law lawyer-portfolio
  ```
- [ ] Verificar arquivos criados:
  - [ ] `src/models/law/lawyer-portfolio/config.ts`
  - [ ] `src/models/law/lawyer-portfolio/pt/` (App.tsx, componentes)
  - [ ] `src/models/law/lawyer-portfolio/en/` (se houver)
  - [ ] `src/app/[locale]/(templates)/lawyer-portfolio/page.tsx`
  - [ ] Entrada em `models.registry.ts`
  - [ ] Brandkit template criado
- [ ] Testar localmente:
  ```bash
  npm run dev
  # Abrir http://localhost:3000/pt/lawyer-portfolio
  # Abrir http://localhost:3000/en/lawyer-portfolio
  ```
- [ ] Verificar preview:
  ```
  http://localhost:3000/pt/templates/lawyer-portfolio/preview
  ```
- [ ] Ajustar traduções em `pt.json` e `en.json`:
  ```json
  {
    "models": {
      "items": {
        "lawyer-portfolio": {
          "title": "Portfólio Advocacia",
          "description": "Template profissional para advogados...",
          "features": {
            "0": "Seção sobre o advogado",
            "1": "Áreas de atuação",
            "2": "Formulário de contato",
            "3": "Blog integrado"
          }
        }
      }
    }
  }
  ```
- [ ] Adicionar imagens em `models-data.ts`:
  ```typescript
  const MODEL_IMAGES: Record<string, ...> = {
    'lawyer-portfolio': {
      image: 'https://images.unsplash.com/photo-...',
      mobileImage: 'https://images.unsplash.com/photo-...',
    },
  };
  ```
- [ ] Commit:
  ```bash
  git add .
  git commit -m "feat: add lawyer-portfolio template"
  ```

**Resultado esperado:**
- ✅ Template aparece na galeria `/templates`
- ✅ Preview funciona corretamente
- ✅ Desktop + Mobile responsive
- ✅ Traduções corretas

---

### **MILESTONE 3: Converter Templates em Lote** (3-5 horas)

**Objetivo:** Converter todos os templates restantes

**Processo otimizado (batch):**

Para cada template:

#### **3.1. health-clinic**
- [ ] `npm run prepare-model ../templates-react/health-clinic health health-clinic`
- [ ] Testar em `localhost:3000/pt/health-clinic`
- [ ] Ajustar traduções
- [ ] Adicionar imagens
- [ ] Commit

#### **3.2. beauty-salon**
- [ ] `npm run prepare-model ../templates-react/beauty-salon beauty beauty-salon`
- [ ] Testar em `localhost:3000/pt/beauty-salon`
- [ ] Ajustar traduções
- [ ] Adicionar imagens
- [ ] Commit

#### **3.3. personal-trainer-fem**
- [ ] `npm run prepare-model ../templates-react/personal-trainer-fem fitness personal-trainer-fem`
- [ ] Testar em `localhost:3000/pt/personal-trainer-fem`
- [ ] Ajustar traduções
- [ ] Adicionar imagens
- [ ] Commit

#### **3.4. yoga-studio**
- [ ] `npm run prepare-model ../templates-react/yoga-studio fitness yoga-studio`
- [ ] Testar em `localhost:3000/pt/yoga-studio`
- [ ] Ajustar traduções
- [ ] Adicionar imagens
- [ ] Commit

#### **3.5. barbershop**
- [ ] `npm run prepare-model ../templates-react/barbershop beauty barbershop`
- [ ] Testar em `localhost:3000/pt/barbershop`
- [ ] Ajustar traduções
- [ ] Adicionar imagens
- [ ] Commit

#### **3.6. gym-crossfit**
- [ ] `npm run prepare-model ../templates-react/gym-crossfit fitness gym-crossfit`
- [ ] Testar em `localhost:3000/pt/gym-crossfit`
- [ ] Ajustar traduções
- [ ] Adicionar imagens
- [ ] Commit

#### **3.7. nutrition-coach**
- [ ] `npm run prepare-model ../templates-react/nutrition-coach health nutrition-coach`
- [ ] Testar em `localhost:3000/pt/nutrition-coach`
- [ ] Ajustar traduções
- [ ] Adicionar imagens
- [ ] Commit

#### **3.8. [adicionar conforme você enviar mais]**
- [ ] ...

**Dicas para otimizar:**
- Use snippets/atalhos para comandos repetitivos
- Copie estrutura de traduções de templates similares
- Use Unsplash API para gerar URLs de imagens automaticamente:
  ```
  https://images.unsplash.com/photo-XXXXX?w=1200&h=1800&fit=crop
  ```

---

### **MILESTONE 4: Validação & QA** (1-2 horas)

**Objetivo:** Testar todos os templates convertidos

- [ ] **Galeria completa:**
  - [ ] Abrir `/pt/templates`
  - [ ] Verificar todos os cards aparecem
  - [ ] Testar filtros (categoria, objetivo)
  - [ ] Verificar live preview em cada card

- [ ] **Preview individual** (testar 100% dos templates):
  - [ ] `/templates/lawyer-portfolio/preview`
    - [ ] Desktop viewport funciona
    - [ ] Tablet viewport funciona
    - [ ] Mobile viewport funciona
    - [ ] Split view funciona
    - [ ] Sidebar de vendas exibe corretamente
  - [ ] Repetir para todos os outros templates

- [ ] **Rotas diretas** (testar amostra):
  - [ ] `/pt/lawyer-portfolio` carrega
  - [ ] `/en/lawyer-portfolio` carrega (se houver)
  - [ ] Animações funcionam
  - [ ] Links internos funcionam
  - [ ] Formulários (se houver) funcionam

- [ ] **Traduções:**
  - [ ] Verificar títulos corretos em PT e EN
  - [ ] Verificar descrições fazem sentido
  - [ ] Verificar features estão traduzidas

- [ ] **Responsividade:**
  - [ ] Testar no Chrome DevTools (iPhone, iPad, Desktop)
  - [ ] Verificar breakpoints funcionam
  - [ ] Verificar fontes legíveis em mobile

- [ ] **Performance:**
  - [ ] Lighthouse score > 90 (Performance)
  - [ ] Imagens otimizadas
  - [ ] Sem console errors

---

### **MILESTONE 5: Deploy para Produção** (30min)

**Objetivo:** Publicar templates para começar a anunciar

- [ ] Verificar build de produção:
  ```bash
  npm run build
  ```
  - [ ] Build completa sem erros
  - [ ] Testar em modo produção:
    ```bash
    npm run start
    ```

- [ ] Deploy (escolher plataforma):
  - **Opção A - Vercel:**
    ```bash
    vercel --prod
    ```
  - **Opção B - Netlify:**
    ```bash
    netlify deploy --prod
    ```

- [ ] Verificar em produção:
  - [ ] `https://persedigital.com/templates` carrega
  - [ ] Todos os templates aparecem
  - [ ] Previews funcionam
  - [ ] SSL ativo (HTTPS)

- [ ] Configurar domínio (se ainda não tiver):
  - [ ] Apontar DNS
  - [ ] Aguardar propagação
  - [ ] Verificar certificado SSL

- [ ] SEO básico:
  - [ ] Verificar `meta title` e `description` da página `/templates`
  - [ ] Adicionar Open Graph tags (para compartilhamento)
  - [ ] Submeter sitemap ao Google Search Console

---

### **MILESTONE 6: Marketing & Anúncio** (1 hora)

**Objetivo:** Começar a promover os templates

- [ ] **Screenshots para anúncios:**
  - [ ] Tirar screenshot de cada template (desktop + mobile)
  - [ ] Criar carrossel para Instagram/Facebook
  - [ ] Criar vídeo curto mostrando preview interativo

- [ ] **Copywriting:**
  - [ ] Criar descrição de cada template
  - [ ] Definir preço de cada template
  - [ ] Criar CTA para WhatsApp:
    ```
    "Escolha seu template profissional!
    👉 Veja todos: https://persedigital.com/templates
    💬 Dúvidas? WhatsApp: (14) 99107-1072"
    ```

- [ ] **Canais de divulgação:**
  - [ ] Post no Instagram (stories + feed)
  - [ ] Post no Facebook (grupos de empreendedores)
  - [ ] Post no LinkedIn
  - [ ] Enviar email para base de contatos
  - [ ] Anúncio pago (Google Ads / Facebook Ads)

- [ ] **Link para WhatsApp:**
  - Criar link com mensagem pré-formatada:
    ```
    https://wa.me/5514991071072?text=Ol%C3%A1!%20Vi%20os%20templates%20no%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20{template-name}
    ```

---

### **MILESTONE 7: Processo Manual de Venda** (documentação)

**Objetivo:** Definir processo manual até automação estar pronta

**Fluxo de venda manual (para MVP):**

1. **Cliente entra em contato via WhatsApp:**
   - Template de resposta:
     ```
     Olá! Ótima escolha! 🎉

     Template: {nome}
     Valor: R$ {preço}

     Para finalizar, preciso que me envie:
     1. Nome da empresa
     2. Cores da marca (hex ou nome)
     3. Telefone e WhatsApp
     4. Email
     5. Instagram, Facebook (se tiver)
     6. Endereço (se aplicável)
     7. Texto/slogan (se quiser personalizar)

     Logo: Tem logo? Se não, posso gerar uma por +R$ 50 😊

     Após o pagamento, entrego em 24h!
     ```

2. **Cliente paga (PIX, cartão, etc.):**
   - Confirmar pagamento

3. **Cliente envia dados:**
   - Copiar dados para arquivo temporário

4. **Executar scripts:**
   ```bash
   # Se template já está no sistema, apenas aplicar brandkit
   cd models/{niche}/{template-id}

   # Editar brandkit.json com dados do cliente
   nano brandkit.json

   # Validar
   npm run validate-brandkit {niche} {template-id}

   # Aplicar
   npm run apply-brandkit {niche} {template-id}

   # Testar
   npm run dev
   # http://localhost:3000/pt/{template-id}
   ```

5. **Deploy em projeto separado:**
   - Criar novo repositório Git:
     ```bash
     mkdir cliente-{nome}
     cp -r models/{niche}/{template-id}/* cliente-{nome}/
     cd cliente-{nome}
     git init
     git add .
     git commit -m "Initial commit"
     ```

   - Deploy no Vercel/Netlify:
     ```bash
     vercel --prod
     # Ou: netlify deploy --prod
     ```

   - Configurar domínio do cliente (se tiver) ou subdomínio seu

6. **Enviar ao cliente:**
   ```
   Pronto! 🎉

   Seu site está no ar:
   🌐 https://{dominio}

   Acesse e me diga o que achou!
   Qualquer ajuste, é só falar 😊
   ```

**Documentar esse processo:**
- [ ] Criar `docs/processo-manual-venda.md`
- [ ] Incluir templates de mensagem
- [ ] Incluir checklist de etapas

---

## 📁 Arquivos Críticos (MVP)

### Arquivos para criar/modificar:

```
templates-react/                           [Pasta externa com React fonte]
└── {diversos templates}/

docs/
├── templates-inventory.md                 [Inventário de templates]
└── processo-manual-venda.md               [Processo manual até automação]

src/
├── models/
│   └── {niche}/
│       └── {model-id}/                    [Cada template convertido]
│           ├── config.ts
│           ├── brandkit.json
│           ├── pt/
│           │   ├── App.tsx
│           │   └── components/
│           └── en/                        [Se houver]
├── models/_config/
│   └── models.registry.ts                 [Adicionar cada template]
├── lib/
│   └── models-data.ts                     [Adicionar imagens]
└── messages/
    ├── pt.json                            [Traduções PT]
    └── en.json                            [Traduções EN]

scripts/                                   [Já existem, usar como estão]
├── prepare-react-model.js
├── apply-brandkit.js
└── validate-brandkit.js
```

---

## ✅ Checklist de Verificação Final

### Para cada template:
- [ ] Aparece na galeria `/templates`
- [ ] Preview funciona em 4 viewports
- [ ] Rota direta funciona (`/pt/{id}`, `/en/{id}`)
- [ ] Traduções corretas
- [ ] Imagens carregam
- [ ] Responsivo (mobile, tablet, desktop)
- [ ] Sem console errors
- [ ] Animações funcionam

### Para o projeto completo:
- [ ] Build de produção funciona
- [ ] Deploy em produção ok
- [ ] SEO básico configurado
- [ ] Links de compartilhamento funcionam
- [ ] Processo manual documentado
- [ ] Templates no Instagram/Facebook

---

## 🎯 Resultado Final do MVP

**Antes:**
- 2 templates funcionando
- Não dá para anunciar (poucos templates)

**Depois (MVP pronto):**
- 10-12 templates funcionando
- Galeria completa e profissional
- Preview interativo para todos
- Pronto para anunciar e vender
- Processo manual documentado

**Próximo passo (futuro):**
- Automação de vendas (Fase 2)
- Sistema de deploy automático
- Projetos de clientes fora do perse-digital
- CMS para clientes editarem

---

## 📅 Estimativa de Tempo

| Milestone | Tempo Estimado | Descrição |
|-----------|---------------|-----------|
| M1: Setup | 1-2h | Organizar templates fonte |
| M2: Template #1 | 30min-1h | Validar processo |
| M3: Lote de 8 | 3-5h | Converter todos (30-40min cada) |
| M4: QA | 1-2h | Testar tudo |
| M5: Deploy | 30min | Publicar |
| M6: Marketing | 1h | Anunciar |
| M7: Docs | 30min | Documentar processo manual |
| **TOTAL** | **8-12 horas** | 1-2 dias de trabalho |

---

**MVP simples, rápido e efetivo!** 🚀

Após isso, você pode começar a vender enquanto desenvolve a automação completa em paralelo.

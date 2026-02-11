# Scripts de Automacao

Sistema para importar modelos React, converter para Next.js e aplicar brandkit do cliente.

## Workflow

```
Modelo React  -->  prepare-model  -->  Editar brandkit.json  -->  validate-brandkit  -->  apply-brandkit  -->  Producao
```

---

## Scripts Disponiveis

| Script | Descricao | Uso |
|--------|-----------|-----|
| `prepare-model` | Importar modelo React existente e converter para Next.js | `npm run prepare-model <pasta-fonte> <niche> <model-id>` |
| `apply-brandkit` | Aplicar informacoes do cliente ao modelo | `npm run apply-brandkit <niche> <model-id>` |
| `validate-brandkit` | Validar brandkit.json antes de aplicar | `npm run validate-brandkit <niche> <model-id>` |
| `create-model` | Criar modelo React do zero (scaffold) | `npm run create-model <niche> <model-id> [cor1] [cor2]` |

---

## 1. prepare-model

Converte um modelo React standalone (com Vite, CRA, etc.) para a estrutura Next.js do projeto.

```bash
npm run prepare-model ../modelos-react/gym-pro fitness gym-pro
```

**O que faz:**

- Copia arquivos .tsx/.jsx/.ts/.css do modelo fonte
- Filtra artefatos standalone (index.html, vite.config.ts, package.json, node_modules, etc.)
- Detecta e adiciona `'use client'` em arquivos que usam hooks, Framer Motion ou React Three Fiber
- Detecta locales (pt/, en/) - se o modelo tem apenas um locale, duplica para o outro
- Se nao tem locales, copia para pt/ e en/
- Faz scan automatico de cores HEX, telefones BR (55+DDD+numero), emails e URLs sociais
- Cria `config.ts` com cores detectadas
- Cria route `page.tsx` em `src/app/[locale]/(templates)/{model-id}/`
- Registra no `models.registry.ts`
- Adiciona traducoes basicas em `pt.json` e `en.json`
- Cria `brandkit.json` template com secao `_originals` (valores detectados no codigo-fonte)

**Arquivos ignorados na copia:**
- `index.html`, `index.tsx`, `index.jsx`, `index.js` (entrypoints standalone)
- `vite.config.ts`, `vite.config.js` (bundler config)
- `package.json`, `package-lock.json`, `tsconfig.json`, `.gitignore`
- Pastas: `node_modules`, `.git`, `.next`, `dist`, `build`, `.vite`

**Deteccao de `'use client'`:**
Adicionado automaticamente em .tsx/.jsx que contenham:
- Hooks: `useState`, `useEffect`, `useRef`, `useContext`, `useCallback`, `useMemo`, `useReducer`
- Framer Motion: `from 'framer-motion'`
- React Three Fiber: `from '@react-three/fiber'`, `from '@react-three/drei'`

---

## 2. brandkit.json

Apos `prepare-model`, edite o `brandkit.json` gerado em `src/models/{niche}/{model-id}/brandkit.json`.

```json
{
  "modelId": "gym-pro",
  "_originals": {
    "phone": "5514991071072",
    "email": "contato@exemplo.com",
    "instagram": "https://instagram.com/exemplo",
    "facebook": "",
    "linkedin": ""
  },
  "colors": {
    "primary": "#FF4D00",
    "secondary": "#000000",
    "accent": "#FFFFFF"
  },
  "contact": {
    "phone": "5511999887766",
    "whatsapp": "5511999887766",
    "email": "cliente@academia.com",
    "address": "Rua Exemplo, 123"
  },
  "social": {
    "instagram": "https://instagram.com/academia_real",
    "facebook": "https://facebook.com/academia.real",
    "linkedin": null
  },
  "branding": {
    "businessName": "Academia Real Fitness",
    "logo": "/logo.png",
    "tagline": "Slogan do negocio"
  },
  "seo": {
    "title": "Academia Real Fitness | Treinos",
    "description": "Descricao para SEO."
  }
}
```

**Importante sobre `_originals`:**
- Gerado automaticamente pelo `prepare-model` com os valores detectados no codigo-fonte
- O `apply-brandkit` usa `_originals` para saber **o que substituir** no codigo
- Exemplo: se `_originals.phone` = `"5514991071072"` e `contact.phone` = `"5511999887766"`, o script substitui todas as ocorrencias de `5514991071072` por `5511999887766`
- Apos aplicar, `_originals` e atualizado com os novos valores para que re-execucoes futuras funcionem

---

## 3. validate-brandkit

Valida o brandkit.json antes de aplicar.

```bash
npm run validate-brandkit fitness gym-pro
```

**Validacoes:**

| Campo | Tipo | Validacao |
|-------|------|-----------|
| `colors.primary` | Erro | Presente e formato #RRGGBB |
| `colors.secondary` | Erro | Presente e formato #RRGGBB |
| `contact.phone` | Erro | Presente |
| `contact.phone` | Aviso | 12-13 digitos (com codigo do pais) |
| `contact.email` | Aviso | Presente e formato valido |
| `contact.whatsapp` | Aviso | 12-13 digitos se presente |
| `social.instagram` | Aviso | URL completa com instagram.com |
| `branding.businessName` | Erro | Presente e mais de 2 caracteres |
| `seo.title` | Aviso | Presente |
| `seo.description` | Aviso | Presente |
| `_originals` | Aviso | Presente (necessario para apply-brandkit) |

Erros impedem a aplicacao. Avisos permitem continuar.

---

## 4. apply-brandkit

Aplica as informacoes do cliente no codigo do modelo.

```bash
npm run apply-brandkit fitness gym-pro
```

**O que faz:**

1. **Substituicao de texto** - Compara `_originals` com os valores atuais do brandkit e substitui nos arquivos:
   - Telefones
   - Emails
   - URLs do Instagram, Facebook, LinkedIn
   - Processa arquivos: .tsx, .jsx, .ts, .js, .css, .html
   - Pula `brandkit.json` e `brandkit-applied*`
   - Usa `escapeRegex()` para tratar caracteres especiais (`.`, `/`, `@`, etc.)

2. **Cores no globals.css** - Adiciona variaveis CSS:
   - `--color-{model-id}-primary/secondary` na secao `@theme inline`
   - `--{model-id}-primary/secondary` na secao `:root`

3. **Traducoes** - Atualiza `pt.json` e `en.json` com:
   - `models.items.{model-id}.title` = `branding.businessName`
   - `models.items.{model-id}.description` = `seo.description`

4. **Metadata SEO** - Atualiza `title` e `description` no `page.tsx` da rota

5. **Atualiza `_originals`** - Depois de aplicar, os `_originals` sao atualizados com os novos valores para que re-execucoes funcionem

---

## 5. create-model

Cria um modelo React do zero com scaffold basico.

```bash
npm run create-model fitness my-model "#FF0000" "#000000"
```

**Cria:**
- Estrutura de pastas: `pt/`, `en/`, `pt/components/`, `en/components/`
- `config.ts` com configuracao do modelo
- `App.tsx` basico (pt e en) com `'use client'`
- Route `page.tsx`
- Registro no `models.registry.ts`
- Traducoes basicas
- Cores no `globals.css` (se fornecidas)

---

## Exemplo Completo

```bash
# 1. Importar modelo React existente
npm run prepare-model ../modelos-react/yoga-studio wellness yoga-studio

# 2. Editar brandkit.json com dados do cliente
#    src/models/wellness/yoga-studio/brandkit.json

# 3. Validar
npm run validate-brandkit wellness yoga-studio

# 4. Aplicar
npm run apply-brandkit wellness yoga-studio

# 5. Testar
npm run dev
# http://localhost:3000/pt/yoga-studio
# http://localhost:3000/en/yoga-studio
```

---

## Estrutura de Pastas

### Modelo fonte (entrada)

```
modelos-react/gym-pro/
├── pt/                    # Ou raiz (sem locales)
│   ├── App.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   └── Contact.tsx
│   └── styles.css
└── en/
    ├── App.tsx
    └── components/
```

### Modelo preparado (saida)

```
src/models/fitness/gym-pro/
├── config.ts
├── brandkit.json
├── pt/
│   ├── App.tsx            # Com 'use client' adicionado
│   └── components/
│       ├── Navbar.tsx      # Com 'use client' adicionado
│       └── Hero.tsx        # Com 'use client' adicionado
└── en/
    ├── App.tsx
    └── components/

src/app/[locale]/(templates)/gym-pro/
└── page.tsx               # Dynamic import do App
```

---

## Tecnologias Suportadas

- **Three.js / React Three Fiber** - Detectado e `'use client'` adicionado
- **Framer Motion** - Detectado e `'use client'` adicionado
- **React Hooks** - useState, useEffect, useRef, useContext, useCallback, useMemo, useReducer
- **Modelos com/sem i18n** - Detecta e cria estrutura pt/en
- **CSS customizado** - Cores HEX detectadas automaticamente

---

## Problemas Comuns

**"brandkit.json nao encontrado"**
- Execute `npm run prepare-model` primeiro

**"Pasta fonte nao encontrada"**
- Verifique o caminho relativo (ex: `../modelos-react/meu-modelo`)

**Cores nao aplicadas**
- Use formato HEX valido (#RRGGBB)
- Verifique se `colors` esta definido no brandkit.json

**`'use client'` nao adicionado**
- O arquivo nao usa hooks, Framer Motion ou Three.js
- Adicione manualmente: `'use client';` na primeira linha

**Substituicoes nao funcionam**
- Verifique se `_originals` esta presente no brandkit.json
- Os valores em `_originals` devem corresponder aos valores **atuais** no codigo
- Se o brandkit ja foi aplicado antes, `_originals` ja foi atualizado automaticamente

**Modelo com um unico locale**
- O script duplica automaticamente para o locale faltante
- Traduza manualmente depois se necessario

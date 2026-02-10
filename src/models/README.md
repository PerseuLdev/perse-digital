# 📦 Arquitetura de Modelos Multi-idioma

Esta pasta contém todos os modelos (templates) do sistema, organizados por **nicho** e com suporte nativo a **múltiplos idiomas**.

## 📂 Estrutura de Pastas

```
src/models/
├── _config/                    # Configurações centralizadas
│   ├── types.ts               # TypeScript interfaces
│   ├── niches.ts              # Definições de nichos
│   ├── objectives.ts          # Tipos de objetivos
│   └── models.registry.ts     # Registro único de todos os modelos
│
├── {niche}/                   # Nicho (health, law, fitness, etc)
│   └── {model-id}/            # ID do modelo
│       ├── pt/                # Versão português (código completo)
│       │   ├── page.tsx       # Entry point (React)
│       │   ├── App.tsx        # Componente principal
│       │   ├── styles.css     # Estilos
│       │   └── components/    # Componentes do modelo
│       │
│       ├── en/                # Versão inglês (código duplicado + traduzido)
│       │   ├── page.tsx
│       │   ├── App.tsx
│       │   ├── styles.css
│       │   └── components/
│       │
│       ├── shared/            # Apenas lógica compartilhada (sem UI)
│       │   ├── types.ts       # Interfaces TypeScript
│       │   ├── utils.ts       # Funções helpers
│       │   └── constants.ts   # Constantes (cores, etc)
│       │
│       └── config.ts          # Configuração do modelo
```

## 🌍 Nichos Disponíveis

| Nicho | Descrição | Exemplos |
|-------|-----------|----------|
| `health` | Saúde e bem-estar | Consultórios, clínicas |
| `law` | Advocacia e jurídico | Escritórios de advocacia |
| `fitness` | Fitness e academia | Academias, personal trainers |
| `beauty` | Beleza e estética | Salões, clínicas de estética |
| `tech` | Tecnologia e SaaS | Startups, empresas tech |
| `education` | Educação e ensino | Escolas, cursos online |
| `services` | Serviços diversos | Jardinagem, reformas, etc |

## 🎯 Tipos de Modelos

### 1. Modelos React (type: 'react')

**Quando usar:**
- Funcionalidades complexas (agendamento, integração API)
- Estados e interatividade avançada
- Componentes reutilizáveis
- TypeScript e type safety necessários

**Estrutura:**
```typescript
src/models/{niche}/{model-id}/
├── pt/
│   ├── page.tsx          // Entry point Next.js
│   ├── App.tsx           // Componente principal
│   ├── styles.css        // Estilos específicos
│   └── components/       // Componentes React
├── en/                   // Versão duplicada + traduzida
├── shared/               // Types, utils (sem UI)
└── config.ts             // Configuração
```

### 2. Modelos HTML Estáticos (type: 'static')

**Quando usar:**
- Landing pages simples
- Portfolios
- Entrega rápida sem build step
- Cliente quer modificar facilmente
- Performance crítica, zero dependências

**Estrutura:**
```typescript
src/models/{niche}/{model-id}/
├── pt/
│   └── index.html        // HTML completo em português
├── en/
│   └── index.html        // HTML completo em inglês
├── shared/
│   └── assets/           // Assets sem texto (compartilhados)
└── config.ts             // Configuração
```

**Nota:** Os arquivos HTML devem ser copiados para `public/models/{niche}/{model-id}/{locale}/`

## ✅ Convenções e Boas Práticas

### Nomenclatura

- **Model ID**: kebab-case (ex: `health-pro`, `legal-advisor`)
- **Niche**: singular, lowercase (ex: `health`, `law`)
- **Locales**: código ISO 639-1 (ex: `pt`, `en`)

### Estrutura de Código

1. **UI Components**: Duplicar por idioma (permite customizações culturais)
2. **Types/Utils**: Compartilhar em `shared/` (lógica comum)
3. **Styles**: Duplicar (permite ajustes visuais por idioma se necessário)
4. **Assets**:
   - Sem texto: `shared/assets/` (compartilhados)
   - Com texto: `{locale}/assets/` (específicos)

### Arquivo config.ts

Cada modelo deve ter um `config.ts`:

```typescript
import type { ModelConfig } from '@/models/_config/types';

export const config: ModelConfig = {
  id: 'health-pro',
  type: 'react',
  niche: 'health',
  category: 'health', // Mantido para compatibilidade
  objective: 'scheduling',
  locales: ['pt', 'en'] as const,
  colors: ['#004AAD', '#F8FAFC'],
  features: {
    pt: ['Feature 1', 'Feature 2'],
    en: ['Feature 1', 'Feature 2'],
  },
};
```

## 🚀 Como Adicionar um Novo Modelo

### Modelo React

```bash
# 1. Criar estrutura de pastas
mkdir -p src/models/{niche}/{model-id}/{pt,en,shared}/{components,}

# 2. Criar arquivos básicos
# - src/models/{niche}/{model-id}/config.ts
# - src/models/{niche}/{model-id}/pt/page.tsx
# - src/models/{niche}/{model-id}/en/page.tsx

# 3. Adicionar ao registry
# src/models/_config/models.registry.ts

# 4. Criar rota Next.js
# src/app/[locale]/(templates)/{model-id}/page.tsx

# 5. Adicionar imagem em models-data.ts
```

### Modelo HTML Estático

```bash
# 1. Criar estrutura de pastas
mkdir -p src/models/{niche}/{model-id}/{pt,en,shared/assets}

# 2. Criar arquivos HTML
# - src/models/{niche}/{model-id}/pt/index.html
# - src/models/{niche}/{model-id}/en/index.html
# - src/models/{niche}/{model-id}/config.ts

# 3. Copiar para public
mkdir -p public/models/{niche}/{model-id}/{pt,en}
cp src/models/{niche}/{model-id}/pt/index.html public/models/{niche}/{model-id}/pt/
cp src/models/{niche}/{model-id}/en/index.html public/models/{niche}/{model-id}/en/

# 4. Adicionar ao registry (mesmo processo)
```

## 📝 Estratégia de Tradução

**Abordagem escolhida:** Código duplicado por idioma

**Vantagens:**
✅ Máxima flexibilidade para customizações culturais
✅ Não precisa de sistema i18n complexo para HTML estático
✅ Fácil entender e manter (código isolado)
✅ Permite ajustes de layout específicos por cultura

**Trade-offs:**
⚠️ Código duplicado aumenta tamanho do repo
⚠️ Bugs podem precisar ser corrigidos em múltiplos idiomas

**Mitigação:**
- Pasta `shared/` para lógica comum (types, utils)
- Tests automatizados garantem paridade
- Apenas UI é duplicada, lógica é compartilhada

## 🔗 URLs e Rotas

### Padrão de URLs

```
/{locale}/{model-id}

Exemplos:
- /pt/health-pro
- /en/health-pro
- /pt/gardening
- /en/legal-pro
```

### Estrutura de Rotas Next.js

```
src/app/[locale]/(templates)/{model-id}/page.tsx
```

O Route Group `(templates)` **NÃO** aparece na URL final.

## 🎨 Assets

### Assets Compartilhados

Colocar em `shared/assets/`:
- Logos (sem texto)
- Ícones
- Imagens de fundo
- Fotos de produtos

### Assets Localizados

Colocar em `{locale}/assets/`:
- Banners com texto
- Imagens com legendas
- Screenshots localizados

## 📊 Checklist de Qualidade

Antes de considerar um modelo pronto:

- [ ] Funciona em ambos os idiomas (pt e en)
- [ ] config.ts está completo e correto
- [ ] Adicionado ao MODELS_REGISTRY
- [ ] Rota Next.js criada em (templates)
- [ ] Imagens adicionadas em models-data.ts
- [ ] Traduções adicionadas em messages/{pt,en}.json
- [ ] Testado em desktop e mobile
- [ ] URLs funcionam corretamente
- [ ] Assets carregam sem erros

## 🔧 Troubleshooting

### Modelo não aparece na lista

1. Verificar se está em `MODELS_REGISTRY`
2. Verificar se imagens estão em `MODEL_IMAGES`
3. Verificar traduções em `messages/{locale}.json`

### Erro 404 ao acessar modelo

1. Verificar se rota existe em `src/app/[locale]/(templates)/`
2. Verificar se arquivos existem em `src/models/{niche}/{model-id}/{locale}/`
3. Para HTML estático, verificar se arquivo está em `public/models/`

### Imagens não carregam

1. Verificar path dos assets
2. Para HTML estático, assets devem estar em `public/`
3. Verificar remote patterns em `next.config.ts`

## 📚 Referências

- [Next.js Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)
- [Next.js Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

## 🤝 Contribuindo

Ao adicionar novos modelos:

1. Seguir a estrutura de pastas estabelecida
2. Manter convenções de nomenclatura
3. Adicionar documentação quando necessário
4. Testar em ambos os idiomas
5. Criar commit descritivo (sem mencionar ferramentas de IA)

NUNCA mencione Claude Code ou Claude Pro no commit!!!!

---

# 📐 Arquitetura de Modelos

## Estrutura de Pastas

Todos os modelos estão organizados em `src/models/` por **nicho**:

```
src/models/
├── _config/           # Configurações centralizadas
├── health/            # 🏥 Nicho: Saúde
├── law/               # ⚖️ Nicho: Advocacia
├── fitness/           # 💪 Nicho: Fitness
├── beauty/            # 💄 Nicho: Beleza
├── tech/              # 💻 Nicho: Tecnologia
├── education/         # 📚 Nicho: Educação
└── services/          # 🌱 Nicho: Serviços
```

## Padrão Multi-idioma

Cada modelo tem **código duplicado** por idioma:

```
{niche}/{model-id}/
├── pt/              # Versão completa em português
├── en/              # Versão completa em inglês
├── shared/          # Apenas lógica/types (sem UI)
└── config.ts        # Configuração do modelo
```

## Tipos de Modelos

### React (type: 'react')
- Funcionalidades complexas
- Estrutura: `pt/`, `en/`, `shared/`, `config.ts`
- Entry point: `page.tsx` ou `App.tsx`

### HTML Estático (type: 'static')
- Landing pages simples
- Estrutura: `pt/index.html`, `en/index.html`, `config.ts`
- Servidos de `public/models/{niche}/{model-id}/{locale}/`

## Convenções

1. **IDs**: kebab-case (ex: `health-pro`)
2. **Nichos**: singular, lowercase (ex: `health`)
3. **UI**: Duplicar por idioma (customizações culturais)
4. **Lógica**: Compartilhar em `shared/` (types, utils)
5. **URLs**: `/{locale}/{model-id}` (ex: `/pt/health-pro`)

## Adicionar Novo Modelo

1. Criar estrutura em `src/models/{niche}/{model-id}/`
2. Criar `config.ts` com configuração
3. Adicionar ao `MODELS_REGISTRY` em `_config/models.registry.ts`
4. Criar rota em `src/app/[locale]/(templates)/{model-id}/page.tsx`
5. Adicionar imagens em `src/lib/models-data.ts`
6. Adicionar traduções em `src/messages/{pt,en}.json`

Ver `src/models/README.md` para documentação completa.
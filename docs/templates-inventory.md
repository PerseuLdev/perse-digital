# Inventário de Templates - MVP Conversão

**Data:** 2026-02-10
**Pasta fonte:** `C:\Users\Perseu\Downloads\templates-react`
**Status:** MILESTONE 1 - Setup & Organização

---

## ✅ Templates Já Convertidos e Funcionando (12)

| ID | Nome | Niche | Locales | Status | Imagem | Tradução | Preview |
|---|---|---|---|---|---|---|---|
| `health-pro` | Consultório Premium | health | pt/en | ✅ Completo | ✅ | ✅ | ✅ |
| `legal-pro` | Portfólio Advocacia | law | pt/en | ✅ Completo | ✅ | ✅ | ✅ |
| `fitness-pro` | Academia Pro | fitness | pt/en | ✅ Completo | ✅ | ✅ | ✅ |
| `beauty-glow` | Salão de Beleza | beauty | pt/en | ✅ Completo | ✅ | ✅ | ✅ |
| `tech-saas` | Tech Startup | tech | pt/en | ✅ Completo | ✅ | ✅ | ✅ |
| `education-mind` | Educação | education | pt/en | ✅ Completo | ✅ | ✅ | ✅ |
| `gardening` | Jardinagem Botânica | services | pt/en | ✅ Completo | ✅ | ✅ | ✅ |
| `personal-trainer-masc` | Personal Trainer Masc | fitness | pt/en | ✅ Completo | ✅ | ✅ | ✅ |
| `muscle-perse` | Muscle Perse | fitness | pt/en | ✅ | ✅ | ✅ | ✅ |
| `home-nursing` | Enfermagem Domiciliar | health | pt/en | ✅ Completo | ✅ | ✅ | ✅ |
| `dental-clinic` | Clínica Odontológica | health | pt/en | ✅ Completo | ✅ | ✅ | ✅ |
| `law-firm-premium` | Advocacia Premium | law | pt/en | ✅ Completo | ✅ | ✅ | ✅ |

**Total: 12 templates prontos para venda**

---

## 📦 Templates para Converter

**Pasta fonte:** `C:\Users\Perseu\Downloads\templates-react`

### ✅ Templates já convertidos (5):

| Template Fonte | Niche | Model ID | Status | Commit |
|---|---|---|---|---|
| `enfermagem-domiciliar` | health | `home-nursing` | ✅ Convertido | 7905916 |
| `odonto-perse` | health | `dental-clinic` | ✅ Convertido | 82b1828 |
| `advocacia-premium` | law | `law-firm-premium` | ✅ Convertido | HOJE |
| `health-template-pro` | health | `health-pro` | ✅ Convertido | Inicial |
| `muscle-perse---personal-trainer` | fitness | `muscle-perse` | ✅ Convertido | Inicial |

### 🔄 Templates pendentes de conversão (6):

| Template Fonte | Descrição | Niche | Model ID Sugerido | Prioridade |
|---|---|---|---|---|
| `lumina-estética` | Clínica de estética | beauty | `lumina-aesthetics` | 🔴 Alta |
| `loja-de-sapatos` | E-commerce de sapatos | fashion | `shoe-store` | 🟡 Média |
| `cao-cia-lp-main` | Banho & Tosa (pet grooming) | services | `pet-grooming` | 🟡 Média |
| `valentinas-pet-hub-main` | Pet Store completa | services | `pet-store` | 🟡 Média |
| `oficina-sevel-botucatu` | Oficina mecânica | automotive | `auto-workshop` | 🟢 Baixa |
| `trik-trik-autoeletrica-main` | Auto elétrica | automotive | `auto-electric` | 🟢 Baixa |

**Instruções para conversão:**
1. Verificar estrutura do template fonte
2. Executar comando de conversão:
   ```bash
   npm run prepare-model "C:\Users\Perseu\Downloads\templates-react\{template}" {niche} {model-id}
   ```
3. Testar localmente (`/pt/{id}` e `/en/{id}`)
4. Adicionar traduções em `pt.json` e `en.json`
5. Adicionar imagem em `models-data.ts`
6. Commit individual com mensagem descritiva

---

## 🎯 Objetivo MVP

**Meta:** 15-18 templates totais
**Disponíveis na pasta fonte:** 18 templates (12 convertidos + 6 pendentes)
**Progresso atual:** 12/18 (67%)
**Faltam:** 6 templates para conversão completa

### Prioridades de conversão:
1. **Alta** (1): ~~advocacia-premium~~, lumina-estética
2. **Média** (3): loja-de-sapatos, pet-grooming, pet-store
3. **Baixa** (2): auto-workshop, auto-electric

**Nova meta revisada:** Converter 3-4 templates prioritários (Alta + Média) = 15-16 templates totais

---

## 📋 Checklist por Template Novo

### Pré-conversão:
- [ ] Verificar estrutura do template fonte
- [ ] Identificar se tem pt/en ou apenas pt
- [ ] Definir niche correto
- [ ] Definir model-id (kebab-case)

### Conversão:
- [ ] Executar `prepare-model`
- [ ] Verificar arquivos criados
- [ ] Testar rota direta (`/pt/{id}`)
- [ ] Testar preview (`/templates/{id}/preview`)

### Configuração:
- [ ] Adicionar tradução em `pt.json`
- [ ] Adicionar tradução em `en.json`
- [ ] Adicionar imagem em `models-data.ts`
- [ ] Verificar brandkit.json criado

### QA:
- [ ] Desktop responsivo
- [ ] Tablet responsivo
- [ ] Mobile responsivo
- [ ] Animações funcionam
- [ ] Links funcionam
- [ ] Sem console errors

### Finalização:
- [ ] Commit com mensagem descritiva
- [ ] Atualizar este inventário

---

## 🚀 Próximos Passos

1. **AGORA:** Verificar pasta `C:\Users\Perseu\Downloads\templates-react`
2. **Depois:** Converter templates encontrados (batch)
3. **Por último:** QA completo + Deploy

---

**Última atualização:** 2026-02-14 às 00:30
**Responsável:** Claude Code
**Scan completo:** ✅ Todos os templates da pasta fonte mapeados

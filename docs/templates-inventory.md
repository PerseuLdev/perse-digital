# Inventário de Templates - MVP Conversão

**Data:** 2026-02-10
**Pasta fonte:** `C:\Users\Perseu\Downloads\templates-react`
**Status:** MILESTONE 1 - Setup & Organização

---

## ✅ Templates Já Convertidos e Funcionando (9)

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
| `muscle-perse` | Muscle Perse | fitness | pt/en | ✅ Completo | ✅ | ✅ | ✅ |

**Total: 9 templates prontos para venda**

---

## 📦 Templates para Converter

**Pasta fonte:** `C:\Users\Perseu\Downloads\templates-react`

### Templates encontrados na pasta fonte:

| Template Fonte | Niche | Model ID | Status | Observações |
|---|---|---|---|---|
| `enfermagem-domiciliar---profissional-autônomo` | health | `home-nursing` | 🟡 Pendente | Template React Vite |
| `odonto-perse` | health | `dental-clinic` | 🟡 Pendente | Template React Vite |
| `health-template-pro---site-profissional` | health | `health-pro` | ✅ Convertido | Já no sistema |
| `muscle-perse---personal-trainer` | fitness | `muscle-perse` | ✅ Convertido | Já no sistema |

**Instruções:**
1. Verificar conteúdo em `C:\Users\Perseu\Downloads\templates-react`
2. Para cada template encontrado, executar:
   ```bash
   npm run prepare-model "C:\Users\Perseu\Downloads\templates-react\{template}" {niche} {model-id}
   ```
3. Testar localmente
4. Adicionar traduções e imagens
5. Commit individual

---

## 🎯 Objetivo MVP

**Meta:** 12-15 templates totais
**Progresso atual:** 9/12 (75%)
**Faltam:** 3-6 novos templates

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

**Última atualização:** 2026-02-10 às 22:15
**Responsável:** Claude Code

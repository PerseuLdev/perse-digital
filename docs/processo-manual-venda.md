# Processo Manual de Venda (MVP)

**Válido até:** Automação completa estar implementada
**Canal principal:** WhatsApp (14) 99107-1072
**Site:** https://persedigital.com/templates

---

## 📱 1. Cliente Entra em Contato

### Fontes:
- WhatsApp direto
- Formulário do site
- Instagram/Facebook DM
- Email

### Template de Resposta Inicial:
```
Olá! Seja bem-vindo(a)! 🎉

Vi que você se interessou pelo template [NOME DO TEMPLATE].

📱 Vamos conversar pelo WhatsApp para eu entender melhor suas necessidades?
Link: https://wa.me/5514991071072

Ou se preferir, pode me passar aqui mesmo:
1. Nome da empresa/profissional
2. Tipo de negócio
3. O que você busca no site?
```

---

## 💬 2. Descoberta e Escolha do Template

### Perguntas-chave:
```
Para eu te ajudar melhor, me conta:

1️⃣ Qual seu negócio/profissão?
   (ex: academia, consultório, salão...)

2️⃣ Qual o principal objetivo do site?
   [ ] Captar leads (formulário de contato)
   [ ] Agendar consultas/horários
   [ ] Mostrar portfólio/trabalhos
   [ ] Vender produtos/serviços

3️⃣ Tem algum modelo que mais gostou?
   👉 Veja todos: https://persedigital.com/templates
```

### Sugestão de template baseado no nicho:
- **Saúde:** `health-pro`
- **Advocacia:** `legal-pro`
- **Academia/Fitness:** `fitness-pro`, `personal-trainer-masc`, `muscle-perse`
- **Beleza:** `beauty-glow`
- **Tech/Startups:** `tech-saas`
- **Educação:** `education-mind`
- **Jardinagem/Serviços:** `gardening`

---

## 💰 3. Apresentação de Preço

### Template de Proposta:
```
Perfeito! Para o seu caso, recomendo o template [NOME] 🎯

✅ O que está incluso:
- Site completo e responsivo (mobile + desktop)
- Cores e identidade visual da sua marca
- Formulário de contato integrado
- Otimização para Google (SEO básico)
- Deploy em servidor rápido e seguro
- SSL (cadeado verde) incluso
- Suporte de 30 dias

💰 Investimento: R$ [PREÇO]

📦 EXTRAS (opcional):
- Criação de logo: +R$ 50
- Domínio próprio (.com.br): +R$ 40/ano
- Integração com WhatsApp Business: Incluso
- Google Analytics: Incluso

🚀 Entrego em 24-48h após confirmação de pagamento!

Quer fechar? 😊
```

### Tabela de Preços Sugeridos (MVP):
| Categoria | Preço Base | Com Logo | Com Domínio |
|---|---|---|---|
| Básico | R$ 297 | R$ 347 | R$ 387 |
| Premium | R$ 497 | R$ 547 | R$ 587 |
| Completo | R$ 797 | R$ 847 | R$ 887 |

---

## 📋 4. Coleta de Dados do Cliente

### Após confirmação de interesse:
```
Ótimo! Para personalizar seu site, preciso dos seguintes dados:

📌 INFORMAÇÕES BÁSICAS:
1. Nome da empresa/profissional
2. Slogan ou frase de efeito (se tiver)
3. Breve descrição do negócio (2-3 linhas)

🎨 IDENTIDADE VISUAL:
4. Cores da marca (pode ser nome ou código hex)
   Ex: "azul marinho e dourado" ou "#1E3A8A, #F59E0B"
5. Logo (enviar imagem em alta qualidade)
   - Se não tiver: posso criar por +R$ 50

📞 CONTATOS:
6. Telefone principal
7. WhatsApp (se diferente do telefone)
8. Email profissional
9. Endereço completo (se aplicável)

🌐 REDES SOCIAIS (se tiver):
10. Instagram: @
11. Facebook:
12. LinkedIn:
13. YouTube:

📝 CONTEÚDO:
14. Serviços oferecidos (listar 3-5 principais)
15. Diferenciais do seu negócio (o que te torna único?)
16. Fotos do trabalho/equipe (3-5 imagens de qualidade)

💳 PAGAMENTO:
Pode ser via PIX, cartão ou transferência.
Te envio os dados após você me passar essas informações! 😊
```

### Salvar dados em:
```
docs/clientes/{nome-cliente}-dados.md
```

---

## 💳 5. Pagamento

### Opções:
1. **PIX:** Chave [SUA_CHAVE_PIX]
2. **Cartão:** Link do Mercado Pago / PagSeguro
3. **Transferência:** Dados bancários

### Template após pagamento:
```
✅ Pagamento confirmado!

Seu site já está em produção! 🚀

Prazo de entrega: 24-48h
Vou te manter atualizado sobre o progresso.

Qualquer dúvida, é só chamar! 😊
```

---

## 🛠️ 6. Execução Técnica

### 6.1. Criar arquivo de dados:
```bash
cd C:\vs_code\perse-digital-claude
mkdir -p docs/clientes
nano docs/clientes/{nome-cliente}-brandkit.json
```

### Estrutura do brandkit:
```json
{
  "companyName": "Nome da Empresa",
  "slogan": "Slogan aqui",
  "description": "Descrição do negócio",
  "colors": {
    "primary": "#1E3A8A",
    "secondary": "#F59E0B",
    "accent": "#10B981"
  },
  "contact": {
    "phone": "(14) 99107-1072",
    "whatsapp": "(14) 99107-1072",
    "email": "contato@empresa.com",
    "address": "Rua Exemplo, 123"
  },
  "social": {
    "instagram": "@empresa",
    "facebook": "empresa",
    "linkedin": "empresa"
  },
  "logo": {
    "url": "/path/to/logo.png",
    "alt": "Logo Empresa"
  }
}
```

### 6.2. Copiar template para projeto do cliente:
```bash
# Criar pasta do projeto
mkdir -p ../clientes/{nome-cliente}

# Copiar template escolhido
cp -r src/models/{niche}/{template-id}/* ../clientes/{nome-cliente}/

# Copiar brandkit
cp docs/clientes/{nome-cliente}-brandkit.json ../clientes/{nome-cliente}/brandkit.json

cd ../clientes/{nome-cliente}
```

### 6.3. Aplicar brandkit:
```bash
# Voltar ao perse-digital-claude
cd C:\vs_code\perse-digital-claude

# Aplicar brandkit (assumindo que o script aceita caminho externo)
npm run apply-brandkit {niche} {template-id} -- --client-path="../clientes/{nome-cliente}"
```

**OU manualmente:**
- Editar arquivos em `../clientes/{nome-cliente}/pt/` e `../clientes/{nome-cliente}/en/`
- Substituir placeholders por dados do brandkit
- Testar localmente

### 6.4. Configurar projeto Next.js do cliente:
```bash
cd ../clientes/{nome-cliente}

# Inicializar git
git init
git add .
git commit -m "Initial commit - {nome-cliente}"

# Configurar Next.js (se necessário copiar configs)
cp -r C:\vs_code\perse-digital-claude/next.config.ts .
cp -r C:\vs_code\perse-digital-claude/tsconfig.json .
cp -r C:\vs_code\perse-digital-claude/package.json .

# Instalar dependências
npm install

# Testar localmente
npm run dev
```

### 6.5. Deploy:

#### Opção A - Vercel:
```bash
# Instalar Vercel CLI (se ainda não tiver)
npm i -g vercel

# Deploy
vercel --prod

# Se cliente tem domínio próprio
vercel domains add {dominio-cliente.com}
```

#### Opção B - Netlify:
```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod

# Configurar domínio
netlify domains:add {dominio-cliente.com}
```

#### Opção C - Seu próprio servidor:
```bash
# Build de produção
npm run build

# Upload para servidor via FTP/SSH
scp -r .next/ user@servidor:/var/www/{nome-cliente}/
```

---

## 📤 7. Entrega ao Cliente

### Template de entrega:
```
🎉 Pronto! Seu site está no ar!

🌐 Acesse aqui: https://{dominio-cliente}

✅ O que foi entregue:
- Site completo e responsivo
- Todas as suas informações personalizadas
- Formulário de contato funcionando
- Otimização para Google
- SSL (cadeado verde) ativo

📱 Teste em diferentes dispositivos:
- Celular
- Tablet
- Computador

🔧 SUPORTE DE 30 DIAS INCLUSO:
Se precisar de qualquer ajuste, é só me avisar! 😊

📊 Próximos passos (opcional):
- Configurar Google Analytics
- Anunciar no Google Ads / Facebook
- Criar conteúdo para redes sociais

Gostou? Me manda um print! 📸
```

---

## 🤝 8. Pós-venda

### Checklist:
- [ ] Cliente confirmou recebimento
- [ ] Cliente testou em diferentes dispositivos
- [ ] Solicitou algum ajuste?
- [ ] Pediu suporte adicional?

### Follow-up (7 dias depois):
```
Oi [NOME]! Tudo bem?

Como está sendo a experiência com o novo site? 🌐

Se precisar de algum ajuste ou tiver dúvidas, estou à disposição!

💡 Dica: Já pensou em criar conteúdo para o blog?
Posso te ajudar com isso também! 😊
```

### Pedir depoimento:
```
Adorei trabalhar no seu projeto! ❤️

Se puder, deixa um depoimento sobre sua experiência:
- O que mais gostou?
- Como foi o processo?
- Recomendaria para outros?

Vou usar para mostrar para futuros clientes! 🙏
Pode ser texto, áudio ou vídeo.
```

---

## 📊 9. Controle de Vendas

### Planilha de controle (criar Google Sheets):
| Data | Cliente | Template | Valor | Status | Prazo | Entregue | Obs |
|---|---|---|---|---|---|---|---|
| 2026-02-10 | João Silva | fitness-pro | R$ 497 | Pago | 48h | ❌ | Com logo |

### Status possíveis:
- 🟡 Orçamento enviado
- 🟢 Pago / Em produção
- ✅ Entregue
- ⚠️ Ajustes pendentes
- ❌ Cancelado

---

## 🚀 Automação Futura

**Quando tiver tempo, automatizar:**
- [ ] Formulário de coleta de dados no site
- [ ] Geração automática de brandkit
- [ ] Pipeline de deploy automático
- [ ] Sistema de pagamento integrado
- [ ] Email marketing pós-venda

**Por enquanto, processo manual funciona perfeitamente para MVP!**

---

**Última atualização:** 2026-02-10
**Autor:** Claude Code
**Revisão:** Pendente

# Workflow Completo de Modelos

## Visao Geral

```
Modelo React  -->  prepare-model  -->  Editar brandkit.json  -->  validate-brandkit  -->  apply-brandkit
```

---

## Passo a Passo

### 1. Preparar Modelo React

```bash
npm run prepare-model <pasta-fonte> <niche> <model-id>
```

Exemplo:
```bash
npm run prepare-model ../modelos-react/gym-pro fitness gym-pro
```

O script:
- Copia arquivos do modelo (filtra artefatos standalone como index.html, vite.config)
- Adiciona `'use client'` onde necessario (hooks, Framer Motion, Three.js)
- Detecta e cria estrutura pt/en
- Faz scan de cores, telefones, emails e URLs sociais
- Cria `config.ts`, route `page.tsx`, registro no `models.registry.ts`
- Gera `brandkit.json` template com `_originals` (valores detectados no codigo)

### 2. Editar brandkit.json

Localizacao: `src/models/{niche}/{model-id}/brandkit.json`

Substitua os valores placeholder pelos dados reais do cliente:

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

**Regras:**
- NAO edite `_originals` - sao os valores atuais no codigo-fonte, usados para saber o que substituir
- Edite `contact`, `social`, `branding`, `seo` e `colors` com os dados do cliente
- Use formato HEX para cores (#RRGGBB)
- Telefones com codigo do pais (55) + DDD + numero = 12-13 digitos
- URLs sociais completas ou `null` se nao tiver

### 3. Validar (opcional)

```bash
npm run validate-brandkit fitness gym-pro
```

Verifica formato de cores, telefones, email, campos obrigatorios.

### 4. Aplicar Brandkit

```bash
npm run apply-brandkit fitness gym-pro
```

O script:
- Compara `_originals` com valores novos e substitui nos arquivos do modelo
- Adiciona cores como variaveis CSS no `globals.css`
- Atualiza traducoes em `pt.json` e `en.json`
- Atualiza metadata SEO no `page.tsx`
- Atualiza `_originals` para re-execucoes futuras

### 5. Testar

```bash
npm run dev
```

- `http://localhost:3000/pt/{model-id}`
- `http://localhost:3000/en/{model-id}`

---

## Como Funciona o `_originals`

O mecanismo de substituicao funciona assim:

1. `prepare-model` escaneia o codigo-fonte e detecta valores como telefones, emails, URLs
2. Esses valores sao salvos em `_originals` no brandkit.json
3. O usuario edita `contact`, `social`, etc. com os dados do cliente
4. `apply-brandkit` compara cada `_originals.X` com o novo `brandkit.X`:
   - Se sao diferentes, substitui todas as ocorrencias no codigo
   - Se sao iguais, nao faz nada
5. Apos aplicar, `_originals` e atualizado com os novos valores
6. Numa proxima execucao, o ciclo funciona novamente

Exemplo:
```
_originals.phone = "5514991071072"  (valor atual no codigo)
contact.phone    = "5511999887766"  (novo valor do cliente)

-> Substitui "5514991071072" por "5511999887766" em todos os arquivos
-> _originals.phone passa a ser "5511999887766"
```

---

## Exemplo Real

### Cliente: "Yoga Studio Harmonia"

```bash
# 1. Preparar modelo
npm run prepare-model ../modelos-react/yoga-harmony wellness yoga-harmony

# 2. Editar brandkit.json
#    Mudar phone, email, instagram, businessName, cores, etc.

# 3. Validar
npm run validate-brandkit wellness yoga-harmony

# 4. Aplicar
npm run apply-brandkit wellness yoga-harmony

# 5. Testar
npm run dev
# http://localhost:3000/pt/yoga-harmony
```

---

## Checklist

- [ ] Receber modelo React do cliente/designer
- [ ] Colocar na pasta de modelos-react
- [ ] Executar `npm run prepare-model`
- [ ] Verificar se o modelo carrega em localhost
- [ ] Receber dados do cliente (cores, contatos, redes sociais)
- [ ] Editar `brandkit.json` (NAO editar `_originals`)
- [ ] Executar `npm run validate-brandkit`
- [ ] Executar `npm run apply-brandkit`
- [ ] Testar pt e en em localhost
- [ ] Revisar traducoes manualmente se necessario
- [ ] Deploy

---

## Dicas

**Cores**
- Sempre formato HEX (#FF0000)
- Minimo: primary e secondary
- Opcional: accent

**Contatos**
- WhatsApp com codigo do pais (55)
- URLs sociais completas ou null

**Traducoes**
- Se o modelo fonte so tem um idioma, e duplicado automaticamente
- Traduza o segundo idioma manualmente depois

**Modelos com Three.js / Framer Motion**
- `'use client'` e adicionado automaticamente
- As dependencias devem estar no package.json do projeto

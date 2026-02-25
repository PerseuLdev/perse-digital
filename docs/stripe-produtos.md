# Stripe — Produtos e Preços

## Como criar no Dashboard

Dashboard → **Products** → **Add product**

Para cada produto: nome, descrição opcional, depois **Add price** para cada preço.
Todos os preços são **One time** (não recorrente).

---

## Produto 1 — Essential

**Nome:** Essential
**Descrição:** Site profissional entregue em até 7 dias úteis

| Preço | Valor | Moeda | Método | Env var |
|---|---|---|---|---|
| PIX à vista | R$ 699,00 | BRL | One-time | `STRIPE_PRICE_ESSENTIAL_PIX_BRL` |
| Cartão 12x | R$ 718,80 | BRL | One-time | `STRIPE_PRICE_ESSENTIAL_CARD_BRL` |
| Internacional | $497.00 | USD | One-time | `STRIPE_PRICE_ESSENTIAL_USD` |

> Cartão BRL: o parcelamento em até 12x (R$ 59,90/mês) é exibido automaticamente pelo Stripe Checkout via `installments.enabled`.

---

## Produto 2 — Professional

**Nome:** Professional
**Descrição:** Site completo com funcionalidades avançadas e SEO

| Preço | Valor | Moeda | Método | Env var |
|---|---|---|---|---|
| PIX à vista | R$ 1.799,00 | BRL | One-time | `STRIPE_PRICE_PROFESSIONAL_PIX_BRL` |
| Cartão 12x | R$ 2.158,80 | BRL | One-time | `STRIPE_PRICE_PROFESSIONAL_CARD_BRL` |
| Internacional | $997.00 | USD | One-time | `STRIPE_PRICE_PROFESSIONAL_USD` |

> Cartão BRL: parcelamento em até 12x (R$ 179,90/mês).

---

## Configuração do Webhook

Dashboard → **Developers** → **Webhooks** → **Add endpoint**

- **URL:** `https://seudominio.com/api/webhooks/stripe`
- **Eventos:**
  - `checkout.session.completed`
  - `checkout.session.async_payment_succeeded`
  - `checkout.session.async_payment_failed`

Copiar o **Signing secret** (`whsec_...`) para `STRIPE_WEBHOOK_SECRET`.

---

## Cartões de Teste

Use apenas em modo **Test** (`sk_test_...`). Qualquer data futura de validade e qualquer CVC de 3 dígitos.

### Aprovação

| Número | Cenário |
|---|---|
| `4242 4242 4242 4242` | Pagamento aprovado |
| `4000 0035 6008 0010` | Aprovado + parcelamento BRL (12x) |
| `4000 0000 0000 3220` | Aprovado + autenticação 3D Secure |

### Recusa

| Número | Motivo |
|---|---|
| `4000 0000 0000 0002` | Cartão recusado (genérico) |
| `4000 0000 0000 9995` | Saldo insuficiente |
| `4000 0000 0000 0069` | Cartão expirado |
| `4000 0000 0000 0127` | CVC incorreto |

### PIX (sandbox)

No Stripe Checkout em modo Test, selecionar PIX exibe um QR Code simulado — confirmar o pagamento manualmente no Dashboard em **Payments** → selecionar o payment intent → **Confirm payment**.

---

## Checklist go-live

- [ ] Criar os 2 produtos com 3 preços cada no modo **Live** (não Test)
- [ ] Preencher todos os `price_...` IDs no `.env.local` de produção
- [ ] Trocar `sk_test_` → `sk_live_` e `pk_test_` → `pk_live_`
- [ ] Criar webhook endpoint no modo Live e atualizar `STRIPE_WEBHOOK_SECRET`
- [ ] Habilitar PIX no Dashboard: **Settings** → **Payment methods** → PIX
- [ ] Testar um pagamento real antes de divulgar

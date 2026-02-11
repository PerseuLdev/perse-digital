#!/usr/bin/env node

/**
 * Script para validar brandkit.json antes de aplicar
 *
 * Uso: node scripts/validate-brandkit.js <niche> <model-id>
 * Exemplo: node scripts/validate-brandkit.js fitness gym-pro
 */

const fs = require('fs');
const path = require('path');

const [,, niche, modelId] = process.argv;

if (!niche || !modelId) {
  console.error('❌ Erro: Forneça o nicho e o ID do modelo');
  console.log('Uso: node scripts/validate-brandkit.js <niche> <model-id>');
  process.exit(1);
}

const projectRoot = path.resolve(__dirname, '..');
const brandkitPath = path.join(projectRoot, 'src', 'models', niche, modelId, 'brandkit.json');

console.log(`\n🔍 Validando brandkit: ${niche}/${modelId}\n`);

if (!fs.existsSync(brandkitPath)) {
  console.error(`❌ Erro: brandkit.json não encontrado`);
  process.exit(1);
}

const brandkit = JSON.parse(fs.readFileSync(brandkitPath, 'utf-8'));

let errors = 0;
let warnings = 0;

// Validações
const validate = (condition, message, isError = true) => {
  if (!condition) {
    if (isError) {
      console.log(`❌ ERRO: ${message}`);
      errors++;
    } else {
      console.log(`⚠️  AVISO: ${message}`);
      warnings++;
    }
  }
};

// Cores
console.log('🎨 Validando cores...');
validate(brandkit.colors?.primary, 'Cor primária não definida');
validate(brandkit.colors?.secondary, 'Cor secundária não definida');
validate(/^#[0-9A-Fa-f]{6}$/.test(brandkit.colors?.primary || ''), 'Cor primária inválida (use #RRGGBB)');
validate(/^#[0-9A-Fa-f]{6}$/.test(brandkit.colors?.secondary || ''), 'Cor secundária inválida (use #RRGGBB)');

// Contato
console.log('\n📞 Validando contatos...');
validate(brandkit.contact?.phone, 'Telefone não definido');
validate(brandkit.contact?.email, 'Email não definido', false);
validate(/^\d{12,13}$/.test(brandkit.contact?.phone || ''), 'Telefone deve ter 12-13 dígitos (com código do país)', false);
if (brandkit.contact?.email) {
  validate(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(brandkit.contact.email), 'Formato de email inválido', false);
}
if (brandkit.contact?.whatsapp) {
  validate(/^\d{12,13}$/.test(brandkit.contact.whatsapp), 'WhatsApp deve ter 12-13 dígitos (com código do país)', false);
}

// Social
console.log('\n📱 Validando redes sociais...');
validate(brandkit.social?.instagram, 'Instagram não definido', false);
if (brandkit.social?.instagram) {
  validate(brandkit.social.instagram.includes('instagram.com'), 'Instagram deve ser URL completa', false);
}

// Branding
console.log('\n🏢 Validando branding...');
validate(brandkit.branding?.businessName, 'Nome do negócio não definido');
validate(brandkit.branding?.businessName?.length > 2, 'Nome do negócio muito curto');

// SEO
console.log('\n🔍 Validando SEO...');
validate(brandkit.seo?.title, 'Título SEO não definido', false);
validate(brandkit.seo?.description, 'Descrição SEO não definida', false);

// _originals (necessário para apply-brandkit)
console.log('\n🔧 Validando _originals...');
validate(brandkit._originals, '_originals não encontrado (execute prepare-model primeiro)', false);
if (brandkit._originals) {
  validate(brandkit._originals.phone, '_originals.phone não definido', false);
}

// Resultado
console.log('\n' + '='.repeat(50));
if (errors === 0 && warnings === 0) {
  console.log('✅ Brandkit válido! Pronto para aplicar.');
  console.log(`\nExecute: npm run apply-brandkit ${niche} ${modelId}`);
} else {
  console.log(`\n📊 Resumo:`);
  console.log(`  ❌ Erros: ${errors}`);
  console.log(`  ⚠️  Avisos: ${warnings}`);

  if (errors > 0) {
    console.log('\n❌ Corrija os erros antes de aplicar o brandkit.');
    process.exit(1);
  } else {
    console.log('\n⚠️  Há avisos, mas você pode prosseguir.');
    console.log(`Execute: npm run apply-brandkit ${niche} ${modelId}`);
  }
}
console.log('');

#!/usr/bin/env node

/**
 * Script para aplicar brandkit do cliente ao modelo
 *
 * Uso: node scripts/apply-brandkit.js <niche> <model-id>
 * Exemplo: node scripts/apply-brandkit.js fitness gym-pro
 *
 * O brandkit.json deve conter a secao _originals (gerada pelo prepare-model)
 * com os valores originais detectados no codigo-fonte. O script substitui
 * cada original pelo novo valor do brandkit.
 */

const fs = require('fs');
const path = require('path');

// Argumentos
const [,, niche, modelId] = process.argv;

if (!niche || !modelId) {
  console.error('Erro: Forneca o nicho e o ID do modelo');
  console.log('Uso: node scripts/apply-brandkit.js <niche> <model-id>');
  console.log('Exemplo: node scripts/apply-brandkit.js fitness gym-pro');
  process.exit(1);
}

const projectRoot = path.resolve(__dirname, '..');
const modelPath = path.join(projectRoot, 'src', 'models', niche, modelId);
const brandkitPath = path.join(modelPath, 'brandkit.json');

console.log(`\nAplicando brandkit ao modelo: ${niche}/${modelId}\n`);

// Verificar se brandkit.json existe
if (!fs.existsSync(brandkitPath)) {
  console.error(`Erro: brandkit.json nao encontrado em: ${brandkitPath}`);
  console.log('Execute primeiro: npm run prepare-model');
  process.exit(1);
}

// ========================================
// 1. Ler brandkit
// ========================================
console.log('Lendo brandkit.json...');
const brandkit = JSON.parse(fs.readFileSync(brandkitPath, 'utf-8'));
console.log(`  Brandkit carregado para: ${brandkit.branding.businessName}`);

const originals = brandkit._originals || {};

// ========================================
// 2. Construir mapa de substituicoes a partir dos _originals
// ========================================
console.log('\nConstruindo mapa de substituicoes...');

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const replacements = [];

// Telefone: substituir o original pelo novo
if (originals.phone && brandkit.contact.phone && originals.phone !== brandkit.contact.phone) {
  replacements.push({
    pattern: new RegExp(escapeRegex(originals.phone), 'g'),
    replacement: brandkit.contact.phone,
    label: `Telefone: ${originals.phone} -> ${brandkit.contact.phone}`,
  });
}

// WhatsApp (se diferente do telefone)
if (originals.phone && brandkit.contact.whatsapp && brandkit.contact.whatsapp !== brandkit.contact.phone) {
  // Se o original do telefone aparece em links wa.me, trocar pelo whatsapp
  // Ja coberto pela substituicao de phone acima se forem iguais
}

// Email
if (originals.email && brandkit.contact.email && originals.email !== brandkit.contact.email) {
  replacements.push({
    pattern: new RegExp(escapeRegex(originals.email), 'g'),
    replacement: brandkit.contact.email,
    label: `Email: ${originals.email} -> ${brandkit.contact.email}`,
  });
}

// Instagram URL (substituir URL completa por URL completa)
if (originals.instagram && brandkit.social.instagram && originals.instagram !== brandkit.social.instagram) {
  replacements.push({
    pattern: new RegExp(escapeRegex(originals.instagram), 'g'),
    replacement: brandkit.social.instagram,
    label: `Instagram: ${originals.instagram} -> ${brandkit.social.instagram}`,
  });
}

// Facebook URL
if (originals.facebook && brandkit.social.facebook && originals.facebook !== brandkit.social.facebook) {
  replacements.push({
    pattern: new RegExp(escapeRegex(originals.facebook), 'g'),
    replacement: brandkit.social.facebook,
    label: `Facebook: ${originals.facebook} -> ${brandkit.social.facebook}`,
  });
}

// LinkedIn URL
if (originals.linkedin && brandkit.social.linkedin && originals.linkedin !== brandkit.social.linkedin) {
  replacements.push({
    pattern: new RegExp(escapeRegex(originals.linkedin), 'g'),
    replacement: brandkit.social.linkedin,
    label: `LinkedIn: ${originals.linkedin} -> ${brandkit.social.linkedin}`,
  });
}

replacements.forEach(r => console.log(`  ${r.label}`));

if (replacements.length === 0) {
  console.log('  Nenhuma substituicao necessaria (valores iguais ou _originals vazio).');
  console.log('  Dica: Verifique se o brandkit.json foi editado com os novos valores do cliente.');
}

// ========================================
// 3. Aplicar substituicoes nos arquivos do modelo
// ========================================
console.log('\nAplicando substituicoes nos arquivos...');

let filesModified = 0;

const replaceInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  replacements.forEach(({ pattern, replacement }) => {
    if (pattern.test(content)) {
      // Reset lastIndex (regex com flag 'g' mantem estado)
      pattern.lastIndex = 0;
      content = content.replace(pattern, replacement);
      modified = true;
    }
    pattern.lastIndex = 0;
  });

  if (modified) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  return false;
};

const processDirectory = (dir) => {
  if (!fs.existsSync(dir)) return;
  const items = fs.readdirSync(dir);

  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (
      item.endsWith('.tsx') || item.endsWith('.jsx') ||
      item.endsWith('.ts') || item.endsWith('.js') ||
      item.endsWith('.css') || item.endsWith('.html')
    ) {
      if (item === 'brandkit.json' || item.startsWith('brandkit-applied')) return;
      if (replaceInFile(fullPath)) {
        filesModified++;
        console.log(`  [mod] ${fullPath.replace(projectRoot, '.')}`);
      }
    }
  });
};

processDirectory(modelPath);
console.log(`\n  Total de arquivos modificados: ${filesModified}`);

// ========================================
// 4. Atualizar cores no globals.css
// ========================================
console.log('\nAtualizando cores no globals.css...');
const globalsPath = path.join(projectRoot, 'src', 'app', 'globals.css');

if (brandkit.colors && fs.existsSync(globalsPath)) {
  let globalsContent = fs.readFileSync(globalsPath, 'utf-8');
  const colorTag = `/* ${modelId} Model Colors */`;

  if (!globalsContent.includes(colorTag)) {
    // Inserir variaveis de cor na secao @theme inline (antes de /* Typography */)
    const themeInsertPoint = globalsContent.indexOf('  /* Typography */');
    if (themeInsertPoint !== -1) {
      const themeVars = `
  ${colorTag}
  --color-${modelId}-primary: var(--${modelId}-primary);
  --color-${modelId}-secondary: var(--${modelId}-secondary);
  --color-${modelId}-accent: var(--${modelId}-accent);

`;
      globalsContent = globalsContent.slice(0, themeInsertPoint) + themeVars + globalsContent.slice(themeInsertPoint);
    }

    // Inserir valores na secao :root (antes de /* Light Theme */)
    const rootInsertPoint = globalsContent.indexOf('  /* Light Theme */');
    if (rootInsertPoint !== -1) {
      const rootVars = `
  ${colorTag}
  --${modelId}-primary: ${brandkit.colors.primary};
  --${modelId}-secondary: ${brandkit.colors.secondary};
  --${modelId}-accent: ${brandkit.colors.accent || brandkit.colors.primary};

`;
      globalsContent = globalsContent.slice(0, rootInsertPoint) + rootVars + globalsContent.slice(rootInsertPoint);
    }

    fs.writeFileSync(globalsPath, globalsContent);
    console.log(`  Cores adicionadas: ${brandkit.colors.primary}, ${brandkit.colors.secondary}`);
  } else {
    console.log('  Cores ja existem no globals.css');
  }
}

// ========================================
// 5. Atualizar traducoes
// ========================================
console.log('\nAtualizando traducoes...');

const updateTranslations = (locale) => {
  const translationPath = path.join(projectRoot, 'src', 'messages', `${locale}.json`);
  if (!fs.existsSync(translationPath)) return;

  const translations = JSON.parse(fs.readFileSync(translationPath, 'utf-8'));

  if (translations.models?.items?.[modelId]) {
    translations.models.items[modelId].title = brandkit.branding.businessName;
    if (brandkit.seo.description) {
      translations.models.items[modelId].description = brandkit.seo.description;
    }
    fs.writeFileSync(translationPath, JSON.stringify(translations, null, 2));
    console.log(`  ${locale}.json atualizado`);
  } else {
    console.log(`  ${locale}.json: entrada "${modelId}" nao encontrada, pulando`);
  }
};

updateTranslations('pt');
updateTranslations('en');

// ========================================
// 6. Atualizar metadata do page.tsx
// ========================================
console.log('\nAtualizando metadata da pagina...');
const routePath = path.join(projectRoot, 'src', 'app', '[locale]', '(templates)', modelId, 'page.tsx');

if (fs.existsSync(routePath) && brandkit.seo) {
  let pageContent = fs.readFileSync(routePath, 'utf-8');
  let pageModified = false;

  if (brandkit.seo.title) {
    const newPage = pageContent.replace(/title: '.*?'/, `title: '${brandkit.seo.title}'`);
    if (newPage !== pageContent) { pageContent = newPage; pageModified = true; }
  }
  if (brandkit.seo.description) {
    const newPage = pageContent.replace(/description: '.*?'/, `description: '${brandkit.seo.description}'`);
    if (newPage !== pageContent) { pageContent = newPage; pageModified = true; }
  }

  if (pageModified) {
    fs.writeFileSync(routePath, pageContent);
    console.log('  Metadata atualizado');
  }
}

// ========================================
// 7. Atualizar _originals no brandkit com os novos valores
// ========================================
// Depois de aplicar, os "originais" no codigo agora sao os novos valores.
// Atualizar para que re-execucoes futuras funcionem corretamente.
brandkit._originals = {
  phone: brandkit.contact.phone,
  email: brandkit.contact.email,
  instagram: brandkit.social.instagram || '',
  facebook: brandkit.social.facebook || '',
  linkedin: brandkit.social.linkedin || '',
};

fs.writeFileSync(brandkitPath, JSON.stringify(brandkit, null, 2));
console.log('\n_originals atualizado no brandkit.json para futuras re-execucoes.');

// ========================================
// Resumo Final
// ========================================
console.log('\n=== Brandkit aplicado com sucesso! ===\n');
console.log('Resumo:');
console.log(`  Telefone: ${brandkit.contact.phone}`);
console.log(`  Email: ${brandkit.contact.email}`);
console.log(`  Nome: ${brandkit.branding.businessName}`);
console.log(`  Cores: ${brandkit.colors.primary}, ${brandkit.colors.secondary}`);
console.log(`  Instagram: ${brandkit.social.instagram || 'nao definido'}`);
console.log(`  Arquivos modificados: ${filesModified}`);

console.log('\nTeste o modelo:');
console.log(`  http://localhost:3000/pt/${modelId}`);
console.log(`  http://localhost:3000/en/${modelId}`);
console.log(`  http://localhost:3000/pt/templates/${modelId}/preview`);
console.log('');

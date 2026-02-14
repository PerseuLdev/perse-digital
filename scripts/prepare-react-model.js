#!/usr/bin/env node

/**
 * Script para preparar um modelo React existente para Next.js
 *
 * Uso: node scripts/prepare-react-model.js <source-folder> <niche> <model-id>
 * Exemplo: node scripts/prepare-react-model.js ../modelos-react/gym-pro fitness gym-pro
 */

const fs = require('fs');
const path = require('path');

// Argumentos
const [,, sourceFolder, niche, modelId] = process.argv;

if (!sourceFolder || !niche || !modelId) {
  console.error('Erro: Forneca a pasta fonte, nicho e ID do modelo');
  console.log('Uso: node scripts/prepare-react-model.js <source-folder> <niche> <model-id>');
  console.log('Exemplo: node scripts/prepare-react-model.js ../modelos-react/gym-pro fitness gym-pro');
  process.exit(1);
}

const projectRoot = path.resolve(__dirname, '..');
const sourcePath = path.resolve(sourceFolder);
const modelPath = path.join(projectRoot, 'src', 'models', niche, modelId);

console.log(`\nPreparando modelo React: ${sourceFolder} -> ${niche}/${modelId}\n`);

// Verificar se a pasta fonte existe
if (!fs.existsSync(sourcePath)) {
  console.error(`Erro: Pasta fonte nao encontrada: ${sourcePath}`);
  process.exit(1);
}

// Verificar se o destino ja existe
if (fs.existsSync(modelPath)) {
  console.warn(`Aviso: Pasta destino ja existe: ${modelPath}`);
  console.warn('  Os arquivos existentes serao sobrescritos.\n');
}

// ========================================
// 1. Detectar estrutura do modelo fonte
// ========================================
console.log('Analisando estrutura do modelo fonte...');

const detectLocales = (source) => {
  const hasPt = fs.existsSync(path.join(source, 'pt'));
  const hasEn = fs.existsSync(path.join(source, 'en'));
  if (hasPt && hasEn) return ['pt', 'en'];
  if (hasPt) return ['pt'];
  if (hasEn) return ['en'];
  return [];
};

const locales = detectLocales(sourcePath);
const hasLocales = locales.length > 0;
console.log(`  Locales detectados: ${hasLocales ? locales.join(', ') : 'nenhum (modelo unico, sera duplicado para pt/en)'}`);

// Arquivos que devem ser ignorados na copia (artifacts de standalone React)
const SKIP_FILES = new Set([
  'index.html',
  'index.tsx',
  'index.jsx',
  'index.js',
  'vite.config.ts',
  'vite.config.js',
  'package.json',
  'package-lock.json',
  'tsconfig.json',
  '.gitignore',
]);

const SKIP_DIRS = new Set([
  'node_modules',
  '.git',
  '.next',
  'dist',
  'build',
  '.vite',
]);

// ========================================
// 2. Copiar arquivos e adaptar para Next.js
// ========================================
console.log('\nCopiando e preparando arquivos...');

const needsUseClient = (content) => {
  return (
    content.includes('useState') ||
    content.includes('useEffect') ||
    content.includes('useRef') ||
    content.includes('useContext') ||
    content.includes('useCallback') ||
    content.includes('useMemo') ||
    content.includes('useReducer') ||
    content.includes("from 'framer-motion'") ||
    content.includes('from "framer-motion"') ||
    content.includes("from '@react-three/fiber'") ||
    content.includes('from "@react-three/fiber"') ||
    content.includes("from '@react-three/drei'") ||
    content.includes('from "@react-three/drei"')
  );
};

const addUseClient = (content) => {
  if (content.trimStart().startsWith("'use client'") || content.trimStart().startsWith('"use client"')) {
    return content;
  }
  return "'use client';\n\n" + content;
};

const processFile = (srcFile, destFile) => {
  let content = fs.readFileSync(srcFile, 'utf-8');

  // Adicionar 'use client' se necessario
  if ((srcFile.endsWith('.tsx') || srcFile.endsWith('.jsx')) && needsUseClient(content)) {
    content = addUseClient(content);
    console.log(`    + 'use client' adicionado: ${path.basename(srcFile)}`);
  }

  fs.writeFileSync(destFile, content);
};

const copyDirectory = (source, dest) => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const items = fs.readdirSync(source);

  items.forEach(item => {
    const srcItem = path.join(source, item);
    const destItem = path.join(dest, item);
    const stat = fs.statSync(srcItem);

    if (SKIP_DIRS.has(item)) return;
    if (stat.isFile() && SKIP_FILES.has(item)) {
      console.log(`    [skip] ${item} (artifact standalone)`);
      return;
    }

    if (stat.isDirectory()) {
      copyDirectory(srcItem, destItem);
    } else if (stat.isFile()) {
      if (item.endsWith('.tsx') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.js')) {
        processFile(srcItem, destItem);
      } else {
        fs.copyFileSync(srcItem, destItem);
      }
      console.log(`  ${destItem.replace(projectRoot, '.')}`);
    }
  });
};

// Copiar estrutura
if (!hasLocales) {
  console.log('  Criando estrutura pt/ e en/ a partir do modelo unico...');
  copyDirectory(sourcePath, path.join(modelPath, 'pt'));
  copyDirectory(sourcePath, path.join(modelPath, 'en'));
} else {
  locales.forEach(locale => {
    console.log(`  Copiando ${locale}/...`);
    copyDirectory(path.join(sourcePath, locale), path.join(modelPath, locale));
  });
  // Se so tem pt, duplicar para en (e vice-versa)
  if (locales.length === 1) {
    const missing = locales[0] === 'pt' ? 'en' : 'pt';
    console.log(`  Duplicando ${locales[0]}/ -> ${missing}/...`);
    copyDirectory(path.join(sourcePath, locales[0]), path.join(modelPath, missing));
  }
}

// ========================================
// 3. Detectar informacoes do modelo automaticamente
// ========================================
console.log('\nDetectando informacoes do modelo...');

const scanResults = {
  colors: new Set(),
  phones: new Set(),
  emails: new Set(),
  instagramUrls: new Set(),
  facebookUrls: new Set(),
  linkedinUrls: new Set(),
};

const scanFile = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Hex colors
  const hexMatches = content.match(/#[0-9A-Fa-f]{6}\b/g);
  if (hexMatches) hexMatches.forEach(c => scanResults.colors.add(c.toUpperCase()));

  // Phone numbers (BR format: 55 + DDD + number = 12-13 digits)
  const phoneMatches = content.match(/\b55\d{10,11}\b/g);
  if (phoneMatches) phoneMatches.forEach(p => scanResults.phones.add(p));

  // Emails
  const emailMatches = content.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
  if (emailMatches) emailMatches.forEach(e => scanResults.emails.add(e));

  // Social URLs
  const igMatches = content.match(/https?:\/\/(?:www\.)?instagram\.com\/[a-zA-Z0-9._]+/g);
  if (igMatches) igMatches.forEach(u => scanResults.instagramUrls.add(u));

  const fbMatches = content.match(/https?:\/\/(?:www\.)?facebook\.com\/[a-zA-Z0-9._]+/g);
  if (fbMatches) fbMatches.forEach(u => scanResults.facebookUrls.add(u));

  const liMatches = content.match(/https?:\/\/(?:www\.)?linkedin\.com\/(?:company|in)\/[a-zA-Z0-9._-]+/g);
  if (liMatches) liMatches.forEach(u => scanResults.linkedinUrls.add(u));
};

const scanDirectory = (dir) => {
  if (!fs.existsSync(dir)) return;
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.jsx') || item.endsWith('.css') || item.endsWith('.ts')) {
      scanFile(fullPath);
    }
  });
};

scanDirectory(modelPath);

const detectedColors = Array.from(scanResults.colors).slice(0, 5);
const detectedPhone = Array.from(scanResults.phones)[0] || '';
const detectedEmail = Array.from(scanResults.emails)[0] || '';
const detectedInstagram = Array.from(scanResults.instagramUrls)[0] || '';
const detectedFacebook = Array.from(scanResults.facebookUrls)[0] || '';
const detectedLinkedin = Array.from(scanResults.linkedinUrls)[0] || '';

console.log(`  Cores: ${detectedColors.join(', ') || 'nenhuma'}`);
console.log(`  Telefone: ${detectedPhone || 'nenhum'}`);
console.log(`  Email: ${detectedEmail || 'nenhum'}`);
console.log(`  Instagram: ${detectedInstagram || 'nenhum'}`);

// ========================================
// 4. Criar config.ts
// ========================================
console.log('\nCriando config.ts...');

const colorsArray = detectedColors.length >= 2
  ? detectedColors.slice(0, 2).map(c => `'${c}'`).join(', ')
  : "'#000000', '#FFFFFF'";

const configContent = `import type { ModelConfig } from '@/models/_config/types';

export const config: ModelConfig = {
  id: '${modelId}',
  type: 'react',
  niche: '${niche}',
  category: '${niche}',
  objective: 'leads',
  locales: ['pt', 'en'] as const,
  colors: [${colorsArray}],
  features: {
    pt: [
      'Feature 1 - Editar manualmente',
      'Feature 2 - Editar manualmente',
      'Feature 3 - Editar manualmente',
    ],
    en: [
      'Feature 1 - Edit manually',
      'Feature 2 - Edit manually',
      'Feature 3 - Edit manually',
    ],
  },
};
`;

fs.writeFileSync(path.join(modelPath, 'config.ts'), configContent);
console.log('  config.ts criado');

// ========================================
// 5. Criar route page.tsx
// ========================================
console.log('\nCriando route page.tsx...');
const routePath = path.join(projectRoot, 'src', 'app', '[locale]', '(templates)', modelId);
if (!fs.existsSync(routePath)) {
  fs.mkdirSync(routePath, { recursive: true });
}

const titleCase = modelId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
const pascalCase = modelId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');

const pageContent = `import type { Locale } from '@/models/_config/types';
import { notFound } from 'next/navigation';

export const metadata = {
  title: '${titleCase}',
  description: 'Modelo React ${titleCase}',
};

interface ${pascalCase}PageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function ${pascalCase}Page({ params }: ${pascalCase}PageProps) {
  const { locale } = await params;

  if (locale !== 'pt' && locale !== 'en') {
    notFound();
  }

  try {
    const ModelApp = (await import(\`@/models/${niche}/${modelId}/\${locale}/App\`)).default;
    return <ModelApp />;
  } catch (error) {
    console.error(\`Failed to load ${modelId} for locale \${locale}:\`, error);
    notFound();
  }
}
`;

fs.writeFileSync(path.join(routePath, 'page.tsx'), pageContent);
console.log(`  app/[locale]/(templates)/${modelId}/page.tsx criado`);

// ========================================
// 6. Atualizar models.registry.ts
// ========================================
console.log('\nAtualizando models.registry.ts...');
const registryPath = path.join(projectRoot, 'src', 'models', '_config', 'models.registry.ts');
let registryContent = fs.readFileSync(registryPath, 'utf-8');

const configImportName = modelId.split('-').map((word, i) =>
  i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
).join('') + 'Config';

const importLine = `import { config as ${configImportName} } from '../${niche}/${modelId}/config';`;
const registryEntry = `  ${configImportName},`;

if (!registryContent.includes(importLine)) {
  // Inserir import antes da linha "import type"
  const typeImportIndex = registryContent.indexOf("import type { ModelConfig }");
  if (typeImportIndex !== -1) {
    registryContent = registryContent.slice(0, typeImportIndex) + importLine + '\n' + registryContent.slice(typeImportIndex);
  } else {
    // Fallback: inserir depois do ultimo import { config
    const lastImportIndex = registryContent.lastIndexOf("import { config");
    const endOfLastImport = registryContent.indexOf('\n', lastImportIndex);
    registryContent = registryContent.slice(0, endOfLastImport + 1) + importLine + '\n' + registryContent.slice(endOfLastImport + 1);
  }
}

if (!registryContent.includes(registryEntry)) {
  const arrayEndIndex = registryContent.indexOf('];');
  registryContent = registryContent.slice(0, arrayEndIndex) + registryEntry + '\n' + registryContent.slice(arrayEndIndex);
}

fs.writeFileSync(registryPath, registryContent);
console.log('  models.registry.ts atualizado');

// ========================================
// 7. Criar brandkit.json template com originais detectados
// ========================================
console.log('\nCriando template de brandkit...');
const brandkitPath = path.join(modelPath, 'brandkit.json');

const brandkitTemplate = {
  modelId: modelId,
  _originals: {
    phone: detectedPhone,
    email: detectedEmail,
    instagram: detectedInstagram,
    facebook: detectedFacebook,
    linkedin: detectedLinkedin,
  },
  colors: {
    primary: detectedColors[0] || '#000000',
    secondary: detectedColors[1] || '#FFFFFF',
    accent: detectedColors[2] || '#CCCCCC'
  },
  contact: {
    phone: detectedPhone || '5500000000000',
    whatsapp: detectedPhone || '5500000000000',
    email: detectedEmail || 'contato@exemplo.com',
    address: 'Endereco - Editar'
  },
  social: {
    instagram: detectedInstagram || null,
    facebook: detectedFacebook || null,
    linkedin: detectedLinkedin || null,
  },
  branding: {
    businessName: titleCase,
    logo: '/logo.png',
    tagline: 'Slogan do Negocio - Editar'
  },
  seo: {
    title: titleCase,
    description: `${titleCase} - Editar descricao`,
    keywords: ['keyword1', 'keyword2', 'keyword3']
  }
};

fs.writeFileSync(brandkitPath, JSON.stringify(brandkitTemplate, null, 2));
console.log(`  brandkit.json criado em: ${brandkitPath.replace(projectRoot, '.')}`);

// ========================================
// 8. Adicionar traducoes basicas
// ========================================
console.log('\nAdicionando traducoes basicas...');

const updateTranslations = (locale) => {
  const translationPath = path.join(projectRoot, 'src', 'messages', `${locale}.json`);
  const translations = JSON.parse(fs.readFileSync(translationPath, 'utf-8'));

  if (!translations.models) translations.models = {};
  if (!translations.models.items) translations.models.items = {};

  translations.models.items[modelId] = {
    title: titleCase,
    description: locale === 'pt'
      ? `${titleCase} - Editar descricao`
      : `${titleCase} - Edit description`,
    features: {
      "0": locale === 'pt' ? 'Feature 1 - Editar' : 'Feature 1 - Edit',
      "1": locale === 'pt' ? 'Feature 2 - Editar' : 'Feature 2 - Edit',
      "2": locale === 'pt' ? 'Feature 3 - Editar' : 'Feature 3 - Edit'
    }
  };

  fs.writeFileSync(translationPath, JSON.stringify(translations, null, 2));
  console.log(`  ${locale}.json atualizado`);
};

updateTranslations('pt');
updateTranslations('en');

// ========================================
// 9. Extrair estilos customizados do index.html
// ========================================
console.log('\nExtraindo estilos customizados...');

const extractCustomStyles = () => {
  const indexHtmlPath = path.join(sourcePath, 'index.html');

  if (!fs.existsSync(indexHtmlPath)) {
    console.log('  index.html nao encontrado, pulando extracao de estilos');
    return null;
  }

  const htmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

  // Extrair conteudo da tag <style>
  const styleMatch = htmlContent.match(/<style[^>]*>([\s\S]*?)<\/style>/i);

  if (styleMatch && styleMatch[1]) {
    console.log('  Estilos customizados detectados');
    return styleMatch[1].trim();
  }

  return null;
};

const customStyles = extractCustomStyles();

// ========================================
// 10. Criar arquivo styles.css
// ========================================
if (customStyles) {
  console.log('\nCriando arquivo styles.css...');

  const stylesPath = path.join(modelPath, 'styles.css');
  const stylesComment = `/* ${titleCase} - Custom Styles */\n/* Extracted from original template */\n\n`;

  fs.writeFileSync(stylesPath, stylesComment + customStyles);
  console.log(`  styles.css criado em: ${stylesPath.replace(projectRoot, '.')}`);
}

// ========================================
// 11. Adicionar imports e 'use client' nos App.tsx
// ========================================
console.log('\nAtualizando App.tsx (pt/en)...');

const updateAppTsx = (locale) => {
  const appPath = path.join(modelPath, locale, 'App.tsx');

  if (!fs.existsSync(appPath)) {
    console.log(`  App.tsx nao encontrado em ${locale}/`);
    return;
  }

  let content = fs.readFileSync(appPath, 'utf-8');

  // Garantir 'use client' no topo
  if (!content.trimStart().startsWith("'use client'") && !content.trimStart().startsWith('"use client"')) {
    content = "'use client';\n\n" + content;
    console.log(`  + 'use client' adicionado ao App.tsx (${locale})`);
  }

  // Adicionar import do styles.css se existir
  if (customStyles && !content.includes("import '../styles.css'") && !content.includes('import "../styles.css"')) {
    // Inserir import logo apos 'use client'
    const lines = content.split('\n');
    const insertIndex = lines.findIndex(line => line.includes('import React') || line.includes('import {'));

    if (insertIndex !== -1) {
      lines.splice(insertIndex, 0, "import '../styles.css';");
      content = lines.join('\n');
      console.log(`  + import '../styles.css' adicionado ao App.tsx (${locale})`);
    }
  }

  fs.writeFileSync(appPath, content);
};

['pt', 'en'].forEach(updateAppTsx);

// ========================================
// Resumo Final
// ========================================
console.log('\n=== Modelo React preparado com sucesso! ===\n');
console.log('Estrutura criada:');
console.log(`  - src/models/${niche}/${modelId}/config.ts`);
console.log(`  - src/models/${niche}/${modelId}/brandkit.json`);
console.log(`  - src/app/[locale]/(templates)/${modelId}/page.tsx`);

console.log('\nProximos passos:');
console.log(`  1. Edite brandkit.json com informacoes do cliente:`);
console.log(`     ${brandkitPath.replace(projectRoot, '.')}`);
console.log(`  2. Valide: npm run validate-brandkit ${niche} ${modelId}`);
console.log(`  3. Aplique: npm run apply-brandkit ${niche} ${modelId}`);
console.log(`  4. Teste:   http://localhost:3000/pt/${modelId}`);
console.log('');

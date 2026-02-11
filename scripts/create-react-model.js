#!/usr/bin/env node

/**
 * Script para criar um novo modelo React no projeto
 *
 * Uso: node scripts/create-react-model.js <niche> <model-id> <color1> <color2>
 * Exemplo: node scripts/create-react-model.js fitness my-model "#FF0000" "#000000"
 */

const fs = require('fs');
const path = require('path');

// Argumentos
const [,, niche, modelId, color1, color2] = process.argv;

if (!niche || !modelId) {
  console.error('❌ Erro: Forneça o nicho e o ID do modelo');
  console.log('Uso: node scripts/create-react-model.js <niche> <model-id> <color1> <color2>');
  console.log('Exemplo: node scripts/create-react-model.js fitness my-model "#FF0000" "#000000"');
  process.exit(1);
}

const projectRoot = path.resolve(__dirname, '..');
const modelPath = path.join(projectRoot, 'src', 'models', niche, modelId);

// Pré-computar nomes derivados do modelId
const titleCase = modelId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
const pascalCase = modelId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
const camelCase = modelId.split('-').map((w, i) =>
  i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)
).join('');

console.log(`\n🚀 Criando modelo React: ${niche}/${modelId}\n`);

// ========================================
// 1. Criar estrutura de pastas
// ========================================
console.log('📁 Criando estrutura de pastas...');
const folders = [
  modelPath,
  path.join(modelPath, 'pt'),
  path.join(modelPath, 'pt', 'components'),
  path.join(modelPath, 'en'),
  path.join(modelPath, 'en', 'components'),
];

folders.forEach(folder => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
    console.log(`  ✅ ${folder.replace(projectRoot, '.')}`);
  }
});

// ========================================
// 2. Criar config.ts
// ========================================
console.log('\n📝 Criando config.ts...');
const configContent = `import type { ModelConfig } from '@/models/_config/types';

export const config: ModelConfig = {
  id: '${modelId}',
  type: 'react',
  niche: '${niche}',
  category: '${niche}',
  objective: 'leads',
  locales: ['pt', 'en'] as const,
  colors: ['${color1 || '#000000'}', '${color2 || '#FFFFFF'}'],
  features: {
    pt: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
    en: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
  },
};
`;

fs.writeFileSync(path.join(modelPath, 'config.ts'), configContent);
console.log('  ✅ config.ts criado');

// ========================================
// 3. Criar App.tsx básico (PT e EN)
// ========================================
console.log('\n📝 Criando App.tsx...');
const appContent = (locale) => `'use client';

import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <h1 className="text-4xl font-bold text-center py-12">
        ${modelId} - ${locale === 'pt' ? 'Português' : 'English'}
      </h1>
      <p className="text-center text-muted-foreground">
        ${locale === 'pt' ? 'Modelo React criado com sucesso!' : 'React model created successfully!'}
      </p>
    </div>
  );
};

export default App;
`;

fs.writeFileSync(path.join(modelPath, 'pt', 'App.tsx'), appContent('pt'));
fs.writeFileSync(path.join(modelPath, 'en', 'App.tsx'), appContent('en'));
console.log('  ✅ pt/App.tsx criado');
console.log('  ✅ en/App.tsx criado');

// ========================================
// 4. Criar route page.tsx
// ========================================
console.log('\n📝 Criando route page.tsx...');
const routePath = path.join(projectRoot, 'src', 'app', '[locale]', '(templates)', modelId);
if (!fs.existsSync(routePath)) {
  fs.mkdirSync(routePath, { recursive: true });
}

const pageContent = `import type { Locale } from '@/models/_config/types';
import { notFound } from 'next/navigation';

export const metadata = {
  title: '${titleCase}',
  description: 'Modelo React ${modelId}',
};

interface ${pascalCase}PageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function ${pascalCase}Page({ params }: ${pascalCase}PageProps) {
  const { locale } = await params;

  // Validar locale
  if (locale !== 'pt' && locale !== 'en') {
    notFound();
  }

  // Importação dinâmica do componente App baseado no locale
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
console.log(`  ✅ app/[locale]/(templates)/${modelId}/page.tsx criado`);

// ========================================
// 5. Adicionar ao models.registry.ts
// ========================================
console.log('\n📝 Atualizando models.registry.ts...');
const registryPath = path.join(projectRoot, 'src', 'models', '_config', 'models.registry.ts');
let registryContent = fs.readFileSync(registryPath, 'utf-8');

const configImportName = camelCase + 'Config';

const importLine = `import { config as ${configImportName} } from '../${niche}/${modelId}/config';`;
const registryEntry = `  ${configImportName},`;

// Adicionar import
if (!registryContent.includes(importLine)) {
  const lastImportIndex = registryContent.lastIndexOf("import { config");
  const endOfLastImport = registryContent.indexOf('\n', lastImportIndex);
  registryContent = registryContent.slice(0, endOfLastImport + 1) + importLine + '\n' + registryContent.slice(endOfLastImport + 1);
}

// Adicionar ao array
if (!registryContent.includes(registryEntry)) {
  const arrayEndIndex = registryContent.indexOf('];');
  registryContent = registryContent.slice(0, arrayEndIndex) + registryEntry + '\n' + registryContent.slice(arrayEndIndex);
}

fs.writeFileSync(registryPath, registryContent);
console.log('  ✅ models.registry.ts atualizado');

// ========================================
// 6. Adicionar traduções em pt.json e en.json
// ========================================
console.log('\n📝 Atualizando traduções...');

const updateTranslations = (locale) => {
  const translationPath = path.join(projectRoot, 'src', 'messages', `${locale}.json`);
  const translations = JSON.parse(fs.readFileSync(translationPath, 'utf-8'));

  translations.models.items[modelId] = {
    title: titleCase,
    description: locale === 'pt'
      ? `Modelo ${titleCase} criado automaticamente`
      : `${titleCase} model created automatically`,
    features: {
      "0": "Feature 1",
      "1": "Feature 2",
      "2": "Feature 3"
    }
  };

  fs.writeFileSync(translationPath, JSON.stringify(translations, null, 2));
  console.log(`  ✅ ${locale}.json atualizado`);
};

updateTranslations('pt');
updateTranslations('en');

// ========================================
// 7. Adicionar cores ao globals.css (se fornecidas)
// ========================================
if (color1 && color2) {
  console.log('\n🎨 Adicionando cores customizadas ao globals.css...');
  const globalsPath = path.join(projectRoot, 'src', 'app', 'globals.css');
  let globalsContent = fs.readFileSync(globalsPath, 'utf-8');

  const colorComment = `  /* ${modelId} Model Colors */`;
  const colorVars = `  --color-${modelId}-primary: var(--${modelId}-primary);
  --color-${modelId}-secondary: var(--${modelId}-secondary);`;

  const colorDefinitions = `  /* ${modelId} Model Colors */
  --${modelId}-primary: ${color1};
  --${modelId}-secondary: ${color2};`;

  // Adicionar na seção @theme inline
  if (!globalsContent.includes(colorComment)) {
    const themeEndIndex = globalsContent.indexOf('  /* Typography */');
    globalsContent = globalsContent.slice(0, themeEndIndex) + '\n' + colorComment + '\n' + colorVars + '\n\n' + globalsContent.slice(themeEndIndex);

    // Adicionar na seção :root
    const rootEndIndex = globalsContent.indexOf('  /* Light Theme */');
    globalsContent = globalsContent.slice(0, rootEndIndex) + '\n' + colorDefinitions + '\n\n' + globalsContent.slice(rootEndIndex);

    fs.writeFileSync(globalsPath, globalsContent);
    console.log('  ✅ Cores adicionadas ao globals.css');
  }
}

// ========================================
// Resumo Final
// ========================================
console.log('\n✅ Modelo React criado com sucesso!\n');
console.log('📦 Arquivos criados:');
console.log(`  - src/models/${niche}/${modelId}/config.ts`);
console.log(`  - src/models/${niche}/${modelId}/pt/App.tsx`);
console.log(`  - src/models/${niche}/${modelId}/en/App.tsx`);
console.log(`  - src/app/[locale]/(templates)/${modelId}/page.tsx`);
console.log('\n📝 Arquivos atualizados:');
console.log('  - src/models/_config/models.registry.ts');
console.log('  - src/messages/pt.json');
console.log('  - src/messages/en.json');
if (color1 && color2) {
  console.log('  - src/app/globals.css');
}

console.log('\n🧪 Teste o modelo em:');
console.log(`  - http://localhost:3000/pt/${modelId}`);
console.log(`  - http://localhost:3000/en/${modelId}`);
console.log(`  - http://localhost:3000/pt/templates/${modelId}/preview`);
console.log(`  - http://localhost:3000/en/templates/${modelId}/preview`);
console.log('');

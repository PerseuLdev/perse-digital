'use client';

import { useEffect } from 'react';
import type { Locale } from '@/models/_config/types';

interface StaticModelWrapperProps {
  niche: string;
  modelId: string;
  locale: Locale;
}

/**
 * StaticModelWrapper - Wrapper para modelos HTML estáticos
 *
 * Este componente redireciona para o arquivo HTML estático correspondente
 * ao modelo, nicho e idioma especificados.
 */
export function StaticModelWrapper({ niche, modelId, locale }: StaticModelWrapperProps) {
  useEffect(() => {
    // Redireciona para o arquivo HTML estático
    const htmlPath = `/models/${niche}/${modelId}/${locale}/index.html`;
    window.location.href = htmlPath;
  }, [niche, modelId, locale]);

  // Mostra loading enquanto redireciona
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

'use client';

import { useParams, useRouter } from 'next/navigation';
import { DemoWrapper } from '@/components/ui/demo-wrapper';
import { useMemo } from 'react';
import { SalesContent } from '@/components/sections/model-sales/sales-content';

import { MODELS } from '@/lib/models-data';

export default function TemplatePreviewPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const template = useMemo(() => {
    return MODELS.find(t => t.id === id);
  }, [id]);

  const demoUrl = useMemo(() => {
    if (!template?.demoUrl) return '';
    
    // If it's an external URL or a static public demo, return as is
    if (template.demoUrl.startsWith('http') || template.demoUrl.startsWith('/demos/')) {
      return template.demoUrl;
    }

    // It's an internal localized route, prepend the current locale
    const locale = params.locale as string;
    return `/${locale}${template.demoUrl}`;
  }, [template, params.locale]);

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Modelo não encontrado</h1>
          <button 
            onClick={() => router.back()}
            className="text-royal hover:underline"
          >
            Voltar para Modelos
          </button>
        </div>
      </div>
    );
  }

  return (
    <DemoWrapper 
      title={template.title}
      url={demoUrl}
      onClose={() => router.back()}
    >
      <SalesContent model={template} />
    </DemoWrapper>
  );
}

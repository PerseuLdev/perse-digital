import { StaticModelWrapper } from '@/components/wrappers/static-model-wrapper';
import type { Locale } from '@/models/_config/types';

export const metadata = {
  title: 'Botânica & Design | Paisagismo Profissional',
  description: 'Transformamos ambientes em refúgios naturais. Projetos de paisagismo, execução e manutenção.',
};

interface GardeningPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function GardeningPage({ params }: GardeningPageProps) {
  const { locale } = await params;

  return (
    <StaticModelWrapper
      niche="services"
      modelId="gardening"
      locale={locale}
    />
  );
}

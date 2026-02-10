import type { Locale } from '@/models/_config/types';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Education Mind | Plataforma Educacional',
  description: 'Portal educacional com cursos e área do aluno.',
};

interface EducationPageProps {
  params: {
    locale: Locale;
  };
}

export default async function EducationPage({ params }: EducationPageProps) {
  const { locale } = await params;

  if (locale !== 'pt' && locale !== 'en') {
    notFound();
  }

  try {
    const ModelPage = (await import(`@/models/education/education-mind/${locale}/page`)).default;
    return <ModelPage />;
  } catch (error) {
    console.error(`Failed to load education-mind for locale ${locale}:`, error);
    notFound();
  }
}

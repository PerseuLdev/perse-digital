'use client';

interface ModelPlaceholderProps {
  modelName: string;
  colors: string[];
  locale: 'pt' | 'en';
}

export function ModelPlaceholder({ modelName, colors, locale }: ModelPlaceholderProps) {
  const [primaryColor, secondaryColor] = colors;

  const text = {
    pt: {
      comingSoon: 'Em Breve',
      description: 'Este modelo está em desenvolvimento e será lançado em breve.',
      backToTemplates: 'Voltar para Templates',
    },
    en: {
      comingSoon: 'Coming Soon',
      description: 'This template is under development and will be released soon.',
      backToTemplates: 'Back to Templates',
    },
  };

  const t = text[locale];

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background: `linear-gradient(135deg, ${primaryColor}15 0%, ${secondaryColor}15 100%)`,
      }}
    >
      <div className="max-w-2xl w-full text-center">
        <div
          className="inline-block px-6 py-3 rounded-full mb-8 font-bold text-white"
          style={{ backgroundColor: primaryColor }}
        >
          {t.comingSoon}
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold mb-6"
          style={{ color: primaryColor }}
        >
          {modelName}
        </h1>

        <p className="text-xl text-gray-600 mb-12">{t.description}</p>

        <a
          href={`/${locale}/templates`}
          className="inline-block px-8 py-4 rounded-lg text-white font-semibold transition-all hover:scale-105 hover:shadow-lg"
          style={{ backgroundColor: primaryColor }}
        >
          {t.backToTemplates}
        </a>

        {/* Decorative elements */}
        <div className="mt-16 grid grid-cols-3 gap-4 opacity-20">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-24 rounded-lg"
              style={{
                backgroundColor: i % 2 === 0 ? primaryColor : secondaryColor,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

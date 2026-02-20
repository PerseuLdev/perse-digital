'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { TestimonialsColumn, TestimonialItem } from '@/components/ui/testimonials-column';

const testimonials: TestimonialItem[] = [
  {
    text: 'Meu consultório nunca teve tanta visibilidade. Os pacientes me encontram facilmente no Google agora!',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face',
    name: 'Dra. Ana Silva',
    role: 'Nutricionista',
  },
  {
    text: 'O investimento se pagou no primeiro mês. Recomendo para todos os colegas de profissão.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face',
    name: 'Dr. Carlos Mendes',
    role: 'Fisioterapeuta',
  },
  {
    text: 'Site lindo, rápido e fácil de atualizar. A equipe de suporte é excepcional!',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&crop=face',
    name: 'Marina Costa',
    role: 'Psicóloga',
  },
  {
    text: 'Em menos de uma semana já tinha pacientes novos me encontrando pelo site. Resultado surpreendente!',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=80&h=80&fit=crop&crop=face',
    name: 'Dr. Ricardo Alves',
    role: 'Cirurgião-Dentista',
  },
  {
    text: 'Finalmente um site que representa bem minha marca. Recebi muitos elogios dos alunos e novos contatos!',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=80&h=80&fit=crop&crop=face',
    name: 'Juliana Ferreira',
    role: 'Personal Trainer',
  },
  {
    text: 'O modelo para advocacia transmite a credibilidade que meu escritório precisava. Clientes chegam mais confiantes.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face',
    name: 'Dr. Pedro Souza',
    role: 'Advogado',
  },
  {
    text: 'O site ficou elegante demais. Minhas clientes adoraram e minha agenda encheu mais rápido do que eu esperava.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face',
    name: 'Camila Rocha',
    role: 'Esteticista',
  },
  {
    text: 'Consegui dobrar meu número de alunos em dois meses após lançar o site. Vale muito a pena!',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=80&h=80&fit=crop&crop=face',
    name: 'Prof. Lucas Nunes',
    role: 'Professor Particular',
  },
  {
    text: 'Processo simples, resultado profissional. Me surpreendi com a qualidade e a velocidade de entrega.',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=80&h=80&fit=crop&crop=face',
    name: 'Fernanda Lima',
    role: 'Fonoaudióloga',
  },
];

const firstColumn  = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn  = testimonials.slice(6, 9);

export function TestimonialsSection() {
  const t = useTranslations('testimonials');

  return (
    <section className="relative z-10 py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-[540px] mx-auto mb-12"
        >
          <span className="border border-border/60 text-muted-foreground text-xs font-medium px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Columns */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[720px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
        </div>
      </div>
    </section>
  );
}

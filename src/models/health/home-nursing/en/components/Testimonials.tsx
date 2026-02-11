
import React from 'react';
import Reveal from './Reveal.tsx';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Maria Oliveira",
      role: "Filha de Paciente",
      text: "Cuidou da minha mãe com um zelo que nunca vi antes. O profissionalismo me trouxe a segurança necessária para voltar a trabalhar tranquila.",
      img: "https://i.pravatar.cc/150?u=maria"
    },
    {
      name: "João Santos",
      role: "Pós-Cirúrgico",
      text: "Excelente técnica! Meus curativos eram complexos e foram feitos com perfeição. Um atendimento impecável e muito pontual.",
      img: "https://i.pravatar.cc/150?u=joao"
    },
    {
      name: "Beatriz Lemos",
      role: "Neta de Paciente",
      text: "Pontualidade e responsabilidade total. O controle de medicação é rigoroso. Recomendo para qualquer família que busque paz.",
      img: "https://i.pravatar.cc/150?u=bia"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Reconhecimento</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6">O que dizem as famílias atendidas</h3>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <Reveal key={idx} delay={`delay-${idx * 150}`}>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col h-full hover:shadow-lg transition-all">
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  ))}
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed flex-grow">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover shadow-sm bg-slate-200" />
                  <div>
                    <h4 className="font-bold text-slate-800">{t.name}</h4>
                    <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

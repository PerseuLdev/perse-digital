
import React from 'react';
import Reveal from './Reveal';

const Services: React.FC = () => {
  const salesNumber = "5514991071072";
  const whatsappLink = `https://wa.me/${salesNumber}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20personal%20trainer.`;

  const services = [
    {
      title: "Treino Personalizado",
      desc: "Programas de treino 100% personalizados para seus objetivos específicos: hipertrofia, emagrecimento, definição ou performance atlética.",
      icon: "💪",
      details: ["Avaliação física completa", "Periodização científica", "Acompanhamento em tempo real"]
    },
    {
      title: "Consultoria Nutricional",
      desc: "Planejamento nutricional estratégico alinhado aos seus treinos para maximizar resultados e acelerar sua evolução.",
      icon: "🥗",
      details: ["Dieta personalizada", "Suplementação orientada", "Ajustes semanais"]
    },
    {
      title: "Acompanhamento Online",
      desc: "Treine quando e onde quiser com meu acompanhamento online completo via app. Treinos, vídeos explicativos e suporte direto.",
      icon: "📱",
      details: ["App exclusivo", "Vídeos demonstrativos", "Chat direto 24/7"]
    },
    {
      title: "Treino Presencial",
      desc: "Sessões presenciais individuais com foco total em você. Correção de técnica, motivação e resultados acelerados.",
      icon: "🏋️",
      details: ["1 a 1 focado", "Correção de postura", "Motivação constante"]
    },
    {
      title: "Treino em Grupo",
      desc: "Energia coletiva e resultados individuais. Grupos pequenos com programação exclusiva e acompanhamento personalizado.",
      icon: "👥",
      details: ["Turmas reduzidas", "Ambiente motivador", "Amizades fitness"]
    },
    {
      title: "Preparação para Competições",
      desc: "Protocolo avançado para atletas amadores e profissionais. Do cutting ao peak week, tudo planejado cientificamente.",
      icon: "🏆",
      details: ["Cutting estratégico", "Peak week", "Suporte psicológico"]
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Serviços</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">PROGRAMAS DE TRANSFORMAÇÃO TOTAL</h3>
          <p className="text-slate-600 text-lg">
            Metodologia comprovada, baseada em ciência e resultados reais. Tudo que você precisa para alcançar seu melhor shape.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <Reveal
              key={idx}
              delay={`delay-${(idx % 3) * 100}`}
              animation="reveal"
            >
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all border border-slate-100 group flex flex-col h-full hover:-translate-y-2">
                <div className="text-5xl mb-6 bg-orange-50 w-20 h-20 flex items-center justify-center rounded-2xl group-hover:bg-orange-600 transition-colors shrink-0">
                  <span className="group-hover:scale-110 transition-transform">{s.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">{s.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                  {s.desc}
                </p>

                <div className="mb-8">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Inclui:</p>
                  <ul className="space-y-2">
                    {s.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#contato" className="mt-auto text-orange-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Saber Mais
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal animation="reveal" className="mt-20">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-[3rem] p-8 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20"></div>

            <div className="max-w-xl relative z-10 text-center md:text-left">
              <h4 className="text-3xl md:text-4xl font-display font-bold mb-6">AVALIAÇÃO GRATUITA</h4>
              <p className="text-orange-50 text-lg opacity-90 mb-0">
                Agende sua avaliação física completa sem compromisso. Vamos traçar juntos o melhor caminho para você alcançar seus objetivos.
              </p>
            </div>
            <div className="shrink-0 relative z-10">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 hover:bg-slate-50 px-12 py-5 rounded-2xl font-bold text-xl block text-center transition-all shadow-xl hover:scale-105 active:scale-95"
              >
                Agendar Avaliação
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;

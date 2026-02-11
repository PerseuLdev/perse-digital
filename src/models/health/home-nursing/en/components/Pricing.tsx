
import React from 'react';
import Reveal from './Reveal.tsx';

const Pricing: React.FC = () => {
  const salesLink = "https://wa.me/5514991071072?text=Olá!%20Vi%20os%20planos%20e%20gostaria%20de%20um%20orçamento%20personalizado.";

  const plans = [
    {
      name: "Plano Essencial",
      price: "Sob Consulta",
      desc: "Ideal para procedimentos pontuais e acompanhamento básico.",
      features: [
        "Visitas para curativos",
        "Administração de injetáveis",
        "Aferição de sinais vitais",
        "Relatório de visita digital",
        "Suporte via WhatsApp"
      ],
      highlight: false
    },
    {
      name: "Plano Pleno",
      price: "Destaque",
      desc: "Assistência dedicada para recuperação e cuidados intermediários.",
      features: [
        "Plantão (6h ou 12h/dia)",
        "Gestão de medicamentos",
        "Higiene e conforto",
        "Plano de cuidados personalizado",
        "Apoio ao familiar",
        "Acompanhamento em consultas"
      ],
      highlight: true
    },
    {
      name: "Plano Premium",
      price: "Exclusivo",
      desc: "Gestão completa de saúde com monitoramento intensivo.",
      features: [
        "Assistência completa",
        "Atendimento técnico especializado",
        "Manejo de equipamentos complexos",
        "Coordenação com médicos",
        "Orientação a cuidadores",
        "Prioridade em intercorrências"
      ],
      highlight: false
    }
  ];

  return (
    <section id="planos" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Investimento</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6">Planos de Cuidados Sob Medida</h3>
          <p className="text-slate-600 text-lg">
            Escolha o nível de suporte ideal para garantir a segurança e o bem-estar de quem você ama, diretamente com o profissional.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <Reveal key={idx} delay={`delay-${idx * 150}`} animation="reveal">
              <div className={`h-full rounded-[2.5rem] p-10 flex flex-col transition-all duration-500 hover:-translate-y-4 ${plan.highlight ? 'bg-slate-900 text-white shadow-2xl scale-105 relative z-10' : 'bg-slate-50 text-slate-900 border border-slate-200'}`}>
                {plan.highlight && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-6 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                    Mais Procurado
                  </div>
                )}
                
                <h4 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-emerald-400' : 'text-emerald-600'}`}>{plan.name}</h4>
                <div className="text-3xl font-serif font-bold mb-6">{plan.price}</div>
                <p className={`text-sm mb-8 leading-relaxed ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                  {plan.desc}
                </p>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-600'}`}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      </div>
                      <span className={`text-sm font-medium ${plan.highlight ? 'text-slate-300' : 'text-slate-700'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={salesLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-2xl font-bold text-center transition-all shadow-lg active:scale-95 ${plan.highlight ? 'bg-emerald-500 hover:bg-emerald-400 text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'}`}
                >
                  Solicitar Orçamento
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

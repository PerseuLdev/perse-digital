
import React from 'react';
import Reveal from './Reveal';

const Pricing: React.FC = () => {
  const salesLink = "https://wa.me/5514991071072?text=Olá!%20Vi%20os%20planos%20e%20gostaria%20de%20mais%20informações.";

  const plans = [
    {
      name: "Plano Basic",
      price: "R$ 297",
      period: "/mês",
      desc: "Perfeito para quem quer começar com acompanhamento profissional.",
      features: [
        "Treino personalizado online",
        "App com vídeos explicativos",
        "Ajustes quinzenais",
        "Suporte via WhatsApp",
        "Dicas de nutrição básica"
      ],
      highlight: false
    },
    {
      name: "Plano Premium",
      price: "R$ 597",
      period: "/mês",
      desc: "Transformação completa com suporte total e resultados garantidos.",
      features: [
        "Tudo do Basic +",
        "Consultoria nutricional completa",
        "Check-ins semanais",
        "Ajustes de treino ilimitados",
        "Suporte prioritário 24/7",
        "Grupo VIP de alunos"
      ],
      highlight: true
    },
    {
      name: "Plano VIP",
      price: "R$ 997",
      period: "/mês",
      desc: "Máxima dedicação e resultados extraordinários.",
      features: [
        "Tudo do Premium +",
        "Treino presencial (2x semana)",
        "Avaliação física mensal",
        "Cardápio semanal detalhado",
        "Protocolo de suplementação",
        "Acesso prioritário em qualquer hora"
      ],
      highlight: false
    }
  ];

  return (
    <section id="planos" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Investimento</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">ESCOLHA SEU PLANO</h3>
          <p className="text-slate-600 text-lg">
            Invista em você e alcance resultados reais. Todos os planos incluem garantia de satisfação.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <Reveal key={idx} delay={`delay-${idx * 150}`} animation="reveal">
              <div className={`h-full rounded-[2.5rem] p-10 flex flex-col transition-all duration-500 hover:-translate-y-4 ${plan.highlight ? 'bg-gradient-to-br from-orange-600 to-orange-500 text-white shadow-2xl scale-105 relative z-10' : 'bg-slate-50 text-slate-900 border border-slate-200'}`}>
                {plan.highlight && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                    Mais Popular
                  </div>
                )}

                <h4 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-orange-600'}`}>{plan.name}</h4>
                <div className="mb-2">
                  <span className="text-4xl font-display font-bold">{plan.price}</span>
                  <span className={`text-lg ${plan.highlight ? 'text-white/80' : 'text-slate-600'}`}>{plan.period}</span>
                </div>
                <p className={`text-sm mb-8 leading-relaxed ${plan.highlight ? 'text-white/90' : 'text-slate-500'}`}>
                  {plan.desc}
                </p>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-white/20 text-white' : 'bg-orange-100 text-orange-600'}`}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      </div>
                      <span className={`text-sm font-medium ${plan.highlight ? 'text-white' : 'text-slate-700'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={salesLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-2xl font-bold text-center transition-all shadow-lg active:scale-95 ${plan.highlight ? 'bg-white text-orange-600 hover:bg-slate-50' : 'bg-orange-600 hover:bg-orange-500 text-white'}`}
                >
                  Começar Agora
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal animation="reveal" className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-slate-50 px-8 py-4 rounded-2xl border border-slate-200">
            <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            <span className="text-slate-700 font-semibold">Garantia de 7 dias ou seu dinheiro de volta</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Pricing;

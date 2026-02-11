
import React from 'react';
import Reveal from './Reveal.tsx';

const Services: React.FC = () => {
  const salesNumber = "5514991071072";
  const whatsappLink = `https://wa.me/${salesNumber}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20enfermagem.`;

  const services = [
    {
      title: "Cuidados com Feridas e Curativos",
      desc: "Tratamento especializado de feridas complexas, escaras, feridas cirúrgicas e remoção de pontos com técnicas assépticas avançadas.",
      icon: "🩹",
      details: ["Curativos complexos", "Prevenção de escaras", "Retirada de pontos"]
    },
    {
      title: "Administração de Medicamentos",
      desc: "Controle rigoroso de dosagens e horários. Administração IM, EV e subcutânea com monitoramento contínuo.",
      icon: "💊",
      details: ["Medicação Injetável", "Punção venosa", "Soro e hidratação"]
    },
    {
      title: "Cuidados com Pacientes Crônicos",
      desc: "Assistência contínua para Alzheimer, Parkinson ou sequelas de AVC, focada na estabilidade clínica domiciliar.",
      icon: "❤️",
      details: ["Controle de Glicemia", "Aferição de Pressão", "Manejo de aparelhos"]
    },
    {
      title: "Reabilitação Pós-Cirúrgica",
      desc: "Acompanhamento dedicado para garantir que o protocolo de recuperação seja seguido à risca após a alta hospitalar.",
      icon: "🏥",
      details: ["Monitoramento de sinais", "Auxílio na mobilidade", "Troca de drenos"]
    },
    {
      title: "Acompanhamento de Idosos",
      desc: "Cuidado holístico focado na segurança e bem-estar. Inclui auxílio na higiene, alimentação e estimulação cognitiva.",
      icon: "👵",
      details: ["Banho de leito/cadeira", "Prevenção de quedas", "Estimulação mental"]
    },
    {
      title: "Sondagens e Suporte Nutricional",
      desc: "Manutenção e cuidados com sondas SNE, GTT e vesicais. Administração segura de dietas e hidratação.",
      icon: "🧪",
      details: ["Manejo de SNE e GTT", "Sondagem Vesical", "Controle hídrico"]
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Áreas de Atuação</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6">Serviços Especializados de Enfermagem</h3>
          <p className="text-slate-600 text-lg">
            Ofereço assistência técnica completa e humanizada, adaptada às necessidades clínicas de cada paciente.
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
                <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-emerald-50 transition-colors shrink-0">
                  {s.icon}
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
                        <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#contato" className="mt-auto text-emerald-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Consultar Disponibilidade
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal animation="reveal" className="mt-20">
          <div className="bg-emerald-600 rounded-[3rem] p-8 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl shadow-emerald-900/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
            
            <div className="max-w-xl relative z-10 text-center md:text-left">
              <h4 className="text-3xl md:text-4xl font-serif font-bold mb-6">Avaliação Gratuita</h4>
              <p className="text-emerald-100 text-lg opacity-90 mb-0">
                Está com dúvidas sobre qual o melhor plano de cuidados para seu familiar? Fale diretamente comigo e receba uma orientação personalizada.
              </p>
            </div>
            <div className="shrink-0 relative z-10">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-600 hover:bg-emerald-50 px-12 py-5 rounded-2xl font-bold text-xl block text-center transition-all shadow-xl hover:scale-105 active:scale-95"
              >
                Falar com Especialista
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;

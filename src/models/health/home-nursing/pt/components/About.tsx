
import React from 'react';
import Reveal from './Reveal.tsx';

const About: React.FC = () => {
  const contactLink = "https://wa.me/5514991071072?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20sua%20disponibilidade.";

  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <Reveal animation="reveal-left">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1000&auto=format&fit=crop" 
                  alt="Profissional de saúde segurando mão de paciente" 
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 z-20 bg-emerald-600 text-white p-8 rounded-2xl shadow-xl hidden sm:block">
                <p className="text-sm uppercase tracking-widest font-bold mb-1 opacity-80">Compromisso com</p>
                <p className="text-2xl font-bold">O Bem-estar</p>
              </div>
            </Reveal>
          </div>

          <div className="lg:w-1/2">
            <Reveal animation="reveal-right">
              <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Minha Trajetória</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Mais que um serviço, um cuidado dedicado a você.
              </h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Sou profissional da saúde com vasta experiência em atendimento domiciliar e hospitalar. Entendo que cada paciente é único, e meu trabalho é oferecer não apenas técnica apurada, mas o conforto e a tranquilidade que sua família precisa neste momento.
              </p>
            </Reveal>
            
            <Reveal animation="reveal" delay="delay-200">
              <ul className="space-y-4 mb-10">
                {[
                  "Registro no COREN ativo e regular",
                  "Experiência em casos de média e alta complexidade",
                  "Atendimento personalizado e flexível",
                  "Relatórios diários para a família"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={contactLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:gap-5"
              >
                Conversar Comigo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

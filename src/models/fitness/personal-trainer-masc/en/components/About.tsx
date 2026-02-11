import React from 'react';
import Reveal from './Reveal';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal animation="reveal-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 to-orange-400 rounded-3xl opacity-20 blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=1000&fit=crop"
                alt="Personal Trainer"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
            </div>
          </Reveal>

          <Reveal animation="reveal-right">
            <div>
              <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Sobre Mim</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                DEDICAÇÃO TOTAL À SUA <span className="text-orange-600">TRANSFORMAÇÃO</span>
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Com mais de 10 anos de experiência em treinamento personalizado, minha missão é transformar vidas através do fitness. Cada aluno é único, e por isso desenvolvo programas personalizados que se adaptam aos seus objetivos e estilo de vida.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Não se trata apenas de exercícios, mas de criar uma mentalidade vencedora, desenvolver disciplina e alcançar resultados que vão além da estética. Estou aqui para guiá-lo em cada passo dessa jornada.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="text-3xl mb-2">🏆</div>
                  <h4 className="font-bold text-slate-900 mb-1">Certificado</h4>
                  <p className="text-sm text-slate-600">CREF Ativo</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="text-3xl mb-2">📊</div>
                  <h4 className="font-bold text-slate-900 mb-1">Metodologia</h4>
                  <p className="text-sm text-slate-600">Baseada em ciência</p>
                </div>
              </div>

              <a
                href="#contato"
                className="inline-block bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                Agendar Avaliação Gratuita
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;


import React from 'react';
import Reveal from './Reveal';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Em 3 meses perdi 15kg e ganhei muita massa magra. O acompanhamento é impecável e os treinos são desafiadores na medida certa. Melhor investimento que fiz!",
      author: "Carlos Mendes",
      role: "Empresário",
      image: "https://i.pravatar.cc/150?img=12",
      result: "-15kg em 3 meses"
    },
    {
      quote: "Depois de anos tentando sozinho, finalmente consegui o shape que sempre quis. O suporte nutricional fez toda diferença. Recomendo demais!",
      author: "Rafael Santos",
      role: "Engenheiro",
      image: "https://i.pravatar.cc/150?img=13",
      result: "+8kg de massa magra"
    },
    {
      quote: "Profissional excepcional! Me preparou para minha primeira competição de fisiculturismo e conquistei o 2º lugar. Metodologia científica e resultados comprovados.",
      author: "Bruno Costa",
      role: "Atleta Amador",
      image: "https://i.pravatar.cc/150?img=14",
      result: "2º lugar em competição"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-600 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Depoimentos</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">TRANSFORMAÇÕES REAIS</h3>
          <p className="text-slate-400 text-lg">
            Veja o que meus alunos têm a dizer sobre suas jornadas de transformação e resultados alcançados.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Reveal key={idx} delay={`delay-${idx * 100}`} animation="reveal">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl hover:bg-slate-800 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-600"
                  />
                  <div>
                    <h4 className="text-white font-bold">{testimonial.author}</h4>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-300 leading-relaxed italic">"{testimonial.quote}"</p>
                </div>

                <div className="pt-6 border-t border-slate-700">
                  <div className="inline-block bg-orange-600/20 text-orange-400 px-4 py-2 rounded-lg text-sm font-bold">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal animation="reveal" className="mt-16 text-center">
          <a
            href="#contato"
            className="inline-block bg-orange-600 hover:bg-orange-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            Comece Sua Transformação Agora
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;

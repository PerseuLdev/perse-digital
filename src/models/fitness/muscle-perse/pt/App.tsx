'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Button } from './components/Button';
import { SectionHeading } from './components/SectionHeading';
import { Check, ArrowRight, Instagram, Linkedin, Mail, MapPin, X, Dumbbell } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { ServicePlan, Testimonial, FaqItem } from './types';
import { TierLock } from '@/components/ui/tier-lock';

// --- DATA ---
const services: ServicePlan[] = [
  {
    title: "Consultoria Online",
    price: "R$ 297/mês",
    features: [
      "Treino personalizado via App",
      "Análise de execução de vídeo",
      "Ajustes semanais",
      "Suporte via WhatsApp 24h",
      "Guia de Suplementação"
    ]
  },
  {
    title: "Mentoria Híbrida",
    price: "R$ 497/mês",
    features: [
      "Tudo da Consultoria Online",
      "1 Encontro presencial mensal",
      "Avaliação física completa",
      "Planejamento nutricional",
      "Acesso à comunidade VIP"
    ],
    recommended: true
  },
  {
    title: "Personal Presencial",
    price: "Sob Consulta",
    features: [
      "Acompanhamento 1:1 exclusivo",
      "Correção em tempo real",
      "Motivação e intensidade máxima",
      "Gestão total de lifestyle",
      "Vagas extremamente limitadas"
    ]
  }
];

const testimonials: Testimonial[] = [
  {
    name: "Ricardo Silva",
    role: "Empresário",
    content: "Em 3 meses perdi 12kg e dobrei minha disposição no trabalho. O método é direto, sem enrolação. Exige esforço, mas entrega resultado.",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "André Costa",
    role: "Advogado",
    content: "Treino há 10 anos, mas estava estagnado. A periodização que ele montou mudou meu físico em 8 semanas. Profissionalismo de outro nível.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    name: "Lucas Mendes",
    role: "Atleta Amador",
    content: "Precisava melhorar minha potência para o jiu-jitsu. O trabalho de força específica foi um divisor de águas na minha performance.",
    image: "https://picsum.photos/100/100?random=3"
  }
];

const faqs: FaqItem[] = [
  {
    question: "Como funciona a consultoria online?",
    answer: "Você recebe acesso a um aplicativo exclusivo onde seu treino é montado sob medida. Lá você tem vídeos explicativos, controle de carga e chat direto comigo."
  },
  {
    question: "Preciso de equipamentos específicos?",
    answer: "Adapto o treino à sua realidade. Seja academia completa, condomínio ou calistenia em casa. O foco é intensidade, não equipamento."
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer: "Meus alunos relatam mudanças visíveis nas primeiras 4 semanas. Mas lembre-se: eu dou o mapa, você tem que caminhar. O resultado é proporcional à sua disciplina."
  }
];

const statsData = [
  { label: "Alunos Transformados", value: 500, suffix: "+" },
  { label: "Anos de Experiência", value: 10, suffix: "+" },
  { label: "Planos Prescritos", value: 3, suffix: "k+" },
  { label: "Satisfação", value: 100, suffix: "%" },
];

// --- SUB-COMPONENTS ---

const AnimatedStat: React.FC<{ value: number; suffix: string; label: string }> = ({ value, suffix, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2.5, ease: "circOut" });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="font-heading font-bold text-3xl md:text-4xl text-white mb-1 flex items-baseline">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="text-brand-orange text-xs uppercase tracking-widest">{label}</div>
    </div>
  );
};

const ServiceCard: React.FC<{ service: ServicePlan; index: number }> = ({ service, index }) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative p-8 border ${service.recommended ? 'border-brand-orange bg-brand-dark' : 'border-white/10 bg-brand-black'} flex flex-col h-full`}
    >
      {service.recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-black font-heading font-bold text-xs uppercase px-4 py-1 tracking-widest">
          Mais Procurado
        </div>
      )}
      <h3 className="font-heading text-2xl font-bold uppercase mb-2 text-white">{service.title}</h3>
      <div className="text-3xl font-heading font-bold text-brand-orange mb-6">{service.price}</div>
      <ul className="flex-grow space-y-4 mb-8">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
            <Check size={16} className="text-brand-orange mt-1 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant={service.recommended ? 'primary' : 'outline'} 
        fullWidth
        onClick={scrollToContact}
      >
        Selecionar Plano
      </Button>
    </motion.div>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-brand-gray p-8 border border-white/5"
  >
    <div className="flex items-center gap-4 mb-6">
      <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 object-cover grayscale" />
      <div>
        <h4 className="font-heading font-bold uppercase text-white">{testimonial.name}</h4>
        <span className="text-xs text-brand-orange uppercase tracking-wider">{testimonial.role}</span>
      </div>
    </div>
    <p className="text-gray-400 text-sm leading-relaxed italic">"{testimonial.content}"</p>
  </motion.div>
);

const AccordionItem: React.FC<{ item: FaqItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => (
  <div className="border-b border-white/10">
    <button 
      onClick={onClick}
      className="w-full flex justify-between items-center py-6 text-left hover:text-brand-orange transition-colors group"
    >
      <span className={`font-heading text-lg font-medium uppercase ${isOpen ? 'text-brand-orange' : 'text-white'}`}>
        {item.question}
      </span>
      <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45 text-brand-orange' : 'text-gray-500'}`}>
        <X className="rotate-45" size={20} /> {/* Using X rotated 45deg to make a plus, normal X to close */}
      </span>
    </button>
    <motion.div 
      initial={false}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      className="overflow-hidden"
    >
      <p className="pb-6 text-gray-400 leading-relaxed max-w-2xl">
        {item.answer}
      </p>
    </motion.div>
  </div>
);

// --- MAIN PAGE ---

function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Add the X icon component specifically for the Accordion since I reused X above
  const PlusIcon = ({ isOpen }: { isOpen: boolean }) => (
      <div className="relative w-4 h-4">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-current transform -translate-y-1/2" />
          <div className={`absolute top-0 left-1/2 w-0.5 h-full bg-current transform -translate-x-1/2 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`} />
      </div>
  );

  return (
    <div className="min-h-screen bg-brand-black text-brand-light font-body selection:bg-brand-orange selection:text-black overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym Background" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h2 className="font-heading text-brand-orange font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
              Performance & Estética
            </h2>
            <h1 className="font-heading text-5xl md:text-8xl font-bold uppercase leading-[0.9] text-white mb-8">
              Construa um corpo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">De Respeito</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed border-l-2 border-brand-orange pl-6">
              Método exclusivo focado em hipertrofia, definição e performance atlética. Sem atalhos. Apenas estratégia e suor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Iniciar Consultoria
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('method')?.scrollIntoView({ behavior: 'smooth' })}>
                Conhecer Método
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-brand-orange to-transparent mx-auto"></div>
        </motion.div>
      </section>

      {/* STATS STRIP */}
      <TierLock requiredTier="professional">
        <div className="border-y border-white/10 bg-brand-dark">
          <div className="container mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statsData.map((stat, i) => (
              <AnimatedStat key={i} {...stat} />
            ))}
          </div>
        </div>
      </TierLock>

      {/* METHODOLOGY / ABOUT */}
      <TierLock requiredTier="professional">
        <section id="method" className="py-24 bg-brand-black relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-orange z-0"></div>
                <img
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop"
                  alt="Trainer"
                  className="relative z-10 w-full h-[600px] object-cover grayscale brightness-75 contrast-125"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-orange z-0"></div>
              </motion.div>

              <div>
                <SectionHeading subtitle="Filosofia" title="Disciplina vence Motivação" />
                <div className="space-y-6 text-gray-400">
                  <p className="text-lg">
                    A maioria das pessoas falha porque depende de motivação. Eu ensino disciplina. Meu trabalho não é apenas te passar uma série de exercícios, é reestruturar sua mentalidade para o sucesso.
                  </p>
                  <p>
                    Utilizo uma abordagem baseada em evidências científicas, combinando periodização de treino avançada com estratégias nutricionais flexíveis. O objetivo é criar um físico estético, funcional e duradouro.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    {['Hipertrofia Maximizada', 'Perda de Gordura Real', 'Correção Postural', 'Força Funcional'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-brand-orange"></div>
                        <span className="font-heading uppercase font-medium text-white tracking-wide">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8">
                    <div className="font-heading font-bold text-xl text-white">CARLOS "IRON" MENDES</div>
                    <div className="text-brand-orange text-sm uppercase tracking-wider">Head Coach & Founder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </TierLock>

      {/* SERVICES */}
      <TierLock requiredTier="professional">
        <section id="services" className="py-24 bg-brand-dark">
          <div className="container mx-auto px-4">
            <SectionHeading subtitle="O que ofereço" title="Planos de Alta Performance" align="center" />

            <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
              {services.map((service, i) => (
                <ServiceCard key={i} service={service} index={i} />
              ))}
            </div>
          </div>
        </section>
      </TierLock>

      {/* RESULTS / TESTIMONIALS */}
      <TierLock requiredTier="professional">
        <section id="results" className="py-24 bg-brand-black">
          <div className="container mx-auto px-4">
            <SectionHeading subtitle="Prova Social" title="Resultados Reais" />

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {testimonials.map((t, i) => (
                <TestimonialCard key={i} testimonial={t} index={i} />
              ))}
            </div>
          </div>
        </section>
      </TierLock>

      {/* FAQ */}
      <TierLock requiredTier="professional">
        <section id="faq" className="py-24 bg-brand-dark">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading subtitle="Dúvidas" title="Perguntas Frequentes" align="center" />

            <div className="mt-12 border-t border-white/10">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  item={faq}
                  isOpen={openFaqIndex === i}
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </section>
      </TierLock>

      {/* LEAD CAPTURE / CONTACT */}
      <section id="contact" className="py-24 bg-brand-orange relative overflow-hidden">
        {/* Abstract pattern background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase leading-tight text-black mb-6">
                Pronto para <br/>mudar de vida?
              </h2>
              <p className="text-black/80 text-lg mb-8 max-w-md font-medium">
                As vagas são limitadas para garantir a qualidade do acompanhamento. Preencha o formulário para aplicar para uma vaga na consultoria.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:cliente@exemplo.com.br" className="flex items-center gap-4 text-black font-medium hover:text-white transition-colors">
                  <div className="bg-black text-white p-3">
                    <Mail size={20} />
                  </div>
                  <span>cliente@exemplo.com.br</span>
                </a>
                <a href="https://instagram.com/cliente_academia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-black font-medium hover:text-white transition-colors">
                  <div className="bg-black text-white p-3">
                    <Instagram size={20} />
                  </div>
                  <span>@muscleperse.coach</span>
                </a>
              </div>
            </div>

            <div className="bg-black p-8 md:p-12 relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/5"></div>
              <h3 className="font-heading text-2xl text-white uppercase mb-8 border-b border-white/10 pb-4">
                Formulário de Aplicação
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-brand-orange uppercase tracking-widest">Nome</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-white/30 text-white py-3 focus:outline-none focus:border-brand-orange transition-colors rounded-none placeholder-gray-700"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-brand-orange uppercase tracking-widest">Telefone</label>
                    <input 
                      type="tel" 
                      className="w-full bg-transparent border-b border-white/30 text-white py-3 focus:outline-none focus:border-brand-orange transition-colors rounded-none placeholder-gray-700"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-brand-orange uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-white/30 text-white py-3 focus:outline-none focus:border-brand-orange transition-colors rounded-none placeholder-gray-700"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-brand-orange uppercase tracking-widest">Objetivo Principal</label>
                  <select className="w-full bg-transparent border-b border-white/30 text-white py-3 focus:outline-none focus:border-brand-orange transition-colors rounded-none appearance-none cursor-pointer">
                    <option className="bg-brand-black">Hipertrofia (Ganho de Massa)</option>
                    <option className="bg-brand-black">Emagrecimento (Perda de Gordura)</option>
                    <option className="bg-brand-black">Performance Atlética</option>
                    <option className="bg-brand-black">Saúde e Qualidade de Vida</option>
                  </select>
                </div>

                <Button fullWidth className="mt-4">
                  Enviar Aplicação
                </Button>
                
                <p className="text-center text-gray-500 text-xs mt-4">
                  Entraremos em contato em até 24h úteis.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-black border-t border-white/10 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2 font-heading font-bold text-2xl tracking-tighter text-white">
                <Dumbbell className="text-brand-orange" size={24} />
                MUSCLE<span className="text-brand-orange">PERSE</span>
              </div>
              <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                Transformando corpos e mentes através da disciplina inegociável. 
                Consultoria especializada em alta performance.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-bold text-white uppercase tracking-widest text-sm mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                <li><a href="#method" className="text-gray-400 hover:text-brand-orange transition-colors text-sm uppercase tracking-wider">Metodologia</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-brand-orange transition-colors text-sm uppercase tracking-wider">Serviços</a></li>
                <li><a href="#results" className="text-gray-400 hover:text-brand-orange transition-colors text-sm uppercase tracking-wider">Resultados</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-brand-orange transition-colors text-sm uppercase tracking-wider">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white uppercase tracking-widest text-sm mb-6">Social</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com/cliente_academia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange hover:text-black transition-all">
                  <Instagram size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange hover:text-black transition-all">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-xs uppercase tracking-wider">
              © {new Date().getFullYear()} Muscle Perse Personal Training.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
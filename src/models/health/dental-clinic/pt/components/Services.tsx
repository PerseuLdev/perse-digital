import React from 'react';
import { ScanFace, HeartPulse, Sparkles, Stethoscope, Briefcase, ShieldCheck, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Implantes Dentários',
    description: 'Recupere a segurança de sorrir com implantes de titânio ou cerâmica de padrão internacional.',
    icon: <Briefcase size={28} />
  },
  {
    id: 2,
    title: 'Invisalign',
    description: 'O aparelho transparente mais avançado do mundo para alinhar seus dentes com discrição.',
    icon: <ScanFace size={28} />
  },
  {
    id: 3,
    title: 'Lentes de Contato',
    description: 'Transformação estética do sorriso com lâminas ultrafinas de porcelana.',
    icon: <Sparkles size={28} />
  },
  {
    id: 4,
    title: 'Check-up Digital',
    description: 'Diagnóstico preciso com câmeras intraorais que aumentam a imagem em até 60x.',
    icon: <Stethoscope size={28} />
  },
  {
    id: 5,
    title: 'Harmonização Facial',
    description: 'Procedimentos como botox e preenchimento para equilibrar a estética da face.',
    icon: <HeartPulse size={28} />
  },
  {
    id: 6,
    title: 'Clareamento Laser',
    description: 'Tecnologia que garante dentes mais brancos em menos tempo e com menor sensibilidade.',
    icon: <ShieldCheck size={28} />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decor for Glassmorphism */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-teal-200/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200/40 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Nossas Especialidades</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Tratamentos de Alta Performance</h2>
          <p className="text-slate-600 text-lg">
            Oferecemos uma gama completa de tratamentos odontológicos, realizados por especialistas dedicados à sua saúde e bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group relative overflow-hidden rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-2
                         bg-white/60 backdrop-blur-xl border border-white/60 shadow-lg hover:shadow-2xl hover:shadow-teal-100/50"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-50/50 to-teal-100/50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500 pointer-events-none" />
              
              <div className="relative bg-white/80 w-14 h-14 rounded-2xl flex items-center justify-center text-teal-600 mb-6 shadow-sm border border-white group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="relative text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="relative text-slate-600 leading-relaxed text-base mb-6">
                {service.description}
              </p>

              <div className="relative flex items-center text-teal-600 font-semibold text-sm group-hover:translate-x-2 transition-transform cursor-pointer">
                Saiba mais <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { SmilePlus, Instagram, Facebook, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-8 px-6 bg-slate-50 border-t border-slate-200 text-slate-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-slate-800">
              <div className="bg-gradient-to-tr from-teal-500 to-emerald-500 p-2 rounded-full shadow-sm">
                <SmilePlus size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold tracking-wide">Odonto Perse</span>
            </div>
            <p className="text-sm leading-relaxed">
              Transformando vidas através de sorrisos saudáveis e confiantes com tecnologia de ponta e atendimento humanizado.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-teal-600 transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-teal-600 transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="hover:text-teal-600 transition-colors">Tratamentos</a></li>
              <li><a href="#team" className="hover:text-teal-600 transition-colors">Equipe</a></li>
              <li><a href="#contact" className="hover:text-teal-600 transition-colors">Agendar</a></li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Tratamentos</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-teal-600 transition-colors">Implantes</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Invisalign</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Clareamento</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Harmonização</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Lentes de Contato</a></li>
            </ul>
          </div>

          {/* Contact Mini */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-teal-500 mt-0.5 shrink-0" />
                <span>Av. Paulista, 1000<br/>São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-teal-500 shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-teal-500 shrink-0" />
                <span>contato@odontoperse.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <p>&copy; {new Date().getFullYear()} Odonto Perse. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-teal-600 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
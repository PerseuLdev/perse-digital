import React from 'react';
import { Scale, Instagram, Linkedin, Mail, MapPin, Phone, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-neutral-900 text-neutral-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Scale className="h-8 w-8 text-gold-500" />
              <span className="font-serif text-2xl font-bold text-white tracking-wide">
                Carlos Silva<span className="text-gold-500">.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Advocacia moderna focada em resultados e na proteção intransigente dos direitos de nossos clientes. Atendimento em todo território nacional.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white hover:text-gold-500 transition-colors bg-neutral-900 p-2 rounded-full hover:bg-neutral-800"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white hover:text-gold-500 transition-colors bg-neutral-900 p-2 rounded-full hover:bg-neutral-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contato@carlosadvocacia.com" 
                className="text-white hover:text-gold-500 transition-colors bg-neutral-900 p-2 rounded-full hover:bg-neutral-800"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#inicio" className="hover:text-gold-500 transition-colors flex items-center gap-2">Início</a></li>
              <li><a href="#sobre" className="hover:text-gold-500 transition-colors flex items-center gap-2">Sobre Mim</a></li>
              <li><a href="#depoimentos" className="hover:text-gold-500 transition-colors flex items-center gap-2">Depoimentos</a></li>
              <li><a href="#blog" className="hover:text-gold-500 transition-colors flex items-center gap-2">Blog Jurídico</a></li>
              <li><a href="#contato" className="hover:text-gold-500 transition-colors flex items-center gap-2">Agendar Consulta</a></li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Áreas de Atuação</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#areas" className="hover:text-gold-500 transition-colors">Direito Civil e Contratos</a></li>
              <li><a href="#areas" className="hover:text-gold-500 transition-colors">Direito Trabalhista</a></li>
              <li><a href="#areas" className="hover:text-gold-500 transition-colors">Direito de Família</a></li>
              <li><a href="#areas" className="hover:text-gold-500 transition-colors">Direito Criminal</a></li>
              <li><a href="#areas" className="hover:text-gold-500 transition-colors">Direito Digital</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a 
                    href="https://maps.google.com/?q=Av.+Paulista,1000,São+Paulo" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-start gap-3 hover:text-gold-500 transition-colors group"
                >
                    <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 group-hover:text-white transition-colors" />
                    <span>Av. Paulista, 1000, Sala 12<br/>São Paulo - SP</span>
                </a>
              </li>
              <li>
                <a 
                    href="https://wa.me/5511999999999" 
                    target="_blank"
                    className="flex items-center gap-3 hover:text-gold-500 transition-colors group"
                >
                    <Phone className="w-5 h-5 text-gold-500 flex-shrink-0 group-hover:text-white transition-colors" />
                    <span>(11) 99999-9999</span>
                </a>
              </li>
              <li>
                <a 
                    href="mailto:contato@carlosadvocacia.com" 
                    className="flex items-center gap-3 hover:text-gold-500 transition-colors group"
                >
                    <Mail className="w-5 h-5 text-gold-500 flex-shrink-0 group-hover:text-white transition-colors" />
                    <span>contato@carlosadvocacia.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
          <p>&copy; {new Date().getFullYear()} Carlos Silva Advocacia. Todos os direitos reservados. OAB/SP 000.000.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
             <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
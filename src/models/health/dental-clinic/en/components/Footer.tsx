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
              Transforming lives through healthy and confident smiles with cutting-edge technology and humanized care.
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
            <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-teal-600 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-teal-600 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-teal-600 transition-colors">Treatments</a></li>
              <li><a href="#team" className="hover:text-teal-600 transition-colors">Team</a></li>
              <li><a href="#contact" className="hover:text-teal-600 transition-colors">Schedule</a></li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Treatments</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-teal-600 transition-colors">Implants</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Invisalign</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Whitening</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Harmonization</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Contact Lenses</a></li>
            </ul>
          </div>

          {/* Contact Mini */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contact</h4>
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
          <p>&copy; {new Date().getFullYear()} Odonto Perse. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-teal-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

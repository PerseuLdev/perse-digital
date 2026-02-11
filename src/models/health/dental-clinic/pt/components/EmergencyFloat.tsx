import React from 'react';
import { Phone } from 'lucide-react';

const EmergencyFloat: React.FC = () => {
  return (
    <a 
      href="tel:+5511999999999"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-0 hover:gap-3 transition-all duration-500 flex-row-reverse"
      aria-label="Emergência 24 horas"
    >
      <div className="bg-red-500 text-white p-4 rounded-full shadow-lg shadow-red-500/30 animate-pulse group-hover:animate-none group-hover:bg-red-600 transition-colors">
        <Phone size={24} />
      </div>
      
      <div className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out">
        <div className="bg-white/90 backdrop-blur-md border border-red-100 text-red-600 px-4 py-2 rounded-l-2xl rounded-br-2xl shadow-lg whitespace-nowrap">
          <p className="font-bold text-sm">Emergência 24h</p>
          <p className="text-xs text-slate-500">Clique para ligar</p>
        </div>
      </div>
    </a>
  );
};

export default EmergencyFloat;
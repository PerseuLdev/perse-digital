import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import Button from './Button';
import FadeIn from './FadeIn';

const MapSection: React.FC = () => {
  // Avenida Paulista, 1000 - São Paulo (Coordinates for iframe)
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.145749323067!2d-46.65495502369651!3d-23.56321017880593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1709923423423!5m2!1spt-BR!2sbr";
  
  const googleMapsLink = "https://www.google.com/maps/search/?api=1&query=Av.+Paulista,+1000+-+Bela+Vista,+São+Paulo+-+SP";

  return (
    <section className="py-12 pb-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/50 group">
            
            {/* Map Iframe with custom filter to match site aesthetic */}
            <iframe 
              src={mapSrc} 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1) opacity(0.9)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full transition-all duration-500 group-hover:scale-105 group-hover:filter-none"
              title="Localização Odonto Perse"
            ></iframe>

            {/* Glass Overlay Card */}
            <div className="absolute bottom-0 left-0 w-full md:w-auto md:bottom-8 md:left-8 p-4 md:p-0">
              <div className="bg-white/80 backdrop-blur-xl backdrop-saturate-150 border border-white/60 p-8 rounded-3xl shadow-2xl md:max-w-sm w-full animate-slide-up">
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                      <MapPin className="text-teal-500" size={20} />
                      Nossa Localização
                    </h3>
                    <p className="text-slate-500 text-sm mt-1">Fácil acesso pelo metrô Trianon-Masp</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    Av. Paulista, 1000 - 15º Andar<br />
                    Bela Vista, São Paulo - SP<br />
                    CEP: 01310-100
                  </p>

                  <div className="pt-2">
                    <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                      <Button variant="primary" className="w-full !justify-between group-hover:shadow-teal-500/40">
                        Traçar Rota
                        <Navigation size={18} className="group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Top Right Floating Badge */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/50 text-xs font-bold text-teal-700 hidden md:flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Estacionamento Conveniado
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default MapSection;
'use client';

import React from 'react';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
  const whatsappUrl = 'https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20na%20Lumina%20Estética.';

  return (
    <section id="contact" className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

          {/* Info */}
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-white">
            <h2 className="text-3xl font-semibold mb-4">Agende Sua Avaliação</h2>
            <p className="text-stone-400 mb-10 leading-relaxed">
              Entre em contato para tirar dúvidas ou marcar seu horário.
              Estamos ansiosas para realçar sua beleza natural.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#C89B6B]/20 p-3 rounded-lg text-[#C89B6B] flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Endereço</h4>
                  <p className="text-stone-400">
                    Av. Paulista, 1000 - Bela Vista<br />
                    São Paulo - SP, 01310-100
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#C89B6B]/20 p-3 rounded-lg text-[#C89B6B] flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Contato</h4>
                  <p className="text-stone-400">
                    (11) 99999-9999<br />
                    contato@lumina.com.br
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#C89B6B]/20 p-3 rounded-lg text-[#C89B6B] flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Horário</h4>
                  <p className="text-stone-400">
                    Seg - Sex: 09:00 - 19:00<br />
                    Sáb: 09:00 - 14:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#C89B6B]/20 p-3 rounded-lg text-[#C89B6B] flex-shrink-0">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Instagram</h4>
                  <p className="text-stone-400">@luminaestetica</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="primary" className="w-full md:w-auto !px-10 !py-4">
                  Falar no WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="md:w-1/2 h-96 md:h-auto bg-stone-200 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975778841443!2d-46.65431668502223!3d-23.56391448468149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt!2sbr!4v1620000000000!5m2!1spt!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="grayscale hover:grayscale-0 transition-all duration-500"
              title="Localização Lumina Estética"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

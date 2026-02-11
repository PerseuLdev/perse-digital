'use client';

import React, { useState } from 'react';
import Button from './Button';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import FadeIn from './FadeIn';

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma avaliação na Odonto Perse.";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending
    const msg = `Nome: ${formData.name}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0AMensagem: ${formData.message}`;
    window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-teal-200/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 rounded-[3rem] overflow-hidden shadow-2xl bg-white/40 backdrop-blur-2xl border border-white/60">
          
          {/* Info Side (Glassy Gradient) */}
          <div className="bg-gradient-to-br from-teal-500/90 to-emerald-600/90 backdrop-blur-md p-12 text-white relative overflow-hidden">
            {/* Abstract circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

            <div className="relative z-10 space-y-8 h-full flex flex-col justify-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
                <p className="text-teal-50 opacity-90 text-lg leading-relaxed">
                  Agende sua consulta hoje mesmo e dê o primeiro passo para o sorriso que você sempre sonhou.
                </p>
              </div>

              <div className="space-y-8">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 hover:opacity-80 transition-opacity group">
                  <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-colors">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">WhatsApp (Agendamento)</h4>
                    <p className="opacity-80">(11) 99999-9999</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/20">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Endereço</h4>
                    <p className="opacity-80">Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/20">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="opacity-80">contato@odontoperse.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/20">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Horário</h4>
                    <p className="opacity-80">Seg - Sex: 08:00 - 19:00<br />Sáb: 08:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 lg:p-16 flex flex-col justify-center bg-white/30">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-slate-600 text-sm font-medium ml-1">Nome</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/50 border border-white/60 backdrop-blur-sm rounded-xl px-5 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white/80 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all shadow-sm"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-600 text-sm font-medium ml-1">Telefone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/50 border border-white/60 backdrop-blur-sm rounded-xl px-5 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white/80 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all shadow-sm"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-slate-600 text-sm font-medium ml-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/50 border border-white/60 backdrop-blur-sm rounded-xl px-5 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white/80 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all shadow-sm"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-slate-600 text-sm font-medium ml-1">Mensagem</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white/50 border border-white/60 backdrop-blur-sm rounded-xl px-5 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white/80 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all shadow-sm resize-none"
                  placeholder="Gostaria de agendar uma avaliação..."
                ></textarea>
              </div>

              <Button variant="primary" type="submit" className="w-full h-12 shadow-lg shadow-teal-500/20">
                Enviar via WhatsApp
              </Button>
            </form>
          </div>

        </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
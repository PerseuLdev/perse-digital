'use client';


import React, { useState } from 'react';
import Reveal from './Reveal.tsx';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Orçamento de Cuidado',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const salesNumber = "5514991071072";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const baseMessage = `Olá! Gostaria de um orçamento para serviços de enfermagem/cuidador. %0A%0A*Meus Dados:* %0A*Nome:* ${formData.name} %0A*Telefone:* ${formData.phone} %0A*Mensagem:* ${formData.message}`;
    const waLink = `https://wa.me/${salesNumber}?text=${baseMessage}`;
    
    setFormSubmitted(true);
    
    setTimeout(() => {
      window.open(waLink, '_blank');
      setFormSubmitted(false);
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <Reveal animation="reveal-left" className="lg:w-1/2">
            <h2 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">Entre em Contato</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">Precisa de um Profissional de Confiança?</h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Estou pronto para atender sua família com agilidade, técnica e carinho. Atendo emergências e plantões programados.
            </p>

            <div className="space-y-6">
              <a href={`https://wa.me/${salesNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-emerald-400 border border-white/10 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.131c1.53.913 3.375 1.395 5.262 1.396 5.835 0 10.583-4.747 10.586-10.582.002-2.828-1.1-5.485-3.102-7.488s-4.66-3.106-7.485-3.108c-5.835 0-10.582 4.747-10.585 10.582-.001 1.96.512 3.878 1.482 5.556l-.97 3.542 3.633-.953zm10.211-7.141c-.269-.134-1.597-.788-1.844-.878-.247-.09-.427-.134-.607.134-.18.269-.696.878-.853 1.057-.157.18-.314.202-.583.067-.269-.134-1.138-.419-2.167-1.338-.801-.715-1.342-1.597-1.499-1.866-.157-.269-.017-.414.118-.548.121-.121.269-.314.404-.471.134-.157.18-.269.269-.449.09-.18.045-.337-.022-.471-.067-.134-.607-1.462-.831-2.001-.219-.527-.441-.454-.607-.462-.157-.006-.337-.007-.517-.007s-.472.067-.719.337c-.247.269-.944.922-.944 2.248s.966 2.608 1.1 2.788c.134.18 1.9 2.901 4.603 4.069.643.278 1.144.444 1.535.569.646.205 1.234.176 1.698.107.517-.077 1.597-.652 1.821-1.282.225-.629.225-1.169.157-1.282-.067-.113-.247-.18-.517-.314z"/></svg>
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">WhatsApp Direto</p>
                  <p className="text-xl font-bold">(14) 99107-1072</p>
                </div>
              </a>
            </div>
          </Reveal>

          <div className="lg:w-1/2">
            <Reveal animation="reveal-right">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl text-slate-900">
                <h4 className="text-2xl font-bold mb-6">Agendar Avaliação</h4>
                {formSubmitted ? (
                  <div className="bg-emerald-50 text-emerald-700 p-10 rounded-3xl text-center animate-fadeIn">
                    <p className="font-bold text-xl mb-2">Iniciando Atendimento!</p>
                    <p className="text-sm">Abrindo o WhatsApp para conversarmos...</p>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="space-y-1">
                      <label className="text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">Seu Nome</label>
                      <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Nome do familiar responsável" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-emerald-500 transition-all outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">Telefone</label>
                      <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="(00) 00000-0000" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-emerald-500 transition-all outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">Como posso ajudar?</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Descreva brevemente a necessidade do paciente..." className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-emerald-500 transition-all outline-none"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-5 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 active:scale-95">
                      Falar Comigo
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


import React, { useState } from 'react';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    objective: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "5514991071072";
    const text = `Olá! Meu nome é ${formData.name}.

📧 Email: ${formData.email}
📱 Telefone: ${formData.phone}
🎯 Objetivo: ${formData.objective}

Mensagem: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Contato</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">VAMOS COMEÇAR SUA JORNADA</h3>
          <p className="text-slate-600 text-lg">
            Preencha o formulário abaixo e receba uma avaliação gratuita. Respondo em até 2 horas.
          </p>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          <Reveal animation="reveal">
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Objetivo Principal</label>
                  <select
                    name="objective"
                    value={formData.objective}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all bg-white"
                  >
                    <option value="">Selecione...</option>
                    <option value="Emagrecimento">Emagrecimento</option>
                    <option value="Hipertrofia">Ganho de Massa Muscular</option>
                    <option value="Definição">Definição Muscular</option>
                    <option value="Performance">Performance Atlética</option>
                    <option value="Qualidade de Vida">Qualidade de Vida</option>
                    <option value="Competição">Preparação para Competição</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 mb-2">Mensagem (Opcional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all resize-none"
                  placeholder="Conte um pouco sobre sua rotina, experiência com treinos, etc..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-500 text-white px-8 py-5 rounded-xl font-bold text-lg transition-all shadow-xl hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.131c1.53.913 3.375 1.395 5.262 1.396 5.835 0 10.583-4.747 10.586-10.582.002-2.828-1.1-5.485-3.102-7.488s-4.66-3.106-7.485-3.108c-5.835 0-10.582 4.747-10.585 10.582-.001 1.96.512 3.878 1.482 5.556l-.97 3.542 3.633-.953zm10.211-7.141c-.269-.134-1.597-.788-1.844-.878-.247-.09-.427-.134-.607.134-.18.269-.696.878-.853 1.057-.157.18-.314.202-.583.067-.269-.134-1.138-.419-2.167-1.338-.801-.715-1.342-1.597-1.499-1.866-.157-.269-.017-.414.118-.548.121-.121.269-.314.404-.471.134-.157.18-.269.269-.449.09-.18.045-.337-.022-.471-.067-.134-.607-1.462-.831-2.001-.219-.527-.441-.454-.607-.462-.157-.006-.337-.007-.517-.007s-.472.067-.719.337c-.247.269-.944.922-.944 2.248s.966 2.608 1.1 2.788c.134.18 1.9 2.901 4.603 4.069.643.278 1.144.444 1.535.569.646.205 1.234.176 1.698.107.517-.077 1.597-.652 1.821-1.282.225-.629.225-1.169.157-1.282-.067-.113-.247-.18-.517-.314z" />
                </svg>
                Enviar via WhatsApp
              </button>

              <p className="text-center text-sm text-slate-500 mt-6">
                🔒 Seus dados estão seguros e não serão compartilhados com terceiros.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;

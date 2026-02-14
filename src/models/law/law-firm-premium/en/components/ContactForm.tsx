'use client';

import React, { useState } from 'react';
import { Send, ArrowRight } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "5511999999999";
    const text = `*Nova Solicitação*\n\n*Nome:* ${formData.name}\n*Telefone:* ${formData.phone}\n*Área:* ${formData.area}\n*Msg:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  const inputClasses = "w-full bg-transparent border-b border-neutral-700 text-white py-4 px-0 focus:outline-none focus:border-gold-500 transition-colors placeholder-neutral-600 text-lg font-light";

  return (
    <section className="py-16 md:py-32 bg-[#050505] relative" id="contato">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-neutral-900/30 p-6 md:p-16 rounded-3xl border border-white/5 backdrop-blur-sm relative overflow-hidden">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold-600/10 rounded-full blur-[80px]"></div>

            <div className="relative z-10 text-center mb-16">
                <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Start Now</span>
                <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
                  Ready to resolve this?
                </h2>
                <p className="text-neutral-400 font-light max-w-xl mx-auto">
                    Fill out the form below. Redirection to WhatsApp is automatic to ensure efficiency.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8 md:space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div className="group">
                        <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-gold-500 transition-colors">Name</label>
                        <input 
                            type="text" 
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className={inputClasses}
                            placeholder="Your full name"
                        />
                    </div>
                    <div className="group">
                        <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-gold-500 transition-colors">Phone</label>
                        <input 
                            type="tel" 
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className={inputClasses}
                            placeholder="+1 (000) 000-0000"
                        />
                    </div>
                </div>

                <div className="group">
                    <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-gold-500 transition-colors">Area</label>
                    <select 
                        name="area"
                        required
                        value={formData.area}
                        onChange={handleChange}
                        className={`${inputClasses} cursor-pointer [&>option]:bg-neutral-900`}
                    >
                        <option value="" disabled>Select the area</option>
                        <option value="Civil Law">Civil Law</option>
                        <option value="Labor Law">Labor Law</option>
                        <option value="Criminal Law">Criminal Law</option>
                        <option value="Family Law">Family Law</option>
                        <option value="Corporate Law">Corporate Law</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <div className="group">
                    <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-gold-500 transition-colors">Message</label>
                    <textarea 
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={2}
                        className={`${inputClasses} resize-none`}
                        placeholder="Brief summary of the case..."
                    ></textarea>
                </div>

                <div className="text-center pt-8">
                    <button 
                        type="submit"
                        className="group inline-flex items-center gap-2 md:gap-4 bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gold-400 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(251,185,35,0.3)] hover:scale-105"
                    >
                        <span className="hidden sm:inline">Start Consultation</span>
                        <span className="inline sm:hidden">Send</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
};
'use client';

import React from 'react';
import { HardHat, InstagramLogo, LinkedinLogo, EnvelopeSimple } from '@phosphor-icons/react';

export function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-[#ffde59] flex items-center justify-center flex-shrink-0">
                <HardHat size={20} weight="fill" className="text-zinc-950" />
              </div>
              <span className="text-lg font-bold tracking-tighter text-white">
                Vértice<span className="text-[#ffde59]">.Eng</span>
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-[40ch] mb-6">
              Construindo confiança através da engenharia de precisão. 
              Garantimos prazo, orçamento e qualidade do projeto à entrega das chaves.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                <InstagramLogo size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                <LinkedinLogo size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                <EnvelopeSimple size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-tight">Soluções</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">Projetos Executivos</a></li>
              <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">Turnkey (Chave na Mão)</a></li>
              <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">Reformas Comerciais</a></li>
              <li><a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">Obras Sustentáveis</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-tight">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="#projetos" className="text-sm text-zinc-500 hover:text-white transition-colors">Portfólio</a></li>
              <li><a href="#depoimentos" className="text-sm text-zinc-500 hover:text-white transition-colors">Casos de Sucesso</a></li>
              <li><a href="#faq" className="text-sm text-zinc-500 hover:text-white transition-colors">Dúvidas Frequentes</a></li>
              <li><a href="#contato" className="text-sm text-emerald-400 font-medium hover:text-emerald-300 transition-colors">Fale com a Diretoria</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600 font-medium">
            © {new Date().getFullYear()} Vértice Engenharia. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">Termos de Serviço</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

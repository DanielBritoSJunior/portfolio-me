// src/components/HeroSection.tsx
import React from 'react';
import Botao from '../Botao';

const HeroSection: React.FC = () => {
  return (
    // CONTAINER DA SEÇÃO: Alinhamento à esquerda
    <section className="bg-[#0a192f] text-white min-h-screen flex items-center p-1 pt-24">
      
      {/* CONTAINER DO CONTEÚDO: Margens auto, alinhado à esquerda */}
      <div className="max-w-4xl mx-auto text-left pl-10 md:pl-0"> 
        
        {/* LINHA 1: Olá, meu nome é */}
        <p className="text-sm md:text-base text-teal-400 font-mono mb-1">
            Olá, meu nome é
        </p>
        
        {/* LINHA 2: NOME */}
        <h1 className="text-white text-7xl font-bold mb-4 leading-none"> 
            Daniel Júnior.
        </h1>
        
        {/* LINHA 3: TÍTULO PRINCIPAL */}
        <h2 className="text-gray-400 text-4xl font-semibold mb-8">
            Eu construo soluções Full-Stack acessíveis
        </h2>
        
        {/* LINHA 4: DESCRIÇÃO */}
        <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-lg mb-12">
            Especialista em criar experiências digitais fluidas com <span className="text-teal-400">React</span>, <span className="text-teal-400">Node.js</span> e <span className="text-teal-400">Type-Script.</span>
        </p>
        
        {/* BOTÕES DE AÇÃO (Layout e Estilo Finalizado) */}
        <div className="flex space-x-4"> 
          
          {/* BOTÃO 1: VER PROJETOS (Estilo Outline / Borda) */}
          <Botao 
            href="#projects"
            className="border border-teal-400 text-teal-400 hover:bg-teal-400/10" 
          >
            Ver meus projetos!
          </Botao>

          {/* BOTÃO 2: DOWNLOAD CV (Estilo Sólido / Preenchido) */}
          <Botao 
            href="/caminho/para/seu/curriculo.pdf" 
            download="Daniel-Junior-CV.pdf"
            target="_blank" 
            className="border border-teal-400 text-teal-400 hover:bg-teal-400/10"
          >
            Download CV
          </Botao>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
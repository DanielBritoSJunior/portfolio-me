// src/components/HeroSection.tsx
import React from 'react';
// src/components/HeroSection/index.tsx
import Botao from '../Botao';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#0a192f] text-white min-h-screen flex items-center justify-center p-8 pt-24">
      <div className="max-w-4xl mx-auto text-left">
        <p className="text-sm md:text-base text-teal-400 font-mono mb-4">
          Olá, meu nome é
        </p>
        
        <h1 className="text-4xl md:text-6xl font-bold text-slate-200 mb-2">
          Daniel Júnior.
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-semibold text-slate-400 mb-8">
          Eu construo coisas para a web.
        </h2>
        
        <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl">
          Sou um(a) desenvolvedor(a) de software especializado(a) em criar (e ocasionalmente projetar) experiências digitais excepcionais. Atualmente, estou focado(a) em construir produtos acessíveis e centrados no ser humano em <a href="#" className="text-teal-400 hover:underline">Upstatement</a>.
        </p>
        <div className="mt-12">
          <Botao href="#projects">
            Ver meus projetos!
          </Botao>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
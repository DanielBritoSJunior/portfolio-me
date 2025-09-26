// src/components/About/AboutSection.tsx
import PerfilImage from '../../assets/perfilImage.png'
import React from 'react';

const AboutSection: React.FC = () => {
    // Texto do seu portfólio (tradução do exemplo em inglês para o português)
    const bioText = {
        paragraph1: "Olá! Meu nome é Daniel Júnior e eu gosto de criar coisas que vivem na internet. Meu interesse em desenvolvimento web começou em [ANO] quando decidi tentar editar temas customizados do [Plataforma Antiga] — acontece que 'hackear' um botão de reblog customizado me ensinou muito sobre HTML & CSS!",
        paragraph2: "Avançando para hoje, tive o privilégio de trabalhar em [Agência de Publicidade], uma [Startup], uma [Grande Corporação], e um [Estúdio de Design Liderado por Estudantes]. Meu foco principal hoje em dia é construir produtos acessíveis, inclusivos e experiências digitais em [Nome da Empresa] para uma variedade de clientes.",
        paragraph3: "Recentemente, também lancei um curso que cobre tudo o que você precisa para construir uma aplicação web com a API do Spotify usando Node & React.",
    };

    const technologies = [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        
    ];

    return (
        <section id="about" className="py-20 px-4 mt-10">
            <div className="max-w-7xl mx-auto">
                {/* Título da Seção (Replicando o Estilo da Imagem) */}
                <h2 className="text-4xl text-white mb-10 border-b border-b-gray-700 pb-2 inline-block">
                    <span className="text-teal-400 no-underline">01.</span> Sobre Mim
                </h2>

                {/* Grid de 2 Colunas para Conteúdo e Foto */}
                <div className="grid md:grid-cols-3 gap-12 items-start">
                    
                    {/* Coluna 1: Texto (Ocupa 2/3 da largura) */}
                    <div className="text-lg space-y-4 text-gray-400 md:col-span-2">
                        <p>{bioText.paragraph1.replace('[ANO]', '2012')}</p>
                        <p>{bioText.paragraph2.replace('[Agência de Publicidade]', 'uma agência de publicidade')}</p>
                        <p>{bioText.paragraph3}</p>
                        
                        <p className="text-white pt-4">Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:</p>
                        
                        {/* Lista de Tecnologias */}
                        <ul className="grid grid-cols-2 gap-y-2 list-none p-0 text-sm font-mono">
                            {technologies.map(tech => (
                                <li key={tech} className="text-gray-400 before:content-['▶'] before:mr-2 before:text-teal-400">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Coluna 2: Foto (Ocupa 1/3 da largura) */}
                    <div className="md:col-span-1 flex justify-center md:justify-end mt-8 md:mt-0">
                        <div className="relative w-64 h-64">
                            {/* Fundo color block (teal-400) */}
                            <div className="absolute w-full h-full bg-teal-400 inset-0 translate-x-3 translate-y-3 rounded-md z-0 opacity-80" />
                            
                            {/* Imagem (com filtro de grayscale para o efeito) */}
                            <img
                                src={PerfilImage} // TROQUE PELO CAMINHO DA SUA FOTO
                                alt="Foto de Perfil"
                                className="w-full h-full object-cover rounded-md relative z-10 grayscale hover:grayscale-0 transition duration-500 border-2 border-teal-400"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
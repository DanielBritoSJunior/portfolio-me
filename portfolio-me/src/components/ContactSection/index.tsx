// src/components/ContactSection/index.tsx
import { FaGithub, FaLinkedin, FaInstagram,} from 'react-icons/fa';
import React from 'react';

const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/DanielBritoSJunior' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/daniel-junior9' }, 
    { icon: FaInstagram, url: 'https://www.instagram.com/daniel.junior_9/' }
];

const ContactSection: React.FC = () => {
    
    // O seu endereço de e-mail
    const emailAddress = 'danielbritodasilvajunior@gmail.com';

    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-xl mx-auto text-center">

                {/* Título Principal (Get In Touch) */}
                <h2 className="text-5xl md:text-6xl text-white font-bold mb-6">
                    Entre em Contato
                </h2>

                {/* Texto de Apoio */}
                <p className="text-gray-400 text-lg mb-12">
                    Minha caixa de entrada está sempre aberta para novas oportunidades, feedback sobre projetos, ou para trocar uma ideia sobre React e Next.js. Mande um 'Olá' e te responderei o mais rápido possível!
                </p>

                {/* BOTÃO MAILTO (Ação principal) */}
                <a
                    href={`mailto:${emailAddress}`} // ⬅️ O LINK MAILTO É AQUI!
                    className="
                        border-2 border-teal-400 text-teal-400 
                        py-3 px-8 inline-block 
                        rounded-md hover:bg-teal-400/10 transition duration-300
                        font-mono text-lg
                    "
                >
                    Dizer Olá
                </a>
            </div>

            {/* ⬇️ 2.ÍCONES DE REDES SOCIAIS ⬇️ */}
            <div className="mt-20 flex justify-center space-x-6">
                {socialLinks.map((link) => (
                    <a 
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-teal-400 transition duration-300"
                    >
                        <link.icon className="w-8 h-8"/> 
                    </a>
                ))}
            </div>

            {/* 3. Rodapé */}
            <div className="mt-8 text-center pt-4">
            <p className="text-sm text-gray-500">
                Desenvolvido por DanielBritoSJunior. 
                Design inspirado em 
                <a 
                    href="https://brittanychiang.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className=" 
                        hover:underline 
                        hover:text-teal-300 
                        transition 
                        duration-300 
                        ml-1
                    "
                >
                    Brittany Chiang
                </a>.
            </p>
        </div>
        </section>
    );
};

export default ContactSection;
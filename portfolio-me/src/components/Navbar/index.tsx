import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-0.5 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

    const navItems = (
        <>
            <li><a href="#about" className="hover:text-teal-400 transition"><span className="text-teal-400 no-underline">01.</span> Sobre mim</a></li>
            <li><a href="#projects" className="hover:text-teal-400 transition"><span className="text-teal-400 no-underline">02.</span> Projetos</a></li>
            <li><a href="#contact" className="hover:text-teal-400 transition"><span className="text-teal-400 no-underline">03.</span> Contato</a></li>
        </>
    );

    return (
        <nav className="
            bg-[#0a192f]/90 
            backdrop-blur-md 
            fixed top-0 w-full z-30 
            // ⬇️ CORREÇÃO: Usar justify-between e padding uniforme ⬇️
            flex justify-between items-center px-6 md:px-10 py-6 text-sm text-gray-300
        ">
            
            {/* ⬇️ 1. LOGO NO CANTO ESQUERDO (DBSJ) ⬇️ */}
            <div className="hidden lg:block"> {/* Usar lg para evitar conflito com hambúrguer no mobile */}
                <span className="
                    text-lg font-mono text-teal-400 
                    select-none  
                    py-1 px-2 leading-none
                ">
                    @DanielBritoSJunior
                </span>
            </div>
            {/* ⬆️ FIM LOGO ESQUERDO ⬆️ */}
            
            
            {/* ⬇️ 2. CONTEÚDO À DIREITA (Links e Menu Hambúrguer) ⬇️ */}
            <div className="flex items-center space-x-4">
                
                {/* LINKS DESKTOP: hidden no mobile */}
                <div className="hidden lg:block">
                    <ul className="flex space-x-6 items-center">
                        {navItems}
                    </ul>
                </div>
                
                {/* MENU HAMBÚRGUER: visível só no mobile, no canto direito */}
                <button 
                    className="flex flex-col h-12 w-12 justify-center items-center lg:hidden z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={`${genericHamburgerLine} ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
                    <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : ""}`} />
                    <div className={`${genericHamburgerLine} ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
                </button>
            </div>
            {/* ⬆️ FIM CONTEÚDO DIREITO ⬆️ */}


            {/* 3. Menu Mobile Dropdown (Painel que desliza) */}
            <div 
                className={`
                    fixed top-0 right-0 w-2/3 h-screen lg:hidden 
                    bg-[#0a192f] transform transition-transform duration-500
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                    pt-24
                `}
                style={{ zIndex: 40 }}
            >
                <ul className="flex flex-col items-center space-y-8 text-xl">
                    {navItems}
                </ul>
            </div>
            
        </nav>
    );
}

export default Navbar;
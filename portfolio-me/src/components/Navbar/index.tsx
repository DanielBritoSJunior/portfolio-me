import React, { useState } from 'react'; // 1. Importe o useState

const Navbar: React.FC = () => {
    // Estado para controlar se o menu mobile está aberto
    const [isOpen, setIsOpen] = useState(false);
    
    // Classe reutilizável para as barras do ícone
    const genericHamburgerLine = `h-0.5 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

    // Links de navegação (para facilitar a reutilização)
    const navItems = (
        <>
            <li><a href="#about" className="hover:text-teal-400 transition">01. About</a></li>
            <li><a href="#experience" className="hover:text-teal-400 transition">02. Experience</a></li>
            <li><a href="#projects" className="hover:text-teal-400 transition">03. Work</a></li>
            <li>
                <a 
                    href="/caminho/para/seu/curriculo.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        border border-teal-400 
                        text-teal-400 
                        py-2 px-4 
                        rounded-md 
                        hover:bg-teal-400/10 
                        transition
                    "
                >
                    Resume
                </a>
            </li>
        </>
    );

    return (
        <nav className="
            bg-[#0a192f]/90 
            backdrop-blur-md 
            fixed top-0 w-full z-30 
            flex justify-end items-center px-6 md:px-10 py-6 text-sm text-gray-300
        ">
            
            {/* 1. Menu Hamburguer (VISÍVEL SÓ NO MOBILE) */}
            <button 
                className="flex flex-col h-12 w-12 justify-center items-center lg:hidden z-50" // lg:hidden esconde no desktop
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* Barras do ícone - classes dinâmicas para animação simples */}
                <div 
                    className={`${genericHamburgerLine} ${
                        isOpen ? "rotate-45 translate-y-2.5" : ""
                    }`}
                />
                <div 
                    className={`${genericHamburgerLine} ${
                        isOpen ? "opacity-0" : ""
                    }`}
                />
                <div 
                    className={`${genericHamburgerLine} ${
                        isOpen ? "-rotate-45 -translate-y-2.5" : ""
                    }`}
                />
            </button>


            {/* 2. Links DESKTOP (ESCONDIDO NO MOBILE) */}
            <div className="hidden lg:block">
                <ul className="flex space-x-6 items-center mr-28">
                    {navItems}
                </ul>
            </div>
            
            {/* 3. Menu Mobile Dropdown (APARECE NO MOBILE) */}
            {/* Classes: fixed inset-0 para cobrir a tela, hidden no desktop, animação com translate-x */}
            <div 
                className={`
                    fixed top-0 right-0 w-2/3 h-screen lg:hidden 
                    bg-[#0a192f] transform transition-transform duration-500
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}
                style={{ paddingTop: '120px' }} // Espaço do topo para a navbar não cobrir o menu
            >
                <ul className="flex flex-col items-center space-y-8 text-xl">
                    {navItems}
                </ul>
            </div>
            
        </nav>
    );
}

export default Navbar;
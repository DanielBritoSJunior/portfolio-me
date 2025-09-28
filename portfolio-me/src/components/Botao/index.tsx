// src/components/Button.tsx

import React from 'react';

// 1. A interface AGORA estende todas as props de um link HTML (<a>)
interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    // Removido: href: string; (já está incluído em AnchorHTMLAttributes)
}

// 2. O componente deve aceitar todas as props restantes (o '...rest')
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
    // 3. Define os estilos PADRÃO do botão
    const defaultClasses = `
        inline-block px-8 py-4 rounded font-mono text-sm font-semibold
        transition duration-300
    `;

    // 4. Estilos do Outline (Borda - Padrão para "Ver meus projetos!")
    const outlineClasses = `
        border-2 border-teal-400 text-teal-400 hover:bg-teal-400/10 
    `;

    // 5. Estilos do Sólido (Preenchido - Padrão para "Download CV")
    const solidClasses = `
        border-2 border-teal-400 text-teal-400 hover:bg-teal-400/10 
    `;

    // Lógica para determinar se o botão é sólido (se tiver a prop 'download') ou outline
    const isDownloadButton = rest.download !== undefined;
    const variantClasses = isDownloadButton ? solidClasses : outlineClasses;

    return (
        // 6. Passa TODAS as props ('...rest') e aplica os estilos
        <a
            {...rest} // ⬅️ IMPORTANTE: Repassa download, className, target, etc.
            className={`${defaultClasses} ${variantClasses} ${rest.className || ''}`}
        >
            {children}
        </a>
    );
};

export default Button;
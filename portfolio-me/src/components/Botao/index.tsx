import React from 'react';

// 1. Define a interface para as props do botão
interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
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
        border-2 border-teal-400 text-teal-400 hover:bg-teal-400/15 
    `;

    // 5. Estilos do Sólido (Preenchido - Padrão para "Download CV")
    const solidClasses = `
        border-2 border-teal-400 text-teal-400 hover:bg-teal-400/15 
    `;

    // Lógica para determinar se o botão é sólido (se tiver a prop 'download') ou outline
    const isDownloadButton = rest.download !== undefined;
    const variantClasses = isDownloadButton ? solidClasses : outlineClasses;

    return (
        <a
            {...rest} // ⬅️ IMPORTANTE: Repassa download, className, target, etc.
            className={`${defaultClasses} ${variantClasses} ${rest.className || ''}`}
        >
            {children}
        </a>
    );
};

export default Button;
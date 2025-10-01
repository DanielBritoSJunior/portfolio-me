// src/components/CustomCursor.tsx

import React, { useState, useEffect } from 'react';

// O cursor será um pequeno círculo semi-transparente e desfocado
const CustomCursor: React.FC = () => {
    // 1. Estado para armazenar as coordenadas do mouse
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Função para atualizar a posição do cursor
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        // Adiciona o listener para o movimento do mouse na janela
        window.addEventListener('mousemove', updateMousePosition);

        // Limpa o listener ao desmontar o componente
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return (
        <div 
            className="
                fixed top-0 left-0 
                w-20 h-20 rounded-full 
                bg-teal-400/12 
                filter blur-xl 
                transition-transform duration-100 ease-out 
                pointer-events-none z-50
            "
            style={{
                // 3. Aplica a posição, centralizando o blob no ponto do mouse
                transform: `translate(${mousePosition.x - 24}px, ${mousePosition.y - 24}px)`
            }}
        />
    );
};

export default CustomCursor;
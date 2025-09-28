// // src/components/CustomCursor.tsx

// import React, { useState, useEffect } from 'react';

// // O cursor será um pequeno círculo semi-transparente e desfocado
// const CustomCursor: React.FC = () => {
//     // 1. Estado para armazenar as coordenadas do mouse
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         // Função para atualizar a posição do cursor
//         const updateMousePosition = (e: MouseEvent) => {
//             setMousePosition({ x: e.clientX, y: e.clientY });
//         };

//         // Adiciona o listener para o movimento do mouse na janela
//         window.addEventListener('mousemove', updateMousePosition);

//         // Limpa o listener ao desmontar o componente
//         return () => window.removeEventListener('mousemove', updateMousePosition);
//     }, []);

//     return (
//         // 2. O elemento visual que persegue o cursor
//         // fixed: Garante que ele fique fixo na tela
//         // pointer-events-none: Crucial para que o cursor não bloqueie cliques
//         <div 
//             className="
//                 fixed top-0 left-0 
//                 w-12 h-12 rounded-full 
//                 bg-teal-400/50 
//                 filter blur-xl 
//                 transition-transform duration-100 ease-out 
//                 pointer-events-none z-50
//             "
//             style={{
//                 // 3. Aplica a posição, centralizando o blob no ponto do mouse
//                 transform: `translate(${mousePosition.x - 24}px, ${mousePosition.y - 24}px)`
//             }}
//         />
//     );
// };

// export default CustomCursor;
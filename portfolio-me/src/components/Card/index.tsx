// // components/Card.tsx

// import React from 'react';

// // Defina a interface para as props que o componente vai receber
// export interface ProjectCardProps {
//   title: string;
//   description: string;
//   image: string;
//   githubLink: string;
//   liveLink: string;
//   technologies: string[];
// }

// const Card: React.FC<ProjectCardProps> = ({ title, description, image, githubLink, liveLink }) => {
//   return (
//     // 1. Container Principal do Card:
//     // Efeito hover: borda AGORA é teal-400
//     <div className="bg-[#0A192F] p-6 rounded-lg shadow-xl border border-transparent hover:border-teal-400 transition duration-300 flex flex-col h-full">
      
//       {/* 2. Imagem do Projeto */}
//       <img 
//         src={image} 
//         alt={title} 
//         className="w-full h-48 object-cover rounded-md mb-4" 
//       /> 
      
//       <div className="card-content flex flex-col flex-grow">
        
//         {/* 3. Título: Cor de destaque AGORA é teal-400 */}
//         <h3 className="text-xl font-bold text-teal-400 mb-2">{title}</h3>
        
//         {/* 4. Descrição: Cor cinza suave */}
//         <p className="text-gray-400 mb-4 text-sm flex-grow">{description}</p>
        
//         {/* 5. Botões de Ação */}
//         <div className="card-buttons flex space-x-4 mt-auto pt-2">
          
//           {/* Botão Ver Código (GitHub): Estilo link, hover AGORA é teal-400 */}
//           <a 
//             href={githubLink} 
//             target="_blank" 
//             rel="noopener noreferrer"
//             // Fundo: teal-400, Texto: a cor escura do card (#0A192F) para alto contraste
//             className="text-sm font-semibold text-teal-400 hover:bg-teal-400 hover:text-[#0A192F] border border-teal-400 py-1 px-3 rounded transition duration-300"
//           >
//             Ver Código
//           </a>
          
//           {/* Botão Ver Projeto (Live): Estilo Outline (borda), hover AGORA preenche com teal-400 */}
//           <a 
//             href={liveLink} 
//             target="_blank" 
//             rel="noopener noreferrer"
//             // Fundo: teal-400, Texto: a cor escura do card (#0A192F) para alto contraste
//             className="text-sm font-semibold text-teal-400 hover:bg-teal-400 hover:text-[#0A192F] border border-teal-400 py-1 px-3 rounded transition duration-300"
//           >
//             Ver Projeto
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;




// components/Card.tsx

import React from 'react';

// Defina a interface para as props que o componente vai receber
export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
  technologies: string[];
}

const Card: React.FC<ProjectCardProps> = ({ title, description, image, githubLink, liveLink,}) => {
  return (
    // ⬇️ 1. CONTAINER PRINCIPAL: Borda Fixa e Efeito Zoom ⬇️
    <div className="
        bg-[#0A192F] p-6 rounded-lg shadow-xl
        
        // 1. ESTADO NORMAL: Borda transparente (mas com a largura definida)
        border border-transparent 
        
        // 2. ESTADO HOVER: A borda fica visível
        hover:border-teal-400 
        
        // 3. Efeito de Zoom e Transição (Mantidos)
        transition 
        duration-300 
        hover:scale-[1.08] 
        
        flex flex-col h-full
      "
    >
      
      {/* 2. Imagem: Altura ajustada para ser mais compacta (ex: h-36 ou h-32) */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-36 object-cover rounded-md mb-4" 
      /> 
      
      <div className="card-content flex flex-col flex-grow">
        
        {/* Título e Descrição */}
        <h3 className="text-xl font-bold text-teal-400 mb-2">{title}</h3>
        
        {/* Adicione a lista de tecnologias aqui (você a implementará no ProjectsSection.tsx) */}
        <p className="text-gray-400 mb-4 text-sm flex-grow">{description}</p>
        
        {/* Botões de Ação */}
        <div className="card-buttons flex space-x-4 mt-auto pt-2">
          
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            // Borda visível, preenche no hover
            className="text-sm font-semibold text-teal-400 hover:bg-teal-400 hover:text-[#0A192F] border border-teal-400 py-1 px-3 rounded transition duration-300"
          >
            Ver Código
          </a>
          
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            // Borda visível, preenche no hover
            className="text-sm font-semibold text-teal-400 hover:bg-teal-400 hover:text-[#0A192F] border border-teal-400 py-1 px-3 rounded transition duration-300"
          >
            Ver Projeto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
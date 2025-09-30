import React from 'react';

// Defina a interface para as props que o componente vai receber
export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink?: string; // Alterado para opcional
  technologies: string[];
  statusTag?: string; // Adicionado para o selo de status
}

const Card: React.FC<ProjectCardProps> = ({ 
    title, description, image, githubLink, liveLink, technologies, statusTag // ⬅️ Incluindo todas as props
}) => {
  return (
    <div className="
        bg-[#0A192F] p-6 rounded-lg shadow-xl relative // ⬅️ 'relative' é necessário para o selo
        
        // ESTILOS DE BORDA E ZOOM ORIGINAIS (Restaurados)
        border border-transparent 
        hover:border-teal-400 
        
        transition 
        duration-300 
        hover:scale-[1.08] // ⬅️ Seu zoom original forte
        
        flex flex-col h-full
      "
    >
        
        {/* ⬇️ BLOCO: TAG DE STATUS ("EM DESENVOLVIMENTO") ⬇️ */}
        {statusTag && (
            <div 
              className="
                // POSICIONAMENTO: Fixa no topo-direita e com leve deslocamento para dentro
                absolute top-0 right-0 
                mt-3 mr-3 // Adiciona uma margem de segurança para dentro
                
                // ESTILO E VISIBILIDADE
                bg-red-600 text-white text-xs font-bold 
                py-1 px-2 rounded-md
                shadow-lg z-30 // Z-index alto
              " 
            >
              {statusTag}
            </div>
        )}
        {/* ⬆️ FIM DO BLOCO DE STATUS ⬆️ */}
      
      {/* Imagem do Projeto */}
      <div className="relative w-full h-36 mb-4 overflow-hidden rounded-md">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover" 
            /> 
        </div>
      
      <div className="card-content flex flex-col flex-grow">
        
        <h3 className="text-xl font-bold text-teal-400 mb-2">{title}</h3>
        
        {/* ⬇️ BLOCO DE TAGS DE TECNOLOGIA ⬇️ */}
        <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
                <span 
                    key={tech} 
                    className="text-xs font-mono bg-teal-900/50 text-teal-400 py-0.5 px-2 rounded"
                >
                    {tech}
                </span>
            ))}
        </div>
        {/* ⬆️ FIM DO BLOCO DE TAGS DE TECNOLOGIA ⬆️ */}

        <p className="text-gray-400 mb-4 text-sm flex-grow">{description}</p>
        
        {/* Botões de Ação */}
        <div className="card-buttons flex space-x-4 mt-auto pt-2">
          
          {/* BOTÃO 1: VER CÓDIGO (ESTILO ORIGINAL) */}
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            // ⬇️ SEU ESTILO ORIGINAL ⬇️
            className="text-sm font-semibold text-teal-400 hover:bg-teal-400 hover:text-[#0A192F] border border-teal-400 py-1 px-3 rounded transition duration-300"
          >
            Ver Código
          </a>
          
          {/* BOTÃO 2: VER PROJETO (DESTAQUE - Exibido somente se houver liveLink) */}
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              // ⬇️ SEU ESTILO ORIGINAL ⬇️
              className="text-sm font-semibold text-teal-400 hover:bg-teal-400 hover:text-[#0A192F] border border-teal-400 py-1 px-3 rounded transition duration-300"
            >
              Ver Projeto
          </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
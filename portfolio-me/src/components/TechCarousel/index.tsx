// src/components/TechCarousel.tsx

import React from 'react';

// Array de dados com seus logos/tecnologias.
// IMPORTANTE: Duplique a lista inteira para que o loop pareça contínuo!
const techLogos = [
  // Primeira lista
  { name: 'React', src: '/logos/react.svg' },
  { name: 'TypeScript', src: '/logos/typescript.svg' },
  { name: 'Tailwind CSS', src: '/logos/tailwind.svg' },
  { name: 'Node.js', src: '/logos/nodejs.svg' },
  { name: 'JavaScript', src: '/logos/javascript.svg' },
  { name: 'MongoDB', src: '/logos/mongodb.svg' },
  
  // Segunda lista (cópia exata para o loop)
  { name: 'React', src: '/logos/react.svg' },
  { name: 'TypeScript', src: '/logos/typescript.svg' },
  { name: 'Tailwind CSS', src: '/logos/tailwind.svg' },
  { name: 'Node.js', src: '/logos/nodejs.svg' },
  { name: 'JavaScript', src: '/logos/javascript.svg' },
  { name: 'MongoDB', src: '/logos/mongodb.svg' },
];

const TechCarousel: React.FC = () => {
  return (
    // Container com o overflow escondido e padding
    <div className="w-full bg-[#002D3A] py-8 overflow-hidden relative">
      <div className="flex w-max animate-infinite-scroll">
        
        {techLogos.map((tech, index) => (
          <div 
            key={index} 
            className="
              mx-8 flex-shrink-0 
              flex items-center justify-center h-16 
              opacity-50 hover:opacity-100 transition duration-300
            "
          >
            <img 
              src={tech.src} 
              alt={tech.name} 
              className="h-full object-contain"
            />
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default TechCarousel;
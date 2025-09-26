import React from 'react';
import Card, { type ProjectCardProps } from '../Card'; 

interface ProjectData extends ProjectCardProps {
    id: number;
}

// Tipagem do array para o TypeScript
const projects: ProjectData[] = [
    {
        id: 1,
        title: 'Nome do Projeto 1',
        description: 'Descrição breve do primeiro projeto.',
        image: '/images/project1.png', 
        githubLink: 'https://github.com/seu-perfil/projeto1',
        liveLink: 'https://seusite.com/projeto1',
        technologies: []
    },
    {
        id: 2,
        title: 'Nome do Projeto 2',
        description: 'Descrição breve do segundo projeto.',
        image: '/images/project2.png', 
        githubLink: 'https://github.com/seu-perfil/projeto2',
        liveLink: 'https://seusite.com/projeto2',
        technologies: []
    },
    {
        id: 3,
        title: 'Nome do Projeto 3',
        description: 'Descrição breve do segundo projeto.',
        image: '/images/project2.png', 
        githubLink: 'https://github.com/seu-perfil/projeto2',
        liveLink: 'https://seusite.com/projeto2',
        technologies: []
    }
];

const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="py-20 px-4">
            
            {/* O container que centraliza o conteúdo principal (título e cards) */}
            <div className="max-w-7xl mx-auto mt-10"> 
                
                {/* Título: Agora sem 'text-center' e com espaçamento ajustado */}
                <h2 className="text-4xl text-white mb-10 pb-2 inline-block">
                    <span className="text-teal-400 mr-2">03.</span> Meus Projetos
                </h2>
                
                {/* Container de Grid - Mantém a responsividade */}
                <div className="
                    grid 
                    md:grid-cols-2 
                    lg:grid-cols-3 
                    gap-8 
                ">
                    {projects.map(project => (
                        <Card 
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            githubLink={project.githubLink}
                            liveLink={project.liveLink}
                            technologies={project.technologies}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
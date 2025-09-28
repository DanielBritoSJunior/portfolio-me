import React from 'react';
import Card, { type ProjectCardProps } from '../Card'; 
import ImageCozinhAi from '../../assets/CozinhAI.jpeg';
import ImageXoDengue1 from '../../assets/XoDengue1.jpeg';
import ImageXoDengue2 from '../../assets/XoDengue2.png';

interface ProjectData extends ProjectCardProps {
    id: number;
}

// Tipagem do array para o TypeScript
const projects: ProjectData[] = [
    {   
        id: 2,
        title: 'Xô Dengue - HTML/CSS/JS/BS',
        description: 'Site Institucional One Page focado na conscientização e combate à dengue em Indaiatuba. Desenvolvido no primeiro semestre da faculdade, o projeto utilizou HTML, CSS, JavaScript e pegando dados da API - Info Dengue para criar uma experiência informativa e acessível, com foco em educar o usuário sobre a prevenção do mosquito Aedes aegypti.',
        image: ImageXoDengue2, 
        githubLink: 'https://github.com/DanielBritoSJunior/pi-dengue',
        liveLink: 'https://pi-dengue.vercel.app/',
        technologies: []
    },
    {
       id: 1,
        title: 'Xô Dengue - React',
        description: 'Web App de Análise de Risco de Dengue (Indaiatuba). Projeto de refactoring de Web Development utilizando uma stack moderna (Next.js, React e TypeScript). O ponto central do projeto foi a integração com a API InfoDengue, permitindo a coleta e visualização em tempo real de dados epidemiológicos (casos, risco, etc.) para a região de Indaiatuba. O Next.js foi fundamental para o Server-Side Rendering (SSR) e o TypeScript garantiu a tipagem da estrutura de dados da API',
        image: ImageXoDengue1, 
        githubLink: 'https://github.com/DanielBritoSJunior/pidengue2',
        liveLink: 'https://pidengue22024.vercel.app/',
        technologies: []
    },
    {
        id: 3,
        title: 'CozinhAI - React',
        description: 'Plataforma completa de culinária inteligente, desenvolvida com React e Next.js para renderização performática. O sistema permite filtragem dinâmica por múltiplos ingredientes disponíveis na geladeira e oferece sugestões de pratos sazonais (alimentos da época). Além disso, implementamos um sistema de Login e gerenciamento de Perfis para que os usuários possam salvar suas receitas favoritas, demonstrando domínio em estado global e autenticação.',
        image: ImageCozinhAi, 
        githubLink: 'https://github.com/DanielBritoSJunior/pi-3sem',
        liveLink: 'https://pi-3sem.vercel.app/',
        technologies: []
    }
];

const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="py-20 px-4">
            
            {/* O container que centraliza o conteúdo principal (título e cards) */}
            <div className="max-w-7xl mx-auto mt-10 text-justify"> 
                
                {/* Título: Agora sem 'text-center' e com espaçamento ajustado */}
                <h2 className="text-4xl text-white mb-10 pb-2 inline-block border-b border-b-gray-700">
                    <span className="text-teal-400 mr-2">02.</span> Meus Projetos
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
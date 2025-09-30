import React from 'react';
import Card, { type ProjectCardProps } from '../Card'; 
import ImageCozinhAi from '../../assets/CozinhAI.png';
import ImageXoDengue1 from '../../assets/XoDengue1.png';
import ImageXoDengue2 from '../../assets/XoDengue2.png';
import ImageWeatherApp from '../../assets/weatherapp.png';
import ImageApiCadastro from '../../assets/apicadastro.png';

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
    },
    {
        id: 4,
        title: 'Weather App - React',
        description: 'Web App de consulta de clima em tempo real, desenvolvido para criar uma experiência minimalista e altamente funcional. O foco principal foi na arquitetura de código, robustez e solução de problemas de produção. O projeto utiliza TypeScript para garantir tipagem forte e validação completa dos dados recebidos da OpenWeatherMap API (temperatura, umidade, vento), aumentando a segurança e escalabilidade do aplicativo. A gestão de estado é feita através de hooks customizados (useWeather), isolando a lógica de busca e o gerenciamento de múltiplos estados (loading, erro, dados).',
        image: ImageWeatherApp, 
        githubLink: 'https://github.com/DanielBritoSJunior/Clima-App',
        liveLink: 'https://clima-390ublyzj-danielbritosjuniors-projects.vercel.app',
        technologies: []
    },
    {
        id: 3,
        title: 'API de Cadastro - Node.js',
        description: 'Projeto de backend focado na criação de uma API RESTful completa para o gerenciamento de dados de usuários.Esta API utiliza Node.js e o framework Express para roteamento eficiente e tratamento de requisições. O banco de dados MongoDB (NoSQL) é usado para a persistência de dados, garantindo flexibilidade e escalabilidade nas operações de CRUD (Cadastro, Listagem, Edição e Remoção de usuários).A camada de integração de serviços (service layer) utiliza a biblioteca Axios para consumo de endpoints externos.',
        image: ImageApiCadastro, 
        githubLink: 'https://github.com/DanielBritoSJunior/api-cadastro',
        liveLink: 'https://frontend-cadastro-ten.vercel.app/',
        technologies: []
    },
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
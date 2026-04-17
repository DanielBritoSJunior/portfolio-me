import React from 'react';
import Card, { type ProjectCardProps } from '../Card'; 

interface ProjectData extends ProjectCardProps {
    id: number;
}

// Tipagem do array para o TypeScript
const projects: ProjectData[] = [
    {    
        id: 1,
        title: 'PriceTracker',
        description: 'Uma aplicação web moderna e limpa, ainda em desenvolvimento, para monitorar preços de produtos de sites de e-commerce. Os usuários podem colar a URL de um produto e acompanhar as mudanças de preço ao longo do tempo. O painel mostra os produtos salvos em cartões com imagem, nome do produto, preço atual, preço anterior e indicadores de variação (aumento ou queda).',
        image: '/images/PriceTracker.png', 
        githubLink: 'https://github.com/DanielBritoSJunior/price-tracker',
        liveLink: 'https://price-tracker-one-amber.vercel.app/',
        technologies: ['React','Tailwind CSS', 'Node.js', 'Axios', 'Express', 'MongoDB'],
    }, 
    
    {
       id: 2,
        title: 'Xô Dengue',
        description: 'Web App de Análise de Risco de Dengue (Indaiatuba). Projeto de refactoring de Web Development utilizando uma stack moderna (Next.js, React e TypeScript). O ponto central do projeto foi a integração com a API InfoDengue, permitindo a coleta e visualização em tempo real de dados epidemiológicos (casos, risco, etc.) para a região de Indaiatuba. O Next.js foi fundamental para o Server-Side Rendering (SSR) e o TypeScript garantiu a tipagem da estrutura de dados da API',
        image: '/images/xodengue1.png', 
        githubLink: 'https://github.com/DanielBritoSJunior/pidengue2',
        liveLink: 'https://pidengue22024.vercel.app/',
        technologies: ['React', 'JavaScript', 'TypeScript', 'Next.js','API']
    }, 
    
    {
        id: 3,
        title: 'CozinhAI',
        description: 'Plataforma completa de culinária inteligente, desenvolvida com React e Next.js para renderização performática. O sistema permite filtragem dinâmica por múltiplos ingredientes disponíveis na geladeira e oferece sugestões de pratos sazonais (alimentos da época). Além disso, implementamos um sistema de Login e gerenciamento de Perfis para que os usuários possam salvar suas receitas favoritas, demonstrando domínio em estado global e autenticação.',
        image: '/images/cozinhai.png', 
        githubLink: 'https://github.com/DanielBritoSJunior/pi-3sem',
        liveLink: 'https://pi-3sem.vercel.app/',
        technologies: ['React', 'Node.js', 'TypeScript', 'Next.js','API']
    },
    
    {
        id: 4,
        title: 'Weather App',
        description: 'Web App de consulta de clima em tempo real, desenvolvido para criar uma experiência minimalista e altamente funcional. O foco principal foi na arquitetura de código, robustez e solução de problemas de produção. O projeto utiliza TypeScript para garantir tipagem forte e validação completa dos dados recebidos da OpenWeatherMap API (temperatura, umidade, vento), aumentando a segurança e escalabilidade do aplicativo. A gestão de estado é feita através de hooks customizados (useWeather), isolando a lógica de busca e o gerenciamento de múltiplos estados (loading, erro, dados).',
        image: '/images/weatherapp.png', 
        githubLink: 'https://github.com/DanielBritoSJunior/Clima-App',
        liveLink: 'https://clima-390ublyzj-danielbritosjuniors-projects.vercel.app',
        technologies: ['React', 'JavaScript', 'TypeScript','API']
    },
    
    {
        id: 5,
        title: 'API de Cadastro',
        description: 'Projeto de backend/frontend focado na criação de uma API RESTful completa para o gerenciamento de dados de usuários.Esta API utiliza Node.js e o framework Express para roteamento eficiente e tratamento de requisições. O banco de dados MongoDB (NoSQL) é usado para a persistência de dados, garantindo flexibilidade e escalabilidade nas operações de CRUD (Cadastro, Listagem, Edição e Remoção de usuários).A camada de integração de serviços (service layer) utiliza a biblioteca Axios para consumo de endpoints externos.',
        image: '/images/apicadastro.png', 
        githubLink: 'https://github.com/DanielBritoSJunior/api-cadastro',
        liveLink: 'https://frontend-cadastro-ten.vercel.app/',
        technologies: ['React', 'JavaScript', 'TypeScript', 'Node.js','API']
    },
    
    {
        id: 6,
        title: 'Social Media App',
        description: 'Este projeto é um agregador de links (Linktree Clone) desenvolvido para servir como o cartão de visitas digital do meu ecossistema como desenvolvedor. Ele centraliza meu currículo, redes profissionais e projetos em uma interface minimalista e otimizada.',
        image: './images/sociallinks.png', 
        githubLink: 'https://github.com/DanielBritoSJunior/links-social-app',
        liveLink: 'https://links-social-app.vercel.app',
        technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    },
];

const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="py-20 px-4">
            
            <div className="max-w-7xl mx-auto mt-10 text-justify"> 
                
                <h2 className="text-4xl text-white mb-10 pb-2 inline-block border-b border-b-gray-700">
                    <span className="text-teal-400 mr-2">02.</span> Meus Projetos
                </h2>
                
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
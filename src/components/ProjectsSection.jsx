import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "To Do List",
    description: "Uma aplicação de Lista de Tarefas (To-do List) feita com React.js, permitindo adicionar, filtrar, ordenar, marcar e remover tarefas de forma simples e interativa.",
    image: "./projects/project1.png",
    tags: ["React", "JavaScript (ES6+)", "CSS3"],
    demoUrl: "https://viniciussantana12.github.io/ToDo_list_react/",
    githubUrl: "https://github.com/viniciussantana12/ToDo_list_react",
  },
  {
    id: 2,
    title: "Cadastro de Clientes",
    description:
      "Sistema CRUD de clientes com React e Chakra UI, incluindo persistência via Local Storage e interface responsiva.",
    image: "./projects/project2.png",
    tags: ["React", "Chakra UI"],
    demoUrl: "https://viniciussantana12.github.io/cadastro-clientes/",
    githubUrl: "https://github.com/viniciussantana12/cadastro-clientes",
  },
  {
    id: 3,
    title: "API de Gerenciamento de Veículos",
    description:
      "Uma API REST criada com Node.js e Express para gerenciar veículos. Permite operações de cadastro, listagem, atualização e remoção, com dados armazenados em memória e simulação de delays assíncronos.",
    image: "./projects/project3.png",
    tags: ["Node.js", "Express", "JavaScript (ES6+)" ],
    githubUrl: "https://github.com/viniciussantana12/API_veiculos",
  },
   {
    id: 4,
    title: "Testes e Validações de Função de Consumo",
    description:
      "Projeto em Node.js que calcula quantos litros de combustível são necessários para um percurso, com base na distância em metros e no tipo de combustível. Validações rigorosas de entrada e testes unitários automatizados com Jest, incluindo relatório de cobertura.",
    image: "./projects/project4.jpg",
    tags: ["Node.js", "Jest", "JavaScript (ES6+)" ],
    githubUrl: "https://github.com/viniciussantana12/testes_combustivel_nodejs",
  },
  {
    id: 5,
    title: "Cadastro de Lojas",
    description:
      "Formulário web para cadastro de lojas, com salvamento automático via Local Storage, envio de dados em JSON para uma API, feedback visual nos campos e interface simples e responsiva.",
    image: "./projects/project5.png",
    tags: ["JavaScript (ES6+)"],
    demoUrl: "https://viniciussantana12.github.io/cadastro_lojas/",
    githubUrl: "https://github.com/viniciussantana12/cadastro_lojas",
  },
  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Projetos<span className="text-primary"> Realizados </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Confira alguns dos projetos que desenvolvi recentemente. Cada um deles reflete meu compromisso com a qualidade, desempenho e uma ótima experiência para o usuário.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/viniciussantana12"
          >
            Confira meu GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
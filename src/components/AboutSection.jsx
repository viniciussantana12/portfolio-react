import { Code, Monitor, Server } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> mim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
            Desenvolvedor Web apaixonado por tecnologia
            </h3>

            <p className="text-muted-foreground">
            Tenho me dedicado ao desenvolvimento de aplicações web modernas, com ênfase em responsividade, acessibilidade e performance.
            </p>

            <p className="text-muted-foreground">
            Tenho paixão por resolver problemas de forma criativa e estou sempre explorando novas tecnologias e abordagens para melhorar minhas habilidades no desenvolvimento web. Meu objetivo é aplicar meus conhecimentos para criar soluções eficazes e inovadoras.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Entre em Contato
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Desenvolvimento Web</h4>
                  <p className="text-muted-foreground">
                  Desenvolvendo websites e aplicações web responsivas utilizando frameworks modernos.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Front-end</h4>
                  <p className="text-muted-foreground">
                  Desenvolvimento de interfaces intuitivas e responsivas, com foco na experiência do usuário.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Back-end</h4>
                  <p className="text-muted-foreground">
                  Desenvolvendo aplicações robustas e escaláveis, com foco em performance e arquitetura eficiente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Github,
    Twitter,
  } from "lucide-react";
  import { cn } from "@/lib/utils";
  import { useToast } from "@/hooks/use-toast";
  import { useState } from "react";
  
  export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      setIsSubmitting(true);
  
      setTimeout(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setIsSubmitting(false);
      }, 1500);
    };
    return (
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Entre em <span className="text-primary"> contato</span>
          </h2>
  
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Estou disponível para conversar sobre projetos, colaborações ou qualquer ideia que você queira compartilhar.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">
                {" "}
                Informações de Contato
              </h3>
  
              <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div>
                    <h4 className="font-medium"> E-mail</h4>
                    <a
                      href="mailto:hello@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      viniciuss1203@outlok.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div>
                    <h4 className="font-medium"> Telefone</h4>
                    <a
                      href="tel:+11234567890"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +55 (81) 98436-6820
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div>
                    <h4 className="font-medium"> Localização</h4>
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                      Vitória de Santo Antão, PE, Brasil.
                    </a>
                  </div>
                </div>
              </div>
  
              <div className="pt-8">
                <h4 className="font-medium mb-4"> Conecte-se Comigo</h4>
                <div className="flex space-x-4 justify-center">
                  <a href="https://www.linkedin.com/in/vin%C3%ADciussantana12/" target="_blank">
                    <Linkedin />
                  </a>
                  <a href="mailto:vsantana1299@gmail.com" target="_blank">
                    <Mail />
                  </a>
                  <a href="https://www.instagram.com/viniciussant11/" target="_blank">
                    <Instagram />
                  </a>
                  <a href="https://github.com/viniciussantana12" target="_blank">
                    <Github />
                  </a>
                </div>
              </div>
            </div>
  
            <div
              className="bg-card p-8 rounded-lg shadow-xs"
              onSubmit={handleSubmit}
            >
              <h3 className="text-2xl font-semibold mb-6"> Enviar mensagem</h3>
  
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {" "}
                    Seu nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                    placeholder="Vinícius Santana..."
                  />
                </div>
  
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {" "}
                    Seu E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                    placeholder="joao@gmail.com"
                  />
                </div>
  
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {" "}
                    Sua mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                    placeholder="Olá, gostaria de conversar sobre..."
                  />
                </div>
  
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Enviar mensagem"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
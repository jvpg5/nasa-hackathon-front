import { Focus, Lightbulb, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Rumo ao Futuro com Inovação
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Estamos na vanguarda da revolução tecnológica, criando soluções que
            moldarão o amanhã.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="p-4 bg-gray-800/60 rounded-full mb-4">
              <Focus className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-2xl font-semibold mb-2">
              Visão de Futuro
            </h3>
            <p className="text-gray-400">
              Nossa missão é estar sempre à frente, desenvolvendo tecnologias
              que resolvem os desafios do presente e do futuro.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-4 bg-gray-800/60 rounded-full mb-4">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-2xl font-semibold mb-2">
              Criatividade sem Limites
            </h3>
            <p className="text-gray-400">
              Nossas equipes colaboram para transformar ideias ousadas em
              inovações práticas e impactantes para o mundo.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-4 bg-gray-800/60 rounded-full mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-2xl font-semibold mb-2">
              Comunidade Colaborativa
            </h3>
            <p className="text-gray-400">
              Unimos talentos diversos para construir um futuro onde a
              tecnologia nos conecta e impulsiona a humanidade.
            </p>
          </div>
        </div>
        <div className="text-center mt-16 text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} NASA Hackathon. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

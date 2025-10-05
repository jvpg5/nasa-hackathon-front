"use client";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Particles from "@/components/Particles";
import SpotlightCard from "@/components/SpotlightCard";
import Link from "next/link";
import TextStyled from "@/components/ui/textstyled";
import ShinyTextStyled from "@/components/ui/ShinyTextStyled";
import { Search, Orbit, BrainCircuit } from "lucide-react";

const scrollToGallery = () => {
  const gallerySection = document.getElementById("gallery-section");
  gallerySection?.scrollIntoView({ behavior: "smooth" });
};

const scrollToFooter = () => {
  const footerSection = document.getElementById("footer-section");
  footerSection?.scrollIntoView({ behavior: "smooth" });
};

export default function Home() {
  const galleryItems = [
    {
      id: 1,
      title: "Planetas",
      description: "Descubra imagens de planetas incíveis!",
      imgSrc: "/nasa5.png",
      alt: "Planetas",
      href: "Planets",
    },
    {
      id: 2,
      title: "Satélites",
      description: "Descubra imagens por satelites !",
      imgSrc: "/nasa7.png",
      alt: "Satélites",
      href: "Satelites",
    },
    {
      id: 3,
      title: "Missões",
      description: "Descubra imagens por cada missão da NASA!",
      imgSrc: "/nasa8.jpg",
      alt: "Missões",
      href: "Missions",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0814] flex flex-col items-center justify-start">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <Particles
          particleCount={1000}
          particleSpread={15}
          speed={0.05}
          particleColors={["#ffffff", "#ffffff", "#ffffff"]}
          moveParticlesOnHover={true}
          particleHoverFactor={2}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={0.8}
          cameraDistance={25}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>

      {/* Header */}
      <Header />

      <main className="relative z-10 flex flex-col items-center justify-center flex-1 w-full pt-24 mt-60 mb-128">
        <TextStyled text="Bem-vindo ao Space Vision" />
        <ShinyTextStyled
          text="Descubra o espaço, uma descoberta por vez."
        />
        <div className="flex gap-6 mt-8">
          <Button
            onClick={scrollToGallery}
            className="bg-white text-black font-semibold px-8 py-2 rounded-full shadow transition hover:bg-gray-200"
            variant="default"
            size="lg"
          >
            Galeria
          </Button>
          <Button
            onClick={scrollToFooter}
            id="about-us-section"
            className="bg-transparent border border-white text-white font-semibold px-8 py-2 rounded-full shadow transition hover:bg-white hover:text-black"
            variant="outline"
            size="lg"
          > 
            Saiba Mais 
          </Button>
        </div>
      </main>

      <section
        id="gallery-section"
        className="relative w-full py-20 px-4 mt-20 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-6">
            <h2 className="text-white text-4xl md:text-5xl font-bold mt-10 mb-4">
              Galeria Espacial
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Explore descobertas incríveis do espaço através de nossas
              categorias
            </p>
          </div>
          {/* Gallery Preview */}
          <div className="text-center">
            <p className="text-gray-400 text-lg mb-8">
              Clique em uma categoria abaixo para explorar as imagens
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-80">
              {galleryItems.map((item) => {
                const isSatellites = item.title === "Satélites";
                const card = (
                  <div
                    className={`bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 transition-all duration-300 ${
                      isSatellites
                        ? "hover:cursor-not-allowed"
                        : "hover:cursor-pointer hover:border-gray-500/70 hover:scale-105"
                    }`}
                  >
                    <div className="aspect-square relative bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                      <img
                        src={item.imgSrc}
                        alt={item.alt}
                        className="object-cover w-full h-full rounded-lg"
                      />
                      {isSatellites && (
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                          <p className="text-white text-2xl font-bold">
                            Em breve
                          </p>
                        </div>
                      )}
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs">{item.description}</p>
                  </div>
                );

                if (isSatellites) {
                  return <div key={item.id}>{card}</div>;
                }

                return (
                  <Link href={item.href} key={item.id}>
                    {card}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      <section id="ai-section" className="relative w-full py-20 px-4 mt-20 scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <TextStyled text="Em Breve: Integração com Inteligência Artificial" />
            <ShinyTextStyled text="Explicações detalhadas e educativas com dados da NASA." />
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mt-8">
              Nossa futura integração com IA irá transformar a maneira como você explora o universo. 
              
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <SpotlightCard>
              <div className="p-6 text-center">
                <Search className="h-10 w-10 mx-auto text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Análise de Imagens</h3>
                <p className="text-gray-400 text-sm">
                  A IA poderá analisar a composição de uma imagem, identificando crateras, formações geológicas e anomalias, 
                  oferecendo uma descrição detalhada do que estamos vendo.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard>
              <div className="p-6 text-center">
                <Orbit className="h-10 w-10 mx-auto text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Conexões Cósmicas</h3>
                <p className="text-gray-400 text-sm">
                  Descubra como uma imagem se conecta a outras missões, instrumentos ou descobertas. A IA criará uma teia de 
                  conhecimento, ligando um ponto a outro no vasto mapa do universo.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard>
              <div className="p-6 text-center">
                <BrainCircuit className="h-10 w-10 mx-auto text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Aprendizado Interativo</h3>
                <p className="text-gray-400 text-sm">
                  Faça perguntas diretas sobre uma imagem, como "Que tipo de nebulosa é essa?" ou "Qual a idade desta estrela?", 
                  e receba respostas educativas e precisas em tempo real.
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

    </div>
  );
}

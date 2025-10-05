"use client";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Particles from "@/components/Particles";
import SpotlightCard from "@/components/SpotlightCard";
import Link from "next/link";
import TextStyled from "@/components/ui/textstyled";
import ShinyTextStyled from "@/components/ui/ShinyTextStyled";

const scrollToGallery = () => {
  const gallerySection = document.getElementById("gallery-section");
  gallerySection?.scrollIntoView({ behavior: "smooth" });
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

      <main className="relative z-10 flex flex-col items-center justify-center flex-1 w-full pt-24 mt-48 mb-128">
        <TextStyled text="Welcome to NASA Explorer" />
        <ShinyTextStyled
          text="Discover the cosmos, one discovery at a time."
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
            className="bg-transparent border border-white text-white font-semibold px-8 py-2 rounded-full shadow transition hover:bg-white hover:text-black"
            variant="outline"
            size="lg"
          >
            Learn More
          </Button>
        </div>
      </main>

      <section
        id="gallery-section"
        className="relative w-full py-20 px-4 mt-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
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
              {galleryItems.map((item) => (
                <Link href={item.href} key={item.id}>
                  <div className="hover:cursor-pointer bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-gray-500/70 transition-all duration-300 hover:scale-105">
                    <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                      <img
                        src={item.imgSrc}
                        alt={item.alt}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

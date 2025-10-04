"use client";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Particles from "@/components/Particles";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0A0814] flex flex-col items-center justify-start">
      {/* Particles background effect */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <Particles
          particleCount={200}
          particleSpread={15}
          speed={0.05}
          particleColors={['#ffffff', '#e0e0e0', '#c0c0c0']}
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

      <main className="relative z-10 flex flex-col items-center justify-center flex-1 w-full ">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4 text-center">
          Teste
        </h1>
        <p className="text-white text-xl md:text-2xl font-semibold mb-10 text-center tracking-wide">
          jnabdueeufuefianidmaimdisl
        </p>
        <div className="flex gap-6">
          <Button
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
    </div>
  );
}

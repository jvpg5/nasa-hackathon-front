"use client";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0A0814] flex flex-col items-center justify-start">
      {/* Star background effect */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Simple starfield using random dots */}
        <svg width="100%" height="100%" className="absolute inset-0 w-full h-full">
          {Array.from({ length: 120 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1920}
              cy={Math.random() * 1080}
              r={Math.random() * 1.2 + 0.3}
              fill="white"
              opacity={Math.random() * 0.7 + 0.3}
            />
          ))}
        </svg>
      </div>

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-1 w-full mt-40">
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

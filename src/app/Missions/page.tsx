"use client";

import Link from 'next/link';
import { missionData } from '@/lib/mission-data';
import TextStyled from '@/components/ui/textstyled';
import SpotlightCard from '@/components/SpotlightCard';
import Particles from '@/components/Particles';

export default function MissionsPage() {
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
      <main className="container mx-auto px-4 py-12 max-w-7xl z-10">
        <div
          className="bg-yellow-200/10 border border-blue-400 text-blue-300 px-4 py-3 rounded-lg relative mb-8"
          role="alert"
        >
          <strong className="font-bold">Aviso: </strong>
          <span className="block sm:inline">
            Esta página está passando por instabilidades devido à interrupção do
            financiamento do governo dos Estados Unidos.
          </span>
        </div>
        <section className="mb-16">
          <div className="text-center mb-12">
            <TextStyled text="Missões Espaciais da NASA" />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-4">
              Explore as missões históricas e atuais da NASA que expandiram nossa compreensão do cosmos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missionData.map((mission) => (
              <Link href={mission.href} key={mission.id}>
                <SpotlightCard className="hover:cursor-pointer h-full">
                  <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                    <img
                      src={mission.imgSrc}
                      alt={mission.alt}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">
                    {mission.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{mission.description}</p>
                </SpotlightCard>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
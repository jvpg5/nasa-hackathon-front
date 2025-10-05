import Link from 'next/link';
import { planetData } from '@/lib/planet-data';
import TextStyled from '@/components/ui/textstyled';
import SpotlightCard from '@/components/SpotlightCard';

export const metadata = {
  title: 'Planets | NASA Explorer',
  description: 'Explore the planets of our Solar System',
};

export default function PlanetsPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-7xl">
      <section className="mb-16">
        <div className="text-center mb-12">
          <TextStyled text="Our Solar System" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore the planets in our cosmic neighborhood and discover their unique characteristics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-80">
          {planetData.map((planet) => (
            <Link href={planet.href} key={planet.id}>
              <SpotlightCard className="hover:cursor-pointer h-full">
                <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                  <img
                    src={planet.imgSrc}
                    alt={planet.alt}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">
                  {planet.title}
                </h4>
                <p className="text-gray-400 text-sm">{planet.description}</p>
              </SpotlightCard>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

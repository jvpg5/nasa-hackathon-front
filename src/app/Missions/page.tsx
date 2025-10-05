import Link from 'next/link';
import { missionData } from '@/lib/mission-data';
import TextStyled from '@/components/ui/textstyled';

export const metadata = {
  title: 'Missions | NASA Explorer',
  description: 'Explore NASA\'s historic and current space missions',
};

export default function MissionsPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-7xl">
      <section className="mb-16">
        <div className="text-center mb-12">
          <TextStyled text="NASA Space Missions" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore NASA's historic and ongoing missions that have expanded our understanding of the cosmos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-80">
          {missionData.map((mission) => (
            <Link href={mission.href} key={mission.id}>
              <div className="hover:cursor-pointer bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-gray-500/70 transition-all duration-300 hover:scale-105">
                <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                  <img
                    src={mission.imgSrc}
                    alt={mission.alt}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">
                  {mission.title}
                </h4>
                <p className="text-gray-400 text-xs">{mission.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
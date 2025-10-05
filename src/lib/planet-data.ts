export interface PlanetCardData {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  alt: string;
  href: string;
}

export const planetData: PlanetCardData[] = [
  {
    id: 'mercury',
    title: 'Mercury',
    description: 'The smallest and innermost planet in the Solar System.',
    imgSrc: '/planets/mercury.jpg',
    alt: 'Image of Mercury',
    href: '/galery?target=mercury'
  },
  {
    id: 'venus',
    title: 'Venus',
    description: 'Second planet from the Sun with a thick, toxic atmosphere.',
    imgSrc: '/planets/venus.jpg',
    alt: 'Image of Venus',
    href: '/galery?target=venus'
  },
  {
    id: 'earth',
    title: 'Earth',
    description: 'Our home planet, the only known celestial object to harbor life.',
    imgSrc: '/planets/earth.jpg',
    alt: 'Image of Earth',
    href: '/galery?target=earth'
  },
  {
    id: 'mars',
    title: 'Mars',
    description: 'The "Red Planet" with polar ice caps and evidence of ancient rivers.',
    imgSrc: '/planets/mars.jpg',
    alt: 'Image of Mars',
    href: '/galery?target=mars'
  },
  {
    id: 'jupiter',
    title: 'Jupiter',
    description: 'The largest planet in our Solar System with a distinctive Great Red Spot.',
    imgSrc: '/planets/jupiter.jpg',
    alt: 'Image of Jupiter',
    href: '/galery?target=jupiter'
  },
  {
    id: 'saturn',
    title: 'Saturn',
    description: 'Famous for its extensive ring system composed of ice and rock particles.',
    imgSrc: '/planets/saturn.jpg',
    alt: 'Image of Saturn',
    href: '/galery?target=saturn'
  },
  {
    id: 'uranus',
    title: 'Uranus',
    description: 'Ice giant with a tilted rotation axis that makes it appear to roll on its side.',
    imgSrc: '/planets/uranus.jpg',
    alt: 'Image of Uranus',
    href: '/galery?target=uranus'
  },
  {
    id: 'neptune',
    title: 'Neptune',
    description: 'The windiest planet in our Solar System with the strongest sustained winds.',
    imgSrc: '/planets/neptune.jpg',
    alt: 'Image of Neptune',
    href: '/galery?target=neptune'
  },
];
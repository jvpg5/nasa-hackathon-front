export interface MissionCardData {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  alt: string;
  href: string;
}

export const missionData: MissionCardData[] = [
  {
    id: '2001-mars-odyssey',
    title: '2001 Mars Odyssey',
    description: 'Longest-serving spacecraft at Mars, studying the planet\'s surface and providing communication relay.',
    imgSrc: '/missions/mars-odyssey.jpg',
    alt: 'Image of 2001 Mars Odyssey',
    href: '/galery?target=2001-mars-odyssey'
  },
  {
    id: 'cassini',
    title: 'Cassini',
    description: 'Explored Saturn, its rings, and moons over a 13-year mission that revolutionized our understanding of the system.',
    imgSrc: '/missions/cassini.jpg',
    alt: 'Image of Cassini spacecraft',
    href: '/galery?target=cassini'
  },
  {
    id: 'chandrayaan-1',
    title: 'Chandrayaan-1',
    description: 'India\'s first lunar probe that discovered evidence of water molecules on the Moon\'s surface.',
    imgSrc: '/missions/chandrayaan-1.jpg',
    alt: 'Image of Chandrayaan-1',
    href: '/galery?target=chandrayaan-1'
  },
  {
    id: 'clementine',
    title: 'Clementine',
    description: 'Mapped the Moon\'s surface and found evidence suggesting the presence of water ice.',
    imgSrc: '/missions/clementine.jpg',
    alt: 'Image of Clementine spacecraft',
    href: '/galery?target=clementine'
  },
  {
    id: 'galileo',
    title: 'Galileo',
    description: 'Studied Jupiter and its moons, providing crucial data about Jupiter\'s atmosphere and its largest satellites.',
    imgSrc: '/missions/galileo.jpg',
    alt: 'Image of Galileo spacecraft',
    href: '/galery?target=galileo'
  },
  {
    id: 'insight',
    title: 'InSight',
    description: 'Studying the interior of Mars to understand the formation and evolution of rocky planets.',
    imgSrc: '/missions/insight.jpg',
    alt: 'Image of InSight lander',
    href: '/galery?target=insight'
  },
  {
    id: 'juno',
    title: 'Juno',
    description: 'Investigating Jupiter\'s composition, gravity field, magnetic field, and polar magnetosphere.',
    imgSrc: '/missions/juno.jpg',
    alt: 'Image of Juno spacecraft',
    href: '/galery?target=juno'
  },
  {
    id: 'lcross',
    title: 'LCROSS',
    description: 'Mission that confirmed the presence of water ice in a permanently shadowed lunar crater.',
    imgSrc: '/missions/lcross.jpg',
    alt: 'Image of LCROSS spacecraft',
    href: '/galery?target=lcross'
  },
  {
    id: 'lunar-orbiter',
    title: 'Lunar Orbiter',
    description: 'Series of five spacecraft that mapped the Moon\'s surface to prepare for Apollo landings.',
    imgSrc: '/missions/lunar-orbiter.jpg',
    alt: 'Image of Lunar Orbiter',
    href: '/galery?target=lunar-orbiter'
  },
  {
    id: 'lunar-reconnaissance-orbiter',
    title: 'Lunar Reconnaissance Orbiter',
    description: 'Mapping the Moon in unprecedented detail to identify safe landing sites and potential resources.',
    imgSrc: '/missions/lro.jpg',
    alt: 'Image of Lunar Reconnaissance Orbiter',
    href: '/galery?target=lunar-reconnaissance-orbiter'
  },
  {
    id: 'magellan',
    title: 'Magellan',
    description: 'Mapped the surface of Venus using radar, revealing volcanic features and impact craters.',
    imgSrc: '/missions/magellan.jpg',
    alt: 'Image of Magellan spacecraft',
    href: '/galery?target=magellan'
  },
  {
    id: 'mars-exploration-rover',
    title: 'Mars Exploration Rover',
    description: 'Twin rovers Spirit and Opportunity that explored the Martian surface and found evidence of past water.',
    imgSrc: '/missions/mer.jpg',
    alt: 'Image of Mars Exploration Rover',
    href: '/galery?target=mars-exploration-rover'
  },
  {
    id: 'mars-global-surveyor',
    title: 'Mars Global Surveyor',
    description: 'Mapped Mars for a full Martian year, providing detailed data about its surface and atmosphere.',
    imgSrc: '/missions/mgs.jpg',
    alt: 'Image of Mars Global Surveyor',
    href: '/galery?target=mars-global-surveyor'
  },
  {
    id: 'mars-pathfinder',
    title: 'Mars Pathfinder',
    description: 'Delivered the first rover, Sojourner, to the surface of Mars in 1997.',
    imgSrc: '/missions/pathfinder.jpg',
    alt: 'Image of Mars Pathfinder',
    href: '/galery?target=mars-pathfinder'
  },
  {
    id: 'mars-reconnaissance-orbiter',
    title: 'Mars Reconnaissance Orbiter',
    description: 'Studying Mars with high-resolution cameras and sensors to understand its climate and geology.',
    imgSrc: '/missions/mro.jpg',
    alt: 'Image of Mars Reconnaissance Orbiter',
    href: '/galery?target=mars-reconnaissance-orbiter'
  },
  {
    id: 'mars-science-laboratory',
    title: 'Mars Science Laboratory',
    description: 'Mission featuring the Curiosity rover, investigating Mars\' habitability and climate history.',
    imgSrc: '/missions/msl.jpg',
    alt: 'Image of Mars Science Laboratory',
    href: '/galery?target=mars-science-laboratory'
  },
  {
    id: 'messenger',
    title: 'MESSENGER',
    description: 'First spacecraft to orbit Mercury, providing unprecedented data about the innermost planet.',
    imgSrc: '/missions/messenger.jpg',
    alt: 'Image of MESSENGER spacecraft',
    href: '/galery?target=messenger'
  },
  {
    id: 'new-horizons',
    title: 'New Horizons',
    description: 'First mission to Pluto, revealing detailed images and data about the dwarf planet and its moons.',
    imgSrc: '/missions/new-horizons.jpg',
    alt: 'Image of New Horizons spacecraft',
    href: '/galery?target=new-horizons'
  },
  {
    id: 'phoenix',
    title: 'Phoenix',
    description: 'Mars lander that confirmed the presence of water ice just below the surface in the Martian arctic.',
    imgSrc: '/missions/phoenix.jpg',
    alt: 'Image of Phoenix lander',
    href: '/galery?target=phoenix'
  },
  {
    id: 'viking-lander',
    title: 'Viking Lander',
    description: 'First spacecraft to successfully land on Mars and perform a mission from the surface.',
    imgSrc: '/missions/viking-lander.jpg',
    alt: 'Image of Viking Lander',
    href: '/galery?target=viking-lander'
  },
  {
    id: 'voyager',
    title: 'Voyager',
    description: 'Twin spacecraft that explored the outer planets and are now traveling through interstellar space.',
    imgSrc: '/missions/voyager.jpg',
    alt: 'Image of Voyager spacecraft',
    href: '/galery?target=voyager'
  },
  {
    id: 'viking-orbiter',
    title: 'Viking Orbiter',
    description: 'Captured detailed images of Mars from orbit while delivering the Viking landers to the surface.',
    imgSrc: '/missions/viking-orbiter.jpg',
    alt: 'Image of Viking Orbiter',
    href: '/galery?target=viking-orbiter'
  },
];
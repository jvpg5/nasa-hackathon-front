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
    id: '2001 mars odyssey',
    title: '2001 Mars Odyssey',
    description: 'A espaçonave mais antiga em Marte, estudando a superfície do planeta e fornecendo retransmissão de comunicação.',
    imgSrc: '/missions/marsodyssey.jpg',
    alt: 'Imagem da 2001 Mars Odyssey',
    href: '/galery?mission=2001 mars odyssey'
  },
  {
    id: 'cassini',
    title: 'Cassini',
    description: 'Explorou Saturno, seus anéis e luas ao longo de uma missão de 13 anos que revolucionou nossa compreensão do sistema.',
    imgSrc: '/missions/cassini.jpg',
    alt: 'Imagem da espaçonave Cassini',
    href: '/galery?mission=cassini'
  },
  {
    id: 'chandrayaan 1',
    title: 'Chandrayaan-1',
    description: 'A primeira sonda lunar da Índia que descobriu evidências de moléculas de água na superfície da Lua.',
    imgSrc: '/missions/chanaofc.jpg',
    alt: 'Imagem da Chandrayaan-1',
    href: '/galery?mission=chandrayaan 1'
  },
  {
    id: 'clementine',
    title: 'Clementine',
    description: 'Mapeou a superfície da Lua e encontrou evidências que sugerem a presença de gelo de água.',
    imgSrc: '/missions/clementine.jpg',
    alt: 'Imagem da espaçonave Clementine',
    href: '/galery?mission=clementine'
  },
  {
    id: 'galileo',
    title: 'Galileo',
    description: 'Estudou Júpiter e suas luas, fornecendo dados cruciais sobre a atmosfera de Júpiter e seus maiores satélites.',
    imgSrc: '/missions/galileo.jpeg',
    alt: 'Imagem da espaçonave Galileo',
    href: '/galery?mission=galileo'
  },
  {
    id: 'insight',
    title: 'InSight',
    description: 'Estudando o interior de Marte para entender a formação e evolução de planetas rochosos.',
    imgSrc: '/missions/insight.jpg',
    alt: 'Imagem do lander InSight',
    href: '/galery?mission=insight'
  },
  {
    id: 'juno',
    title: 'Juno',
    description: 'Investigando a composição, campo gravitacional, campo magnético e magnetosfera polar de Júpiter.',
    imgSrc: '/missions/juno.jpg',
    alt: 'Imagem da espaçonave Juno',
    href: '/galery?mission=juno'
  },
  {
    id: 'lcross',
    title: 'LCROSS',
    description: 'Missão que confirmou a presença de gelo de água em uma cratera lunar permanentemente sombreada.',
    imgSrc: '/missions/lcross.jpg',
    alt: 'Imagem da espaçonave LCROSS',
    href: '/galery?mission=lcross'
  },
  {
    id: 'lunar orbiter',
    title: 'Lunar Orbiter',
    description: 'Série de cinco espaçonaves que mapearam a superfície da Lua para se preparar para os pousos da Apollo.',
    imgSrc: '/missions/lunarorbiter.jpg',
    alt: 'Imagem da Lunar Orbiter',
    href: '/galery?mission=lunar orbiter'
  },
  {
    id: 'lunar reconnaissance orbiter',
    title: 'Lunar Reconnaissance Orbiter',
    description: 'Mapeando a Lua em detalhes sem precedentes para identificar locais de pouso seguros e recursos potenciais.',
    imgSrc: '/missions/lunar.jpg',
    alt: 'Imagem da Lunar Reconnaissance Orbiter',
    href: '/galery?mission=lunar reconnaissance orbiter'
  },
  {
    id: 'magellan',
    title: 'Magellan',
    description: 'Mapeou a superfície de Vênus usando radar, revelando características vulcânicas e crateras de impacto.',
    imgSrc: '/missions/magellan.jpg',
    alt: 'Imagem da espaçonave Magellan',
    href: '/galery?mission=magellan'
  },
  {
    id: 'mars exploration rover',
    title: 'Mars Exploration Rover',
    description: 'Rovers gêmeos Spirit e Opportunity que exploraram a superfície marciana e encontraram evidências de água no passado.',
    imgSrc: '/missions/mer.jpg',
    alt: 'Imagem do Mars Exploration Rover',
    href: '/galery?mission=mars-exploration rover'
  },
  {
    id: 'mars global surveyor',
    title: 'Mars Global Surveyor',
    description: 'Mapeou Marte por um ano marciano completo, fornecendo dados detalhados sobre sua superfície e atmosfera.',
    imgSrc: '/missions/mgs.jpg',
    alt: 'Imagem do Mars Global Surveyor',
    href: '/galery?mission=mars-global-surveyor'
  },
  {
    id: 'mars pathfinder',
    title: 'Mars Pathfinder',
    description: 'Entregou o primeiro rover, Sojourner, à superfície de Marte em 1997.',
    imgSrc: '/missions/marsp.jpg',
    alt: 'Imagem do Mars Pathfinder',
    href: '/galery?mission=mars-pathfinder'
  },
  {
    id: 'mars reconnaissance orbiter',
    title: 'Mars Reconnaissance Orbiter',
    description: 'Estudando Marte com câmeras e sensores de alta resolução para entender seu clima e geologia.',
    imgSrc: '/missions/mro.jpg',
    alt: 'Imagem do Mars Reconnaissance Orbiter',
    href: '/galery?mission=mars reconnaissance orbiter'
  },
  {
    id: 'mars science laboratory',
    title: 'Mars Science Laboratory',
    description: 'Missão com o rover Curiosity, investigando a habitabilidade e a história climática de Marte.',
    imgSrc: '/missions/msl.jpg',
    alt: 'Imagem do Mars Science Laboratory',
    href: '/galery?mission=mars science laboratory'
  },
  {
    id: 'messenger',
    title: 'MESSENGER',
    description: 'Primeira espaçonave a orbitar Mercúrio, fornecendo dados sem precedentes sobre o planeta mais interno.',
    imgSrc: '/missions/messenger.jpg',
    alt: 'Imagem da espaçonave MESSENGER',
    href: '/galery?mission=messenger'
  },
  {
    id: 'new horizons',
    title: 'New Horizons',
    description: 'Primeira missão a Plutão, revelando imagens e dados detalhados sobre o planeta anão e suas luas.',
    imgSrc: '/missions/newh.jpg',
    alt: 'Imagem da espaçonave New Horizons',
    href: '/galery?mission=new horizons'
  },
  {
    id: 'phoenix',
    title: 'Phoenix',
    description: 'Lander de Marte que confirmou a presença de gelo de água logo abaixo da superfície no ártico marciano.',
    imgSrc: '/missions/phoenix.jpg',
    alt: 'Imagem do lander Phoenix',
    href: '/galery?mission=phoenix'
  },
  {
    id: 'viking lander',
    title: 'Viking Lander',
    description: 'Primeira espaçonave a pousar com sucesso em Marte e realizar uma missão da superfície.',
    imgSrc: '/missions/vikilan.jpg',
    alt: 'Imagem do Viking Lander',
    href: '/galery?mission=viking lander'
  },
  {
    id: 'voyager',
    title: 'Voyager',
    description: 'Espaçonaves gêmeas que exploraram os planetas exteriores e agora estão viajando pelo espaço interestelar.',
    imgSrc: '/missions/voyager.jpg',
    alt: 'Imagem da espaçonave Voyager',
    href: '/galery?mission=voyager'
  },
  {
    id: 'viking orbiter',
    title: 'Viking Orbiter',
    description: 'Capturou imagens detalhadas de Marte da órbita enquanto entregava os landers Viking à superfície.',
    imgSrc: '/missions/vikiorb.jpg',
    alt: 'Imagem do Viking Orbiter',
    href: '/galery?mission=viking orbiter'
  },
];
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
    id: "mercury",
    title: "Mercúrio",
    description: "O menor e mais interno planeta do Sistema Solar.",
    imgSrc: "/mercury.jpg",
    alt: "Image of Mercury",
    href: "/galery?target=mercury",
  },
  {
    id: "venus",
    title: "Vênus",
    description:
      "O segundo planeta a partir do Sol com uma atmosfera espessa e tóxica.",
    imgSrc: "/venus.jpg",
    alt: "Image of Venus",
    href: "/galery?target=venus",
  },
  {
    id: "earth",
    title: "Terra",
    description:
      "Nosso planeta natal, o único objeto celestial conhecido por abrigar vida.",
    imgSrc: "/earth.jpg",
    alt: "Image of Earth",
    href: "/galery?target=earth&page=700",
  },
  {
    id: "mars",
    title: "Marte",
    description:
      'O "Planeta Vermelho" com calotas polares e evidências de rios antigos.',
    imgSrc: "/mars.jpg",
    alt: "Image of Mars",
    href: "/galery?target=mars",
  },
  {
    id: "jupiter",
    title: "Júpiter",
    description:
      "O maior planeta do nosso Sistema Solar com uma distinta Grande Mancha Vermelha.",
    imgSrc: "/Jupiter.jpg",
    alt: "Image of Jupiter",
    href: "/galery?target=jupiter",
  },
  {
    id: "saturn",
    title: "Saturno",
    description:
      "Famoso por seu extenso sistema de anéis composto por partículas de gelo e rocha.",
    imgSrc: "/saturn2.jpg",
    alt: "Image of Saturn",
    href: "/galery?target=saturn&page=700",
  },
  {
    id: "uranus",
    title: "Urano",
    description:
      "Gigante de gelo com um eixo de rotação inclinado que o faz parecer rolar de lado.",
    imgSrc: "/uranus.jpg",
    alt: "Image of Uranus",
    href: "/galery?target=uranus",
  },
  {
    id: "neptune",
    title: "Netuno",
    description:
      "O planeta mais ventoso do nosso Sistema Solar com os ventos sustentados mais fortes.",
    imgSrc: "/neptune.jpg",
    alt: "Image of Neptune",
    href: "/galery?target=neptune",
  },
];

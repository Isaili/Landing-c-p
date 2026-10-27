/**
 * Galería "Conoce más del proceso": del corte a la taza (café) y del árbol al
 * guiso (pimienta). Fotos de Wikimedia Commons con licencias libres; cada una
 * muestra su crédito en la galería y en /creditos.
 * Para cambiar una foto: reemplaza el archivo en public/images/galeria/ y
 * actualiza su entrada aquí.
 */

export interface GalleryPhoto {
  src: string;
  width: number;
  height: number;
  /** Nombre del paso del proceso */
  title: string;
  /** Explicación corta del paso, en lenguaje sencillo */
  description: string;
  alt: string;
  /** Dónde se tomó la foto */
  place: string;
  author: string;
  license: string;
  licenseUrl: string;
  source: string;
}

const CC_BY_SA_4 = "https://creativecommons.org/licenses/by-sa/4.0/";
const CC_BY_SA_2 = "https://creativecommons.org/licenses/by-sa/2.0/";

export const coffeeProcess: GalleryPhoto[] = [
  {
    src: "/images/galeria/cafe-01-corte.jpg",
    width: 1280,
    height: 720,
    title: "Corte",
    description: "Se cortan a mano solo las cerezas maduras, las rojas, una por una.",
    alt: "Recolectores cortando café entre las matas de un cafetal",
    place: "León Cortés, Costa Rica",
    author: "Juan1152",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    source: "https://commons.wikimedia.org/wiki/File:Recolecci%C3%B3n_del_grano_de_oro_en_Le%C3%B3n_Cort%C3%A9s_Castro.jpg",
  },
  {
    src: "/images/galeria/cafe-02-pesado.jpg",
    width: 1400,
    height: 932,
    title: "Compra y pesado",
    description:
      "En el acopio se pesa cada costal. De ese peso sale la cuenta de la merma y lo que se paga.",
    alt: "Dos personas pesando un costal de café en una báscula colgante",
    place: "Cauca, Colombia",
    author: "Neil Palmer (CIAT)",
    license: "CC BY-SA 2.0",
    licenseUrl: CC_BY_SA_2,
    source: "https://commons.wikimedia.org/wiki/File:NP_Coffee_weighing_(5867723486).jpg",
  },
  {
    src: "/images/galeria/cafe-03-despulpado.jpg",
    width: 1400,
    height: 1050,
    title: "Despulpado",
    description:
      "La despulpadora le quita la cáscara roja a la cereza y deja el grano con su miel (mucílago).",
    alt: "Hombre echando café cereza en una despulpadora manual",
    place: "Mbale, Uganda",
    author: "Erinamukuta",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    source: "https://commons.wikimedia.org/wiki/File:Pulping_coffee_mbale.JPG",
  },
  {
    src: "/images/galeria/cafe-04-fermentado.jpg",
    width: 1048,
    height: 699,
    title: "Lavado",
    description:
      "En el café lavado, el grano despulpado reposa en agua para que se suelte la miel y después se lava hasta quedar limpio.",
    alt: "Pila de fermentación improvisada con lona, llena de café despulpado en agua",
    place: "Vietnam",
    author: "Michael C. Wright",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    source: "https://commons.wikimedia.org/wiki/File:Field-expedient-fermentation-vietnam.jpg",
  },
  {
    src: "/images/galeria/cafe-05-natural.jpg",
    width: 1400,
    height: 1050,
    title: "Natural y honey",
    description:
      "En el natural la cereza se seca entera, con todo y cáscara. En el honey se despulpa, pero se seca con parte de la miel pegada al grano.",
    alt: "Dos mujeres moviendo café cereza en una cama de secado elevada",
    place: "Uganda",
    author: "Philip Asedri Dradrio",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    source: "https://commons.wikimedia.org/wiki/File:Women_drying_coffee.jpg",
  },
  {
    src: "/images/galeria/cafe-06-secado.jpg",
    width: 1400,
    height: 926,
    title: "Secado en patio",
    description:
      "El pergamino se tiende al sol y se mueve con rastrillo varias veces al día hasta que baja su humedad.",
    alt: "Patio de secado con café pergamino extendido y trabajadores con rastrillos",
    place: "Costa Rica",
    author: "Ronchy",
    license: "Dominio público",
    licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
    source: "https://commons.wikimedia.org/wiki/File:Coffee_Drying.jpg",
  },
  {
    src: "/images/galeria/cafe-07-oro.jpg",
    width: 1400,
    height: 1050,
    title: "Maquilado",
    description:
      "En la maquila se le quita el pergamino seco. Queda el café oro (verde), listo para vender o tostar.",
    alt: "Granos de café oro sin pergamino en la palma de una mano",
    place: "Maui, Hawái",
    author: "Forest y Kim Starr",
    license: "CC BY 3.0 US",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/us/",
    source: "https://commons.wikimedia.org/wiki/File:Starr-180616-4066-Coffea_arabica-homegrown_and_processed_dried_and_parchment_removed-Hawea_Pl_Olinda-Maui_(28591744507).jpg",
  },
  {
    src: "/images/galeria/cafe-08-cribado.jpg",
    width: 1400,
    height: 1050,
    title: "Cribado y selección",
    description:
      "Se separa el grano por tamaño con cribas y se quitan a mano los negros, quebrados o picados.",
    alt: "Mujeres separando a mano granos de café oro sobre una mesa",
    place: "Hawassa, Etiopía",
    author: "Niels Van Iperen",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    source: "https://commons.wikimedia.org/wiki/File:Four_girls_sorting_coffee_beans_for_size,_Hawassa.jpg",
  },
  {
    src: "/images/galeria/cafe-09-tostado-tradicional.jpg",
    width: 1024,
    height: 683,
    title: "Tostado tradicional",
    description: "A fuego directo, en comal o sartén, moviendo el grano sin parar para que no se queme.",
    alt: "Café verde tostándose en un comal sobre fuego de leña",
    place: "Etiopía",
    author: "Charles Haynes",
    license: "CC BY-SA 2.0",
    licenseUrl: CC_BY_SA_2,
    source: "https://commons.wikimedia.org/wiki/File:Traditional_Ethiopian_Coffee_Roasting.jpg",
  },
  {
    src: "/images/galeria/cafe-10-tostado.jpg",
    width: 1400,
    height: 788,
    title: "Tostado",
    description:
      "En la tostadora el grano se dora parejo y luego se enfría girando en la charola para fijar su sabor.",
    alt: "Café recién tostado enfriándose en la charola giratoria de una tostadora",
    place: "Italia",
    author: "MarcoMotti123",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    source: "https://commons.wikimedia.org/wiki/File:Caff%C3%A8_roasting.jpg",
  },
  {
    src: "/images/galeria/cafe-11-envasado.jpg",
    width: 1400,
    height: 1050,
    title: "Envasado",
    description: "Ya tostado, se empaca en bolsas con válvula para que conserve el aroma.",
    alt: "Bolsas metalizadas de café tostado de origen boliviano",
    place: "Bolivia",
    author: "Ruditaly",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    source: "https://commons.wikimedia.org/wiki/File:Roasted_coffee_packages_from_Bolivia.jpg",
  },
  {
    src: "/images/galeria/cafe-12-sobre.jpg",
    width: 1400,
    height: 1028,
    title: "Sobres",
    description: "También se vende en sobres individuales, molido o soluble, listo para una taza.",
    alt: "Sobre individual de café molido",
    place: "Estonia",
    author: "WanderingTrad",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    source: "https://commons.wikimedia.org/wiki/File:Coffee_package.jpg",
  },
  {
    src: "/images/galeria/cafe-13-taza.jpg",
    width: 1400,
    height: 1050,
    title: "La taza",
    description: "Al final, todo ese trabajo del campo llega a una taza de café.",
    alt: "Taza blanca de café negro con cuchara sobre su plato",
    place: "Estados Unidos",
    author: "Julius Schorzman",
    license: "CC BY-SA 2.0",
    licenseUrl: CC_BY_SA_2,
    source: "https://commons.wikimedia.org/wiki/File:A_small_cup_of_coffee.JPG",
  },
  {
    src: "/images/galeria/cafe-14-cafeteria-patio.jpg",
    width: 1400,
    height: 1050,
    title: "Cafetería",
    description: "Cafeterías como esta compran café de la región y lo sirven a quien la visita.",
    alt: "Cafetería en el patio de una casona colonial con mesas y sillas de mimbre",
    place: "San Cristóbal de las Casas, Chiapas",
    author: "Wolfgang Sauber",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    source: "https://commons.wikimedia.org/wiki/File:San_Cristobal_-_Cafe_im_Patio.jpg",
  },
  {
    src: "/images/galeria/cafe-15-cafeteria.jpg",
    width: 1400,
    height: 1050,
    title: "Cafetería",
    description: "Cafés de especialidad que muestran los costales del grano que compran.",
    alt: "Interior de una cafetería con barra de madera y costales de café en la pared",
    place: "San Cristóbal de las Casas, Chiapas",
    author: "Bruno Rijsman",
    license: "CC BY-SA 2.0",
    licenseUrl: CC_BY_SA_2,
    source: "https://commons.wikimedia.org/wiki/File:San_Cristobal_de_las_Casas_(Mexico,_December_2018)_-_113_(50919509681).jpg",
  },
  {
    src: "/images/galeria/cafe-16-cafe-en-mesa.jpg",
    width: 1400,
    height: 1050,
    title: "Café chiapaneco",
    description: "Una taza servida con café de Chiapas, en una de sus cafeterías.",
    alt: "Taza de café con leche y arte latte sobre una tabla de madera en una terraza",
    place: "San Cristóbal de las Casas, Chiapas",
    author: "Bruno Rijsman",
    license: "CC BY-SA 2.0",
    licenseUrl: CC_BY_SA_2,
    source: "https://commons.wikimedia.org/wiki/File:San_Cristobal_de_las_Casas_(Mexico,_December_2018)_-_81_(50919656462).jpg",
  },
];

export const pepperProcess: GalleryPhoto[] = [
  {
    src: "/images/galeria/pimienta-01-fruto.jpg",
    width: 1400,
    height: 1050,
    title: "El árbol y su fruto",
    description:
      "La pimienta gorda crece en racimos en un árbol de clima cálido; el fruto madura de verde a morado.",
    alt: "Rama de pimienta gorda con frutos verdes y morados",
    place: "Maui, Hawái",
    author: "Forest y Kim Starr",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:Starr-100826-8677-Pimenta_dioica-leaves_and_fruit-Haiku-Maui_(24417536234).jpg",
  },
  {
    src: "/images/galeria/pimienta-02-racimo.jpg",
    width: 1400,
    height: 1050,
    title: "Corte en verde",
    description:
      "Se corta cuando el fruto ya está grande pero todavía verde: así guarda más aroma al secarse.",
    alt: "Racimos de pimienta gorda verde entre las hojas del árbol",
    place: "Maui, Hawái",
    author: "Forest y Kim Starr",
    license: "CC BY 3.0 US",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/us/",
    source: "https://commons.wikimedia.org/wiki/File:Starr-090721-3231-Pimenta_dioica-fruit_and_leaves-Wailuku_Heights-Maui_(24343583333).jpg",
  },
  {
    src: "/images/galeria/pimienta-03-seca.jpg",
    width: 1024,
    height: 707,
    title: "Secado",
    description:
      "Se seca al sol varios días hasta que queda café oscuro y la semilla suena por dentro al moverla.",
    alt: "Granos de pimienta gorda seca de color café rojizo",
    place: "Sin especificar",
    author: "Brian Arthur",
    license: "CC BY 2.5",
    licenseUrl: "https://creativecommons.org/licenses/by/2.5/",
    source: "https://commons.wikimedia.org/wiki/File:AllspiceSeeds.jpg",
  },
  {
    src: "/images/galeria/pimienta-04-envasada.jpg",
    width: 1065,
    height: 1400,
    title: "Envasado",
    description: "Entera o molida, se empaca para venderse en tiendas y mercados.",
    alt: "Sobre antiguo de pimienta gorda molida",
    place: "Suecia",
    author: "R. Henrik Nilsson",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Circa_1970_Swedish_ICA_Corona_brand_spice_pouch_for_20_g_ground_allspice.jpg",
  },
  {
    src: "/images/galeria/pimienta-05-mole.jpg",
    width: 1400,
    height: 937,
    title: "En la cocina",
    description: "Es ingrediente del mole y de muchos guisos de la cocina mexicana.",
    alt: "Plato de pollo en mole con arroz sobre un mantel floreado",
    place: "Mercado municipal de Chiapa de Corzo, Chiapas",
    author: "Alejandro Linares García",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    source: "https://commons.wikimedia.org/wiki/File:MoleChickenMuniMarketChiapa.jpg",
  },
];

/** Videos de YouTube que se abren junto a la galería (uno por producto) */
export interface ProcessVideo {
  id: "cafe" | "pimienta";
  label: string;
  youtubeId: string;
  title: string;
  description: string;
  channel: string;
  channelUrl: string;
}

export const processVideos: ProcessVideo[] = [
  {
    id: "cafe",
    label: "Café",
    youtubeId: "Y91Uqx5vshc",
    title: "Producción de café en Chiapas",
    description: "Mira cómo se produce el café en Chiapas.",
    channel: "Umbrales Productora",
    channelUrl: "https://www.youtube.com/@umbralesproductora5332",
  },
  {
    id: "pimienta",
    label: "Pimienta",
    youtubeId: "Gy9OekVPCYA",
    title: "Pimienta gorda en Veracruz",
    description: "Un video sobre la pimienta gorda en Veracruz.",
    channel: "Agricultura (Secretaría de Agricultura y Desarrollo Rural)",
    channelUrl: "https://www.youtube.com/@Agricultura_mex",
  },
];

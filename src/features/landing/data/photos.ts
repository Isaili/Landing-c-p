/**
 * Fotografías reales usadas en la landing.
 * Todas vienen de Wikimedia Commons con licencias Creative Commons que piden
 * dar crédito al autor; los créditos se muestran en /creditos.
 * Para cambiar una foto: reemplaza el archivo en public/images/fotos/ y
 * actualiza aquí el autor, la licencia y la fuente.
 */

export interface Photo {
  src: string;
  alt: string;
  /** Pie de foto visible */
  caption: string;
  author: string;
  license: string;
  licenseUrl: string;
  source: string;
  width: number;
  height: number;
}

export const photos = {
  cafetal: {
    src: "/images/fotos/cafetal-el-triunfo.jpg",
    alt: "Matas de café en la ladera de una montaña cubierta de selva en El Triunfo, Sierra Madre de Chiapas",
    caption: "Cafetal en El Triunfo, Sierra Madre de Chiapas",
    author: "Medicen alo",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:El_Triunfo_Chiapas.jpg",
    width: 975,
    height: 1300,
  },
  patioSecado: {
    src: "/images/fotos/patio-secado.jpg",
    alt: "Productora junto a su casa con café pergamino tendido al sol en el patio, con montañas de Chiapas al fondo",
    caption: "Café secándose al sol en un patio de Chiapas",
    author: "Eduardo Robles Pacheco",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:03.-_Patio_de_caf%C3%A9.jpg",
    width: 750,
    height: 1000,
  },
  despulpadora: {
    src: "/images/fotos/despulpadora.jpg",
    alt: "Despulpadora de café con cerezas rojas recién cortadas",
    caption: "Despulpado de café cereza en Chiapas",
    author: "Eduardo Robles Pacheco",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:05.-_Despulpadora_de_caf%C3%A9.jpg",
    width: 1000,
    height: 750,
  },
  cafeCereza: {
    src: "/images/fotos/cafe-cereza.jpg",
    alt: "Granos de café cereza rojos y maduros en una rama, listos para el corte",
    caption: "Café cereza listo para el corte",
    author: "Carlos Marín",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Fruto_del_Caf%C3%A9.jpg",
    width: 1400,
    height: 931,
  },
  pimienta: {
    src: "/images/fotos/pimienta-gorda.jpg",
    alt: "Granos de pimienta gorda seca de cerca",
    caption: "Pimienta gorda seca",
    author: "Challiyan",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Jamaican_pepper.jpg",
    width: 618,
    height: 1100,
  },
  unionJuarez: {
    src: "/images/fotos/union-juarez.jpg",
    alt: "Vista de Santo Domingo, Unión Juárez, con montañas cubiertas de selva y cafetales en el Soconusco",
    caption: "Santo Domingo, Unión Juárez, en el Soconusco",
    author: "RodriguezAguilarVM",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:3.Santo_Domingo_Uni%C3%B3n_Ju%C3%A1rez.jpg",
    width: 1300,
    height: 970,
  },
  productora: {
    src: "/images/fotos/productora.jpg",
    alt: "Señora mexicana moliendo café en el molino de mano de su cocina",
    caption: "Familias que viven del café",
    author: "DanielElisalde1",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Rufina,_a_mexican_coffee_farmer.jpg",
    width: 1300,
    height: 866,
  },
} satisfies Record<string, Photo>;

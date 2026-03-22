export type Categoria =
  | "Bulbosas"
  | "Arbustos"
  | "Anuales"
  | "Perennes"
  | "Acuáticas"
  | "Epífitas";

export const CATEGORIAS: Categoria[] = [
  "Bulbosas",
  "Arbustos",
  "Anuales",
  "Perennes",
  "Acuáticas",
  "Epífitas",
];

export type Zona = "Europa" | "Asia" | "América" | "África" | "Mediterráneo";

export const ZONAS: Zona[] = ["Europa", "Asia", "América", "África", "Mediterráneo"];

/** Deriva la zona geográfica a partir del texto libre del campo origen */
export function origenToZona(origen?: string): Zona | undefined {
  if (!origen) return undefined;
  const o = origen.toLowerCase();
  if (o.includes("mediterr")) return "Mediterráneo";
  if (o.includes("sudáfrica") || o.includes("sudafrica")) return "África";
  if (o.includes("africa") && !o.includes("norte")) return "África";
  if (o.includes("asia") || o.includes("china") || o.includes("japón") || o.includes("anatolia") || o.includes("india")) return "Asia";
  if (o.includes("améric") || o.includes("mexico") || o.includes("méxico")) return "América";
  if (o.includes("europ") || o.includes("países bajos")) return "Europa";
  return undefined;
}

export interface Flor {
  slug: string;
  nombre: string;
  nombreCientifico?: string;
  description: string;
  poster: string;
  categoria: Categoria;
  zona?: Zona;
  origen?: string;
  estacion?: string;
  cuidados?: string;
  genero?: string;
  familia?: string;
  simbolismo?: string;
  usos?: string;
  peligrosa?: boolean;
}

export const flores: Flor[] = [
  {
    slug: "rosas",
    nombre: "Rosas",
    categoria: "Arbustos",
    description:
      "Las rosas pertenecen al género botánico Rosa y se caracterizan por sus pétalos suaves, delicados y a menudo fragantes. Vienen en una amplia gama de colores, incluyendo rojo, rosa, blanco, amarillo, naranja y más. Las flores de rosa generalmente tienen capullos rodeados por capas de pétalos que se abren gradualmente a medida que la flor florece.",
    poster: "/img/Generales/Galeria/Rosas.jpg",
  },
  {
    slug: "tulipanes",
    nombre: "Tulipanes",
    categoria: "Bulbosas",
    description:
      "Los tulipanes son flores bulbosas notables por su forma única y colores vibrantes. Están relacionados con el género botánico Tulipa y son originarios principalmente de regiones de Europa y Asia. Los tulipanes crecen en tallos erectos y presentan una flor grande con seis pétalos.",
    poster: "/img/Generales/Galeria/Tulipanes.jpg",
  },
  {
    slug: "claveles",
    nombre: "Claveles",
    categoria: "Perennes",
    description:
      "Los claveles, conocidos científicamente como Dianthus caryophyllus, son flores populares y reconocidas por su fragancia y apariencia distintiva. Son originarios de la región mediterránea, pero se cultivan en muchas partes del mundo. Los claveles crecen en tallos erectos y tienen flores con pétalos dentados y bordeados.",
    poster: "/img/Generales/Galeria/Claveles.jpg",
  },
  {
    slug: "girasoles",
    nombre: "Girasoles",
    categoria: "Anuales",
    description:
      "Los girasoles, científicamente conocidos como Helianthus annuus, son flores grandes y llamativas que se caracterizan por sus pétalos de color amarillo brillante y su centro de semillas distintivo. Estas flores pertenecen a la familia de las asteráceas y son originarias de América del Norte.",
    poster: "/img/Generales/Galeria/Girasoles.jpg",
  },
  {
    slug: "margaritas",
    nombre: "Margaritas",
    categoria: "Perennes",
    description:
      "Las margaritas, pertenecientes al género botánico Bellis, son flores encantadoras y reconocibles que se caracterizan por sus pétalos blancos y centros amarillos rodeados de pétalos blancos. Son originarias de Europa y Asia, pero se han extendido a muchas partes del mundo debido a su popularidad.",
    poster: "/img/Generales/Galeria/Margaritas.jpg",
  },
  {
    slug: "camelias",
    nombre: "Camelias",
    categoria: "Arbustos",
    description:
      "Las camelias, científicamente conocidas como Camellia, son arbustos o pequeños árboles que se destacan por sus hermosas flores y hojas brillantes. Originarias de Asia, especialmente de China y Japón, las camelias se han convertido en plantas populares en jardinería debido a su belleza y versatilidad.",
    poster: "/img/Generales/Galeria/Camelias.jpg",
  },
  {
    slug: "loto",
    nombre: "Flor de Loto",
    categoria: "Acuáticas",
    description:
      "Las flores de loto, conocidas científicamente como Nelumbo nucifera, son flores acuáticas magníficas y profundamente simbólicas. Son originarias de partes de Asia y Australia y se encuentran en estanques y lagos de aguas tranquilas. Las flores de loto emergen de la superficie del agua en tallos largos y robustos.",
    poster: "/img/Generales/Galeria/Flor de loto.webp",
  },
  {
    slug: "peonias",
    nombre: "Peonias",
    categoria: "Perennes",
    description:
      "Las peonías, científicamente conocidas como Paeonia, son flores exquisitas y muy valoradas por su belleza y diversidad. Son originarias de Asia y Europa y se han convertido en flores populares en jardinería y arreglos florales.",
    poster: "/img/Generales/Galeria/Peonias.jpg",
  },
  {
    slug: "violetas",
    nombre: "Violetas",
    categoria: "Perennes",
    description:
      "Las violetas, pertenecientes al género botánico Viola, son flores pequeñas y encantadoras conocidas por sus formas delicadas y variados colores. Hay muchas especies y variedades de violetas que se encuentran en diferentes partes del mundo.",
    poster: "/img/Generales/Galeria/Violetas.jpg",
  },
  {
    slug: "lirios",
    nombre: "Lirios",
    categoria: "Bulbosas",
    description:
      "Los lirios, científicamente conocidos como Lilium, son flores elegantes y majestuosas que se caracterizan por sus grandes y llamativas flores con pétalos en forma de trompeta. Hay muchas especies y variedades de lirios que se encuentran en todo el mundo. Los lirios tienen tallos altos y erectos que pueden variar en altura según la especie.",
    poster: "/img/Generales/Galeria/Lirios.jpg",
  },
  {
    slug: "calendulas",
    nombre: "Caléndulas",
    categoria: "Anuales",
    description:
      "Las caléndulas, también conocidas como \"caléndulas oficinales\" o \"caléndulas comunes\", son flores coloridas y llamativas que pertenecen al género botánico Calendula. Son originarias de regiones del sur de Europa y el Mediterráneo, pero se cultivan en muchas partes del mundo por su belleza y propiedades medicinales.",
    poster: "/img/Generales/Galeria/Calendulas.jpg",
  },
  {
    slug: "crisantemos",
    nombre: "Crisantemos",
    categoria: "Perennes",
    description:
      "Los crisantemos, científicamente conocidos como Chrysanthemum, son flores ornamentales populares que se destacan por su amplia variedad de colores, formas y tamaños. Originarios de Asia y Europa, los crisantemos se han convertido en flores muy apreciadas en todo el mundo.",
    poster: "/img/Generales/Galeria/Crisantemos.jpg",
  },
  {
    slug: "gladiolos",
    nombre: "Gladiolos",
    categoria: "Bulbosas",
    description:
      "Los gladiolos, conocidos científicamente como Gladiolus, son flores altas y esbeltas que se caracterizan por sus espigas verticales de flores llamativas. Originarios de África, Asia y el Mediterráneo, los gladiolos son populares tanto en jardinería como en la industria de las flores cortadas.",
    poster: "/img/Generales/Galeria/Gladiolos.webp",
  },
  {
    slug: "narcisos",
    nombre: "Narcisos",
    categoria: "Bulbosas",
    description:
      "Los narcisos, también conocidos como jonquillas o narcisos amarillos, son flores bulbosas pertenecientes al género Narcissus. Originarios de Europa y África del Norte, los narcisos son apreciados por sus flores hermosas y fragantes que anuncian la llegada de la primavera.",
    poster: "/img/Generales/Galeria/Narcisos.jpg",
  },
  {
    slug: "flor-de-pascua",
    nombre: "Flor de Pascua",
    categoria: "Arbustos",
    description:
      "Las flores de Pascua, conocidas también como poinsettias, son plantas populares durante la temporada navideña debido a sus llamativas hojas de colores brillantes. Las flores de Pascua son nativas de México y América Central y se han convertido en símbolos emblemáticos de la Navidad en muchas partes del mundo.",
    poster: "/img/Generales/Galeria/Flor de Pascua.jpg",
  },
  {
    slug: "begonias",
    nombre: "Begonias",
    categoria: "Perennes",
    description:
      "Las begonias, pertenecientes al género botánico Begonia, son plantas ornamentales populares apreciadas por sus hojas coloridas y sus atractivas flores. Hay una gran variedad de especies y cultivares de begonias, lo que resulta en una amplia gama de formas, tamaños y colores.",
    poster: "/img/Generales/Galeria/Begonias.jpg",
  },
  {
    slug: "amapolas",
    nombre: "Amapolas",
    categoria: "Anuales",
    description:
      "Las amapolas son flores icónicas conocidas por sus brillantes y vibrantes pétalos rojos que contrastan con su centro oscuro. Pertenecientes al género Papaver, las amapolas se encuentran en diversas especies y variedades en todo el mundo.",
    poster: "/img/Generales/Galeria/Amapolas.jpg",
  },
  {
    slug: "lycoris",
    nombre: "Lycoris",
    categoria: "Bulbosas",
    description:
      "Las Lycoris, también conocidas como \"lirios de otoño\" o \"lirios mágicos\", son un género de plantas bulbosas que se caracterizan por sus llamativas flores en forma de trompeta y su hábito de florecer después de que las hojas han caído. Las Lycoris son nativas de Asia y se cultivan en muchas partes del mundo por su belleza única.",
    poster: "/img/Generales/Galeria/Lycoris.jpg",
  },
  {
    slug: "orquideas",
    nombre: "Orquídeas",
    categoria: "Epífitas",
    description:
      "Las orquídeas son una familia diversa de plantas florales que se caracterizan por su sorprendente belleza y variedad de formas, colores y tamaños. Con más de 25,000 especies conocidas, las orquídeas son algunas de las flores más exquisitas y apreciadas en todo el mundo.",
    poster: "/img/Generales/Galeria/Orquideas.webp",
  },
  {
    slug: "jacintos",
    nombre: "Jacintos",
    categoria: "Bulbosas",
    peligrosa: true,
    description:
      "Los jacintos, científicamente conocidos como Hyacinthus, son flores bulbosas que se caracterizan por sus llamativas flores en forma de racimo y su fragancia dulce y distintiva. Originarios del Mediterráneo y Asia Occidental, los jacintos son apreciados por su belleza y aroma.",
    poster: "/img/Generales/Galeria/Jacintos.jpg",
  },
  {
    slug: "hortensia",
    nombre: "Hortensia",
    categoria: "Arbustos",
    description:
      "Las hortensias, científicamente conocidas como Hydrangea, son arbustos florales que se caracterizan por sus grandes cabezas de flores pomposas y su capacidad para cambiar de color según el pH del suelo. Originarias de Asia y América, las hortensias son apreciadas por su belleza y versatilidad.",
    poster: "/img/Generales/Galeria/Hortensia.jpg",
  },
  {
    slug: "pensamiento",
    nombre: "Pensamiento",
    categoria: "Anuales",
    description:
      "Los pensamientos, científicamente conocidos como Viola tricolor, son flores anuales o bienales que se caracterizan por sus pequeñas y delicadas flores de colores vibrantes. Originarios de Europa, los pensamientos son populares en jardinería y se cultivan en todo el mundo.",
    poster: "/img/Generales/Galeria/Pensamiento.jpg",
  },
  {
    slug: "dalia",
    nombre: "Dalia",
    categoria: "Perennes",
    description:
      "Las dalias, científicamente conocidas como Dahlia, son flores pertenecientes a la familia Asteraceae. Estas plantas herbáceas perennes se caracterizan por sus flores grandes y variadas, con una amplia gama de formas, tamaños y colores.",
    poster: "/img/Generales/Galeria/Dalia.jpg",
  },
  {
    slug: "petunia",
    nombre: "Petunia",
    categoria: "Anuales",
    description:
      "Las petunias, científicamente conocidas como Petunia, son flores anuales o perennes que pertenecen a la familia Solanaceae. Estas plantas herbáceas son populares en jardinería y paisajismo debido a su fácil cultivo y a la abundancia de flores vistosas.",
    poster: "/img/Generales/Galeria/Petunia.jpg",
  },
  // ── Nuevas flores ──────────────────────────────────────────────
  {
    slug: "azafran",
    nombre: "Azafrán",
    categoria: "Bulbosas",
    description: "El azafrán es una planta bulbosa de flores lila-violáceas cuyo valor reside en sus tres estigmas rojos, la especia más cara del mundo por peso.",
    poster: "/img/Generales/Galeria/Azafran.jpg",
  },
  {
    slug: "azucena",
    nombre: "Azucena",
    categoria: "Bulbosas",
    description: "La azucena o lirio blanco es una de las flores más antiguas cultivadas, con flores acampanadas de un blanco inmaculado y fragancia intensa.",
    poster: "/img/Generales/Galeria/Azucena.jpg",
  },
  {
    slug: "gazania",
    nombre: "Gazania",
    categoria: "Perennes",
    description: "La gazania es una planta sudafricana con flores espectaculares en forma de margarita grande que solo se abren bajo la luz solar directa.",
    poster: "/img/Generales/Galeria/Gazania.jpg",
  },
  {
    slug: "gerbera",
    nombre: "Gerbera",
    categoria: "Perennes",
    description: "La gerbera es una de las flores cortadas más vendidas del mundo, famosa por sus enormes cabezas florales en una paleta cromática extraordinaria.",
    poster: "/img/Generales/Galeria/Gerbera.jpg",
  },
  {
    slug: "iris",
    nombre: "Iris",
    categoria: "Perennes",
    description: "El iris es una de las flores más elegantes del jardín, con más de 300 especies en una amplia gama de colores y una silueta arquitectónica inconfundible.",
    poster: "/img/Generales/Galeria/Iris.jpg",
  },
  {
    slug: "lavanda",
    nombre: "Lavanda",
    categoria: "Arbustos",
    description: "La lavanda es un subarbusto aromático mediterráneo cuyas espigas violáceo-azuladas y fragancia inconfundible la han convertido en una de las plantas más amadas del mundo.",
    poster: "/img/Generales/Galeria/Lavanda.jpg",
  },
  {
    slug: "verbena",
    nombre: "Verbena",
    categoria: "Anuales",
    description: "La verbena de jardín es una planta de floración exuberante con pequeñas flores agrupadas en corimbos en una amplísima paleta de colores.",
    poster: "/img/Generales/Galeria/Verbena.jpg",
  },
  {
    slug: "jazmin",
    nombre: "Jazmín",
    categoria: "Arbustos",
    description: "El jazmín es una enredadera trepadora originaria de Asia del Sur y Persia, famosa en todo el mundo por su fragancia dulce e intensa y sus pequeñas flores blancas.",
    poster: "/img/Generales/Galeria/Jazmín.jpg",
  },
];

export function getFlor(slug: string): Flor | undefined {
  return flores.find((f) => f.slug === slug);
}


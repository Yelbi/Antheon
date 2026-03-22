export interface QuizOpcion {
  texto: string;
  flores: string[]; // slugs de flores que suma esta opción
}

export interface QuizPregunta {
  id: number;
  pregunta: string;
  opciones: QuizOpcion[];
}

export const PREGUNTAS: QuizPregunta[] = [
  {
    id: 1,
    pregunta: "Si fueras una estación del año, serías...",
    opciones: [
      { texto: "La primavera, llena de energía y color", flores: ["girasoles", "margaritas"] },
      { texto: "El verano, apasionado y ardiente", flores: ["rosas", "jazmin"] },
      { texto: "El otoño, cálido y reflexivo", flores: ["peonias", "lavanda"] },
      { texto: "El invierno, sereno y profundo", flores: ["loto", "lirios"] },
    ],
  },
  {
    id: 2,
    pregunta: "¿Qué ambiente te recarga más?",
    opciones: [
      { texto: "Un jardín luminoso y perfumado", flores: ["rosas", "peonias"] },
      { texto: "Un campo abierto bajo el sol", flores: ["girasoles", "margaritas"] },
      { texto: "Un lugar sereno junto al agua", flores: ["loto", "violetas"] },
      { texto: "Un bosque aromático al atardecer", flores: ["lavanda", "orquideas"] },
    ],
  },
  {
    id: 3,
    pregunta: "¿Cómo describes tu forma de amar?",
    opciones: [
      { texto: "Con fuego e intensidad", flores: ["rosas", "jazmin"] },
      { texto: "Con alegría y entrega total", flores: ["girasoles", "peonias"] },
      { texto: "Con paciencia y profundidad", flores: ["loto", "lirios"] },
      { texto: "Con ternura y pequeños detalles", flores: ["violetas", "lavanda"] },
    ],
  },
  {
    id: 4,
    pregunta: "¿Cuál de estas palabras te define mejor?",
    opciones: [
      { texto: "Apasionada/o", flores: ["rosas", "jazmin"] },
      { texto: "Alegre", flores: ["girasoles", "margaritas"] },
      { texto: "Serena/o", flores: ["loto", "lavanda"] },
      { texto: "Elegante", flores: ["peonias", "lirios"] },
    ],
  },
  {
    id: 5,
    pregunta: "¿Qué sensación buscas más en la vida?",
    opciones: [
      { texto: "La emoción y la pasión", flores: ["rosas", "jazmin"] },
      { texto: "La alegría y la ligereza", flores: ["girasoles", "margaritas"] },
      { texto: "La paz interior", flores: ["loto", "lavanda"] },
      { texto: "Lo único e irrepetible", flores: ["orquideas", "lirios"] },
    ],
  },
  {
    id: 6,
    pregunta: "¿Qué tipo de fragancia te seduce?",
    opciones: [
      { texto: "Dulce y clásica", flores: ["rosas", "peonias"] },
      { texto: "Fresca y herbal", flores: ["lavanda", "margaritas"] },
      { texto: "Intensa y envolvente", flores: ["jazmin", "orquideas"] },
      { texto: "Suave y etérea", flores: ["violetas", "lirios"] },
    ],
  },
  {
    id: 7,
    pregunta: "¿Qué te atrae de alguien?",
    opciones: [
      { texto: "Su pasión y determinación", flores: ["rosas", "jazmin"] },
      { texto: "Su alegría y espontaneidad", flores: ["girasoles", "margaritas"] },
      { texto: "Su calma y sabiduría", flores: ["loto", "lirios"] },
      { texto: "Su calidez y generosidad", flores: ["peonias", "violetas"] },
    ],
  },
  {
    id: 8,
    pregunta: "¿Con qué elemento de la naturaleza te identificas?",
    opciones: [
      { texto: "El fuego", flores: ["rosas", "girasoles"] },
      { texto: "El agua", flores: ["loto", "violetas"] },
      { texto: "La tierra y sus aromas", flores: ["lavanda", "peonias"] },
      { texto: "El aire, libre y etéreo", flores: ["orquideas", "margaritas"] },
    ],
  },
  {
    id: 9,
    pregunta: "¿Cómo enfrentas los desafíos?",
    opciones: [
      { texto: "Con valentía y decisión", flores: ["rosas", "girasoles"] },
      { texto: "Con reflexión y calma", flores: ["loto", "lavanda"] },
      { texto: "Buscando calidez y apoyo", flores: ["peonias", "jazmin"] },
      { texto: "Transformándolos en algo bello", flores: ["orquideas", "lirios"] },
    ],
  },
  {
    id: 10,
    pregunta: "¿Cuál de estas frases es tuya?",
    opciones: [
      { texto: "\"Amo sin reservas ni condiciones\"", flores: ["rosas", "peonias"] },
      { texto: "\"Cada día tiene su propia luz\"", flores: ["girasoles", "margaritas"] },
      { texto: "\"Encuentro la paz en el silencio\"", flores: ["loto", "lavanda"] },
      { texto: "\"Soy única/o e irrepetible\"", flores: ["orquideas", "jazmin"] },
    ],
  },
];

/** Descripción de personalidad para cada flor resultado */
export const PERSONALIDADES: Record<string, string> = {
  rosas:
    "Eres intensa y apasionada. Das todo en lo que amas y sientes las emociones con una profundidad que pocos alcanzan. El amor es tu idioma nativo.",
  girasoles:
    "Eres la luz de cada espacio. Tu alegría es genuina y contagiosa; donde tú estás, los demás encuentran calor y energía para seguir adelante.",
  lavanda:
    "Tienes una serenidad envidiable. Sabes encontrar belleza en la calma y llevas paz a donde vas. Tu presencia es un refugio para quienes te rodean.",
  violetas:
    "Eres delicada pero profunda. Observas el mundo con una sensibilidad especial y guardas una riqueza interior que sorprende a quienes se acercan.",
  orquideas:
    "Eres única e irrepetible. Tu elegancia y misterio fascinan sin esfuerzo. No te adaptas al entorno, lo transformas con solo estar.",
  loto:
    "Eres sabia y resiliente. Creces desde lo más profundo y floreces con una belleza que solo se forja atravesando las dificultades con gracia.",
  peonias:
    "Eres cálida y generosa. Tu presencia llena los espacios de vida y tu forma de amar es abundante, sin medias tintas ni condiciones.",
  margaritas:
    "Eres fresca y auténtica. Tu espontaneidad es tu mayor encanto y contagias alegría sin proponértelo, con la sencillez de quien sabe quién es.",
  lirios:
    "Eres elegante y pura. Llevas contigo una dignidad natural que no necesita demostración. Tu presencia inspira respeto y admiración.",
  jazmin:
    "Eres misterio y sensualidad. Tu influencia es sutil pero poderosa. Como tu fragancia, te quedas en quien te conoce mucho después de que te vas.",
};

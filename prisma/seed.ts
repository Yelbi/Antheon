import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const flores = [
  {
    slug: "rosas",
    nombre: "Rosas",
    nombreCientifico: "Rosa sp.",
    categoria: "Arbustos",
    poster: "/img/Generales/Galeria/Rosas.jpg",
    relacion1: "camelias",
    relacion2: "hortensia",
    relacion3: "flor-de-pascua",
    description:
      "Las rosas pertenecen al género botánico Rosa y se caracterizan por sus pétalos suaves, delicados y a menudo fragantes. Vienen en una amplia gama de colores, incluyendo rojo, rosa, blanco, amarillo, naranja y más. Las flores de rosa generalmente tienen capullos rodeados por capas de pétalos que se abren gradualmente a medida que la flor florece. Con más de 300 especies y miles de variedades cultivadas, la rosa es una de las flores más cultivadas y reconocidas en el mundo.",
    genero: "Rosa",
    familia: "Rosaceae",
    origen: "Asia, Europa, América del Norte",
    estacion: "Primavera, Verano",
    simbolismo:
      "La rosa roja simboliza el amor apasionado y el romance; la rosa blanca, la pureza y la inocencia; la rosa amarilla, la amistad y la alegría. En general, las rosas representan belleza, amor y afecto, y han sido símbolo de confidencialidad y secreto desde la antigüedad.",
    usos:
      "Ornamental en jardines y arreglos florales. La destilación de pétalos produce agua de rosas y aceite esencial usado en perfumería y cosméticos. En gastronomía, los pétalos se usan en mermeladas, tés y decoración. Algunas variedades tienen usos medicinales como antiinflamatorio y rico en vitamina C (escaramujo).",
    cuidados:
      "Requieren suelo fértil bien drenado y exposición plena al sol (mínimo 6 horas diarias). Riego regular pero sin encharcamiento. Abonar cada 2-4 semanas durante la temporada de crecimiento. Podar en otoño o a principios de primavera para estimular la floración. Vigilar enfermedades fúngicas como el oídio y la mancha negra.",
  },
  {
    slug: "tulipanes",
    nombre: "Tulipanes",
    nombreCientifico: "Tulipa gesneriana",
    categoria: "Bulbosas",
    poster: "/img/Generales/Galeria/Tulipanes.jpg",
    relacion1: "narcisos",
    relacion2: "jacintos",
    relacion3: "lirios",
    description:
      "Los tulipanes son flores bulbosas notables por su forma única en copa y sus colores vibrantes. Pertenecen al género Tulipa y son originarios de Asia Central, desde donde fueron llevados a Europa en el siglo XVI, desencadenando la célebre \"tulipomanía\" en los Países Bajos. Los tulipanes crecen en tallos erectos y presentan una flor grande con seis pétalos que puede ser lisa, flecada, doble o en forma de loro.",
    genero: "Tulipa",
    familia: "Liliaceae",
    origen: "Asia Central, Anatolia, Países Bajos (cultivo)",
    estacion: "Primavera",
    simbolismo:
      "Los tulipanes simbolizan el amor perfecto e incondicional. El tulipán rojo expresa amor romántico; el amarillo, alegría y esperanza; el blanco, perdón y pureza. En la cultura otomana eran símbolo de paraíso terrenal y abundancia.",
    usos:
      "Principalmente ornamentales en jardines, parques y arreglos florales cortados. Los Países Bajos exportan miles de millones de bulbos anualmente. Algunas culturas utilizan los pétalos como sustituto del azafrán en cocina, aunque sin el mismo sabor.",
    cuidados:
      "Plantar los bulbos en otoño a unos 15 cm de profundidad en suelo bien drenado. Necesitan frío invernal para florecer correctamente. Riego moderado durante el crecimiento; reducir tras la floración. Una vez que las hojas amarilleen, extraer los bulbos, secarlos y almacenarlos en lugar fresco y seco hasta el siguiente otoño.",
  },
  {
    slug: "claveles",
    nombre: "Claveles",
    nombreCientifico: "Dianthus caryophyllus",
    categoria: "Perennes",
    poster: "/img/Generales/Galeria/Claveles.jpg",
    relacion1: "peonias",
    relacion2: "margaritas",
    relacion3: "crisantemos",
    description:
      "Los claveles son flores populares y reconocidas por su fragancia dulce y especiada y su apariencia distintiva con pétalos dentados y bordeados. Son originarios de la región mediterránea, pero se cultivan extensamente en todo el mundo. Existen en una amplísima gama de colores: rojo, rosa, blanco, amarillo, púrpura y bicolores. Son una de las flores cortadas más comercializadas a nivel global.",
    genero: "Dianthus",
    familia: "Caryophyllaceae",
    origen: "Región Mediterránea",
    estacion: "Primavera, Verano",
    simbolismo:
      "El clavel rojo simboliza el amor profundo y la admiración; el blanco, la buena suerte y la pureza; el rosa, el amor maternal. En muchos países es símbolo del Día de la Madre. El clavel también tiene connotaciones políticas históricas, como en la Revolución de los Claveles en Portugal (1974).",
    usos:
      "Ampliamente usados como flor cortada en ramos, coronas y arreglos. En perfumería se extrae su esencia floral. En gastronomía, algunos pétalos son comestibles y se usan para decorar ensaladas y postres. Tienen propiedades medicinales leves usadas en herboristería tradicional.",
    cuidados:
      "Prefieren suelo ligeramente alcalino, bien drenado y exposición solar plena. Riego moderado, evitando mojar las flores. Desgranar las flores marchitas para prolongar la floración. Abonar cada 3-4 semanas con fertilizante equilibrado. En climas fríos, proteger de heladas intensas.",
  },
  {
    slug: "girasoles",
    nombre: "Girasoles",
    nombreCientifico: "Helianthus annuus",
    categoria: "Anuales",
    poster: "/img/Generales/Galeria/Girasoles.jpg",
    relacion1: "calendulas",
    relacion2: "amapolas",
    relacion3: "dalia",
    description:
      "Los girasoles son flores grandes y llamativas originarias de América del Norte, donde eran cultivadas por pueblos indígenas hace más de 3.000 años. Se caracterizan por sus pétalos de color amarillo brillante (lígulas) dispuestos alrededor de un disco central marrón repleto de semillas. El fenómeno de heliotropismo en plantas jóvenes hace que sus tallos sigan el movimiento solar de este a oeste.",
    genero: "Helianthus",
    familia: "Asteraceae",
    origen: "América del Norte (zonas de México y EEUU)",
    estacion: "Verano",
    simbolismo:
      "El girasol simboliza la lealtad, el optimismo y la adoración. Su tendencia a orientarse hacia el sol lo asocia con la búsqueda de la luz, la positividad y la fidelidad. En la mitología griega, representa a Clitia, quien fue transformada en girasol por su amor no correspondido hacia Apolo.",
    usos:
      "Las semillas son altamente nutritivas y se consumen directamente o se procesan para obtener aceite de girasol, uno de los más usados en cocina a nivel mundial. Los tallos y las flores se usan como forraje. En cosmética, el aceite de girasol es un emoliente popular. Como flor cortada es de gran valor decorativo.",
    cuidados:
      "Planta de sol pleno que requiere al menos 6-8 horas de luz directa. Tolera suelos pobres pero prefiere suelos profundos y bien drenados. Riego abundante pero espaciado; resistente a la sequía una vez establecida. Siembra directa en primavera cuando no haya riesgo de heladas. Variedades gigantes pueden necesitar tutor.",
  },
  {
    slug: "margaritas",
    nombre: "Margaritas",
    nombreCientifico: "Bellis perennis",
    categoria: "Perennes",
    poster: "/img/Generales/Galeria/Margaritas.jpg",
    relacion1: "crisantemos",
    relacion2: "dalia",
    relacion3: "peonias",
    description:
      "Las margaritas son flores encantadoras y reconocibles, pertenecientes al género Bellis. Se caracterizan por sus pétalos blancos (lígulas) dispuestos en torno a un centro amarillo. Son originarias de Europa y Asia, y son de las flores más extendidas en prados naturales y jardines de todo el mundo. A pesar de su sencilla apariencia, la margarita es en realidad una inflorescencia compuesta por cientos de pequeñas flores.",
    genero: "Bellis",
    familia: "Asteraceae",
    origen: "Europa, Asia Occidental",
    estacion: "Primavera, Verano",
    simbolismo:
      "La margarita simboliza la inocencia, la pureza y la alegría. Está asociada a la infancia y a la juventud. En el folclore europeo, deshojar una margarita para adivinar si alguien te quiere o no es una tradición muy antigua. También representa la lealtad y el amor verdadero.",
    usos:
      "Uso ornamental extensivo en jardines, bordes y jardineras. Las flores y hojas jóvenes de Bellis perennis son comestibles y se usan en ensaladas. En medicina tradicional tiene propiedades antiinflamatorias y se ha usado para tratar contusiones, heridas y afecciones respiratorias leves.",
    cuidados:
      "Muy resistentes y fáciles de cultivar. Prefieren suelos húmedos y bien drenados con exposición solar o semisombra. Riego regular especialmente en verano. Eliminar las flores marchitas favorece la floración continua. En zonas cálidas pueden comportarse como anuales. Se multiplican fácilmente por división de mata.",
  },
  {
    slug: "camelias",
    nombre: "Camelias",
    nombreCientifico: "Camellia japonica",
    categoria: "Arbustos",
    poster: "/img/Generales/Galeria/Camelias.jpg",
    relacion1: "rosas",
    relacion2: "hortensia",
    relacion3: "flor-de-pascua",
    description:
      "Las camelias son arbustos o pequeños árboles de hoja perenne con flores hermosas y hojas brillantes de color verde oscuro. Originarias de Asia, especialmente de China y Japón, se han convertido en plantas icónicas de la jardinería occidental desde el siglo XVIII. Sus flores, que aparecen en los meses más fríos del año, pueden ser simples, semidobles o completamente dobles, en colores que van del blanco al rojo intenso.",
    genero: "Camellia",
    familia: "Theaceae",
    origen: "China, Japón, Corea del Sur",
    estacion: "Otoño, Invierno",
    simbolismo:
      "En Japón, la camelia (tsubaki) simboliza el amor perfecto, la distinción y la gratitud. En Occidente está asociada a la excelencia y la admiración. La famosa novela de Alejandro Dumas hijo, \"La Dama de las Camelias\", la convirtió en símbolo del amor romántico y trágico.",
    usos:
      "Ornamental en jardines, setos y macetas. La especie Camellia sinensis es la fuente del té verde, negro y blanco, una de las bebidas más consumidas en el mundo. El aceite de semillas de camelia se usa en cocina japonesa y en cosmética como tratamiento capilar y cutáneo.",
    cuidados:
      "Prefieren suelos ácidos (pH 4.5–6.5), ricos en materia orgánica y bien drenados. Semisombra o sol filtrado; el sol directo intenso puede quemar las hojas. Riego regular con agua sin cal. Abonar con fertilizante para acidófilas en primavera y verano. Proteger de heladas intensas, especialmente los capullos.",
  },
  {
    slug: "loto",
    nombre: "Flor de Loto",
    nombreCientifico: "Nelumbo nucifera",
    categoria: "Acuáticas",
    poster: "/img/Generales/Galeria/Loto.webp",
    relacion1: "orquideas",
    relacion2: "peonias",
    relacion3: "lirios",
    description:
      "La flor de loto es una planta acuática magnífica y profundamente simbólica. Emerge de aguas turbias y fangosas para florecer inmaculada en la superficie, lo que la convierte en uno de los símbolos más poderosos de las culturas asiáticas. Sus grandes flores, de color rosa o blanco, se abren al amanecer y se cierran al atardecer. La planta tiene la extraordinaria capacidad de mantener sus flores a temperatura constante para atraer a los polinizadores.",
    genero: "Nelumbo",
    familia: "Nelumbonaceae",
    origen: "Asia del Sur, Australia, Este de Asia",
    estacion: "Verano",
    simbolismo:
      "El loto es uno de los símbolos más sagrados del hinduismo y el budismo. Representa la pureza espiritual, el renacimiento y la iluminación: surge del barro (el mundo material) y florece impecable (la elevación espiritual). En Egipto antiguo simbolizaba la creación y el renacimiento del sol. El loto rosado es la flor nacional de la India.",
    usos:
      "Todas las partes de la planta son comestibles: semillas, raíces, hojas y tallos se consumen ampliamente en la cocina asiática. Las semillas de loto tienen propiedades medicinales, usadas en la medicina tradicional china como calmantes y para tratar insomnio. Las flores y hojas se usan en rituales religiosos y las raíces son ingrediente gastronómico muy apreciado.",
    cuidados:
      "Planta acuática que necesita agua tranquila, cálida y de poca profundidad (30–60 cm). Requiere sol pleno y temperaturas superiores a 15 °C. Se cultiva en macetas sumergidas con sustrato arcilloso sin drenaje. En invierno, en climas fríos, llevar a interior o cubrir con agua profunda para que los rizomas no se hielen.",
  },
  {
    slug: "peonias",
    nombre: "Peonias",
    nombreCientifico: "Paeonia lactiflora",
    categoria: "Perennes",
    poster: "/img/Generales/Galeria/Peonias.jpg",
    relacion1: "margaritas",
    relacion2: "crisantemos",
    relacion3: "dalia",
    description:
      "Las peonías son flores exquisitas y muy valoradas por sus generosas flores llenas de pétalos y su fragancia sutil y elegante. Originarias de Asia y Europa, son plantas longevas que pueden vivir décadas en el jardín sin necesidad de ser trasplantadas. Sus flores, que aparecen a finales de primavera, pueden ser simples, semidobles o completamente dobles, en colores que van del blanco y el amarillo al rosa, rojo y púrpura.",
    genero: "Paeonia",
    familia: "Paeoniaceae",
    origen: "China, Tíbet, Siberia, Europa del Sur",
    estacion: "Primavera",
    simbolismo:
      "En China, la peonía es llamada \"la reina de las flores\" y simboliza la prosperidad, el honor y la femineidad. En Occidente representa el romance, la buena fortuna y el matrimonio feliz. También se asocia con la compasión, la vergüenza y la introversión en el lenguaje victoriano de las flores.",
    usos:
      "Ampliamente usadas como flor cortada de lujo en bodas y eventos. En medicina tradicional china, la raíz de peonía (bai shao) se ha usado durante siglos para tratar dolores, cólicos menstruales e hipertensión. El aceite de semillas tiene aplicaciones cosméticas.",
    cuidados:
      "Necesitan suelo fértil, profundo y bien drenado. Exposición solar plena o semisombra ligera. Plantar los ojos (yemas) a no más de 5 cm de profundidad; plantar demasiado hondo inhibe la floración. Riego regular en primavera; reducir en verano. No trasplantar innecesariamente ya que tardan años en recuperarse. Tutorear las flores grandes para evitar que se doblen.",
  },
  {
    slug: "violetas",
    nombre: "Violetas",
    nombreCientifico: "Viola odorata",
    categoria: "Perennes",
    poster: "/img/Generales/Galeria/Violetas.jpg",
    relacion1: "pensamiento",
    relacion2: "claveles",
    relacion3: "margaritas",
    description:
      "Las violetas son flores pequeñas y encantadoras, conocidas por su delicada fragancia y sus variados colores en tonos morados, azules, blancos y amarillos. Pertenecen al género Viola, que comprende más de 500 especies distribuidas por todo el mundo. La violeta olorosa (Viola odorata) es la especie más cultivada y apreciada por su perfume inconfundible.",
    genero: "Viola",
    familia: "Violaceae",
    origen: "Europa, Asia, América del Norte",
    estacion: "Primavera",
    simbolismo:
      "La violeta simboliza la modestia, la humildad y la fidelidad. En la antigua Grecia era símbolo de Atenas y del amor eterno. En la época victoriana representar las violetas significaba \"te ocupo cada pensamiento\". Napoleón Bonaparte las usaba como flor personal y sus seguidores se llamaban \"seguidores de la violeta\".",
    usos:
      "Los pétalos de violeta son comestibles y se usan en la elaboración de licores (crème de violette), caramelos, mermeladas y decoración de postres. En perfumería, el absoluto de violeta es muy apreciado aunque difícil de extraer. Tienen propiedades medicinales: antiinflamatorias, expectorantes y antioxidantes.",
    cuidados:
      "Prefieren suelos húmedos, ricos en materia orgánica, y semisombra o luz solar indirecta. Riego frecuente pero sin encharcamiento. Se propagan fácilmente por división de mata o por semillas en primavera. Resisten bien el frío; son de las primeras flores en aparecer tras el invierno.",
  },
  {
    slug: "lirios",
    nombre: "Lirios",
    nombreCientifico: "Lilium candidum",
    categoria: "Bulbosas",
    poster: "/img/Generales/Galeria/Lirios.jpg",
    relacion1: "tulipanes",
    relacion2: "narcisos",
    relacion3: "jacintos",
    description:
      "Los lirios son flores elegantes y majestuosas que se caracterizan por sus grandes flores con seis tépalos en forma de trompeta o turbante, muchas veces intensamente perfumadas. El género Lilium comprende unas 100 especies nativas del hemisferio norte. Sus tallos pueden alcanzar hasta 2 metros de altura, y las flores aparecen en variados colores: blanco, amarillo, naranja, rosa, rojo y bicolores con manchas.",
    genero: "Lilium",
    familia: "Liliaceae",
    origen: "Europa, Asia, América del Norte",
    estacion: "Verano",
    simbolismo:
      "El lirio blanco (Lilium candidum) es símbolo de pureza, virginidad y divinidad; está asociado a la Virgen María en el arte cristiano. En la antigua Grecia representaba la fertilidad y el amor, relacionándolo con la diosa Hera. En general, los lirios simbolizan la renovación, la confianza y la pasión según su color.",
    usos:
      "Principalmente ornamentales como flores cortadas de alta categoría y en jardines. El lirio de tigre (L. lancifolium) tiene bulbos comestibles en la cocina asiática. En perfumería, la esencia de lirio es muy apreciada. Algunos bulbos tienen propiedades medicinales. Importante en simbología religiosa y funeraria.",
    cuidados:
      "Plantar los bulbos en otoño a 15–20 cm de profundidad en suelo bien drenado. Necesitan sol pleno o semisombra. Riego moderado; los bulbos se pudren fácilmente con exceso de humedad. Abonar a principios de primavera. Los lirios orientales y asiáticos son los más fáciles de cultivar. Cuidado: son tóxicos para los gatos.",
  },
  {
    slug: "calendulas",
    nombre: "Caléndulas",
    nombreCientifico: "Calendula officinalis",
    categoria: "Anuales",
    poster: "/img/Generales/Galeria/Calendulas.jpg",
    relacion1: "girasoles",
    relacion2: "amapolas",
    relacion3: "pensamiento",
    description:
      "Las caléndulas son flores coloridas y vistosas de color naranja y amarillo intenso. Pertenecen al género Calendula y son originarias del Mediterráneo. Su nombre deriva del latín \"calendae\" (primer día del mes), ya que florecen prácticamente durante todo el año en climas templados. Son conocidas tanto por su belleza ornamental como por sus importantes propiedades medicinales.",
    genero: "Calendula",
    familia: "Asteraceae",
    origen: "Mediterráneo, sur de Europa",
    estacion: "Primavera, Verano, Otoño",
    simbolismo:
      "La caléndula simboliza la creatividad, la energía, el calor y la alegría. En el México prehispánico y contemporáneo es la \"flor de muerto\" por excelencia, usada en el Día de los Muertos para guiar a las almas con su aroma y color intensos. En la tradición cristiana se asociaba a la Virgen María.",
    usos:
      "Ampliamente usada en medicina natural: sus pétalos tienen propiedades antiinflamatorias, cicatrizantes, antisépticas y antifúngicas. Es ingrediente clave en cremas y ungüentos dermatológicos para tratar heridas, quemaduras y dermatitis. En gastronomía, los pétalos son comestibles y añaden color a ensaladas, arroces y quesos. Se usa también en tintes naturales.",
    cuidados:
      "Muy fácil de cultivar. Requiere sol pleno y suelos moderadamente ricos y bien drenados. Riego regular pero no excesivo. Tolera bien el frío suave. Eliminar las flores marchitas prolonga la floración continuamente. Resiste plagas y es útil como planta compañera en huertas para repeler insectos.",
  },
  {
    slug: "crisantemos",
    nombre: "Crisantemos",
    nombreCientifico: "Chrysanthemum morifolium",
    categoria: "Perennes",
    poster: "/img/Generales/Galeria/Crisantemos.jpg",
    relacion1: "margaritas",
    relacion2: "dalia",
    relacion3: "peonias",
    description:
      "Los crisantemos son flores ornamentales con una de las mayores variedades de formas y colores del reino vegetal. Originarios de China, donde se cultivan desde hace más de 2.500 años, se convirtieron en símbolo nacional de Japón. Sus flores pueden ser simples, pompón, esféricas, plumosas o araña, y aparecen en todos los colores excepto azul. Son una de las flores cortadas más vendidas en el mundo.",
    genero: "Chrysanthemum",
    familia: "Asteraceae",
    origen: "China, Japón",
    estacion: "Otoño",
    simbolismo:
      "En Asia Oriental el crisantemo es símbolo de longevidad, renacimiento y nobleza. En Japón es el sello imperial y su floración se celebra con el Festival del Crisantemo. En Europa occidental se usa habitualmente como flor funeraria y se asocia con la muerte y el duelo, especialmente en torno al 1 de noviembre.",
    usos:
      "Flor cortada de enorme importancia comercial. En medicina tradicional china se usa como infusión para tratar la fiebre, la inflamación y los problemas visuales. La especie Chrysanthemum cinerariifolium es fuente de la piretrina, insecticida natural. Sus pétalos son comestibles y se usan en tés y sopas asiáticas.",
    cuidados:
      "Prefieren suelos bien drenados y ricos en nutrientes. Sol pleno o semisombra. Riego regular, más abundante en floración. Pellizcar los brotes en verano para obtener plantas más compactas y con más flores. Abonar cada dos semanas durante el crecimiento. En jardín, proteger de las heladas fuertes.",
  },
  {
    slug: "gladiolos",
    nombre: "Gladiolos",
    nombreCientifico: "Gladiolus communis",
    categoria: "Bulbosas",
    poster: "/img/Generales/Galeria/Gladiolos.webp",
    relacion1: "narcisos",
    relacion2: "lycoris",
    relacion3: "tulipanes",
    description:
      "Los gladiolos son plantas cormosas con espigas verticales de flores llamativas dispuestas en un solo lado del tallo. Su nombre procede del latín \"gladius\" (espada), por la forma de sus hojas. Con más de 260 especies nativas principalmente de África Subsahariana, han dado lugar a miles de cultivares en todos los colores imaginables. Son flores de gran impacto visual usadas en ramos y arreglos de flores cortadas.",
    genero: "Gladiolus",
    familia: "Iridaceae",
    origen: "África Subsahariana, Mediterráneo",
    estacion: "Verano",
    simbolismo:
      "El gladiolo simboliza la fuerza moral, la integridad y la sinceridad. Su nombre evoca la valentía del gladiador romano. Regalar gladiolos significa que la persona ha traspasado el corazón del donante. También es flor de recuerdo y se usa en homenajes póstumos.",
    usos:
      "Principalmente como flor cortada de gran impacto en arreglos florales. Los cormos de algunas especies africanas fueron utilizados como alimento en situaciones de escasez. Tienen escasa aplicación medicinal reconocida.",
    cuidados:
      "Plantar los cormos en primavera a 10–15 cm de profundidad en suelo fértil y bien drenado. Sol pleno. Riego regular durante el crecimiento; reducir tras la floración. Tutorear los tallos para que no se doblen con el viento. En climas fríos, extraer los cormos en otoño, secarlos y almacenarlos hasta primavera.",
  },
  {
    slug: "narcisos",
    nombre: "Narcisos",
    nombreCientifico: "Narcissus pseudonarcissus",
    categoria: "Bulbosas",
    poster: "/img/Generales/Galeria/Narcisos.jpg",
    relacion1: "tulipanes",
    relacion2: "jacintos",
    relacion3: "gladiolos",
    description:
      "Los narcisos son flores bulbosas pertenecientes al género Narcissus, con más de 50 especies silvestres. Son originarios de Europa y el norte de África, siendo la Península Ibérica el centro de su diversidad. Se distinguen por su flor con seis pétalos y una corona central (corona o trompeta) que puede ser corta o larga. Son las heraldas de la primavera, floreciendo incluso cuando aún puede nevar.",
    genero: "Narcissus",
    familia: "Amaryllidaceae",
    origen: "Europa Occidental, Mediterráneo, norte de África",
    estacion: "Primavera",
    simbolismo:
      "El narciso debe su nombre al mito griego de Narciso, el joven que se enamoró de su propio reflejo. Simboliza el renacimiento, la esperanza y el nuevo comienzo. En China es símbolo de buena fortuna y prosperidad en el año nuevo. En el lenguaje de las flores, también puede connotar vanidad excesiva.",
    usos:
      "Fundamentalmente ornamentales en jardines y como flores cortadas. Los bulbos y toda la planta son tóxicos por contener licorina y otros alcaloides, por lo que no tienen usos alimentarios. En investigación médica, la galantamina extraída de Narcissus se usa en el tratamiento del Alzheimer.",
    cuidados:
      "Plantar los bulbos en otoño a 10–15 cm de profundidad. Prefieren suelos bien drenados y algo arenosos. Toleran semisombra pero florecen mejor con sol pleno. No regar en exceso; los bulbos se pudren con humedad excesiva. Dejar que el follaje muera naturalmente tras la floración para que el bulbo acumule energía.",
  },
  {
    slug: "flor-de-pascua",
    nombre: "Flor de Pascua",
    nombreCientifico: "Euphorbia pulcherrima",
    categoria: "Arbustos",
    poster: "/img/Generales/Galeria/Flor de Pascua.jpg",
    relacion1: "camelias",
    relacion2: "rosas",
    relacion3: "hortensia",
    description:
      "La flor de Pascua, también conocida como nochebuena o poinsettia, es originaria de México y América Central. Lo que popularmente se consideran sus flores son en realidad brácteas foliares de colores brillantes (rojas, rosas, blancas o bicolores) que rodean las flores verdaderas, pequeñas y amarillas. En su hábitat natural puede alcanzar los 4 metros de altura. Se convirtió en símbolo navideño gracias al embajador estadounidense Joel Poinsett, quien la introdujo en EE. UU. en el siglo XIX.",
    genero: "Euphorbia",
    familia: "Euphorbiaceae",
    origen: "México, América Central",
    estacion: "Otoño, Invierno",
    simbolismo:
      "En México existe una leyenda nahua que explica que la flor de Pascua surgió de las lágrimas de una niña pobre que solo podía ofrecer hierbas al Niño Jesús en Navidad, y estas hierbas se transformaron en flores rojas. Simboliza la buena estrella, la celebración navideña y el sacrificio generoso.",
    usos:
      "Principalmente planta decorativa de interior durante las fiestas navideñas. En México, su latex se ha usado en medicina tradicional para estimular la producción de leche materna y tratar verrugas y sarna. Las brácteas se usan para fabricar colorante rojo natural. Precaución: el latex puede causar irritación cutánea.",
    cuidados:
      "Necesita mucha luz solar indirecta y temperaturas entre 15–22 °C. Riego moderado cuando el sustrato esté seco. Muy sensible a las corrientes de aire frío y a los cambios bruscos de temperatura. Para lograr que vuelva a colorear las brácteas el siguiente año, someterla a noches largas (14 h de oscuridad) durante 8 semanas en otoño.",
  },
  {
    slug: "begonias",
    nombre: "Begonias",
    nombreCientifico: "Begonia × hybrida",
    categoria: "Anuales",
    poster: "/img/Generales/Galeria/Begonias.jpg",
    relacion1: "pensamiento",
    relacion2: "petunia",
    relacion3: "amapolas",
    description:
      "Las begonias son plantas ornamentales pertenecientes al género Begonia, uno de los géneros más grandes de plantas con flor, con más de 1.800 especies. Son apreciadas tanto por sus flores coloridas como por su follaje decorativo con hojas asimétricas características. Existen begonias tuberosas, rizomatosas y fibrosas, adaptadas a muy distintas condiciones de cultivo. Son nativas principalmente de zonas tropicales y subtropicales de América, Asia y África.",
    genero: "Begonia",
    familia: "Begoniaceae",
    origen: "Regiones tropicales de América, Asia y África",
    estacion: "Primavera, Verano",
    simbolismo:
      "Las begonias simbolizan la cordialidad, el agradecimiento y la fantasía. En el lenguaje victoriano de las flores se asocian con la precaución y el mensaje implícito de \"te vigilo con cariño\". Son flores que expresan hospitalidad y bienvenida.",
    usos:
      "Principalmente ornamentales en interiores, jardines, terrazas y jardineras. Algunas especies tienen hojas y flores comestibles con sabor ácido (por el ácido oxálico), usadas en ensaladas en algunos países asiáticos con moderación. En medicina tradicional latinoamericana se han empleado para tratar afecciones hepáticas y renales.",
    cuidados:
      "Prefieren luz brillante indirecta; el sol directo quema las hojas. Suelos ligeros, bien drenados y ligeramente ácidos. Riego regular pero moderado, dejando secar ligeramente entre riegos. Alta humedad ambiental pero sin mojar el follaje. Las begonias tuberosas deben descansar en invierno guardando el tubérculo en lugar seco.",
  },
  {
    slug: "amapolas",
    nombre: "Amapolas",
    nombreCientifico: "Papaver rhoeas",
    categoria: "Anuales",
    poster: "/img/Generales/Galeria/Amapolas.jpg",
    relacion1: "calendulas",
    relacion2: "girasoles",
    relacion3: "begonias",
    description:
      "Las amapolas son flores icónicas reconocibles por sus pétalos de seda de color rojo brillante con una mancha negra en la base. Pertenecen al género Papaver y se encuentran distribuidas en Europa, Asia y el norte de África. Son plantas asociadas a los campos de cultivo de cereales, donde crecen de forma espontánea. La amapola de opio (Papaver somniferum) es una especie diferente de gran relevancia histórica y farmacológica.",
    genero: "Papaver",
    familia: "Papaveraceae",
    origen: "Europa, Asia Occidental, norte de África",
    estacion: "Primavera, Verano",
    simbolismo:
      "La amapola roja es símbolo universal del recuerdo de los caídos en guerra, especialmente en los países de la Commonwealth donde se lleva en el pecho cada 11 de noviembre. También simboliza el sueño, el descanso eterno y la fertilidad. En la mitología griega era la flor de Hipnos (el Sueño) y Morfeo.",
    usos:
      "La amapola de campo (P. rhoeas) tiene pétalos comestibles usados en tés, jarabes y decoración. Las semillas de amapola (P. somniferum) son condimento culinario en panadería y repostería. El opio, látex seco del P. somniferum, es fuente de morfina, codeína y otros opioides de uso médico controlado.",
    cuidados:
      "Siembra directa en otoño o a principios de primavera en suelo pobre y bien drenado. Sol pleno. No soportan el trasplante por su raíz pivotante. Riego escaso una vez establecidas; son resistentes a la sequía. Se autosiembran fácilmente y naturalizan bien en jardines silvestres.",
  },
  {
    slug: "lycoris",
    nombre: "Lycoris",
    nombreCientifico: "Lycoris radiata",
    categoria: "Bulbosas",
    poster: "/img/Generales/Galeria/Lycoris.jpg",
    relacion1: "narcisos",
    relacion2: "jacintos",
    relacion3: "gladiolos",
    description:
      "Las Lycoris, también conocidas como \"lirios araña\", \"lirios mágicos\" o \"flores de la sorpresa\", son plantas bulbosas de gran belleza y misterio. Sus flores en forma de estrella con largos estambres curvados aparecen en otoño sobre tallos desnudos, semanas antes de que surja el follaje. La especie más conocida, Lycoris radiata, tiene flores de intenso color rojo carmesí. Son originarias de China, Japón y Corea, donde crecen frecuentemente en bordes de arrozales y cementerios.",
    genero: "Lycoris",
    familia: "Amaryllidaceae",
    origen: "China, Japón, Corea",
    estacion: "Otoño",
    simbolismo:
      "En Japón, la Lycoris radiata (Higanbana) es la flor del equinoccio de otoño y está íntimamente ligada a la muerte y al más allá, siendo plantada en cementerios budistas. En la cultura popular japonesa representa la separación definitiva y el camino al otro mundo. En China simboliza el recuerdo de los seres queridos fallecidos.",
    usos:
      "Principalmente ornamental por su espectacular floración otoñal. Los bulbos contienen alcaloides (licorina) que son tóxicos pero se han investigado para tratamientos contra el cáncer. En la antigüedad, el almidón de los bulbos se usó como adhesivo para encuadernar libros y fabricar papel de arroz.",
    cuidados:
      "Plantar bulbos a finales de verano con la mitad superior fuera del suelo. Sol pleno o semisombra. Suelo bien drenado. No regar en exceso. No mover los bulbos innecesariamente. El follaje aparece después de la floración y debe dejarse morir naturalmente. Resistente al frío moderado.",
  },
  {
    slug: "orquideas",
    nombre: "Orquídeas",
    nombreCientifico: "Orchidaceae (familia)",
    categoria: "Epífitas",
    poster: "/img/Generales/Galeria/Orquideas.webp",
    relacion1: "loto",
    relacion2: "camelias",
    relacion3: "lirios",
    description:
      "Las orquídeas constituyen una de las familias de plantas más diversas del mundo, con más de 28.000 especies conocidas y decenas de miles de híbridos. Se encuentran en casi todos los hábitats terrestres excepto los glaciares. La mayoría de las especies tropicales son epífitas (viven sobre otras plantas sin parasitarlas). Sus flores altamente especializadas han evolucionado en formas extraordinarias para atraer polinizadores específicos. El género Phalaenopsis es el más cultivado comercialmente.",
    genero: "Orchidaceae",
    familia: "Orchidaceae",
    origen: "Distribución mundial; mayor diversidad en trópicos de América, Asia y África",
    estacion: "Todo el año",
    simbolismo:
      "Las orquídeas simbolizan la rareza, la elegancia, el lujo y el amor refinado. En la antigua Grecia se creía que tenían poderes afrodisíacos. En China representan la integridad, la amistad y la abundancia. En el lenguaje victoriano de las flores simbolizaban la belleza exótica. Son un símbolo universal de sofisticación.",
    usos:
      "Ornamental de alto valor en todo el mundo. La vainilla (Vanilla planifolia) es una orquídea cuyo fruto es el condimento más usado en repostería global. Algunas orquídeas terrestres asiáticas (Dactylorhiza) se usan en medicina herbal. El salep, bebida tradicional turca, se elabora con tubérculos de orquídea.",
    cuidados:
      "Varían mucho según la especie. El Phalaenopsis (la más popular) necesita luz indirecta brillante, temperatura entre 18–25 °C, riego semanal abundante dejando escurrir bien y abono específico diluido. Plantar en sustrato especial de corteza o musgo, nunca en tierra normal. Evitar corrientes de aire frío y exceso de humedad en las raíces.",
  },
  {
    slug: "jacintos",
    nombre: "Jacintos",
    nombreCientifico: "Hyacinthus orientalis",
    categoria: "Bulbosas",
    poster: "/img/Generales/Galeria/Jacintos.jpg",
    relacion1: "tulipanes",
    relacion2: "narcisos",
    relacion3: "lirios",
    description:
      "Los jacintos son flores bulbosas de espiga densa y fragancia poderosa y dulce, una de las más características de la primavera. Sus flores acampanadas se agrupan en racimos compactos sobre tallos erectos en colores azul, violeta, blanco, amarillo, rosa y rojo. Son originarios de la región mediterránea oriental y Asia Menor, aunque los Países Bajos son el principal productor mundial de bulbos. La fragancia del jacinto es tan intensa que puede aromatizar toda una habitación.",
    genero: "Hyacinthus",
    familia: "Asparagaceae",
    origen: "Asia Menor, Mediterráneo Oriental",
    estacion: "Primavera",
    simbolismo:
      "El jacinto tiene su origen en la mitología griega: Hyakinthos era un joven amado por Apolo que murió trágicamente y de su sangre nació esta flor. Simboliza el juego, el deporte, la recreación y también el duelo por la pérdida. Los jacintos azules representan la constancia; los blancos, la belleza y la discreción.",
    usos:
      "Principalmente ornamentales en jardines y forzados en maceta para decoración de interiores en invierno. Su aceite esencial se usa en perfumería de alta gama, aunque es costoso de extraer. Los bulbos son tóxicos e irritantes al contacto prolongado con la piel.",
    cuidados:
      "Plantar en otoño a 10–15 cm de profundidad en suelo bien drenado. Necesitan frío invernal para florecer. Sol pleno o semisombra ligera. Riego moderado. Usar guantes al manipular los bulbos. Para forzar en maceta, enfriar los bulbos 8–10 semanas en nevera antes de plantar. El follaje debe secarse naturalmente.",
  },
  {
    slug: "hortensia",
    nombre: "Hortensia",
    nombreCientifico: "Hydrangea macrophylla",
    categoria: "Arbustos",
    poster: "/img/Generales/Galeria/Hortensia.jpg",
    relacion1: "camelias",
    relacion2: "rosas",
    relacion3: "flor-de-pascua",
    description:
      "Las hortensias son arbustos florales muy apreciados por sus grandes inflorescencias globosas o aplanadas (corimbos) compuestas por cientos de pequeñas flores. Una de sus características más fascinantes es la capacidad de cambiar de color según el pH del suelo: en suelos ácidos producen flores azules; en suelos alcalinos, flores rosas o rojas. La especie más cultivada es Hydrangea macrophylla, originaria de Japón. Existen también variedades de flores blancas independientes del pH.",
    genero: "Hydrangea",
    familia: "Hydrangeaceae",
    origen: "Japón, China, América del Norte y del Sur",
    estacion: "Verano",
    simbolismo:
      "La hortensia simboliza la gratitud, la gracia y la abundancia. En Japón, el emperador ofreció hortensias azules a una dama para disculparse por descuidarla, y desde entonces simbolizan la disculpa y el entendimiento. En el lenguaje occidental de las flores puede significar frialdad o presunción, pero también devoción.",
    usos:
      "Principalmente ornamental en jardines, parques y floristerías. Las flores secas mantienen su color y se usan en decoración floral. En medicina tradicional china, algunas especies de Hydrangea (H. paniculata) se usan para tratar infecciones del tracto urinario. Los extractos de hojas tienen actividad antimalárica comprobada.",
    cuidados:
      "Necesitan suelos fértiles, húmedos y con buen drenaje. Prefieren semisombra o sol matinal; el sol intenso en verano las agosta. Riego abundante y regular, especialmente en verano. Para obtener flores azules, acidificar el suelo con sulfato de aluminio. Podar tras la floración, no en primavera. Cubrir la base con mantillo en invierno.",
  },
  {
    slug: "pensamiento",
    nombre: "Pensamiento",
    nombreCientifico: "Viola × wittrockiana",
    categoria: "Anuales",
    poster: "/img/Generales/Galeria/Pensamiento.jpg",
    relacion1: "violetas",
    relacion2: "begonias",
    relacion3: "petunia",
    description:
      "Los pensamientos son flores de temporada fría muy queridas en jardinería, obtenidas por hibridación de varias especies de Viola. Sus flores tienen cinco pétalos con característicos dibujos que recuerdan a una cara humana pensativa. Disponibles en una extraordinaria variedad de colores: amarillo, violeta, azul, blanco, naranja, rojo y bicolores. Son tolerantes al frío y pueden florecer incluso con nieve ligera, siendo ideales para jardines de otoño e invierno.",
    genero: "Viola",
    familia: "Violaceae",
    origen: "Europa (híbrido de jardín desarrollado en el siglo XIX)",
    estacion: "Otoño, Invierno, Primavera",
    simbolismo:
      "El pensamiento debe su nombre francés (\"pensée\", pensamiento) a su supuesta capacidad de hacer pensar en quien se ama. Simboliza el amor recordado, los buenos pensamientos hacia los demás y la meditación. En el lenguaje victoriano de las flores se enviaban pensamientos para decir \"te tengo en mis pensamientos\".",
    usos:
      "Principalmente ornamental en jardineras, arriates y macetas durante los meses fríos. Los pétalos son comestibles y se usan frescos para decorar ensaladas, postres y cócteles. También se cristalizan con azúcar para decoración repostera.",
    cuidados:
      "Prefieren climas frescos (entre 7–18 °C); el calor excesivo los agota. Suelos húmedos, ricos y bien drenados. Sol pleno en invierno; semisombra en primavera. Riego regular pero moderado. Eliminar flores marchitas prolonga la floración. Resembrar o replantar cada temporada ya que decaen en verano.",
  },
  {
    slug: "dalia",
    nombre: "Dalia",
    nombreCientifico: "Dahlia pinnata",
    categoria: "Perennes",
    poster: "/img/Generales/Galeria/Dalia.jpg",
    relacion1: "crisantemos",
    relacion2: "margaritas",
    relacion3: "girasoles",
    description:
      "Las dalias son flores espectaculares originarias de México y América Central, donde los aztecas las cultivaban tanto por sus tubérculos comestibles como por su uso ornamental y ceremonial. Pertenecen a la familia Asteraceae y ofrecen una diversidad extraordinaria: existen dalias pompon, cactus, decorativas, esféricas, de collar, entre otras, con flores desde 2 cm hasta más de 30 cm de diámetro. Son las flores nacionales de México.",
    genero: "Dahlia",
    familia: "Asteraceae",
    origen: "México, Guatemala, América Central",
    estacion: "Verano, Otoño",
    simbolismo:
      "La dalia es símbolo de la variedad, la dignidad y el compromiso. En México representa la elegancia y diversidad nacionales como flor patria. En el lenguaje victoriano de las flores simboliza la gratitud duradera y el vínculo que permanece. El color negro-rojo profundo de algunas variedades evoca el misterio y la elegancia oscura.",
    usos:
      "Los aztecas usaban los tubérculos de dalia como alimento (con sabor a papa aguada) y la fibra de los tallos huecos para transportar agua. En el siglo XIX se intentó introducir como cultivo alimentario en Europa. Actualmente su uso es principalmente ornamental como flor de jardín y cortada. Los tubérculos tienen aplicaciones prometedoras en la extracción de inulina para la industria alimentaria.",
    cuidados:
      "Plantar tubérculos en primavera tras la última helada. Sol pleno, al menos 6 horas diarias. Suelo fértil, húmedo y bien drenado. Riego regular y abundante en floración. Tutorear las variedades altas. En climas fríos, desenterrar los tubérculos en otoño, secarlos y guardarlos en lugar fresco hasta la primavera.",
  },
  // ── Flores peligrosas ──────────────────────────────────────────
  {
    slug: "adelfa",
    nombre: "Adelfa",
    nombreCientifico: "Nerium oleander",
    categoria: "Arbustos",
    poster: "/img/Generales/Galeria/Adelfa.jpg",
    relacion1: "estramonio",
    relacion2: "rosas",
    relacion3: "hortensia",
    peligrosa: true,
    description:
      "La adelfa es un arbusto perenne mediterráneo de flores vistosas en tonos rosa, rojo, blanco o amarillo, muy popular en jardines y medianas de carretera. Pese a su belleza, es una de las plantas ornamentales más tóxicas conocidas: todas sus partes contienen glucósidos cardíacos (oleandrina y neriina) capaces de causar parada cardíaca. Incluso el humo de su madera al quemarla resulta peligroso.",
    genero: "Nerium",
    familia: "Apocynaceae",
    origen: "Región mediterránea, Oriente Medio, Asia meridional",
    estacion: "Primavera, Verano",
    simbolismo:
      "A pesar de su toxicidad, la adelfa simboliza la seducción y el peligro oculto bajo la belleza. En algunas culturas mediterráneas representa la precaución y el respeto a la naturaleza. Su resistencia extrema la convierte también en símbolo de perseverancia.",
    usos:
      "Ornamental en jardines, paseos y medianas. En medicina tradicional se han estudiado sus glucósidos para tratar arritmias, aunque su margen de seguridad es muy estrecho. Los extractos de oleandrina están en investigación como agentes antitumorales y antivirales. No debe usarse de forma casera bajo ningún concepto.",
    cuidados:
      "Extremadamente resistente a la sequía y al calor. Sol pleno. Tolera suelos pobres y salinos. Requiere poca agua una vez establecida. Manipular siempre con guantes; nunca quemar sus ramas. Mantener alejada de niños y animales domésticos.",
  },
  {
    slug: "aconito",
    nombre: "Acónito",
    nombreCientifico: "Aconitum napellus",
    categoria: "Perennes",
    poster: "/img/Generales/Galeria/Aconito.jpg",
    relacion1: "dedalera",
    relacion2: "peonias",
    relacion3: "claveles",
    peligrosa: true,
    description:
      "El acónito, también llamado matalobos o casco de Júpiter, es una planta herbácea perenne con elegantes flores azul-violetas en forma de capucha. Históricamente conocida como \"la reina de los venenos\", contiene aconitina, un alcaloide extremadamente tóxico que actúa directamente sobre el sistema nervioso y el corazón. Una sola hoja o raíz puede matar a un adulto en pocas horas. Fue utilizado en la Antigua Grecia y Roma como veneno de ejecución y envenenamiento.",
    genero: "Aconitum",
    familia: "Ranunculaceae",
    origen: "Montañas de Europa central y occidental, Asia",
    estacion: "Verano",
    simbolismo:
      "El acónito simboliza el peligro mortal, la cautela y la traición. En la mitología griega, nació de la baba de Cerbero, el perro guardián del inframundo. En el lenguaje victoriano de las flores representaba la misantropía y la malicia. También se asocia con la magia negra y la brujería en el folclore europeo.",
    usos:
      "Históricamente usado como veneno para flechas de caza en diversas culturas. En homeopatía y medicina tradicional china (en preparaciones ultra-diluidas y procesadas) se ha empleado para tratar dolores agudos y fiebre. Los alcaloides de aconitina están en investigación como analgésicos y agentes antiarrítmicos a dosis controladas.",
    cuidados:
      "Prefiere climas frescos y semisombra húmeda. Suelos ricos, profundos y bien drenados. Riego regular. Manipular exclusivamente con guantes, ya que la toxina penetra por la piel. Jamás plantar donde accedan niños o animales. Ideal para bordes de jardines de clima atlántico.",
  },
  {
    slug: "dedalera",
    nombre: "Dedalera",
    nombreCientifico: "Digitalis purpurea",
    categoria: "Perennes",
    poster: "/img/Generales/Galeria/Dedalera.jpg",
    relacion1: "aconito",
    relacion2: "claveles",
    relacion3: "peonias",
    peligrosa: true,
    description:
      "La dedalera es una planta bienal o perenne de porte esbelto y flores tubulares acampanadas, moteadas interiormente en tonos rosa, púrpura, blanco y crema. Es famosa por ser la fuente de la digital, el fármaco cardíaco más importante de la historia. Sin embargo, en estado natural todas sus partes son tóxicas: los glucósidos cardíacos que contiene (digitoxina, digoxina) alteran el ritmo cardíaco y pueden causar la muerte. Su ingestión por niños que confunden las hojas con espinacas o los frutos con alimentos ha causado intoxicaciones graves.",
    genero: "Digitalis",
    familia: "Plantaginaceae",
    origen: "Europa occidental y central, Islas Macaronesia",
    estacion: "Primavera, Verano",
    simbolismo:
      "La dedalera simboliza la dualidad entre la vida y la muerte, entre el remedio y el veneno. Su nombre popular hace referencia al dedo de hada (\"fairy finger\" en inglés), y el folclore la vincula con las hadas y los duendes del bosque. También representa la insincerity en el lenguaje victoriano de las flores.",
    usos:
      "La digoxina y digitoxina extraídas de esta planta revolucionaron la cardiología: se usan para tratar la insuficiencia cardíaca congestiva y ciertas arritmias. Es uno de los medicamentos más importantes de la historia de la medicina. En jardinería se cultiva como ornamental en bordes y jardines de estilo cottage.",
    cuidados:
      "Prefiere semisombra y suelos ácidos, húmedos y bien drenados ricos en humus. Resistente al frío. En el primer año forma una roseta basal; florece en el segundo. Auto-siembra con facilidad. Manipular con precaución y guantes. Mantener fuera del alcance de niños y mascotas.",
  },
  {
    slug: "estramonio",
    nombre: "Estramonio",
    nombreCientifico: "Datura stramonium",
    categoria: "Anuales",
    poster: "/img/Generales/Galeria/Estramonio.jpg",
    relacion1: "adelfa",
    relacion2: "petunia",
    relacion3: "amapolas",
    peligrosa: true,
    description:
      "El estramonio, también conocido como hierba del diablo o trompeta del diablo, es una planta anual de gran porte con flores blancas o violáceas en forma de trompeta y frutos espinosos muy característicos. Contiene altos niveles de alcaloides tropánicos (atropina, escopolamina, hiosciamina) que producen delirios intensos, alucinaciones y en dosis suficientes, la muerte. Es considerada una de las plantas más peligrosas del mundo, implicada en intoxicaciones accidentales y deliberadas en todo el globo.",
    genero: "Datura",
    familia: "Solanaceae",
    origen: "América Central y del Norte (naturalizada en todo el mundo)",
    estacion: "Verano, Otoño",
    simbolismo:
      "El estramonio está rodeado de misticismo y terror. Ha sido asociado históricamente con la brujería, los rituales chamánicos y los filtros de amor. En muchas culturas prehispánicas era considerada una planta sagrada del mundo de los muertos. Simboliza el delirio, el engaño y los límites entre la realidad y la alucinación.",
    usos:
      "Sus alcaloides (atropina, escopolamina) tienen aplicaciones médicas: la atropina se usa en cirugía para dilatar pupilas, tratar bradicardias y como antídoto de organofosforados. La escopolamina se emplea en parches contra el mareo. En medicina veterinaria se usa como antiespasmódico. Uso popular: prohibido y extremadamente peligroso.",
    cuidados:
      "Crece espontáneamente en terrenos baldíos, cunetas y campos. Si aparece en jardines, eliminarla con guantes. No cultivar intencionalmente. Extremadamente peligrosa: no tocar sin protección y mantener alejada de toda persona y animal.",
  },
  {
    slug: "lirio-del-valle",
    nombre: "Lirio del Valle",
    nombreCientifico: "Convallaria majalis",
    categoria: "Perennes",
    poster: "/img/Generales/Galeria/LirioDelValle.jpg",
    relacion1: "dedalera",
    relacion2: "violetas",
    relacion3: "claveles",
    peligrosa: true,
    description:
      "El lirio del valle es una planta herbácea perenne de apariencia delicada y encantadora: sus pequeñas flores acampanadas blancas cuelgan en racimos sobre tallos arqueados, acompañadas de grandes hojas verdes brillantes. Su fragancia es una de las más apreciadas en perfumería. Sin embargo, toda la planta es altamente tóxica: contiene más de 38 glucósidos cardíacos (convallotoxina entre los más potentes) que causan náuseas, vómitos severos, bradicardia y, en casos graves, parada cardíaca. El agua en que se han conservado las flores también es venenosa.",
    genero: "Convallaria",
    familia: "Asparagaceae",
    origen: "Europa, Asia temperada, América del Norte",
    estacion: "Primavera",
    simbolismo:
      "El lirio del valle es la flor tradicional del 1 de mayo en Francia (\"muguet\"), símbolo de la felicidad, la pureza y el retorno de la primavera. Es la flor favorita del Día del Trabajo francés y se regala como amuleto de buena suerte. En el lenguaje de las flores representa la humildad, la timidez y la pureza del corazón.",
    usos:
      "Sus fragancias son el estándar de calidad en alta perfumería (Dior, Chanel). Debido a que no puede extraerse aceite esencial natural de forma rentable, la mayoría de las fragancias florales de lirio del valle son sintéticas. Flores cortadas de gran valor decorativo y ceremonial (bodas, bautizos). En fitoterapia histórica sus glucósidos se usaron como tónicos cardíacos, hoy desplazados por fármacos más seguros.",
    cuidados:
      "Prefiere semisombra y suelos frescos, húmedos y ricos en humus. Se extiende por rizomas; puede resultar invasiva en jardines pequeños. Riego regular especialmente en primavera. Manipular con guantes; lavarse las manos tras el contacto. Mantener alejada de niños y mascotas. Muy resistente al frío.",
  },
  {
    slug: "petunia",
    nombre: "Petunia",
    nombreCientifico: "Petunia × hybrida",
    categoria: "Anuales",
    poster: "/img/Generales/Galeria/Petunia.jpg",
    relacion1: "pensamiento",
    relacion2: "begonias",
    relacion3: "amapolas",
    description:
      "Las petunias son plantas herbáceas de floración prolífica y continua, originarias de América del Sur (especialmente Argentina y Brasil). Pertenecen a la familia Solanaceae y ofrecen una enorme variedad de colores: violeta, rosa, rojo, blanco, amarillo y combinaciones bicolores con rayas o bordes. Sus flores acampanadas o aterciopeladas se abren profusamente desde primavera hasta las primeras heladas. Son unas de las flores de temporada más vendidas en el mundo.",
    genero: "Petunia",
    familia: "Solanaceae",
    origen: "América del Sur (Argentina, Brasil, Uruguay)",
    estacion: "Primavera, Verano",
    simbolismo:
      "Las petunias simbolizan el estar a gusto con alguien y el placer de la compañía. También representan la ira tranquilizada y el resentimiento superado. En algunos contextos se asocian con el deseo de no estar solos. Su exuberante floración representa la generosidad y la abundancia.",
    usos:
      "Principalmente ornamental en jardineras colgantes, borduras y macetas. Su facilidad de cultivo y larga floración las convierten en una de las flores más usadas en paisajismo. Algunas variedades tienen fragancia ligera por las tardes. No tienen usos medicinales o alimentarios reconocidos.",
    cuidados:
      "Sol pleno para floración abundante. Suelos bien drenados y de pH neutro a ligeramente ácido. Riego regular, especialmente en verano; no mojar las flores. Abonar cada 2 semanas con abono rico en potasio para favorecer la floración. Pellizcar los extremos para conseguir plantas más densas. En otoño se agoten; resembrar cada año.",
  },
];

async function main() {
  console.log("Iniciando seed de flores…");

  for (const flor of flores) {
    await prisma.flor.upsert({
      where: { slug: flor.slug },
      update: flor,
      create: flor,
    });
    console.log(`  ✓ ${flor.nombre}`);
  }

  console.log(`\nSeed completado: ${flores.length} flores actualizadas.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

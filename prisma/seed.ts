import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});
const prisma = new PrismaClient({ adapter });

const flores = [
  {
    slug: "rosas",
    nombre: "Rosas",
    nombreCientifico: "Rosa sp.",
    categoria: "Arbustos",
    poster: "/img/Generales/Galeria/Rosas.jpg",
    slide1: "/img/Generales/Flores/Rosas/Rosas 1.jpg",
    slide2: "/img/Generales/Flores/Rosas/Rosas 2.jpg",
    slide3: "/img/Generales/Flores/Rosas/Rosas 3.jpg",
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
    slide1: "/img/Generales/Flores/Tulipanes/Tulipanes 1.jpg",
    slide2: "/img/Generales/Flores/Tulipanes/Tulipanes 2.jpg",
    slide3: "/img/Generales/Flores/Tulipanes/Tulipanes 3.jpg",
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
    slide1: "/img/Generales/Flores/Claveles/Claveles 1.jpg",
    slide2: "/img/Generales/Flores/Claveles/Claveles 2.jpg",
    slide3: "/img/Generales/Flores/Claveles/Claveles 3.jpg",
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
    slide1: "/img/Generales/Flores/Girasoles/Girasoles 1.jpg",
    slide2: "/img/Generales/Flores/Girasoles/Girasoles 2.jpg",
    slide3: "/img/Generales/Flores/Girasoles/Girasoles 3.jpg",
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
    slide1: "/img/Generales/Flores/Margaritas/Margaritas 1.jpg",
    slide2: "/img/Generales/Flores/Margaritas/Margaritas 2.jpg",
    slide3: "/img/Generales/Flores/Margaritas/Margaritas 3.jpg",
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
    slide1: "/img/Generales/Flores/Camelias/Camelias 1.jpg",
    slide2: "/img/Generales/Flores/Camelias/Camelias 2.jpg",
    slide3: "/img/Generales/Flores/Camelias/Camelias 3.jpg",
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
    poster: "/img/Generales/Galeria/Flor de loto.webp",
    slide1: "/img/Generales/Flores/Loto/Loto 1.jpg",
    slide2: "/img/Generales/Flores/Loto/Loto 2.jpg",
    slide3: "/img/Generales/Flores/Loto/Loto 3.jpg",
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
    slide1: "/img/Generales/Flores/Peonias/Peonias 1.jpg",
    slide2: "/img/Generales/Flores/Peonias/Peonias 2.jpg",
    slide3: "/img/Generales/Flores/Peonias/Peonias 3.jpg",
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
    nombreCientifico: "Lilium sp.",
    categoria: "Bulbosas",
    poster: "/img/Generales/Galeria/Lirios.jpg",
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
    categoria: "Perennes",
    poster: "/img/Generales/Galeria/Begonias.jpg",
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
    nombreCientifico: "Phalaenopsis sp.",
    categoria: "Epífitas",
    poster: "/img/Generales/Galeria/Orquideas.webp",
    description:
      "Las orquídeas constituyen una de las familias de plantas más diversas del mundo, con más de 28.000 especies conocidas y decenas de miles de híbridos. Se encuentran en casi todos los hábitats terrestres excepto los glaciares. La mayoría de las especies tropicales son epífitas (viven sobre otras plantas sin parasitarlas). Sus flores altamente especializadas han evolucionado en formas extraordinarias para atraer polinizadores específicos. El género Phalaenopsis es el más cultivado comercialmente.",
    genero: "Phalaenopsis",
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
    peligrosa: true,
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
    peligrosa: true,
    slide1: "/img/Generales/Flores/Adelfa/Adelfa 1.jpg",
    slide2: "/img/Generales/Flores/Adelfa/Adelfa 2.jpg",
    slide3: "/img/Generales/Flores/Adelfa/Adelfa 3.jpg",
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
    peligrosa: true,
    slide1: "/img/Generales/Flores/Acónito/Acónito 1.jpg",
    slide2: "/img/Generales/Flores/Acónito/Acónito 2.jpg",
    slide3: "/img/Generales/Flores/Acónito/Acónito 3.jpg",
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
    peligrosa: true,
    slide1: "/img/Generales/Flores/Dedalera/Dedalera 1.jpg",
    slide2: "/img/Generales/Flores/Dedalera/Dedalera 2.jpg",
    slide3: "/img/Generales/Flores/Dedalera/Dedalera 3.jpg",
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
    peligrosa: true,
    slide1: "/img/Generales/Flores/Lirio del Valle/Lirio del Valle 1.jpg",
    slide2: "/img/Generales/Flores/Lirio del Valle/Lirio del Valle 2.jpg",
    slide3: "/img/Generales/Flores/Lirio del Valle/Lirio del Valle 3.jpg",
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
  // ── Nuevas flores ──────────────────────────────────────────────
  {
    slug: "azafran",
    nombre: "Azafrán",
    nombreCientifico: "Crocus sativus",
    categoria: "Bulbosas",
    poster: "/img/Generales/Galeria/Azafran.jpg",
    slide1: "/img/Generales/Flores/Azafran/Azafran 1.jpg",
    slide2: "/img/Generales/Flores/Azafran/Azafran 2.jpg",
    slide3: "/img/Generales/Flores/Azafran/Azafran 3.jpg",
    description:
      "El azafrán es una planta bulbosa de flores lila-violáceas de seis pétalos, cuyo valor reside en sus tres estigmas rojos: la especia más cara del mundo por peso. Originario del Mediterráneo oriental y Asia Menor, su cultivo se remonta a más de 3.500 años. Para obtener 1 kg de azafrán se necesitan cerca de 150.000 flores recolectadas a mano al amanecer, lo que explica su precio excepcional.",
    genero: "Crocus",
    familia: "Iridaceae",
    origen: "Asia Menor, Mediterráneo oriental, Irán (principal productor mundial)",
    estacion: "Otoño",
    simbolismo:
      "El azafrán simboliza la riqueza, la sabiduría y la iluminación espiritual. En la antigua Grecia lo asociaban con los dioses y la realeza. En Persia representaba la felicidad y la salud. Su color dorado intenso lo convirtió en símbolo de lujo y estatus a lo largo de la historia.",
    usos:
      "Gastronomía: colorante y aromatizante indispensable en la paella valenciana, el risotto milanés y el bouillabaisse. Cosmética: cremas anti-edad y serums de alta gama. Medicina tradicional: antidepresivo natural con estudios clínicos prometedores, antioxidante y antiinflamatorio. Tinte textil: fue el colorante amarillo más valioso de la Antigüedad.",
    cuidados:
      "Plantar los cormos en agosto-septiembre a 10 cm de profundidad en suelo suelto, seco y bien drenado. Sol pleno imprescindible. Casi nula necesidad de riego en verano (período de reposo). Floración en octubre-noviembre. Cosechar los estigmas a mano al alba, antes de que la flor se abra del todo. Separar los cormos cada 3-4 años.",
  },
  {
    slug: "azucena",
    nombre: "Azucena",
    nombreCientifico: "Lilium candidum",
    categoria: "Bulbosas",
    poster: "/img/Generales/Galeria/Azucena.jpg",
    description:
      "La azucena, o lirio blanco, es una de las flores más antiguas cultivadas por el ser humano, con registros de más de 3.000 años en el Mediterráneo oriental. Sus flores acampanadas de un blanco inmaculado y fragancia intensa la han convertido en símbolo universal de pureza. A diferencia de otros lirios, la azucena mantiene una roseta de hojas basales durante el invierno y florece en verano sobre tallos que pueden superar el metro de altura.",
    genero: "Lilium",
    familia: "Liliaceae",
    origen: "Mediterráneo oriental, Oriente Próximo, Balcanes",
    estacion: "Primavera, Verano",
    simbolismo:
      "La azucena es el símbolo de pureza, virginidad y divinidad por excelencia. En el cristianismo es la flor de la Virgen María y del arcángel Gabriel. En el arte renacentista aparece en miles de Anunciaciones. Los griegos la asociaban con Hera. También representa la inocencia, la nobleza y la renovación espiritual.",
    usos:
      "Ornamental en jardines formales y como flor cortada de alta ceremonia (bodas, funerales religiosos). En perfumería, su esencia es una de las más valoradas. En medicina tradicional mediterránea, el aceite macerado de sus bulbos se usó como cicatrizante y emoliente para la piel. Los bulbos son comestibles cocidos en algunas culturas de Oriente Próximo.",
    cuidados:
      "Plantar los bulbos a finales de verano, a poca profundidad (apenas cubiertos). Sol pleno o semisombra ligera. Suelo bien drenado, calcáreo o neutro; detesta los suelos ácidos o encharcados. Riego moderado. No cubrir con mantillo en invierno. Fertilizar con abono bajo en nitrógeno. Sensible al hongo Botrytis; asegurar buena ventilación.",
  },
  {
    slug: "gazania",
    nombre: "Gazania",
    nombreCientifico: "Gazania rigens",
    categoria: "Perennes",
    poster: "/img/Generales/Galeria/Gazania.jpg",
    description:
      "La gazania es una planta originaria de Sudáfrica con flores espectaculares en forma de margarita grande, en colores naranja, amarillo, rojo, rosa y bicolores con dibujos geométricos únicos en la base de los pétalos. Una de sus características más curiosas es que sus flores se cierran por la noche y en los días nublados, abriéndose únicamente bajo la luz solar directa. Es una planta muy resistente a la sequía y el calor.",
    genero: "Gazania",
    familia: "Asteraceae",
    origen: "Sudáfrica, Mozambique",
    estacion: "Primavera, Verano, Otoño",
    simbolismo:
      "La gazania simboliza la riqueza, el brillo y la alegría solar. Su comportamiento de abrirse solo con el sol la convierte en símbolo de autenticidad y claridad: solo muestra su belleza en las condiciones adecuadas. También representa la resistencia y la adaptación a condiciones adversas.",
    usos:
      "Principalmente ornamental en jardines de bajo mantenimiento, taludes, rocallas y jardines xéricos. Ideal para zonas costeras por su resistencia a la sal y el viento. Excelente como tapizante. En Sudáfrica, algunas comunidades usan extractos de la planta en medicina tradicional. Muy valorada en jardinería mediterránea y californiana.",
    cuidados:
      "Sol pleno imprescindible (se cierra sin luz directa). Suelos bien drenados, arenosos o pobres; detesta los encharcamientos. Muy resistente a la sequía. Riego escaso una vez establecida. Aguanta el calor extremo pero no las heladas fuertes. En climas con inviernos suaves es perenne; en climas fríos se trata como anual. Eliminar flores marchitas para prolongar la floración.",
  },
  {
    slug: "gerbera",
    nombre: "Gerbera",
    nombreCientifico: "Gerbera jamesonii",
    categoria: "Perennes",
    poster: "/img/Generales/Galeria/Gerbera.jpg",
    description:
      "La gerbera es una de las flores cortadas más vendidas en el mundo, famosa por sus enormes cabezas florales tipo margarita en una paleta cromática extraordinaria: rojo, naranja, amarillo, rosa, blanco, salmón y bicolores. Originaria de Sudáfrica y Asia tropical, fue descrita en el siglo XIX por el naturalista escocés Robert Jameson. Sus flores duraderas y su imagen alegre y vibrante la han convertido en protagonista de ramos, centros florales y jardines de todo el planeta.",
    genero: "Gerbera",
    familia: "Asteraceae",
    origen: "Sudáfrica, Asia tropical",
    estacion: "Primavera, Verano",
    simbolismo:
      "La gerbera simboliza la alegría, la inocencia y la pureza de sentimientos. Cada color tiene su matiz: el rojo expresa amor apasionado; el amarillo, alegría y amistad; el rosa, admiración; el naranja, entusiasmo; el blanco, pureza. En general representa optimismo y la belleza de lo sencillo.",
    usos:
      "Una de las cinco flores cortadas más comercializadas globalmente, junto a rosas, claveles, tulipanes y crisantemos. Muy usada en ramos, centros de mesa y decoración de eventos. En jardines tropicales y subtropicales como planta perenne de exterior. En maceta como planta de interior con mucha luz. Sus flores no tienen propiedades medicinales o alimentarias conocidas.",
    cuidados:
      "Requiere mucha luz solar directa (mínimo 6 horas). Suelo bien drenado, rico y ligeramente ácido (pH 5.5-6.5). Riego regular al pie de la planta (evitar mojar el follaje y el cogollo, sensibles a podredumbre). Abonar cada 2 semanas en floración. En invierno reducir el riego y evitar heladas. Replantear cada 2 años.",
  },
  {
    slug: "iris",
    nombre: "Iris",
    nombreCientifico: "Iris germanica",
    categoria: "Perennes",
    poster: "/img/Generales/Galeria/Iris.jpg",
    description:
      "El iris es una de las flores más elegantes y arquitectónicas del jardín, con pétalos caídos (sépalos) y pétalos erguidos que crean una silueta inconfundible. Existen más de 300 especies en colores que van del blanco puro al negro-violáceo, pasando por amarillo, naranja, azul, rosa y multicolor. El iris barbado (I. germanica) es el más cultivado. Su rizoma produce la raíz de violeta, materia prima usada en perfumería de lujo desde la Antigüedad.",
    genero: "Iris",
    familia: "Iridaceae",
    origen: "Europa central y meridional, Mediterráneo, Asia occidental",
    estacion: "Primavera",
    simbolismo:
      "El iris lleva el nombre de la diosa griega del arcoíris, mensajera entre el Olimpo y la Tierra. Simboliza la sabiduría, la fe, la valentía y la realeza. La flor de lis francesa es un iris estilizado adoptado como símbolo de la monarquía. En Japón, el iris protege contra el mal en el festival Tango no Sekku. También representa la esperanza y la luz.",
    usos:
      "Ornamental en jardines formales, bordes y taludes. La raíz seca de iris (orris root) es el fijador más valioso en perfumería clásica: Chanel Nº5, Dior Fahrenheit y muchos grandes parfums la contienen. En medicina tradicional, la tintura de rizoma se usó como expectorante y purgante. Tinte azul-negro extraído históricamente de sus flores.",
    cuidados:
      "Sol pleno (mínimo 6 horas). Suelo bien drenado, neutro o ligeramente alcalino. Plantar los rizomas superficialmente, que queden semiexpuestos al sol. Riego moderado; detesta el encharcamiento. Dividir las matas cada 3-4 años en verano tras la floración. Retirar las hojas secas. No abonar en exceso (favorece hojas en detrimento de flores).",
  },
  {
    slug: "lavanda",
    nombre: "Lavanda",
    nombreCientifico: "Lavandula angustifolia",
    categoria: "Arbustos",
    poster: "/img/Generales/Galeria/Lavanda.jpg",
    description:
      "La lavanda es un subarbusto aromático mediterráneo cuyas espigas florales violáceo-azuladas y su inconfundible fragancia la han convertido en una de las plantas más amadas del mundo. Los campos de lavanda en Provenza (Francia) y Brihuega (España) son paisajes icónicos. Sus aceites esenciales están entre los más estudiados y utilizados en aromaterapia, cosmética y medicina natural. Existen más de 45 especies del género Lavandula.",
    genero: "Lavandula",
    familia: "Lamiaceae",
    origen: "Mediterráneo occidental, Islas Canarias, India",
    estacion: "Verano",
    simbolismo:
      "La lavanda simboliza la pureza, la calma, la devoción y el amor eterno. En la Antigüedad romana era usada para perfumar los baños (\"lavare\", lavar, da nombre a la planta). En el lenguaje victoriano de las flores representa la desconfianza, pero modernamente se asocia con la serenidad, la elegancia discreta y el bienestar.",
    usos:
      "Aromaterapia: aceite esencial ansiolítico, calmante del sueño y analgésico tópico. Cosmética y perfumería: uno de los ingredientes más universales. Gastronomía provenzal: hierbas de Provenza, miel de lavanda, infusiones y repostería. Repelente natural de polillas e insectos. Ornamental en jardines mediterráneos y xéricos. Producción apícola: miel de lavanda de alta calidad.",
    cuidados:
      "Sol pleno imprescindible. Suelos pobres, secos, bien drenados y calcáreos; los suelos ricos o húmedos la pudren. Riego muy escaso (resistente a sequía prolongada). Podar tras la floración cortando solo la parte verde, nunca la leñosa. Excelente para jardines de bajo mantenimiento. Muy resistente a la cal y a la sequía estival mediterránea.",
  },
  {
    slug: "verbena",
    nombre: "Verbena",
    nombreCientifico: "Verbena × hybrida",
    categoria: "Anuales",
    poster: "/img/Generales/Galeria/Verbena.jpg",
    description:
      "La verbena de jardín es una planta de floración exuberante y continua, con pequeñas flores agrupadas en ramilletes planos (corimbos) en una paleta amplísima de colores: rojo, rosa, violeta, blanco, coral y bicolores. Originaria de América del Sur, ha sido intensamente hibridada para crear variedades rastreras y colgantes perfectas para jardineras y taludes. Sus flores atraen mariposas y abejas, convirtiéndola también en planta polinizadora valiosa.",
    genero: "Verbena",
    familia: "Verbenaceae",
    origen: "América del Sur (Argentina, Brasil, Uruguay)",
    estacion: "Primavera, Verano, Otoño",
    simbolismo:
      "La verbena oficial (V. officinalis) fue considerada sagrada por celtas, romanos y egipcios, usada en rituales de purificación y como amuleto de protección. Simboliza la sensibilidad, la encantación y la conexión con lo espiritual. La verbena de jardín representa la alegría de vivir y la generosidad en la floración.",
    usos:
      "Ornamental en jardineras, macetas colgantes, borduras y tapizantes. La verbena lemon (V. citriodora) es ampliamente usada en infusiones digestivas y calmantes, y en perfumería por su fragancia cítrica. V. officinalis tiene usos en fitoterapia como tónico nervioso y antiinflamatorio. Planta nectarífera muy valorada para jardines de polinizadores.",
    cuidados:
      "Sol pleno para floración abundante. Suelos bien drenados y moderadamente fértiles. Riego regular pero sin encharcamiento. Resistente al calor y a la sequía moderada. Eliminar flores marchitas para estimular nuevos botones. Abonar cada 2-3 semanas durante el verano. En climas templados puede rebrotar en primavera; en climas fríos se trata como anual.",
  },
  {
    slug: "jazmin",
    nombre: "Jazmín",
    nombreCientifico: "Jasminum officinale",
    categoria: "Arbustos",
    poster: "/img/Generales/Galeria/Jazmín.jpg",
    description:
      "El jazmín común es una enredadera trepadora o arbusto sarmentoso originario de Asia del Sur y Persia, famoso en todo el mundo por su fragancia dulce e intensa. Sus pequeñas flores blancas de cinco pétalos se agrupan en racimos y florecen desde finales de primavera hasta el otoño. Es una de las plantas aromáticas más cultivadas en jardines mediterráneos y del Mediterráneo. El aceite esencial que se extrae de sus flores es uno de los más valiosos y codiciados de la perfumería mundial.",
    genero: "Jasminum",
    familia: "Oleaceae",
    origen: "Asia del Sur (India, Pakistán, Nepal), Persia, China occidental",
    estacion: "Primavera, Verano",
    simbolismo:
      "El jazmín simboliza el amor, la belleza y la gracia. En la cultura persa e india es la flor del amor divino y la espiritualidad. En China, el jazmín representa la amabilidad y la dulzura femenina. En el sur de Asia se trenza en guirnaldas para bodas y ceremonias religiosas. Su fragancia nocturna intensificada lo asocia con el misterio, el romance y los sueños.",
    usos:
      "Perfumería: el absoluto de jazmín (Jasminum grandiflorum y J. sambac) es el ingrediente más caro de la alta perfumería; está en Chanel Nº5, Joy de Jean Patou y cientos de fragancias icónicas. Gastronomía: las flores de Jasminum sambac aromatiza el té de jazmín chino. Cosmética: el aceite de jazmín se usa como emoliente y tónico cutáneo. Medicina tradicional: infusiones de flores para calmar el estrés y la ansiedad.",
    cuidados:
      "Necesita sol pleno o semisombra y un soporte donde trepar (reja, pérgola, muro). Suelo fértil, bien drenado y ligeramente ácido. Riego moderado y constante, especialmente en verano; reducir en invierno. Podar tras la floración para mantener la forma y estimular nuevos brotes. Abonar en primavera y verano con abono rico en potasio para favorecer la floración. Resistente al frío moderado, pero proteger de heladas fuertes (-5 °C o menos).",
  },
  // ── Nuevas flores (seguras) ───────────────────────────────────────
  {
    slug: "magnolia",
    nombre: "Magnolia",
    nombreCientifico: "Magnolia grandiflora",
    categoria: "Arbustos",
    poster: "/img/Generales/Galeria/Magnolia.jpg",
    description:
      "La magnolia es una de las flores más antiguas del mundo: el género Magnolia existía antes de que aparecieran las abejas, por lo que evolucionó para ser polinizada por escarabajos. Sus grandes flores con pétalos gruesos y cerosos, de color blanco marfil o rosado, son de una belleza imponente y exudan una fragancia dulce y cítrica. Magnolia grandiflora es la especie más conocida en Occidente, con flores que pueden alcanzar los 30 cm de diámetro. Sus hojas perennes de un verde oscuro brillante con reverso aterciopelado marrón son igualmente ornamentales.",
    genero: "Magnolia",
    familia: "Magnoliaceae",
    origen: "América del Norte y Central, Asia Oriental (China, Japón)",
    estacion: "Primavera, Verano",
    simbolismo:
      "La magnolia simboliza la nobleza, la perseverancia y la dignidad natural. En China es símbolo de pureza femenina y belleza sin artificio. En el sur de Estados Unidos es emblema de elegancia y orgullo regional (es la flor oficial de Mississippi y Louisiana). En el lenguaje victoriano de las flores representa el amor por la naturaleza y la grandeza tranquila.",
    usos:
      "Principalmente ornamental en jardines, parques y avenidas como árbol de sombra y espectáculo floral. La corteza de Magnolia officinalis (houpu) es un elemento clave de la medicina tradicional china para tratar la ansiedad, el insomnio y los trastornos digestivos. El magnolol y honokiol extraídos de su corteza tienen propiedades antiinflamatorias y neuroprotectoras estudiadas científicamente. Las flores y yemas encurtidas se usan en la cocina japonesa.",
    cuidados:
      "Prefiere suelos ácidos o neutros, ricos en materia orgánica y bien drenados. Sol pleno o semisombra ligera. Riego regular especialmente en los primeros años; una vez establecida es bastante resistente. No soporta los suelos calcáreos ni el encharcamiento. Evitar trasplantar plantas adultas ya que las raíces son muy sensibles. No podar innecesariamente; si es necesario, hacerlo justo después de la floración.",
  },
  {
    slug: "buganvilla",
    nombre: "Buganvilla",
    nombreCientifico: "Bougainvillea spectabilis",
    categoria: "Arbustos",
    poster: "/img/Generales/Galeria/Buganvilla.jpg",
    description:
      "La buganvilla es una de las plantas trepadoras más espectaculares y coloridas del mundo. Originaria de América del Sur, fue descubierta en Brasil por el naturalista Philibert Commerson durante la expedición de Louis Antoine de Bougainville en el siglo XVIII. Lo que popularmente se consideran sus flores son en realidad brácteas (hojas modificadas) de colores brillantes en fucsia, rojo, naranja, amarillo, blanco y violeta, que rodean las verdaderas flores, diminutas y blancas. Es resistente al calor y la sequía, por lo que es omnipresente en paisajes mediterráneos y tropicales.",
    genero: "Bougainvillea",
    familia: "Nyctaginaceae",
    origen: "América del Sur (Brasil, Perú, Argentina, Bolivia)",
    estacion: "Primavera, Verano, Otoño",
    simbolismo:
      "La buganvilla simboliza la pasión, la vitalidad y la bienvenida. En muchos países mediterráneos y latinoamericanos su presencia en fachadas y muros es sinónimo de hospitalidad y alegría de vivir. En Brasil es símbolo de exuberancia tropical. En Grecia y España sus cascadas de color sobre paredes encaladas son imagen icónica del Mediterráneo.",
    usos:
      "Principalmente ornamental como trepadora en muros, pérgolas, vallas y jardines colgantes; es una de las plantas más vendidas en viveros de clima cálido. Las flores y brácteas tienen usos en medicina tradicional latinoamericana: se usan en infusiones para tratar la tos, la bronquitis y como antidiabético natural en México y Brasil. Las espinas hacen que se utilice también como barrera disuasoria natural.",
    cuidados:
      "Planta de sol pleno imprescindible; florea en abundancia solo con muchas horas de luz directa. Resistente a la sequía una vez establecida; el exceso de riego reduce la floración. Suelos bien drenados y pobres; el exceso de fertilizante nitrogenado favorece hojas y reduce brácteas. Aguanta las heladas suaves (hasta -3 °C); en climas fríos cultivar en maceta grande y proteger en invierno. Podar vigorosamente tras cada ciclo de floración para estimular nuevos brotes florales.",
  },
  {
    slug: "cerezo-en-flor",
    nombre: "Cerezo en Flor",
    nombreCientifico: "Prunus serrulata",
    categoria: "Arbustos",
    poster: "/img/Generales/Galeria/Cerezo en Flor.jpg",
    description:
      "El cerezo en flor, conocido en japonés como sakura, es quizás la flor más celebrada y venerada de Japón. Sus flores de cinco pétalos, blancas o rosadas, aparecen en profusión en los árboles antes de que broten las hojas, creando nubes de color de una belleza efímera que dura apenas una o dos semanas. Existen más de 200 variedades cultivadas de sakura en Japón. El hanami (contemplación de las flores) es una tradición milenaria japonesa de reunión familiar y social bajo los cerezos en flor, considerada uno de los rituales culturales más importantes del país.",
    genero: "Prunus",
    familia: "Rosaceae",
    origen: "China, Japón, Corea, Himalaya",
    estacion: "Primavera",
    simbolismo:
      "El cerezo en flor es el símbolo nacional de Japón y uno de los más poderosos del pensamiento budista y sintoísta. Representa la impermanencia de la vida (mono no aware): la belleza intensificada por su brevedad. También simboliza la renovación, la esperanza y la nueva vida. En la cultura samurái se asociaba a la muerte honorable: caer como los pétalos de sakura, en la cima de la juventud.",
    usos:
      "Su uso principal es ornamental en parques, jardines y paseos (las avenidas de cerezos son destinos turísticos mundiales). Las flores saladas de algunas variedades (especialmente Prunus lannesiana) se usan en la cocina japonesa para aromatizar el té de sakura (sakura-yu) y para decorar pasteles de mochi. La madera de cerezo es muy valorada en ebanistería y luthería. Las hojas saladas envuelven el wagashi dulce «sakura mochi».",
    cuidados:
      "Requiere sol pleno o semisombra ligera y suelo bien drenado, fértil y con buen contenido en materia orgánica. Sensible al encharcamiento y a las podas excesivas (puertas de entrada para hongos). Riego moderado y constante en primavera y verano. Abonar en primavera con fertilizante equilibrado. Los cerezos ornamentales son más resistentes a enfermedades que los frutales. En zonas frías, plantar en lugar protegido de vientos fríos tardíos que puedan dañar los capullos.",
  },
  {
    slug: "glicinia",
    nombre: "Glicinia",
    nombreCientifico: "Wisteria sinensis",
    categoria: "Perennes",
    poster: "/img/Generales/Galeria/Glicinia.jpg",
    description:
      "La glicinia es una de las trepadoras más majestuosas y espectaculares del jardín. Sus largas y densas racimos colgantes de flores en tonos violeta, lila, azul o blanco, que pueden alcanzar hasta 1 metro de longitud, desprenden una fragancia dulce e intoxicante. En primavera, cuando florece, la planta se cubre completamente de estos racimos antes de que aparezcan las hojas. Wisteria sinensis, originaria de China, puede vivir más de 100 años y convertirse en enormes estructuras que llegan a cubrir fachadas enteras de edificios.",
    genero: "Wisteria",
    familia: "Fabaceae",
    origen: "China (principalmente), Japón, Corea del Norte",
    estacion: "Primavera",
    simbolismo:
      "La glicinia simboliza la longevidad, la resistencia y el amor duradero. En Japón (fuji) es emblema del clan Fujiwara y de la aristocracia imperial; los jardines de glicinia como los de Ashikaga son considerados paraísos terrenales. En China representa la inmortalidad y la gracia. En Occidente se asocia a la nostalgia, los jardines románticos de la época victoriana y los amores que perduran a través del tiempo.",
    usos:
      "Fundamentalmente ornamental: trepadora de gran impacto en pérgolas, muros, celosías y fachadas. Las flores son comestibles y en Japón se preparan fritas en tempura o cristalizadas en azúcar. Las vainas y semillas son tóxicas y no deben consumirse. En medicina popular china, las flores secas se han usado en infusiones como vermífugo y antiinflamatorio. La madera es dura y se ha utilizado históricamente en carpintería.",
    cuidados:
      "Necesita sol pleno para una floración abundante. Suelo bien drenado, de fértil a moderado; la fertilización excesiva con nitrógeno produce mucho follaje y pocas flores. Riego regular pero sin encharcamiento. Requiere soporte robusto desde el principio (sus tallos pueden alcanzar pesos enormes con los años). Poda dos veces al año: en verano (recortar brotes largos) y en invierno (reducir a 2-3 yemas). La impaciencia florece despacio: puede tardar hasta 7-10 años en florecer si se planta desde semilla.",
  },
  {
    slug: "mimosa",
    nombre: "Mimosa",
    nombreCientifico: "Acacia dealbata",
    categoria: "Arbustos",
    poster: "/img/Generales/Galeria/Mimosa.jpg",
    description:
      "La mimosa es un árbol o arbusto de crecimiento rápido conocido por sus espectaculares racimos de diminutas flores esféricas de color amarillo dorado intenso que aparecen a finales de invierno, siendo de las primeras plantas en florecer en el año. Sus hojas bipinnadas de color verde grisáceo plateado (de ahí el nombre «dealbata», blanqueada) son igualmente ornamentales. Originaria de Australia, se ha naturalizado ampliamente en las costas mediterráneas de Europa, donde es un árbol muy popular. El perfume de sus flores, dulce y cálido, es inconfundible y se intensifica en días soleados.",
    genero: "Acacia",
    familia: "Fabaceae",
    origen: "Sureste de Australia (naturalizada en costa mediterránea europea)",
    estacion: "Invierno, Primavera",
    simbolismo:
      "La mimosa es la flor símbolo del Día Internacional de la Mujer (8 de marzo) en Italia y varios países europeos, donde se regala a las mujeres como gesto de respeto y afecto. Simboliza la sensibilidad, la delicadeza y la fuerza femenina. En general representa la alegría, el optimismo y el final del invierno; ver florecer la mimosa anuncia la primavera.",
    usos:
      "Ornamental en jardines y como flor cortada de enorme importancia comercial (especialmente en San Remo, Italia, centro mundial de la floricultura de mimosa). La madera es utilizada en artesanía y tanería. El extracto de corteza de acacia (taninos) es un curtiente industrial. La madera y hojas se usan como forraje en Australia. En cosmética, el absoluto de flor de mimosa es un ingrediente de perfumería muy apreciado.",
    cuidados:
      "Sol pleno. Tolera suelos pobres, secos y arenosos; detesta los suelos arcillosos y encharcados. Resistente a la sequía una vez establecida. Crecimiento muy rápido (puede ganar 1-2 metros al año). Floración en invierno-primavera; podar ligeramente tras la floración para controlar el porte. Resistente al frío moderado (hasta -7 °C), pero heladas intensas pueden matarla. En zonas frías, cultivar en maceta grande.",
  },
  {
    slug: "clematide",
    nombre: "Clematide",
    nombreCientifico: "Clematis vitalba",
    categoria: "Perennes",
    poster: "/img/Generales/Galeria/Clematide.jpg",
    description:
      "Las clemátides son trepadoras perennes con flores que van desde las pequeñas y estrelladlas hasta las grandes y llamativas, en una paleta de colores que incluye blanco, crema, amarillo, rosa, rojo, violeta, azul y bicolores. Con más de 300 especies en el género Clematis, son unas de las trepadoras más versátiles y queridas de la jardinería. Sus flores están formadas realmente por sépalos coloreados (no pétalos verdaderos) que pueden ser simples, dobles o semidobles. Tras la floración, los frutos con estilos plumosos crean igualmente una decoración invernal muy atractiva.",
    genero: "Clematis",
    familia: "Ranunculaceae",
    origen: "Europa, Asia, América del Norte, Nueva Zelanda",
    estacion: "Primavera, Verano",
    simbolismo:
      "La clemátide simboliza la creatividad artística, la ingeniosidad y el viaje mental. En el lenguaje victoriano de las flores representa la belleza mental y la búsqueda de lo excelso. Su tendencia a trepar y alcanzar alturas la asocia con la ambición y la superación. En algunas culturas es símbolo de la perseverancia: sube despacio pero con firmeza, y una vez establecida nada la detiene.",
    usos:
      "Principalmente ornamental como trepadora en jardines formales e informales, cubriendo muros, arcos, pérgolas, setos y tutores. Clematis vitalba (clemátide silvestre) ha tenido usos en medicina popular europea: los brotes jóvenes se han consumido cocidos en Italia (frittelle di vitalba). Sin embargo, toda la planta contiene protoanemonina, que es irritante. En fitoterapia homeopática se usa en dilución para tratar afecciones cutáneas.",
    cuidados:
      "Requiere la cabeza al sol (mínimo 6 horas) y las raíces en sombra y frescor (cubrir la base con una capa de mantillo o piedras). Suelo fértil, húmedo y bien drenado, ligeramente alcalino. Riego regular y constante; sufren con la sequía. El sistema de poda depende del grupo de floración de cada variedad (Grupo 1: no podar; Grupo 2: poda ligera; Grupo 3: poda fuerte en invierno). Proporcionar soporte fino (alambres, celosía) ya que se aferra con los pecíolos foliares.",
  },
  {
    slug: "zinnia",
    nombre: "Zinnia",
    nombreCientifico: "Zinnia elegans",
    categoria: "Anuales",
    poster: "/img/Generales/Galeria/Zinnia.jpg",
    description:
      "Las zinnias son flores anuales de origen mexicano, conocidas por su extraordinaria resistencia al calor y su floración continua y abundante desde el verano hasta las heladas. Sus cabezas florales tipo margarita grande presentan una paleta de colores deslumbrante: rojo carmesí, naranja, amarillo, rosa, coral, blanco, verde lima y bicolores, en formas simples, semidobles y completamente dobles. Son flores de rápido crecimiento que pasan de semilla a floración en apenas 8-10 semanas. Son fundamentales en jardines de polinizadores por ser una de las plantas más visitadas por mariposas y abejas.",
    genero: "Zinnia",
    familia: "Asteraceae",
    origen: "México y América Central (zonas áridas y semiáridas)",
    estacion: "Verano, Otoño",
    simbolismo:
      "Las zinnias simbolizan la amistad duradera, la constancia y el recuerdo afectuoso de los amigos ausentes. Por eso en el lenguaje victoriano de las flores se enviaban zinnias para decir «pienso en ti». En México, sus colores vibrantes las hacen presentes en celebraciones del Día de los Muertos. También representan la resistencia y la alegría en condiciones difíciles, pues florecen con esplendor incluso bajo el sol más intenso.",
    usos:
      "Principalmente ornamentales en jardines de verano, macetas y flores cortadas (tienen gran duración en jarrón). Son plantas clave en jardines para polinizadores y mariposas. No tienen usos medicinales o alimentarios reconocidos, aunque los pétalos son comestibles sin riesgo. En horticultura se usan como plantas compañeras para atraer insectos beneficiosos y proteger cultivos de plagas.",
    cuidados:
      "Sol pleno imprescindible; en semisombra florecen escasamente. Suelo bien drenado y moderadamente fértil. Toleran el calor extremo y la sequía moderada. Riego al pie de la planta (evitar mojar el follaje para prevenir oídio). Siembra directa después de las heladas o trasplante con cepellón. Eliminar flores marchitas continuamente para prolongar la floración hasta las heladas. Son susceptibles al oídio al final del verano; escoger variedades resistentes.",
  },
  // ── Nuevas flores peligrosas ──────────────────────────────────────
  {
    slug: "belladona",
    nombre: "Belladona",
    nombreCientifico: "Atropa belladonna",
    categoria: "Perennes",
    poster: "/img/Generales/Galeria/Belladona.jpg",
    peligrosa: true,
    description:
      "La belladona, cuyo nombre significa «bella mujer» en italiano, es una de las plantas más venenosas de Europa y Asia. Sus flores acampanadas en tonos violeta-marrón apagado y sus brillantes bayas negras azabache son engañosamente atractivas. Toda la planta contiene alcaloides tropánicos (atropina, escopolamina, hiosciamina) en concentraciones letales. Debe su nombre al hecho de que las mujeres del Renacimiento se ponían su jugo en los ojos para dilatar las pupilas, considerado signo de belleza en la época; ese efecto se debe a la atropina, que bloquea los receptores muscarínicos. Con tan solo 2-5 bayas se puede matar a un niño.",
    genero: "Atropa",
    familia: "Solanaceae",
    origen: "Europa central y del sur, Asia Menor, norte de África, Irán",
    estacion: "Verano",
    simbolismo:
      "La belladona es el arquetipo de la dualidad entre la belleza y la muerte. Está profundamente ligada a la brujería medieval europea: era ingrediente principal de los «ungüentos de vuelo» que se atribuían a las brujas por sus potentes efectos alucinógenos. Simboliza la seducción engañosa, el peligro oculto bajo una apariencia atractiva y el poder de la femineidad oscura. En la mitología, Atropa era una de las tres Parcas, la que cortaba el hilo de la vida.",
    usos:
      "La atropina extraída de la belladona es un medicamento esencial de la OMS: se usa como midriático en oftalmología, como antiespasmódico preoperatorio, como antídoto de los nervios organofosforados y en el tratamiento de la bradicardia cardíaca. La escopolamina se usa en parches contra el mareo y en anestesia. Históricamente fue el veneno más utilizado en asesinatos aristocráticos europeos. Su uso popular es extremadamente peligroso y ha causado numerosas muertes.",
    cuidados:
      "Crece espontáneamente en suelos calcáreos, bosques y terrenos alterados. Si aparece en el jardín, eliminar con guantes impermeables y ropa de protección; lavar bien manos y herramientas. Jamás plantar intencionalmente donde haya acceso de niños o animales. La toxina se absorbe por la piel. En caso de ingestión, llamar inmediatamente a emergencias.",
  },
  {
    slug: "cicuta",
    nombre: "Cicuta",
    nombreCientifico: "Conium maculatum",
    categoria: "Perennes",
    poster: "/img/Generales/Galeria/Cicuta.jpg",
    peligrosa: true,
    description:
      "La cicuta es una de las plantas más famosas de la historia por haber sido el veneno utilizado para ejecutar a Sócrates en el año 399 a.C. Pertenece a la familia del perejil y la zanahoria y se le parece engañosamente, lo que ha causado numerosas intoxicaciones mortales por confusión. Sus flores blancas en umbelas (como el perejil) y sus tallos huecos con manchas rojizas o púrpuras son sus rasgos identificativos. Contiene coniína y otros alcaloides piperidínicos que producen parálisis muscular ascendente: la muerte por cicuta sobreviene por parálisis respiratoria mientras la mente permanece lúcida.",
    genero: "Conium",
    familia: "Apiaceae",
    origen: "Europa, Asia Occidental y Central, norte de África (naturalizada mundialmente)",
    estacion: "Primavera, Verano",
    simbolismo:
      "La cicuta es el símbolo histórico de la justicia implacable y de la muerte filosófica. La muerte de Sócrates la convirtió en emblema del pensamiento libre frente al poder político. También representa la traición de las apariencias: su parecido a plantas comestibles la convierte en metáfora del peligro disfrazado de inocencia. En la tradición herbolaria medieval era símbolo de la frontera entre el mundo de los vivos y los muertos.",
    usos:
      "La coniína fue el primer alcaloide vegetal sintetizado en laboratorio (1886). En homeopatía clásica se usa en diluciones extremas para tratar vértigo y temblores. Históricamente, la medicina griega y medieval usó extractos muy diluidos como analgésico y sedante. En investigación farmacológica, sus alcaloides se estudian como relajantes musculares controlados. No existe ningún uso medicinal o alimentario popular seguro.",
    cuidados:
      "Planta ruderal que crece espontáneamente en márgenes de ríos, cunetas, terrenos baldíos y bordes de cultivos. Si se identifica en el jardín, eliminar con guantes resistentes y ropa de protección completa: la toxina se absorbe por la piel. No quemar los restos (los vapores son tóxicos). No plantar intencionalmente. Mantener a niños y animales totalmente alejados.",
  },
  {
    slug: "eleboro",
    nombre: "Eléboro",
    nombreCientifico: "Helleborus niger",
    categoria: "Perennes",
    poster: "/img/Generales/Galeria/Eleboro.jpg",
    peligrosa: true,
    description:
      "El eléboro negro, también conocido como rosa de Navidad o rosa de invierno, es una planta perenne de flores delicadas que florecen en pleno invierno, a veces incluso bajo la nieve. Sus flores de cinco sépalos blancos o rosados que rodean un centro de estambres amarillos crean una imagen de belleza invernal sin rival. Pertenece a la misma familia que el ranúnculo y el acónito (Ranunculaceae), y como ellos es completamente tóxico. Contiene glucósidos cardíacos (heleborina, heleborigenina), saponinas y ranunculina, que causan síntomas gastrointestinales severos, bradicardia y, en dosis altas, parada cardíaca.",
    genero: "Helleborus",
    familia: "Ranunculaceae",
    origen: "Europa central y meridional (Alpes, Apeninos, región alpina)",
    estacion: "Invierno, Primavera",
    simbolismo:
      "El eléboro tiene una rica mitología ligada a la locura y la curación de la locura: en la Grecia antigua, Melampus curó a las hijas del rey Preto de la locura con eléboro. Se creía que protegía contra los espíritus malignos y los hechizos. En el folclore medieval era la «flor de la esperanza» por florecer en el invierno más profundo. En el lenguaje de las flores representa el alivio de la angustia y la esperanza en tiempos oscuros.",
    usos:
      "Los glucósidos cardíacos del eléboro fueron usados en la medicina griega y romana como purgante radical para tratar la locura (una práctica peligrosa que mató a más de un paciente). Actualmente no tiene usos medicinales reconocidos por la medicina convencional, aunque sus glucósidos se investigan como antitumorales. Su único uso moderno es el ornamental: es una de las pocas plantas que florecen en invierno, muy valorada en jardinería paisajística.",
    cuidados:
      "Prefiere semisombra o sombra, suelos calcáreos, húmedos y bien drenados, ricos en materia orgánica. Resistente al frío intenso. Riego moderado; tolera la sequía estival en semisombra. No trasplantar una vez establecido (las raíces son muy sensibles). Manipular siempre con guantes: la savia irrita la piel y los ojos. Retirar las hojas viejas en otoño para evitar enfermedades fúngicas. Se autopropaga por semillas; dar tiempo, ya que tarda 2-3 años en florecer desde semilla.",
  },
  {
    slug: "brugmansia",
    nombre: "Brugmansia",
    nombreCientifico: "Brugmansia arborea",
    categoria: "Arbustos",
    poster: "/img/Generales/Galeria/Brugmansia.jpg",
    peligrosa: true,
    description:
      "La brugmansia, también llamada trompeta de ángel o floripondio, es un arbusto o pequeño árbol originario de los Andes sudamericanos cuyas enormes flores en forma de trompeta colgante pueden alcanzar los 50 cm de longitud. Florecen en blanco, amarillo, naranja, rosa y rojo, y despiden una fragancia intensa e hipnótica, especialmente por la noche. A diferencia de la Datura (estramonio), las flores de la brugmansia cuelgan hacia abajo. Es considerada extinta en estado silvestre. Toda la planta contiene alcaloides tropánicos (escopolamina, atropina, hiosciamina) que producen alucinaciones, delirio intenso, taquicardia y pueden causar la muerte.",
    genero: "Brugmansia",
    familia: "Solanaceae",
    origen: "Andes de América del Sur (Colombia, Ecuador, Perú, Bolivia)",
    estacion: "Verano, Otoño",
    simbolismo:
      "En las culturas andinas, la brugmansia (conocida como floripondio o borrachero) era y sigue siendo una planta sagrada chamánica. Los chamanes de pueblos como los Jívaro y los Shuar la usan en rituales de visión, de contacto con los ancestros y de diagnóstico espiritual. Simboliza el umbral entre el mundo ordinario y el espiritual, y el peligro inherente a ese cruce. Para el mundo occidental es símbolo de seducción peligrosa y de lo sublime aterrador.",
    usos:
      "La escopolamina derivada de la brugmansia es un fármaco de la OMS ampliamente usado en medicina: tratamiento del mareo por movimiento, antisecretor preoperatorio y en parches transdérmicos para el mareo. Sin embargo, su uso popular como droga («burundanga» o «escopolamina») es extremadamente peligroso: anula la voluntad y la memoria y se ha usado en crímenes. En los Andes tiene uso veterinario tradicional para calmar animales.",
    cuidados:
      "Planta de clima cálido que no tolera las heladas (muere por debajo de -2 °C). En climas fríos cultivar en maceta grande y llevar a interior en invierno. Sol pleno o semisombra. Suelo fértil, húmedo y bien drenado. Riego abundante en verano; reducir en invierno. Abonar cada 2 semanas en la estación de crecimiento con abono rico en potasio. Manipular exclusivamente con guantes: toda la planta es tóxica. Nunca plantar cerca de zonas de juego infantil ni de establos.",
  },
  {
    slug: "ricino",
    nombre: "Ricino",
    nombreCientifico: "Ricinus communis",
    categoria: "Arbustos",
    poster: "/img/Generales/Galeria/Ricino.jpg",
    peligrosa: true,
    description:
      "El ricino es una planta arbustiva de llamativo follaje palmeado, de hojas grandes en tonos verde brillante, rojizo o púrpura, con flores y frutos espinosos muy característicos. Sus semillas, llamadas «semillas de ricino», son la fuente de la ricina, considerada una de las toxinas naturales más letales conocidas: tan solo 1 miligramo de ricina pura es suficiente para matar a un adulto, y no existe antídoto. Las semillas son responsables de intoxicaciones graves, especialmente en niños que las confunden con golosinas. Al mismo tiempo, el aceite de ricino obtenido por presión en frío (sin ricina) es un producto de uso mundial.",
    genero: "Ricinus",
    familia: "Euphorbiaceae",
    origen: "África oriental (Etiopía) e India; naturalizada en regiones tropicales y templadas cálidas",
    estacion: "Verano, Otoño",
    simbolismo:
      "El ricino tiene una dualidad simbólica extrema: por un lado, su aceite ha sido símbolo de purificación, vida y fecundidad desde el antiguo Egipto, donde se usaba en lámparas de templo y rituales funerarios. Por otro, la ricina de sus semillas lo ha convertido en símbolo del terror biológico moderno (fue utilizada en el asesinato del escritor Georgi Markov en 1978 con el famoso «paraguas búlgaro»). Representa el doble filo de la naturaleza: lo que cura y lo que mata conviven en la misma planta.",
    usos:
      "El aceite de ricino (extraído por presión fría, sin ricina) tiene usos milenarios: purgante y laxante (aunque ya no recomendado), lubricante industrial de alta calidad, materia prima para la fabricación de plásticos biodegradables (nylon 11), barnices y biodiesel. En cosmética, es el aceite más espeso conocido, usado como emoliente y acondicionador de cejas y pestañas. La ricina de las semillas es objeto de investigación como agente antitumoral en inmunotoxinas dirigidas contra células cancerosas.",
    cuidados:
      "Planta de crecimiento extremadamente rápido (puede superar los 3 m en una temporada). Sol pleno. Tolera suelos pobres y secos. Riego moderado; resistente a la sequía. En climas templados se trata como anual. NUNCA plantar donde haya niños o animales: las semillas son letales. Si se cultiva como ornamental, eliminar las infrutescencias antes de que maduren las semillas para evitar riesgo de intoxicación. Usar guantes al manipular cualquier parte de la planta.",
  },
  {
    slug: "rododendro",
    nombre: "Rododendro",
    nombreCientifico: "Rhododendron ponticum",
    categoria: "Arbustos",
    poster: "/img/Generales/Galeria/Rododendro.jpg",
    peligrosa: true,
    description:
      "El rododendro es uno de los arbustos ornamentales más espectaculares del mundo, con enormes inflorescencias de flores acampanadas en tonos rosa, rojo, blanco, naranja, amarillo y violeta que cubren literalmente el arbusto en primavera. El género Rhododendron es uno de los más grandes del reino vegetal, con más de 1.000 especies. Las azaleas, tan populares en jardinería, son en realidad rododendros. Sin embargo, toda la planta contiene grayanotoxinas que afectan a los canales de sodio celulares, produciendo intoxicaciones graves en humanos y animales. Incluso la miel elaborada por abejas que liban sus flores («miel loca») puede causar intoxicaciones.",
    genero: "Rhododendron",
    familia: "Ericaceae",
    origen: "Asia (Himalaya, China, Japón), Europa del Sur, América del Norte",
    estacion: "Primavera",
    simbolismo:
      "El rododendro es la flor nacional de Nepal y Bután, y es sagrado en la cultura tibetana, donde adorna los altares budistas. En el lenguaje occidental de las flores simboliza la cautela y la advertencia de peligro («ten cuidado»). En la cultura popular del siglo XIX era símbolo de ambición peligrosa. También se asocia con la abundancia y la riqueza natural por la majestuosidad de sus floraciones.",
    usos:
      "Principalmente ornamental en jardines de estilo inglés, jardines ácidos, bosques paisajísticos y parques. Las grayanotoxinas del rododendro se investigan en neurología para estudiar los canales de sodio. La llamada «miel loca» (mad honey) del Rododendron ponticum y R. luteum del Mar Negro tiene usos en medicina tradicional turca y georgiana en dosis muy pequeñas para la hipertensión y el reumatismo. En dosis mayores esta miel causa intoxicaciones graves. Toda la planta es tóxica para caballos, vacas, cabras y perros.",
    cuidados:
      "Requiere suelos ácidos (pH 4.5–6), ricos en humus, bien drenados pero húmedos: son plantas acidófilas estrictas. Semisombra o sol filtrado; el sol intenso quema las hojas. Riego regular con agua sin cal (si el agua es calcárea, acidificar o usar agua de lluvia). Abonar con fertilizante específico para acidófilas (azaleas/rododendros) en primavera. No enterrar el cepellón demasiado hondo. Nunca dar hojas o flores a animales domésticos.",
  },
];

async function main() {
  console.log("Iniciando seed de flores…");

  const slugsExistentes = new Set(
    (await prisma.flor.findMany({ select: { slug: true } })).map((f) => f.slug)
  );

  let creadas = 0;
  let omitidas = 0;

  for (const flor of flores) {
    if (slugsExistentes.has(flor.slug)) {
      console.log(`  — ${flor.nombre} (ya existe, omitida)`);
      omitidas++;
    } else {
      await prisma.flor.create({ data: flor });
      console.log(`  ✓ ${flor.nombre} (creada)`);
      creadas++;
    }
  }

  console.log(`\nSeed completado: ${creadas} flores creadas, ${omitidas} omitidas.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

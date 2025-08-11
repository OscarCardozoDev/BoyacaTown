export interface Festivo {
  id: number,
  title: string,
  date: string,
  description: string
}


export interface Attraction {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface HistoricalFact {
  id: number;
  title: string;
  description: string;
  year?: string;
}

export interface CulturalAspect {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface TravelTip {
  id: number;
  title: string;
  description: string;
  category: 'accommodation' | 'transportation' | 'food' | 'weather' | 'general';
}

export const Festivos : Festivo[]=[
  {
    id: 1,
    title: 'Día de Reyes',
    date: '3, 4 y 5 de enero',
    description: 'Las celebraciones en Monguí comienzan en enero con el Día de Reyes, una antigua tradición que ya cumple 200 años. Todos los años se celebra con dramas organizados por la parroquia.'
  },
  {
    id: 2,
    title: 'Semana Santa',
    date: 'marzo/abril',
    description: 'Gracias al interés de un pequeño colectivo fue recuperada esta fiesta que tiene todo el sentido de la fe y de la cultura católica.'
  },
  {
    id: 3,
    title: 'Celebración de la Virgen',
    date: 'Mayo',
    description: ' Durante el mes de mayo es la celebración de la Virgen. Todos los días por sus calles se ve la procesión acompañada de música, poesía y oraciones. Participan niños, jóvenes, adultos y abuelos. Familias de las zonas urbana y rural se congregan en la festividad.'
  },{
    id: 4,
    title: 'Corpus Christi',
    date: 'Junio',
    description: 'Es la manifestación de adoración a Dios en la eucaristía. La expresión artística también sirve para alagarlo.'
  },{
    id: 5,
    title: 'Sagrado Corazón',
    date: 'Junio',
    description: 'Junio es el mes de esta fiesta en la que se da gracias por la paz del pueblo. Expresiones culturales y políticas se toman sus calles y sitios de encuentro.'
  },{
    id: 6,
    title: 'San Antonio',
    date: 'Junio',
    description: 'Esta fiesta es toda una tradición en la población. Cuenta con una gran actividad cultural, procesiones y misas.'
  },{
    id: 7,
    title: 'La fiesta del Tránsito.',
    date: 'agosto',
    description: 'Es una fiesta importante, más de fe que de cultura y turismo. Tiene novena, eucaristías, procesión y en cada fiesta se quema pólvora.'
  },{
    id: 8,
    title: 'Fiesta de la Virgen del Carmen',
    date: '30 y 31 de julio',
    description: 'Festividad en honor a la Santísima Virgen del Carmen, patrona de los transportadores de la Villa de Monguí en el Portón Blanco.'
  },{
    id: 9,
    title: 'Fiesta de San Pedro y San Pablo',
    date: 'junio',
    description: 'Celebración religiosa que incluye procesiones y eventos culturales.'
  },{
    id: 10,
    title: 'Feria del Balón',
    date: 'agosto',
    description: 'Este festival resalta los saberes y la creatividad existente en este destino turístico, esto destaca que la fabricación de balones cocidos a mano de manera artesanal, es una tradición de más de 80 años y para conmemorar estos saberes se han preparado actividades como la feria comercial y artesanal, talleres de elaboración de balones, concursos, presentaciones artísticas y culturales.'
  }
]

export const attractions: Attraction[] = [
  {
    id: 1,
    name: 'Basilica of Our Lady of Monguí',
    description: 'Built between 1694 and 1760 by Franciscans, this gorgeous colonial church dominates the main plaza and was declared a National Monument of Colombia in 1975. Its architecture represents one of the finest examples of colonial religious buildings in Colombia.',
    imageUrl: '/catedral.jfif'
  },
  {
    id: 2,
    name: 'Calicanto Bridge',
    description: 'Built in the 17th century, this historic stone and lime bridge is a symbol of colonial engineering and connects the town with the Franciscan convent. Legend has it that it was constructed using a mixture that included bull\'s blood.',
    imageUrl: '/puente.jfif'
  },
  {
    id: 3,
    name: 'Football Museum (Museo del Balón)',
    description: 'Learn about Monguí\'s unique tradition of handcrafting footballs at this museum located on the main plaza. The town supplies approximately 25% of Colombia\'s national demand for footballs.',
    imageUrl: '/museodelbalon.webp'
  },
  {
    id: 4,
    name: 'Páramo de Ocetá',
    description: 'Widely regarded as one of the most beautiful páramos (high-altitude Andean ecosystems) in Colombia, this natural wonder offers breathtaking hiking opportunities and stunning views. Colombia is home to 40% of the world\'s páramos.',
    imageUrl: '/paramo.webp'
  },
  {
    id: 5,
    name: 'Main Plaza',
    description: 'The charming central plaza of Monguí is surrounded by colonial buildings with the distinctive white, green, and red color scheme that characterizes the town. It\'s the perfect place to relax and soak in the atmosphere.',
    imageUrl: '/plaza.jpg'
  }
];

export const historicalFacts: HistoricalFact[] = [
  {
    id: 1,
    title: 'Orígenes indígenas',
    description: 'Antes de la llegada de los españoles, la zona estaba habitada por el pueblo muisca, una de las civilizaciones indígenas más desarrolladas de Colombia. El nombre "Monguí" proviene de la lengua indígena muisca y se traduce como "El Baño de la Esposa".',
    year: 'Pre-1550'
  },
  {
    id: 2,
    title: 'Llegada de los franciscanos',
    description: 'Los monjes franciscanos llegaron para evangelizar a las poblaciones indígenas. Se congregaron para facilitar su conversión al catolicismo y el acceso a la fuerza laboral.',
    year: '1550'
  },
  {
    id: 3,
    title: 'Fundación Oficial',
    description: 'Se fundó oficialmente el pueblo de Monguí, estableciéndose como asentamiento colonial.',
    year: '1601'
  },
  {
    id: 4,
    title: 'Construcción del Puente Calicanto',
    description: 'El emblemático puente se construyó con piedra, cal y, según la leyenda, sangre de toro. Se construyó para transportar materiales para la basílica.',
    year: 'siglo XVII'
  },
  {
    id: 5,
    title: 'Basilica Construction',
    description: 'La Basílica de Nuestra Señora de Monguí fue construida por los franciscanos, convirtiéndose en la pieza central del pueblo.',
    year: '1694-1760'
  },
  {
    id: 6,
    title: 'Declaración de Monumento Nacional',
    description: 'La Basílica de Nuestra Señora de Monguí fue declarada Monumento Nacional de Colombia, reconociendo su importancia histórica y arquitectónica.',
    year: '1975'
  },
  {
    id: 7,
    title: 'Designación de ciudad patrimonial',
    description: 'Monguí fue designado como uno de los Pueblos Patrimonio de Colombia, en reconocimiento a su arquitectura colonial bien conservada y su importancia cultural.',
    year: 'Reciente'
  }
];

export const culturalAspects: CulturalAspect[] = [
  {
    id: 1,
    title: 'Football Manufacturing Tradition',
    description: 'Monguí is known as "The Town of the Balls" (El Pueblo de los Balones) due to its tradition of handcrafting footballs. This tradition dates back to the early 20th century, and these handmade leather footballs are famous throughout Colombia for their quality. They supply approximately 25% of the national demand and even export to Venezuela and Central America.',
    imageUrl: '/football-craft.jpg'
  },
  {
    id: 2,
    title: 'Colonial Architecture',
    description: 'The town features well-preserved colonial architecture with a distinctive color scheme of white, green, and red. The buildings around the main plaza and along the cobblestone streets showcase this architectural style.',
    imageUrl: '/colonial-architecture.jpg'
  },
  {
    id: 3,
    title: 'Traditional Cuisine',
    description: 'Local dishes include nabos con queso gratinado (a local plant mixed with melted cheese), trout, and various soups. Restaurants like La Casona offer authentic local cuisine with views of the plaza.',
    imageUrl: '/local-cuisine.jpg'
  },
  {
    id: 4,
    title: 'Ruanas (Traditional Ponchos)',
    description: 'Shops in Monguí sell ruanas, which are traditional Colombian ponchos that are particularly useful in the cold climate of this high-altitude town.',
    imageUrl: '/ruanas.jpg'
  }
];

export const travelTips: TravelTip[] = [
  {
    id: 1,
    title: 'Best Time to Visit',
    description: 'Monguí can be visited year-round, but be prepared for cold temperatures, especially in the evenings, as the town sits at an altitude of approximately 2,900 meters (9,500 feet).',
    category: 'weather'
  },
  {
    id: 2,
    title: 'Warm Clothing',
    description: 'Pack warm clothes regardless of when you visit, as temperatures average around 13°C and can drop significantly at night.',
    category: 'weather'
  },
  {
    id: 3,
    title: 'Cash Considerations',
    description: 'There are no ATMs in Monguí, so bring sufficient cash with you. While some restaurants accept payment by card, most shops don\'t.',
    category: 'general'
  },
  {
    id: 4,
    title: 'Guided Tours',
    description: 'For hiking in the Páramo de Ocetá, it\'s best to hire a local guide who can provide valuable information about the ecosystem and ensure you don\'t get lost.',
    category: 'general'
  },
  {
    id: 5,
    title: 'Local Restaurants',
    description: 'Try La Casona restaurant located just off the plaza for traditional local cuisine with nice views.',
    category: 'food'
  },
  {
    id: 6,
    title: 'Transportation',
    description: 'Monguí is located about 4 hours by car from Bogotá. The road from Sogamoso to Monguí rises to almost 3,000m, offering beautiful scenery along the way.',
    category: 'transportation'
  },
  {
    id: 7,
    title: 'Accommodation',
    description: 'While there are limited options, you can find charming small hotels and guesthouses in and around Monguí for an authentic experience.',
    category: 'accommodation'
  }
];

export const generalInfo = {
  name: 'Monguí',
  region: 'Boyacá',
  country: 'Colombia',
  altitude: '2,900 meters (9,500 feet)',
  population: 'Approximately 2,800',
  climate: 'Cold and humid',
  averageTemperature: '13°C',
  description: 'Monguí is a charming colonial town located in the Boyacá department of Colombia. It\'s considered one of Colombia\'s Heritage Towns (Pueblos Patrimonio) and is widely regarded as one of the most beautiful towns in the country. With its well-preserved colonial architecture, rich history, and stunning natural surroundings, Monguí offers visitors an authentic Colombian experience away from the more crowded tourist destinations.'
};
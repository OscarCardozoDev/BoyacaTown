import semanaSanta from '../assets/images/semana_santa.jpg';
import Reyes from '../assets/images/Día de Reyes.jpeg';
import Virgen from '../assets/images/Fiesta-de-la-Virgen-del-Carmen.png';
import corpus from '../assets/images/copus-christi.jpg';
import sagradoCorazon from '../assets/images/Sagrado-Corazón.jpg';
import sanAntonio from '../assets/images/San-Antonio.jpg';
import Transito from '../assets/images/La-fiesta-del-Tránsito.jpg'
import PedroYpablo from '../assets/images/Fiesta de San Pedro y San Pablo.jpeg'
import balon from '../assets/images/celebracion-de-la-virgen.jpg'
export interface Festivo {
  id: number,
  title: string,
  date: string,
  description: string,
  img: string
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
  imageUrl: string;
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

export const festivos: Festivo[] = [
  {
    id: 1,
    title: 'Día de Reyes',
    date: '3, 4 y 5 de enero',
    description: 'Las celebraciones en Monguí comienzan en enero con el Día de Reyes, una antigua tradición que ya cumple 200 años. Todos los años se celebra con dramas organizados por la parroquia.',
    img: Reyes
  },
  {
    id: 2,
    title: 'Semana Santa',
    date: 'marzo/abril',
    description: 'Gracias al interés de un pequeño colectivo fue recuperada esta fiesta que tiene todo el sentido de la fe y de la cultura católica.',
    img: semanaSanta
  },
  {
    id: 3,
    title: 'Celebración de la Virgen',
    date: 'Mayo',
    description: ' Durante el mes de mayo es la celebración de la Virgen. Todos los días por sus calles se ve la procesión acompañada de música, poesía y oraciones. Participan niños, jóvenes, adultos y abuelos. Familias de las zonas urbana y rural se congregan en la festividad.',
    img: Virgen
  }, {
    id: 4,
    title: 'Corpus Christi',
    date: 'Junio',
    description: 'Es la manifestación de adoración a Dios en la eucaristía. La expresión artística también sirve para alagarlo.',
    img: corpus
  }, {
    id: 5,
    title: 'Sagrado Corazón',
    date: 'Junio',
    description: 'Junio es el mes de esta fiesta en la que se da gracias por la paz del pueblo. Expresiones culturales y políticas se toman sus calles y sitios de encuentro.',
    img: sagradoCorazon
  }, {
    id: 6,
    title: 'San Antonio',
    date: 'Junio',
    description: 'Esta fiesta es toda una tradición en la población. Cuenta con una gran actividad cultural, procesiones y misas.',
    img: sanAntonio
  }, {
    id: 7,
    title: 'La fiesta del Tránsito.',
    date: 'agosto',
    description: 'Es una fiesta importante, más de fe que de cultura y turismo. Tiene novena, eucaristías, procesión y en cada fiesta se quema pólvora.',
    img: Transito
  }, {
    id: 8,
    title: 'Fiesta de la Virgen del Carmen',
    date: '30 y 31 de julio',
    description: 'Festividad en honor a la Santísima Virgen del Carmen, patrona de los transportadores de la Villa de Monguí en el Portón Blanco.'
    , img: Virgen
  }, {
    id: 9,
    title: 'Fiesta de San Pedro y San Pablo',
    date: 'junio',
    description: 'Celebración religiosa que incluye procesiones y eventos culturales.'
    , img: PedroYpablo
  }, {
    id: 10,
    title: 'Feria del Balón',
    date: 'agosto',
    description: 'Este festival resalta los saberes y la creatividad existente en este destino turístico, esto destaca que la fabricación de balones cocidos a mano de manera artesanal, es una tradición de más de 80 años y para conmemorar estos saberes se han preparado actividades como la feria comercial y artesanal, talleres de elaboración de balones, concursos, presentaciones artísticas y culturales.'
    , img: balon
  }
]

export const attractions: Attraction[] = [
  {
    id: 1,
    name: 'Basílica de Nuestra Señora de Monguí',
    description: 'Construida entre 1694 y 1760 por franciscanos, esta hermosa iglesia colonial domina la plaza principal y fue declarada Monumento Nacional de Colombia en 1975. Su arquitectura representa uno de los mejores ejemplos de edificios religiosos coloniales en Colombia.',
    imageUrl: '/basilica.jpg'
  },
  {
    id: 2,
    name: 'Puente Calicanto',
    description: 'Construido en el siglo XVII, este histórico puente de piedra y cal es símbolo de la ingeniería colonial y conecta el pueblo con el convento franciscano. La leyenda dice que fue construido usando una mezcla que incluía sangre de toro.',
    imageUrl: '/bridge.jpg'
  },
  {
    id: 3,
    name: 'Museo del Balón',
    description: 'Conoce la tradición única de Monguí en la fabricación artesanal de balones de fútbol en este museo ubicado en la plaza principal. El pueblo suministra aproximadamente el 25% de la demanda nacional de balones de fútbol de Colombia.',
    imageUrl: '/football-museum.jpg'
  },
  {
    id: 4,
    name: 'Páramo de Ocetá',
    description: 'Ampliamente considerado como uno de los páramos más hermosos de Colombia, esta maravilla natural ofrece oportunidades impresionantes para el senderismo y vistas espectaculares. Colombia es hogar del 40% de los páramos del mundo.',
    imageUrl: '/paramo.jpg'
  },
  {
    id: 5,
    name: 'Plaza Principal',
    description: 'La encantadora plaza central de Monguí está rodeada de edificios coloniales con el distintivo esquema de colores blanco, verde y rojo que caracteriza al pueblo. Es el lugar perfecto para relajarse y absorber la atmósfera.',
    imageUrl: '/plaza.jpg'
  }
];

export const historicalFacts: HistoricalFact[] = [
  {
    id: 1,
    title: 'Orígenes indígenas',
    description: 'Antes de la llegada de los españoles, la zona estaba habitada por el pueblo muisca, una de las civilizaciones indígenas más desarrolladas de Colombia. El nombre "Monguí" proviene de la lengua indígena muisca y se traduce como "El Baño de la Esposa".',
    year: 'Pre-1550',
    imageUrl: '/origenes_indigenas.jpg'
  },
  {
    id: 2,
    title: 'Llegada de los franciscanos',
    description: 'Los monjes franciscanos llegaron para evangelizar a las poblaciones indígenas. Se congregaron para facilitar su conversión al catolicismo y el acceso a la fuerza laboral.',
    year: '1550',
    imageUrl: '/llegada_franciscanos.jpg'
  },
  {
    id: 3,
    title: 'Fundación Oficial',
    description: 'Se fundó oficialmente el pueblo de Monguí, estableciéndose como asentamiento colonial.',
    year: '1601',
    imageUrl: '/fundacion_oficial.jpg'
  },
  {
    id: 4,
    title: 'Construcción del Puente Calicanto',
    description: 'El emblemático puente se construyó con piedra, cal y, según la leyenda, sangre de toro. Se construyó para transportar materiales para la basílica.',
    year: 'siglo XVII',
    imageUrl: '/puente_calicanto.jpg'
  },
  {
    id: 5,
    title: 'Construcción de la Basilica',
    description: 'La Basílica de Nuestra Señora de Monguí fue construida por los franciscanos, convirtiéndose en la pieza central del pueblo.',
    year: '1694-1760',
    imageUrl: '/construccion_basilica.jpg'
  },
  {
    id: 6,
    title: 'Declaración de Monumento Nacional',
    description: 'La Basílica de Nuestra Señora de Monguí fue declarada Monumento Nacional de Colombia, reconociendo su importancia histórica y arquitectónica.',
    year: '1975',
    imageUrl: '/monumento_nacional.jpg'
  },
  {
    id: 7,
    title: 'Designación de ciudad patrimonial',
    description: 'Monguí fue designado como uno de los Pueblos Patrimonio de Colombia, en reconocimiento a su arquitectura colonial bien conservada y su importancia cultural.',
    year: 'Reciente',
    imageUrl: '/ciudad_patrimonial.jpg'
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
    title: 'Mejor Época para Visitar',
    description: 'Monguí puede visitarse durante todo el año, pero prepárate para temperaturas frías, especialmente en las noches, ya que el pueblo se encuentra a una altitud de aproximadamente 2.900 metros.',
    category: 'weather'
  },
  {
    id: 2,
    title: 'Ropa Abrigada',
    description: 'Empaca ropa abrigada sin importar cuándo visites, ya que las temperaturas promedian alrededor de 13°C y pueden bajar significativamente por la noche.',
    category: 'weather'
  },
  {
    id: 3,
    title: 'Consideraciones de Efectivo',
    description: 'No hay cajeros automáticos en Monguí, así que trae suficiente efectivo contigo. Aunque algunos restaurantes aceptan pagos con tarjeta, la mayoría de las tiendas no lo hacen.',
    category: 'general'
  },
  {
    id: 4,
    title: 'Tours Guiados',
    description: 'Para hacer senderismo en el Páramo de Ocetá, es mejor contratar un guía local que puede proporcionar información valiosa sobre el ecosistema y asegurar que no te pierdas.',
    category: 'general'
  },
  {
    id: 5,
    title: 'Restaurantes Locales',
    description: 'Prueba el restaurante La Casona ubicado justo fuera de la plaza para cocina tradicional local con hermosas vistas.',
    category: 'food'
  },
  {
    id: 6,
    title: 'Transporte',
    description: 'Monguí está ubicado a aproximadamente 4 horas en automóvil desde Bogotá. El camino desde Sogamoso hasta Monguí se eleva a casi 3.000m, ofreciendo hermosos paisajes en el trayecto.',
    category: 'transportation'
  },
  {
    id: 7,
    title: 'Alojamiento',
    description: 'Aunque hay opciones limitadas, puedes encontrar pequeños hoteles encantadores y casas de huéspedes en Monguí y sus alrededores para una experiencia auténtica.',
    category: 'accommodation'
  }
];

export const generalInfo = {
  name: 'Monguí',
  region: 'Boyacá',
  country: 'Colombia',
  altitude: '2,900 metros',
  population: 'Aproximadamente 2,800 habitantes',
  climate: 'Frío y húmedo',
  averageTemperature: '13°C',
  description: 'Monguí es un encantador pueblo colonial ubicado en el departamento de Boyacá, Colombia. Es considerado uno de los Pueblos Patrimonio de Colombia y es ampliamente reconocido como uno de los pueblos más hermosos del país. '
};
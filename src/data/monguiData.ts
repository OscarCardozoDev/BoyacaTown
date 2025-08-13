import semanaSanta from '../assets/images/semana_santa.jpg';
import Reyes from '../assets/images/Día de Reyes.jpeg';
import Virgen from '../assets/images/Fiesta-de-la-Virgen-del-Carmen.png';
import corpus from '../assets/images/copus-christi.jpg';
import sagradoCorazon from '../assets/images/Sagrado-Corazón.jpg';
import sanAntonio from '../assets/images/San-Antonio.jpg';
import Transito from '../assets/images/La-fiesta-del-Tránsito.jpg';
import PedroYpablo from '../assets/images/Fiesta de San Pedro y San Pablo.jpeg';
import balon from '../assets/images/celebracion-de-la-virgen.jpg';

//history images
import origenes_indigenas from '../assets/images/origenes_indigenas.jpg';
import llegada from '../assets/images/llegada_franciscanos.jpg';
import fundacion from '../assets/images/fundacion_oficial.jpg';
import construccion from '../assets/images/construccion_basilica.jpg';
import basilica from '../assets/images/construccion_basilica.jpg';
import declaracion from '../assets/images/monumento_nacional.jpg';
import designacion from '../assets/images/ciudad_patrimonial.jpg'; 



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

export interface GastronomyItem {
  id: number;
  name: string;
  description: string;
  category: 'plato-principal' | 'sopa' | 'panaderia' | 'postre' | 'bebida';
  imageUrl?: string;
}

export const gastronomia: GastronomyItem[] = [
  // Platos Principales
  {
    id: 1,
    name: 'Cocido Boyacense',
    description: 'El plato más típico de Monguí, preparado con papa de año, papa criolla, carne de res, cerdo y pollo, arveja verde con cáscara, haba verde o seca, hibias, nabos, cubios, rubas y bastante guiso hecho con cebolla de gajo, harina de maíz, condimentos y aceite vegetal.',
    category: 'plato-principal',
    imageUrl: 'https://www.cocina-colombiana.com/base/stock/Recipe/cocido-boyacense/cocido-boyacense_web.jpg'
  },
  {
    id: 2,
    name: 'Trucha Arcoíris',
    description: 'Trucha fresca criada en las aguas limpias de la región, preparada asada o sudada. Es parte importante de la economía local y se caracteriza por su sabor suave y delicado.',
    category: 'plato-principal',
    imageUrl: 'https://img.freepik.com/fotos-premium/trucha-arcoiris-plancha-limon-cebolla-plato-pescado-asado_75924-24695.jpg'
  },
  {
    id: 3,
    name: 'Nabos con Queso Gratinado',
    description: 'Plato tradicional que utiliza nabos, una planta local, mezclada con queso derretido. Los nabos son uno de los tubérculos ancestrales que han acompañado la dieta de las comunidades indígenas hasta hoy.',
    category: 'plato-principal',
    imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/b4/20/a4/nabos-con-queso.jpg'
  },
  {
    id: 4,
    name: 'Asaduras de Cordero',
    description: 'Las asaduras del cordero son muy apetecidas y tradicionales en Monguí, incluyendo la rellena. Se preparan con las vísceras del cordero en preparaciones ancestrales.',
    category: 'plato-principal',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUFFVG_tHxLmZ_g3JbJR7QXuBLl8sZq4wIQA&s'
  },

  // Sopas
  {
    id: 5,
    name: 'Mazamorra Chiquita',
    description: 'Sopa espesa con varios ingredientes como cereales, verduras y carnes: harina de maíz, arveja verde, habas, fríjol, hojas de col, carne de res, de cerdo, callo de res, papa criolla y papa de año.',
    category: 'sopa',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlKtAWH9mMP1f_3X4nvl2cLp5pETo3Nxrphw&s'
  },
  {
    id: 6,
    name: 'Cuchuco de Maíz, Trigo y Cebada',
    description: 'Sopa tradicional boyacense preparada con diferentes cereales según la variedad. Es un plato espeso y nutritivo, perfecto para el clima frío de Monguí.',
    category: 'sopa',
    imageUrl: 'https://www.pcrm.org/sites/default/files/cuchuco-cebada-perlada18.jpg'
  },
  {
    id: 7,
    name: 'Ajiaco Boyacense',
    description: 'Variante local del famoso ajiaco, preparado con ingredientes típicos de la región boyacense y adaptado a los productos locales de Monguí.',
    category: 'sopa',
    imageUrl: 'https://www.recetasnestle.com.co/sites/default/files/srh_recipes/f78cf6630b31638994b09b3b470b085c.jpg'
  },
  {
    id: 8,
    name: 'Sopa de Orellana',
    description: 'Sopa preparada con orellana, un hongo catalogado como producto alimenticio del futuro por sus propiedades nutritivas y proteínicas. Es un cultivo relativamente nuevo en la región.',
    category: 'sopa',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0cslvWynImjVjKS5RrEKwsrxfGjB2uI1vyQ&s'
  },

  // Panadería
  {
    id: 9,
    name: 'Pan de Agua',
    description: 'Pan tradicional de Monguí, elaborado de manera artesanal con técnicas ancestrales. Se caracteriza por su textura suave y sabor único.',
    category: 'panaderia',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JOp6IgBh9rV3RH1cZqKIRvmm1Zo9NDXsiA&s'
  },
  {
    id: 10,
    name: 'Pan de Leche',
    description: 'Variante del pan tradicional elaborado con leche fresca de la región, lo que le da una textura más suave y un sabor ligeramente dulce.',
    category: 'panaderia',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_EQdQzyk-F5CBkFQMelikA0pzm8Lv3a5xA&s'
  },
  {
    id: 11,
    name: 'Mogolla Campesina',
    description: 'Pan tradicional de Monguí, parte de la rica tradición panadera boyacense. Cada pueblo tiene su receta particular, y la mogolla campesina es la especialidad de Monguí.',
    category: 'panaderia',
    imageUrl: 'https://cdn1.totalcommerce.cloud/mercadozapatoca/product-image/es/mogolla-campesina-pequena-1.webp'
  },
  {
    id: 12,
    name: 'Amasijos de la Abuela',
    description: 'Bizcochuelos tradicionales, colaciones y almojábanas que forman parte de la repostería tradicional heredada de las abuelas de la región.',
    category: 'panaderia',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-Be-nexYXCUmpwpHZZJyvo8bo7g-ubideg&s'
  },

  // Postres
  {
    id: 13,
    name: 'Dulces de Papayuela',
    description: 'Dulce tradicional preparado con papayuela, una fruta local. La variedad de postres incluye también dulces de mora, fresa y curuba.',
    category: 'postre',
    imageUrl: 'https://img-global.cpcdn.com/recipes/ce74504b0d441444/680x781cq80/dulce-de-papayuela-foto-principal.jpg'
  },
  {
    id: 14,
    name: 'Postres de Orellana',
    description: 'Innovadores postres preparados con orellana, el hongo que se ha convertido en un producto gourmet de la región por sus propiedades nutritivas.',
    category: 'postre',
    imageUrl: 'https://img-global.cpcdn.com/recipes/555e2b22b7fc6439/680x781cq80/pastelitos-de-nuez-foto-principal.jpg'
  },
  {
    id: 15,
    name: 'Queso con Melao',
    description: 'Postre tradicional que combina queso fresco local con melao de panela, creando un contraste perfecto entre lo salado y lo dulce.',
    category: 'postre',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzm_MQ0JYsLMSdfxbmJ3PFx60b_sOje8eQBg&s'
  },

  // Bebidas
  {
    id: 16,
    name: 'Chicha de Maíz',
    description: 'Bebida tradicional fermentada preparada con maíz, muy popular en toda la región boyacense y acompañante perfecta de los platos típicos.',
    category: 'bebida',
    imageUrl: 'https://cdn.colombia.com/gastronomia/2011/08/03/chicha-1604.gif'
  },
  {
    id: 17,
    name: 'Masato de Maíz',
    description: 'Bebida refrescante preparada con maíz, ideal para acompañar las comidas típicas de la región.',
    category: 'bebida',
    imageUrl: 'https://www.elespectador.com/resizer/yav1aqVV3F9QarjP4U-TJyqmaDU=/arc-anglerfish-arc2-prod-elespectador/public/SD4DBIJKLJBYFMHO6V4WTNVBOY.png'
  }
];

export const gastronomiaNotes = {
  introduction: "La gastronomía de Monguí es un rico patrimonio culinario que combina tradiciones indígenas muiscas con influencias coloniales españolas. La base de la cocina mongüense son los productos de la agricultura local como la papa, la yuca, las habas, las hojas de col y diversos cereales que se producen en la región.",
  heritage: "Monguí ha heredado sus sabores culinarios de los antepasados indígenas. Aunque con la llegada de los españoles hubo mezclas de recetas, la fuerza de lo tradicional se impuso y la cocina de esta zona de Boyacá ha permanecido intacta con el paso de los años.",
  quality: "Los visitantes disfrutan de comida típica de calidad, ya que existe un desarrollo agropecuario muy cualificado del que se resaltan productos como las carnes de carnero, los quesos, las génovas y una gran variedad de verduras típicas de la región cundiboyacense.",
  innovation: "En la actualidad se ha fortalecido el cultivo de orellana, un hongo catalogado como producto alimenticio para el futuro que ha causado interés por sus propiedades alimenticias y proteínicas, del cual existen varios cultivos formando unidades productivas."
};

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
    imageUrl: origenes_indigenas
  },
  {
    id: 2,
    title: 'Llegada de los franciscanos',
    description: 'Los monjes franciscanos llegaron para evangelizar a las poblaciones indígenas. Se congregaron para facilitar su conversión al catolicismo y el acceso a la fuerza laboral.',
    year: '1550',
    imageUrl: llegada
  },
  {
    id: 3,
    title: 'Fundación Oficial',
    description: 'Se fundó oficialmente el pueblo de Monguí, estableciéndose como asentamiento colonial.',
    year: '1601',
    imageUrl: fundacion
  },
  {
    id: 4,
    title: 'Construcción del Puente Calicanto',
    description: 'El emblemático puente se construyó con piedra, cal y, según la leyenda, sangre de toro. Se construyó para transportar materiales para la basílica.',
    year: 'siglo XVII',
    imageUrl: construccion
  },
  {
    id: 5,
    title: 'Construcción de la Basilica',
    description: 'La Basílica de Nuestra Señora de Monguí fue construida por los franciscanos, convirtiéndose en la pieza central del pueblo.',
    year: '1694-1760',
    imageUrl: basilica
  },
  {
    id: 6,
    title: 'Declaración de Monumento Nacional',
    description: 'La Basílica de Nuestra Señora de Monguí fue declarada Monumento Nacional de Colombia, reconociendo su importancia histórica y arquitectónica.',
    year: '1975',
    imageUrl: declaracion
  },
  {
    id: 7,
    title: 'Designación de ciudad patrimonial',
    description: 'Monguí fue designado como uno de los Pueblos Patrimonio de Colombia, en reconocimiento a su arquitectura colonial bien conservada y su importancia cultural.',
    year: 'Reciente',
    imageUrl: designacion
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
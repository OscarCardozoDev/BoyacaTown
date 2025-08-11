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

export const attractions: Attraction[] = [
  {
    id: 1,
    name: 'Basilica of Our Lady of Monguí',
    description: 'Built between 1694 and 1760 by Franciscans, this gorgeous colonial church dominates the main plaza and was declared a National Monument of Colombia in 1975. Its architecture represents one of the finest examples of colonial religious buildings in Colombia.',
    imageUrl: 'basilica.jfif'
  },
  {
    id: 2,
    name: 'Calicanto Bridge',
    description: 'Built in the 17th century, this historic stone and lime bridge is a symbol of colonial engineering and connects the town with the Franciscan convent. Legend has it that it was constructed using a mixture that included bull\'s blood.',
    imageUrl: 'puente.jfif'
  },
  {
    id: 3,
    name: 'Football Museum (Museo del Balón)',
    description: 'Learn about Monguí\'s unique tradition of handcrafting footballs at this museum located on the main plaza. The town supplies approximately 25% of Colombia\'s national demand for footballs.',
    imageUrl: '/football-museum.jpg'
  },
  {
    id: 4,
    name: 'Páramo de Ocetá',
    description: 'Widely regarded as one of the most beautiful páramos (high-altitude Andean ecosystems) in Colombia, this natural wonder offers breathtaking hiking opportunities and stunning views. Colombia is home to 40% of the world\'s páramos.',
    imageUrl: '/paramo.jpg'
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
    title: 'Indigenous Origins',
    description: 'Before the arrival of the Spanish, the area was inhabited by the Muisca people, one of Colombia\'s most developed indigenous civilizations. The name "Monguí" comes from the indigenous Muisca language and translates as "The Wife\'s Bath."',
    year: 'Pre-1550'
  },
  {
    id: 2,
    title: 'Arrival of the Franciscans',
    description: 'Franciscan monks arrived to evangelize the indigenous populations. The indigenous people were gathered to facilitate their conversion to Catholicism and access to their workforce.',
    year: '1550'
  },
  {
    id: 3,
    title: 'Official Foundation',
    description: 'The town of Monguí was officially founded, establishing it as a colonial settlement.',
    year: '1601'
  },
  {
    id: 4,
    title: 'Construction of the Calicanto Bridge',
    description: 'The iconic bridge was built using stone, lime, and according to legend, bull\'s blood. It was constructed to transport materials for the basilica.',
    year: '17th century'
  },
  {
    id: 5,
    title: 'Basilica Construction',
    description: 'The Basilica of Our Lady of Monguí was built by the Franciscans, becoming the centerpiece of the town.',
    year: '1694-1760'
  },
  {
    id: 6,
    title: 'National Monument Declaration',
    description: 'The Basilica of Our Lady of Monguí was declared a National Monument of Colombia, recognizing its historical and architectural significance.',
    year: '1975'
  },
  {
    id: 7,
    title: 'Heritage Town Designation',
    description: 'Monguí was designated as one of Colombia\'s Heritage Towns (Pueblos Patrimonio), acknowledging its well-preserved colonial architecture and cultural significance.',
    year: 'Recent'
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
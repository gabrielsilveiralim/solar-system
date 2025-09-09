export interface Exp {
  id: number;
  name: string;
  date: number;
  description: string;
  image: string;
  category: 'Satélites' | 'Tripuladas' | 'Sondas' | 'Telescópio';
}

export const infoExp: Exp[] = [
  {
    id: 1,
    name: 'Sputnik 1',
    date: 1957,
    description: 'Primeiro satélite artificial da terra',
    image: '/image/sputnik.png',
    category: 'Satélites',
  },
  {
    id: 2,
    name: 'Apollo 11',
    date: 1969,
    description: 'Primeira ação à lua',
    image: '/image/apollo11.jpg',
    category: 'Tripuladas',
  },
  {
    id: 3,
    name: 'Voyager 1 & 2',
    date: 1977,
    description: 'Exploração dos planetas exteriores',
    image: '/image/voyager.png',
    category: 'Sondas',
  },
  {
    id: 4,
    name: 'Hubble Space Telescope',
    date: 1990,
    description: 'Observações profundas do universo',
    image: '/image/hubble.jpg',
    category: 'Telescópio',
  },
  {
    id: 5,
    name: 'Perseverance Mars',
    date: 2021,
    description: 'Rover explorando Marte em busca de vida',
    image: '/image/mars.jpg',
    category: 'Sondas',
  },
];

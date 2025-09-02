import { Planet } from "../SolarSystem/planetTypes";

const planetsData: Planet[] = [
  {
    id: '1',
    name: 'Mercurio',
    diameter: 4879,
    distance_from_sun: 57.9,
    orbital_period: 88,
    texturePath: '/textures/mercurio.jpg',
  },
  {
    id: '2',
    name: 'Venus',
    diameter: 12104,
    distance_from_sun: 108.2,
    orbital_period: 225,
    texturePath: '/textures/venus.jpg',
  },
  {
    id: '3',
    name: 'Terra',
    diameter: 12742,
    distance_from_sun: 149.6,
    orbital_period: 310,
    texturePath: '/textures/earthTerra.jpg',
  },
  {
    id: '4',
    name: 'Marte',
    diameter: 6779,
    distance_from_sun: 220,
    orbital_period: 400,
    texturePath: '/textures/marte.jpg',
  },
  {
    id: '5',
    name: 'Netuno',
    diameter: 6779,
    distance_from_sun: 180,
    orbital_period: 687,
    texturePath: '/textures/netuno.jpg',
  },
  {
    id: '6',
    name: 'Jupiter',
    diameter: 6779,
    distance_from_sun: 250,
    orbital_period: 687,
    texturePath: '/textures/jupiter.jpg',
  },
  {
    id: '7',
    name: 'Sol',
    texturePath: '/textures/sunmap.jpg',
    diameter: 0,
    distance_from_sun: 0,
    orbital_period: 0
  },
  // ... continue com Júpiter, Netuno etc
];

export default planetsData;

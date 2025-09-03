import { Planet } from "../SolarSystem/planetTypes";

const planetsData: Planet[] = [
  {
    id: '1',
    name: 'Mercurio',
    diameter: 4879,
    distance_from_sun: 57.9,
    orbital_period: 88,
    luas: 0,
    texturePath: '/textures/mercurio.jpg',
  },
  {
    id: '2',
    name: 'Venus',
    diameter: 12104,
    distance_from_sun: 108.2,
    orbital_period: 225,
    luas: 0,
    texturePath: '/textures/venus.jpg',
  },
  {
    id: '3',
    name: 'Terra',
    diameter: 12742,
    distance_from_sun: 149.6,
    orbital_period: 365,
    luas: 1,
    texturePath: '/textures/earthTerra.jpg',
  },
  {
    id: '4',
    name: 'Marte',
    diameter: 6779,
    distance_from_sun: 228,
    orbital_period: 687,
    luas: 2,
    texturePath: '/textures/marte.jpg',
  },
  {
    id: '5',
    name: 'Netuno',
    diameter: 6779,
    distance_from_sun: 300,
    orbital_period: 687,
    luas: 16,
    texturePath: '/textures/netuno.jpg',
  },
  {
    id: '6',
    name: 'Jupiter',
    diameter: 6779,
    distance_from_sun: 250,
    orbital_period: 4333,
    luas: 95,
    texturePath: '/textures/jupiter.jpg',
  },
  {
    id: '7',
    name: 'Saturno',
    texturePath: '/textures/saturn.jpg',
    diameter: 120,
    distance_from_sun: 180,
    luas: 146,
    orbital_period: 10759
  },
  {
    id: '8',
    name: 'Urano',
    texturePath: '/textures/uranus.jpg',
    diameter: 0,
    distance_from_sun: 0,
    luas:0,
    orbital_period: 0
  },
  {
    id: '9',
    name: 'Sol',
    texturePath: '/textures/sunmap.jpg',
    diameter: 0,
    distance_from_sun: 0,
    luas:0,
    orbital_period: 0
  },


];

export default planetsData;

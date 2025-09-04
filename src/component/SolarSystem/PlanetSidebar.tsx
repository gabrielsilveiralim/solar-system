import { Planet } from '../SolarSystem/planetTypes';

interface PlanetSidebarProps {
  planets: Planet[];
  onSelectPlanet: (planet: Planet) => void;
}

export default function PlanetSidebar({ planets, onSelectPlanet }: PlanetSidebarProps) {
  return (
    <div className='relative flex flex-col justify-center -top-120  bg-gray-950 p-3 rounded-lg text-blue-100 w-48 sm:-top-145 sm:ml-24 md:ml-36  md:w-56 md:-top-180 '>
      <h3 className='mb-2.5 ml-6 text-xl' >Planetas</h3>
      {planets.map((planet) => (
        <div
          key={planet.id}
          onClick={() => onSelectPlanet(planet)}
          className='flex items-center  p-1 mb-1.5 cursor-pointer border-b-2 border-slate-900 hover:bg-blue-950 hover:text-white rounded-lg' >
          <img src={planet.texturePath} alt={planet.name}
            style={{
              height: '24px',
              width: '24px',
              borderRadius: '50%',
              marginRight: '10px',
              objectFit: 'cover', }} />
          <span>{planet.name}</span>
        </div>
      ))}
    </div>
  );
}

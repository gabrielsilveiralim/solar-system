import { Planet } from '../SolarSystem/planetTypes';

interface PlanetModalProps {
  planet?: Planet; // opcional
  onClose: () => void;
}

export default function PlanetModal({ planet, onClose }: PlanetModalProps) {
  if (!planet) return null;

  return (
    <div className='absolute top-3/6 left-1/2 h-auto w-80 transform -translate-1/2 bg-linear-to-t from-blue-950  to-black to-60% text-blue-100 p-5 rounded-xl  z-10'>
      <h2 className='mt-2 mb-3 text-2xl'>{planet.name}</h2>
      <p className=''>{planet.about}</p>

      <div className='grid grid-cols-2 mt-3 mb-3 gap-4 '>
        <p className='bg-blue-950 rounded-md p-2 '>Diâmetro: <br /> <span className='text-sm'>{planet.diameter} km </span></p>
        <p className='bg-blue-950 rounded-md p-2'>Distância do Sol: <span className='text-sm'> {planet.distance_from_sun} milhões km</span></p>
        <p className='bg-blue-950 rounded-md p-2 '>Período orbital: <span className='text-sm'>{planet.orbital_period} dias</span></p>
        <p className='bg-blue-950 rounded-md p-2 '>Luas: <span className='text-sm'>{planet.luas}</span></p>
      </div>
        <p className='bg-gradient-to-r from-red-900 from-4% to-blue-950 to-20% rounded-md p-2 flex flex-col'>Temperatura: <span className='text-sm pl-2 mt-1'>Máx {planet.temp} °C</span></p>

      <button onClick={onClose} className='mt-3 py-2 px-3.5 bg-slate-900 text-blue-100 cursor-pointer' >
        Fechar
      </button>
    </div>
  );
}

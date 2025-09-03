'use client';
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import SolarSystem from '../SolarSystem/SolarSystem';
import planetsData from '../SolarSystem/planetsData';
import { Planet } from '../SolarSystem/planetTypes';
import PlanetSidebar from './PlanetSidebar';
import PlanetModal from './PlanetModal';

export default function PlanetsPages() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);

  return (
    <>
    
    <div className='relative h-[700px] sm:h-[900px] md:h-[1200px]'>
      <h1 className='flex justify-center text-blue-100 mt-90 -mb-40 text-2xl  sm:text-4xl sm:mt-[450px]'>Sistema Planetário</h1>
      <Canvas
        camera={{ position: [0, 20, 20], fov: 60 }}
        className='md:pl-80 ' >
        <SolarSystem
          planets={planetsData}
          onPlanetClick={setSelectedPlanet}
          animationSpeed={1} />
      </Canvas>

 
      <PlanetSidebar
        planets={planetsData}
        onSelectPlanet={(planet: Planet) => setSelectedPlanet(planet)}/>

     
      {selectedPlanet && (
        <PlanetModal
          planet={selectedPlanet}
          onClose={() => setSelectedPlanet(null)} />
      )}
    </div>
  </>
  );
}

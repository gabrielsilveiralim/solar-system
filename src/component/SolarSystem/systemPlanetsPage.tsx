'use client';
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import SolarSystem from '../SolarSystem/SolarSystem';
import planetsData from '../SolarSystem/planetsData';
import { Planet } from '../SolarSystem/planetTypes';


export default function PlanetsPages() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);

  return (
    <div style={{ position: 'relative',  height: '100vh', marginTop:'250px' }}>
      <Canvas camera={{ position: [0, 20, 20], fov: 60 }}
        style={{ width: '100%', height: '70%' }}      >
        <SolarSystem
          planets={planetsData}
          onPlanetClick={setSelectedPlanet}
          animationSpeed={1}
        />
      </Canvas>

      {/* Aqui você pode adicionar PlanetSidebar e PlanetModal conforme sua UI */}
    </div>
  );
}

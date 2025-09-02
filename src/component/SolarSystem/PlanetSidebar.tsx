import React from 'react';
import { Planet } from '../SolarSystem/planetTypes';

interface PlanetSidebarProps {
  planets: Planet[];
  onSelectPlanet: (planet: Planet) => void;
}

export default function PlanetSidebar({ planets, onSelectPlanet }: PlanetSidebarProps) {
  return (
    <div style={{
      position: 'absolute',
      top: 300,
      left: 20,
      background: 'rgba(0, 0, 0, 0.7)',
      padding: '12px',
      borderRadius: '8px',
      color: 'white',
      width: '200px',
    }}>
      <h3 style={{ marginBottom: '10px' }}>Planetas</h3>
      {planets.map((planet) => (
        <div
          key={planet.id}
          onClick={() => onSelectPlanet(planet)}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '5px',
            marginBottom: '6px',
            cursor: 'pointer',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div style={{
            width: 16,
            height: 16,
            borderRadius: '50%',
    
            marginRight: 10,
          }} />
          <span>{planet.name}</span>
        </div>
      ))}
    </div>
  );
}

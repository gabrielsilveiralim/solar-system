import React from 'react';
import { Planet } from '../SolarSystem/planetTypes';


interface PlanetModalProps {
  planet: Planet;
  onClose: () => void;
}

export default function PlanetModal({ planet, onClose }: PlanetModalProps) {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'white',
      color: 'black',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 0 10px rgba(0,0,0,0.3)',
      zIndex: 10,
    }}>
      <h2>{planet.name}</h2>
      <p><strong>Diâmetro:</strong> {planet.diameter} km</p>
      <p><strong>Distância do Sol:</strong> {planet.distance_from_sun} milhões km</p>
      <p><strong>Período orbital:</strong> {planet.orbital_period} dias</p>
      

      <button onClick={onClose} style={{
        marginTop: 12,
        padding: '8px 14px',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#333',
        color: 'white',
        cursor: 'pointer',
      }}>
        Fechar
      </button>
    </div>
  );
}

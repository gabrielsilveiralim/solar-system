'use client';
import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Ring } from '@react-three/drei';
import * as THREE from 'three';
import { Planet } from './planetTypes';

interface SolarSystemProps {
  planets: Planet[];
  onPlanetClick: (planet: Planet) => void;
  animationSpeed?: number;
}

export default function SolarSystem({
  planets,
  onPlanetClick,
  animationSpeed = 1,
}: SolarSystemProps) {
  const sunRef = useRef<THREE.Mesh>(null);
  const sunTexture = useLoader(THREE.TextureLoader, '/textures/sunmap.jpg');

  return (
    <>
      {/* Luz que vem do Sol */}
      <ambientLight intensity={1} />
      <pointLight position={[0, 0, 0]} intensity={2} />

      {/* Sol com textura e brilho */}
      <mesh ref={sunRef}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshStandardMaterial
          map={sunTexture}
       
          emissiveIntensity={1}
        />
      </mesh>

      {/* Planetas com órbitas */}
      {planets.map((planet) => (
        <PlanetWithOrbit
          key={planet.id}
          planet={planet}
          animationSpeed={animationSpeed}
          onClick={onPlanetClick}
        />
      ))}

      {/* Controles: permitir rotação, desativar zoom e pan */}
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

function PlanetWithOrbit({
  planet,
  animationSpeed,
  onClick,
}: {
  planet: Planet;
  animationSpeed: number;
  onClick: (planet: Planet) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, planet.texturePath);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const time = clock.getElapsedTime() * animationSpeed;
    const distance = planet.distance_from_sun / 30;
    const speed = 1 / (planet.orbital_period / 365.25);

    meshRef.current.position.x = Math.cos(time * speed) * distance;
    meshRef.current.position.z = Math.sin(time * speed) * distance;
    meshRef.current.rotation.y += 0.01;
  });

  const size = Math.max(0.2, Math.min(2, planet.diameter / 50000));
  const distance = planet.distance_from_sun / 30;

  return (
    <group>
      {/* Órbita como um anel global */}
      <Ring
        args={[distance - 0.02, distance + 0.02, 128]}
        rotation-x={-Math.PI / 2}
      >
        <meshBasicMaterial color="white" opacity={0.3} transparent side={THREE.DoubleSide} />
      </Ring>

      {/* Planeta texturizado */}
      <mesh
        ref={meshRef}
        onClick={() => onClick(planet)}
        onPointerOver={() => (document.body.style.cursor = 'pointer')}
        onPointerOut={() => (document.body.style.cursor = 'default')}
        scale={[size, size, size]}
      >
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  );
}

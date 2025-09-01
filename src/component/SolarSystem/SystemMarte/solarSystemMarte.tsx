'use client';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

function Marte() {
  const texture = useLoader(THREE.TextureLoader, '/textures/Marte.jpg');

  return (
    <mesh>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
    
  );
}

export default function MarteComponent() {
  return (
    <Canvas>
   
        <ambientLight intensity={0.8} />
        <spotLight position={[0, 0, 0]} intensity={0.5} />
        <OrbitControls autoRotate enableZoom={true} />
        <Marte />
     
    </Canvas>
  );
}

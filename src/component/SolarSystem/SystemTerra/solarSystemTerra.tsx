'use client';
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Earth() {
  const texture = useLoader(THREE.TextureLoader, '/textures/earthTerra.jpg');

  return (
    <mesh rotation={[0, Math.PI * 0.3, 0]}>
      <sphereGeometry args={[6, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function EarthComponent() {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <Suspense>
      
      <ambientLight intensity={0.8} />
      <spotLight position={[10, 10, 10]} intensity={1} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
    
      <Earth />

      </Suspense>
    </Canvas>
  );
}
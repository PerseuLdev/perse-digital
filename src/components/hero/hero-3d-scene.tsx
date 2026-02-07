'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Box, Environment, Stars } from '@react-three/drei';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

function FloatingSphere({ position, size, color, speed = 1, distort = 0.3 }: {
  position: [number, number, number];
  size: number;
  color: string;
  speed?: number;
  distort?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          roughness={0.1}
          metalness={0.8}
          distort={distort}
          speed={2}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </Float>
  );
}

function FloatingRing({ position, size, color }: {
  position: [number, number, number];
  size: number;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[size, size * 0.1, 32, 64]} />
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.9}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

function GlowingOrb({ position, color }: {
  position: [number, number, number];
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={2} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <pointLight position={position} color={color} intensity={2} distance={3} />
    </Float>
  );
}

function Scene() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const primaryColor = isDark ? '#6366f1' : '#4f46e5';
  const accentColor = isDark ? '#38bdf8' : '#0ea5e9';

  return (
    <>
      {/* Ambient and directional lights */}
      <ambientLight intensity={isDark ? 0.3 : 0.5} />
      <directionalLight position={[10, 10, 5]} intensity={isDark ? 0.5 : 1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.2} color={accentColor} />

      {/* Main floating spheres - moved further back */}
      <FloatingSphere position={[-4, 1.5, -5]} size={1.5} color={primaryColor} speed={0.8} distort={0.4} />
      <FloatingSphere position={[4, -1, -6]} size={1} color={accentColor} speed={1.2} distort={0.3} />
      <FloatingSphere position={[0, 2.5, -7]} size={0.8} color={primaryColor} speed={1} distort={0.5} />

      {/* Floating rings - moved further back */}
      <FloatingRing position={[-3, -2, -5]} size={1.2} color={accentColor} />
      <FloatingRing position={[3, 2, -6]} size={0.8} color={primaryColor} />

      {/* Glowing orbs - moved further back */}
      <GlowingOrb position={[-2, 1, -3]} color={primaryColor} />
      <GlowingOrb position={[2, -1, -4]} color={accentColor} />
      <GlowingOrb position={[0, -1.5, -2]} color={primaryColor} />

      {/* Stars in background */}
      {isDark && <Stars radius={100} depth={50} count={1000} factor={4} fade speed={1} />}

      {/* Environment for reflections */}
      <Environment preset={isDark ? 'night' : 'city'} />
    </>
  );
}

export function Hero3DScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 2]}
        style={{ 
          background: 'transparent',
          width: '100%',
          height: '100%'
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

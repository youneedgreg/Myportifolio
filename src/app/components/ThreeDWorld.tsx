"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

// Animated Sphere that reacts to scroll
function MovingSphere(props: JSX.IntrinsicElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(clock.elapsedTime) * 1.5;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} {...props}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="blue" wireframe />
    </mesh>
  );
}

// 3D Scene Component
export default function ThreeDWorld() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY * 0.005);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(({ camera }) => {
    camera.position.y = scrollY;
  });

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1, width: "100vw", height: "100vh" }}
      shadows
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      <Stars radius={100} depth={50} count={5000} factor={4} />
      <MovingSphere position={[0, 0, -5]} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

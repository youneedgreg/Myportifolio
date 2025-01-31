"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "./Model";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 50 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />

      {/* 3D Model */}
      <Model scale={1} position={[0, -1, 0]} />

      {/* Controls */}
      <OrbitControls enableZoom={true} />

      {/* Environment */}
      <Environment preset="city" />
    </Canvas>
  );
}

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

export default function Model(props: any) {
  const { scene } = useGLTF("/3d_clipart_webdev.glb");
  const modelRef = useRef<Group>(null);

  useFrame(({ pointer }) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = pointer.x * Math.PI; // Rotate on Y-axis
      modelRef.current.rotation.x = -pointer.y * Math.PI * 0.2; // Slight tilt on X-axis
    }
  });

  return <primitive ref={modelRef} object={scene} {...props} />;
}

// Preload model for performance
useGLTF.preload("/3d_clipart_webdev.glb");

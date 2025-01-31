"use client";

import Scene from "@/components/Scene";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-black text-white">
      {/* 3D Typewriter Scene */}
      <Scene />

      {/* Text Overlay */}
      <div className="absolute top-1/4 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">
          <Typewriter
            words={[
              "Hi, I'm [Your Name]",
              "I'm a Software Engineer",
              "I Build Creative & Scalable Solutions",
              "Welcome to My 3D Portfolio!",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <h1 className="text-2xl md:text-3xl font-bold">
          <Typewriter
            words={[
              "Hi, I'm [Your Name]",
              "I'm a Software Engineer",
              "I Build Creative & Scalable Solutions",
              "Welcome to My 3D Portfolio!",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      </div>
    </div>
  );
}

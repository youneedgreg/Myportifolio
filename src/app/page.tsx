"use client";

import { useTheme } from "../app/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main 
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage: "url('/anonymous-8291223_1920.png')",
        backgroundColor: isDark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Dark mode toggle and status */}
      <div className="absolute top-4 right-4 flex items-center space-x-2 z-10">
        <button
          onClick={toggleTheme}
          className="w-14 h-14 border rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.div
                key="moon"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute"
              >
                <Moon size={24} className="text-blue-400" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute"
              >
                <Sun size={24} className="text-yellow-500" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        <p className="text-sm">
          Dark Mode is <span className="font-semibold">{isDark ? "On" : "Off"}</span>
        </p>
      </div>

      {/* Main content */}
      <h1 className="text-3xl font-bold mt-20 transition-colors duration-500">
            Hey there! I'm Gregory. 
        <br ></br>You favourite software engineer.
      </h1>

      {/* Typewriter effect */}
      <div className="mt-8 text-center text-lg font-semibold">
        <Typewriter
          words={['I am a Software Engineer', 'and I create amazing apps', 'and more words!']}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
    </main>
  );
}
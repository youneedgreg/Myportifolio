"use client";

import { useTheme } from "../app/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main className="flex flex-col items-center justify-center min-h-screen transition-colors duration-500">
      <button
        onClick={toggleTheme}
        className="relative w-14 h-14 border rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden"
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

      <h1 className="text-3xl font-bold mt-4 transition-colors duration-500">
        Welcome to My Portfolio
      </h1>
      <p className="mt-2">
        Dark Mode is <span className="font-semibold">{isDark ? "On" : "Off"}</span>
      </p>
    </main>
  );
}

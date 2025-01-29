"use client";

import { useTheme } from "../app/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen transition-colors duration-500">
      {/* Dark mode toggle and status */}
      <div className="absolute top-4 right-4 flex items-center space-x-2">
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
        Welcome to My Portfolio
      </h1>
    </main>
  );
}

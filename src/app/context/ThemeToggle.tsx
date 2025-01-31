"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ toggleTheme, isDarkMode }: { toggleTheme: () => void, isDarkMode: boolean }) {
  return (
    <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
      <AnimatePresence mode="wait">
        {isDarkMode ? (
          <motion.div
            key="moon"
            initial={{ y: -10, opacity: 0, rotate: 180 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 10, opacity: 0, rotate: -180 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Moon size={24} className="text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: 10, opacity: 0, rotate: -180 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -10, opacity: 0, rotate: 180 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Sun size={24} className="text-yellow-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

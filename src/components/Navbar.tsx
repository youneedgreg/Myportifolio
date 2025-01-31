"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Link href="/" className="text-white text-2xl font-bold tracking-wider">
            My<span className="text-blue-500">Portfolio</span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {["Home", "Projects", "About", "Contact"].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-white text-lg hover:text-blue-400 transition-all duration-200"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-black/70 backdrop-blur-lg flex flex-col items-center p-4 space-y-4 md:hidden"
        >
          {["Home", "Projects", "About", "Contact"].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-white text-lg hover:text-blue-400 transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </header>
  );
}

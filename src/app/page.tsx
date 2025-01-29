"use client";

import { useTheme } from "../app/context/Themecontext";
import { Moon, Sun } from "lucide-react"; // Install Lucide for icons

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={toggleTheme}
        className="p-2 border rounded-lg bg-gray-200 dark:bg-gray-700"
      >
        {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
      </button>
      <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
      <p>Dark Mode is {theme === "light" ? "Off" : "On"}</p>
    </main>
  );
}

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage OR system preference on initial load
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      // Added aria-label for screen readers
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      // focus-visible improves keyboard navigation styling
      className="relative flex h-8 w-16 items-center rounded-full bg-gray-300 p-1 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-gray-700"
    >
      {/* Decorative Icons */}
      <Sun className="z-10 h-4 w-4 text-yellow-500 transition-opacity duration-300 ml-1" />
      <Moon className="z-10 h-4 w-4 text-slate-200 transition-opacity duration-300 ml-auto mr-1" />

      {/* Sliding Knob */}
      <div
        className={`absolute h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
      />
    </button>
  );
}
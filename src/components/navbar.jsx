// src/components/Navbar.jsx
import React from "react";
import { useTheme } from "../context/themecontext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 dark:bg-gray-900 text-white shadow-md">
      <h1 className="text-xl font-bold">My React App</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="bg-white dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded transition"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

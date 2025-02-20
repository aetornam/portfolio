"use client"
import React, { useEffect, useState } from "react";
import { Darkmode, Lightmode } from "../icons";

export const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-1"
    >
      {darkMode ? (
        <Darkmode />
      ) : (
        <Lightmode />
      )}
    </button>
  );
};


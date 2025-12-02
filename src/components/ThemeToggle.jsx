import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("theme");
      if (stored === "dark" || stored === "muted") {
        setTheme(stored);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const nextTheme = theme === "dark" ? "muted" : "dark";

  return (
    <button
      type="button"
      className="inline-flex h-10 items-center justify-center gap-1 rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 text-xs font-medium text-slate-100 hover:border-accent focus-ring"
      aria-label="Toggle color theme"
      onClick={() => setTheme(nextTheme)}
    >
      <span
        aria-hidden="true"
        className="text-base leading-none"
      >
        {theme === "dark" ? "🌙" : "🌤️"}
      </span>
      <span className="hidden sm:inline">
        {theme === "dark" ? "Dark" : "Muted"}
      </span>
    </button>
  );
};

export default ThemeToggle;




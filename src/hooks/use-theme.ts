import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";
const STORAGE_KEY = "portfolio-theme";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: Theme = stored ?? (prefersDark ? "dark" : "light");
    setThemeState(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleTheme = useCallback(
    () => setTheme(document.documentElement.classList.contains("dark") ? "light" : "dark"),
    [setTheme],
  );

  return { theme, toggleTheme };
}

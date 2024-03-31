import { useEffect, useState } from "react";

function useTheme(): ["dark" | "light", () => void] {
  const [themeVal, setThemeVal] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      document.documentElement.classList.add("dark");
      setThemeVal("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setThemeVal("light");
    }
  }, []);

  const setTheme = () => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setThemeVal("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setThemeVal("dark");
    }
  };

  return [themeVal, setTheme];
}

export default useTheme;

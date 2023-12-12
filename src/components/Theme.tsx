"use client";
import { useEffect } from "react";
import cookiePermission from "@/utils/cookiePermission";

function Theme() {
  useEffect(() => {
    if (cookiePermission()) {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  return <></>;
}

export default Theme;

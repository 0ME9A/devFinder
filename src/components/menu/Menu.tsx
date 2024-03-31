"use client";
import { MdOutlineLightMode } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import useTheme from "@/hooks/useTheme";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  const [theme, setTheme] = useTheme()

  return (
    <nav className="w-full flex items-center justify-between p-1">
      <h1>
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={"/logos/logo48.png"}
            alt={""}
            width={16}
            height={16}
            quality={100}
          />
          devFinder
        </Link>
      </h1>
      <button
        type="button"
        title="Switch theme"
        onClick={setTheme}
        className="flex items-center justify-center gap-2 px-2 py-1 border-transparent border-2 hover:border-black dark:hover:border-white rounded-full"
      >
        <span className="text-xs">{theme === "dark" ? "Light" : "Dark"}</span>
        {theme === "dark" ? <MdOutlineLightMode /> : <FiMoon />}
      </button>
    </nav>
  );
};
export default Menu;

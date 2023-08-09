import { MdOutlineLightMode } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { useState } from "react";

const Menu = ({ setThemes }) => {
  const [theme, setTheme] = useState("Light");

  const handletheme = () => {
    if (theme === "Dark") {
      setTheme("Light");
      setThemes("Light");
    } else {
      setTheme("Dark");
      setThemes("Dark");
    }
  };

  return (
    <div className="menu column">
      <h1 className={`title ${theme}-txt`}>devfinder</h1>
      <button className="theme" title="button" onClick={() => handletheme()}>
        <span className={`${theme}-txt`}>{theme}</span>
        {theme === "Dark" ? (
          <FiMoon className={`${theme}-txt`} />
        ) : (
          <MdOutlineLightMode className={`${theme}-txt`} />
        )}
      </button>
    </div>
  );
};
export default Menu;

import cookiePermission from "./cookiePermission";

const theme = () => {
  if (cookiePermission()) {
    if (localStorage.theme === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      return false;
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      return true;
    }
  } else {
    const classList = document.documentElement.classList.value.split(" ");
    if (classList.includes("dark")) {
      document.documentElement.classList.remove("dark");
      return false;
    } else {
      document.documentElement.classList.add("dark");
      return true;
    }
  }
};

export { theme };

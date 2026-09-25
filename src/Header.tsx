import { useContext } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../src/App";

// type HeaderProps = {
//   handleToggleTheme: (value: "dark" | "light") => void;
// };

function Header() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("AppLayout must be inside ThemeContext.Provider");
  }

  const { theme, toggleTheme } = themeContext;

  function handleClick() {
    if (theme === "light") {
      toggleTheme("dark");
    }
    else{
      toggleTheme("light");
    }
  }
  return (
    <header className="h-34 w-full flex justify-between gap-3 pt-8 header-bg px-4 items-start">
      <Link to="/">
        <img src="/desktop/logo.svg" alt="" className="w-full h-8"/>
      </Link>
      <div className="flex items-center gap-2">
        <img src="/desktop/icon-sun.svg" alt="" />

        <button
          onClick={handleClick}
          className={`w-12 h-6 rounded-full bg-white flex items-center p-1 ${
            theme === "light" ? "justify-start" : "justify-end"
          }`}
        >
          <span className="w-3.5 h-3.5 rounded-full bg-blue"></span>
        </button>
        <img src="/desktop/icon-moon.svg" alt="" />
      </div>
    </header>
  );
}

export default Header;

import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./AppLayout";

type Theme = "dark" | "light" | null;

type ThemeContextType = {
  theme: Theme;
  toggleTheme: (value: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

function App() {
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);

  useEffect(() => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const isDark = theme === "dark" || (theme === null && systemPrefersDark);

    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light",
    );
  }, [theme]);

  function handleToggleTheme(value: "dark" | "light" | null) {
    setTheme(value);
  }

  return (
    <BrowserRouter>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme: handleToggleTheme,
        }}
      >
        <Routes>
          <Route index element={<AppLayout />} />
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;

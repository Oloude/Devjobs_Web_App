import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);

 useEffect(() => {
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const isDark =
    theme === "dark" ||
    (theme === null && systemPrefersDark);

  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "dark" : "light"
  );
}, [theme]);

  return <div>App</div>;
}

export default App;

import { useEffect, useState } from "react";
import { Sun, Moon } from "@phosphor-icons/react"; // Import Phosphor icons
import { Button } from "../components/ui/Buttons";

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Button variant="pur_border" onClick={toggleTheme}>
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </Button>
  );
}

export default ThemeToggle;

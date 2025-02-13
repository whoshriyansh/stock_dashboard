import { useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    document.documentElement.setAttribute("data-theme", e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-base-100 text-base-content">
      <select
        className="select select-primary text-sm"
        value={theme}
        onChange={handleThemeChange}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="cupcake">Cupcake</option>
        <option value="bumblebee">Bumblebee</option>
        <option value="emerald">Emerald</option>
        <option value="corporate">Corporate</option>
        <option value="synthwave">Synthwave</option>
        <option value="retro">Retro</option>
        <option value="cyberpunk">Cyberpunk</option>
        <option value="valentine">Valentine</option>
      </select>
    </div>
  );
}

export default ThemeToggle;

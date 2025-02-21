/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-theme="dark"]'], // Enable dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        card: "rgb(var(--card))",
        "primary-text": "rgb(var(--primary-text))",
        "secondary-text": "rgb(var(--secondary-text))",
        "primary-purple": "rgb(var(--primary-purple))",
        "primary-yellow": "rgb(var(--primary-yellow))",
        "primary-red": "rgb(var(--primary-red))",
        "primary-green": "rgb(var(--primary-green))",
      },
      borderWidth: {
        1: "0.2px",
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};

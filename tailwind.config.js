/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f8ff",
          100: "#eaf1ff",
          200: "#d5e3ff",
          300: "#b3cbff",
          400: "#86a8ff",
          500: "#5a7fff",
          600: "#3a56f5",
          700: "#2a3fd1",
          800: "#2636a8",
          900: "#253585",
          950: "#172052",
        },
        secondary: {
          50: "#fff5f0",
          100: "#ffede3",
          200: "#ffd7c0",
          300: "#ffb78e",
          400: "#ff8c4d",
          500: "#ff6a1f",
          600: "#f04c06",
          700: "#c73a07",
          800: "#9f300e",
          900: "#822c10",
          950: "#461305",
        },
        chuck: {
          red: "#e63946",
          blue: "#457b9d",
          light: "#f1faee",
          dark: "#1d3557",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto-slab)"],
        mono: ["var(--font-roboto-mono)"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./app/**/*.{js,ts, jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#333333",
        "light-gray": "#F5F5F5",
        "ai-cyan": "#00b4d8",
        "ai-cyan-hover": "#0094b8", // darker shade for hover
        "ai-cyan-dark-hover": "#00d4f8", // lighter shade for hover in dark mode
        "ai-pink": "#f72585",
        prim: "#023E8A",
        sec: "#0077B6",
        blackPrim: "#111827",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};

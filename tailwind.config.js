/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./app/**/*.{js,ts, jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prim: "#023E8A",
        sec: "#0077B6",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};

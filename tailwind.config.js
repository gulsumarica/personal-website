/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        limeGreen: "#CBF281",
      },
    },
  },
  safelist: ["bg-[#d0f38d]", "text-[#CBF281]"],
  plugins: [],
};

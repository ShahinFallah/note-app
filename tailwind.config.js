/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100":"#2E8B57",
        "primary-200":"#61bc84",
        "primary-300":"#c6ffe6",
        "accent-100":"#8FBC8F",
        "accent-200":"#345e37",
        "text-100":"#FFFFFF",
        "text-200":"#e0e0e0",
        "bg-100":"#1E1E1E",
        "bg-200":"#2d2d2d",
        "bg-300":"#454545"
      }
    },
  },
  plugins: [],
}

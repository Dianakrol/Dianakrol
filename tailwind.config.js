/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // También puedes probar con 'Poppins' o 'Merriweather'
      },
    },
  },
  plugins: [],
}


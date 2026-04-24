/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: '#1a3c2e',
        gold: '#c9a84c',
        cream: '#f5f0e8',
      }
    },
  },
  plugins: [],
}

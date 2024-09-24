/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        layout: "#F8F9FF",
        primaryGreen:'#009379',
        secondaryGreen:'#E5F4F2',
        textPrimary:'#2D2D2D'
      },
      container: {
        center: true
      }
    },
  },
  plugins: [],
}
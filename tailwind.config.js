/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        dmsans: ['"DM Sans"', 'sans-serif']
      },
      boxShadow: {
        '3xl': '0 8px 32px 0px rgba(0, 0, 0, 0.37)',
      }
    }
  },
  plugins: [],
}
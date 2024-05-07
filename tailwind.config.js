/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        grace: ['Covered By Your Grace', 'cursive'],
        manrope: ['Manrope', 'sans-serif'],
        switzer: ['Switzer', 'sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

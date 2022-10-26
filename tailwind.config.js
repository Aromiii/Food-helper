/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // added new 4 column grid as new4
        'recipe3': 'repeat(auto-fit, minmax(300px, 500px))',
        'recipe2': 'repeat(auto-fit, minmax(300px, 400px) )'
      }
    },
  },
  plugins: [],
  mode: 'jit',
}
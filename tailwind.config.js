/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'recipe3': 'repeat(auto-fit, minmax(300px, 500px))',
        'recipe2': 'repeat(auto-fit, minmax(300px, 400px))',
        'addNew2col': 'repeat(auto-fit, minmax(200px, 25vw))'
      },
    },
  },
  plugins: [],
  mode: 'jit',
}
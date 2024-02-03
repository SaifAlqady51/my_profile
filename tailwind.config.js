/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'] ,
  theme: {
    extend: {
      fontFamily:{
        "V":["VT323"],
        'press-start': ['"Press Start 2P"', 'cursive'],

      }
    },
  },
  plugins: [],
}


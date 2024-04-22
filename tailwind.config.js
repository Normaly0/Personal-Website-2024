/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'orange': '#FFB685',
      'background': '#FFFBF2',
      'ash': '#1C1C1C'
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      raleway: ['Raleway', 'serif'],
    },
  },
  plugins: [],
}
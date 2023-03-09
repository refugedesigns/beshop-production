/** @type {import('tailwindcss').Config} */
const defaultFonts = require('tailwindcss/defaultTheme');

module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  important: '#__next',
  theme: {
    extend: {
      fontFamily: {
        body: ['lato', ...defaultFonts.fontFamily.sans],
        styling: ['Mrs Saint Delafield', ],
        elegant: ['Tenor Sans', 'Monospace']
      }
    },
  },
  plugins: [],
};

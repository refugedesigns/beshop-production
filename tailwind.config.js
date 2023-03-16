/** @type {import('tailwindcss').Config} */
const defaultFonts = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

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
  important: "#__next",
  theme: {
    screens: {
      'xxs': '0px',
      'xs': '300px',
      'xss': '540px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      "ml": '900px',
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      fontFamily: {
        body: ["lato", ...defaultFonts.fontFamily.sans],
        styling: ["Mrs Saint Delafield"],
        elegant: ["Tenor Sans", "Monospace"],
        icon: ['icomoon']
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      "style-color": "#d05278",
      black: "#000000",
      gray: colors.gray,
      slate: colors.slate,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      amber: colors.amber,
      teal: colors.teal,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      rose: colors.rose,
      fuchsia: colors.fuchsia,
      emerald: colors.emerald,
    },
  },
  plugins: [],
};

const { transform } = require("typescript");

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'text': '#ffffff',
      'bg': '#282a36',
      'primary': '#bd93f9',
      'primary-transparent': '#bd93f99c',
      'correct': '#18ddaf',
      'correct-transparent': '#18ddaf80',
      'wrong': '#f758a0'
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      keyframes: {
        pop_up: {
          '0%': { transform: 'scale(0)' },
          '60%': { transform: 'scale(1.1)' },
          '80%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' }
        }
      },
      animation: {
        pop_up: 'pop_up 0.2s ease-in-out',
      }
    },
  },
  plugins: [],
}
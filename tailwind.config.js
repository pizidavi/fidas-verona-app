const colors = require('./colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      fontSize: {
        '4xl': ['2.25rem', { lineHeight: '2.755rem' }],
        '5xl': ['3rem', { lineHeight: '3.7rem' }],
        '6xl': ['3.75rem', { lineHeight: '4.8rem' }],
      },
    },
  },
  plugins: [],
};

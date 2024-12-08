/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    './app.{js,jsx,ts,tsx}',
    './components/screens/*.jsx',
    './components/layout/*.jsx',
    './components/common/*.jsx',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#16f6ec',
        secondary: '#F59E0B',
      },
    },
  },
  plugins: [],
};

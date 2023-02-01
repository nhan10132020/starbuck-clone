/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    boxShadow:{
      'header-shadow':'0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.06), 0 0 2px rgba(0, 0, 0, 0.07)',
      'button-shadow': '0 0 6px rgba(0,0,0,0.24), 0 8px 12px rgba(0,0,0,0.14)',
      'loginl-shadow': ' 0 1px 1px rgba(0, 0, 0, 0.24), 0 4px 4px rgba(0, 0, 0, 0.12)',
      'form-shadow':'0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 4px 5px 0 rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.07)'
    },
    extend: {
      
    },
    screens: {
      'md': { 'max': "1024px" },
      'sm': { 'max': "768px" },
      'sx': { 'max': "425px" },
      'ssx': { 'max': "375px" },
    },
  },
  plugins: [],
}
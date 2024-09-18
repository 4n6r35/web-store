/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollbar: {
        hide: 'none',
      },
      colors: {
        primary: {
          '50': '#eef4ff',
          '100': '#d9e5ff',
          '200': '#bcd2ff',
          '300': '#8eb6ff',
          '400': '#598fff',
          '500': '#245bff',
          '600': '#1b43f5',
          '700': '#1430e1',
          '800': '#1728b6',
          '900': '#19288f',
          '950': '#141a57',
        }
      }
    },
  },
  plugins: [],
}
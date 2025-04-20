/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      'desktop1': '1120px',
      'desktop2': '740px',
      'desktop3': '560px',
      'desktop4': '420px',
    },
  },
  plugins: [ require('tailwind-scrollbar-hide')],
};

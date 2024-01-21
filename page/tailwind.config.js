const azul = {
  '50': '#f1f1fe',
  '100': '#e2e2fc',
  '200': '#bfc2f8',
  '300': '#8790f2',
  '400': '#4756e9',
  '500': '#1f30d8',
  '600': '#111bb8',
  '700': '#0f1595',
  '800': '#11167b',
  '900': '#131667',
  '950': '#040415',
};


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur:{
        azul
      },
      colors:{
        azul
      },
      borderColor:{
        azul
      },
      textColor:{
        azul
      }
    },
  },
  plugins: [],
}
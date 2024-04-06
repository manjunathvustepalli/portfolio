/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'type': 'type 3s steps(30)',
        'flow': 'flow 1s ease-in-out infinite',
      },
      keyframes: {
        type: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        flow: { 
          '0%': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'currentColor' },
          '100%': { 'border-color': 'transparent' },
        },
      },
    },
  },
  plugins: [],
};

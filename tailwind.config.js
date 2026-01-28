/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0A0A0F',
          800: '#13131F',
          700: '#1C1C2E',
        },
        brand: {
          blue: '#3B82F6',
          cyan: '#06B6D4',
          glow: '#6366f1',
        }
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
          light: '#dbeafe',
        },
        secondary: {
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
          light: '#eff6ff',
        },
        accent: {
          DEFAULT: '#0284c7',
          dark: '#0369a1',
          light: '#e0f2fe',
        },
        background: {
          DEFAULT: '#FFFFFF',
          dark: '#F8F9FA',
          light: '#FFFFFF',
        },
        text: {
          primary: '#1e293b',
          secondary: '#475569',
          light: '#94a3b8',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 
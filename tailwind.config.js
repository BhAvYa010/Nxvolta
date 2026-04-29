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
          DEFAULT: '#10b981', // Emerald-500
          dark: '#059669',    // Emerald-600
          light: '#34d399',   // Emerald-400
        },
        secondary: {
          DEFAULT: '#3b82f6', // Blue-500
          dark: '#2563eb',    // Blue-600
          light: '#60a5fa',   // Blue-400
        },
        accent: {
          DEFAULT: '#0ea5e9', // Sky-500
          dark: '#0284c7',    // Sky-600
          light: '#38bdf8',   // Sky-400
        },
        dark: {
          DEFAULT: '#0f172a', // Slate-900
          soft: '#1e293b',    // Slate-800
          lighter: '#334155', // Slate-700
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

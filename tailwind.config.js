/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003ec7',
        'primary-dark': '#0032a0',
        'primary-light': '#0052ff',
        surface: '#f7f9fb',
        'surface-container-low': '#f0f2f5',
        'surface-container-lowest': '#ffffff',
        'surface-container-highest': '#e8eaf0',
        'on-surface': '#191c1e',
        'on-surface-variant': '#44474f',
        tertiary: '#952200',
        'outline-variant': 'rgba(195,197,217,0.20)',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.02em',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #003ec7, #0052ff)',
      },
      boxShadow: {
        'lift': '0 8px 32px rgba(25,28,30,0.06)',
        'card': '0 4px 64px rgba(25,28,30,0.04)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'full': '9999px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f9fb',
          100: '#dcf0f5',
          200: '#bce2ec',
          300: '#8dccdf',
          400: '#56adb1',
          500: '#0e87a1', // Main brand color
          600: '#0a6a85',
          700: '#0d566b',
          800: '#114758',
          900: '#123c4a',
          950: '#062732',
        },
        accent: {
          500: '#f59e0b',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'premium': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
        'premium-hover': '0 20px 60px -15px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}

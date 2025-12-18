/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(245, 158, 11, 0.3)',
        'glow': '0 0 20px rgba(245, 158, 11, 0.4)',
        'glow-lg': '0 0 30px rgba(245, 158, 11, 0.5)',
        'glow-xl': '0 0 40px rgba(245, 158, 11, 0.6)',
        'inner-glow': 'inset 0 0 20px rgba(245, 158, 11, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-amber': 'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
        'gradient': 'gradient-shift 8s ease infinite',
        'slide-up': 'slide-up 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.4), 0 0 40px rgba(245, 158, 11, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(245, 158, 11, 0.6), 0 0 60px rgba(245, 158, 11, 0.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

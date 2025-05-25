/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...existing config
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideDown: 'slideDown 0.8s ease-out',
        slideUp: 'slideUp 0.8s ease-out',
        scaleX: 'scaleX 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleX: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
}
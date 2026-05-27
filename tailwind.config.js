/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#386FA8',
          dark: '#2A5280',
          light: '#E8F0F9',
          text: '#444A52',
          muted: '#7A8290',
          'light-text': '#A8B0BC',
        },
      },
      boxShadow: {
        sm: '0 2px 8px rgba(0, 0, 0, 0.08)',
        md: '0 4px 12px rgba(0, 0, 0, 0.1)',
        lg: '0 12px 24px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        luxury: '16px',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

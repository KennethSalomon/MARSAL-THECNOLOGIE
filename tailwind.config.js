/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Marsal Brand Colors
        'brand': {
          'primary': '#386FA8',      // Primary Accent Blue
          'dark': '#2A5280',         // Accent Dark
          'light': '#E8F0F9',        // Accent Light
          'text': '#444A52',         // Dark Slate Grey
          'muted': '#7A8290',        // Text Muted
          'light-text': '#A8B0BC',   // Text Light
        },
        'bg': {
          'light': '#EEF1F5',
          'white': '#FFFFFF',
        },
        'border': '#C2C8D4',
      },
      boxShadow: {
        'sm': '0 1px 4px rgba(56,111,168,.06)',
        'md': '0 4px 20px rgba(56,111,168,.1)',
        'lg': '0 12px 48px rgba(56,111,168,.14)',
      },
      borderRadius: {
        'luxury': '16px',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

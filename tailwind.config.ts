import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0a0a0a",
        "cyan-marsal": "#00e5ff",
        "magenta-marsal": "#d400ff",
        "silver-marsal": "#c0c0d0",
      },
      fontFamily: {
        exo: ["var(--font-exo)", "sans-serif"],
        "mono-tech": ["var(--font-mono-tech)", "monospace"],
      },
      animation: {
        "marquee-slow": "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        }
      },
    },
  },
  plugins: [],
};
export default config;
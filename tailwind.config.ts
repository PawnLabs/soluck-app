import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide-left": "slide-left var(--animation-duration) linear infinite",
      },
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50%))" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "black-main": "#0F0F0F",
        black: "#1D1D1D",
        "yellow-main": "#CEF305",
        "white-gray": "#909293",
        "black-4": "#272727",
        blackish: "#111111",
      },
    },
  },
  plugins: [],
};
export default config;

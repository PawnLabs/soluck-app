import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(176.83deg, #CEF305 2.49%, #96B005 97.26%)",
      },
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
        "yellow-grayish": "#96B005",
        "yellow-darkish": "#475111",
        "white-gray": "#909293",
        "black-4": "#272727",
        blackish: "#111111",
      },
    },
  },
  plugins: [],
};
export default config;

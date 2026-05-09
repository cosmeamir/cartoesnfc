import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        techBlue: "#2D7DFF",
        premiumBlack: "#0A0A12"
      },
      boxShadow: {
        glow: "0 0 40px rgba(45,125,255,0.3)"
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)"
      }
    }
  },
  plugins: []
} satisfies Config;

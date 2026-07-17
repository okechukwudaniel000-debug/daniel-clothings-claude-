import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        gold: {
          DEFAULT: "var(--gold)",
          light: "var(--gold-light)",
        },
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        display: ["Sora", "sans-serif"],
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-700px 0" },
          "100%": { backgroundPosition: "700px 0" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        spinSlower: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        floatUp: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.5", filter: "blur(40px)" },
          "50%": { opacity: "0.9", filter: "blur(60px)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.6s infinite linear",
        "spin-slow": "spinSlow 60s linear infinite",
        "spin-slower": "spinSlower 90s linear infinite",
        floatUp: "floatUp 6s ease-in-out infinite",
        glowPulse: "glowPulse 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

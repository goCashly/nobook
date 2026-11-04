import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef2fb",
          100: "#d6dff3",
          600: "#1f3a7a",
          700: "#172d61",
          800: "#0f1f47",
          900: "#0a1533",
          950: "#060d21",
        },
        gold: {
          300: "#f6d77a",
          400: "#f0c24b",
          500: "#e2a91e",
          600: "#c08912",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(10, 21, 51, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17231e",
        paper: "#f7f8f4",
        lime: "#c5f467",
        muted: "#6d7771",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(23, 35, 30, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;

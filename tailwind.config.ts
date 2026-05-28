import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-bg)",
        foreground: "var(--color-fg)",
        accent: "var(--color-accent-primary)",
      },
      fontFamily: {
        sans: ["var(--font-zh)", "var(--font-en)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

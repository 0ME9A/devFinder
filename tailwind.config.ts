import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blue: {
          50: `hsl(220, 100%, 95%)`,
          100: `hsl(220, 100%, 90%)`,
          200: `hsl(220, 100%, 85%)`,
          300: `hsl(220, 100%, 80%)`,
          400: `hsl(220, 100%, 70%)`,
          500: `hsl(220, 100%, 50%)`,
          600: `hsl(220, 100%, 40%)`,
          700: `hsl(220, 100%, 35%)`,
          800: `hsl(220, 100%, 25%)`,
          900: `hsl(220, 100%, 10%)`,
          950: `hsl(220, 100%, 5%)`,
        },
        navy: {
          50: `hsl(220, 41%, 95%)`,
          100: `hsl(220, 41%, 85%)`,
          200: `hsl(220, 41%, 80%)`,
          300: `hsl(220, 41%, 70%)`,
          400: `hsl(220, 41%, 60%)`,
          500: `hsl(220, 41%, 50%)`,
          600: `hsl(220, 41%, 35%)`,
          700: `hsl(220, 41%, 20%)`,
          800: `hsl(220, 41%, 15%)`,
          900: `hsl(220, 41%, 10%)`,
          950: `hsl(220, 41%, 5%)`,
        },
      },
    },
  },
  plugins: [],
};
export default config;

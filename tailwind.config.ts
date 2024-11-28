import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--foreground)",
        primary: "var(--color-primary)",
        discard: "var(--color-discard)",
        secondary: "var(--color-secondary)",
        headlines: "var(--color-headlines)",
        subtitle: "var(--color-subtitle)",
        navItem: "var(--color-nav-item)",
        navActive: "var(--color-primary)",
        error: "var(--color-error)",
      },
      fontFamily: {
        helveticaNeue: ["var(--font-helvetica-neue)"],
      },
    },
  },
  plugins: [],
} satisfies Config;

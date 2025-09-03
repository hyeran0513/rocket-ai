import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        muted: "var(--muted)",
        saju: {
          red: "var(--saju-red)",
          blue: "var(--saju-blue)",
          black: "var(--saju-black)",
        },
        gradient: {
          black: "var(--gradient-black)",
          cream: "var(--gradient-cream)",
        },
        border: {
          strong: "var(--border-strong)",
          light: "var(--border-light)",
          "light-alt": "var(--border-light-alt)",
        },
        table: {
          bg: "var(--table-bg)",
          border: "var(--table-border)",
          accent: "var(--table-accent)",
        },
      },
      boxShadow: {
        saju: "0 4px 4px 0 rgba(0,0,0,0.25)",
      },
      keyframes: {
        shimmer: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, theme }) {
      addUtilities({
        ".bubble-text": {
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "150%",
          letterSpacing: "-2.5%",
        },
        ".chapter-text": {
          fontWeight: "700",
          fontSize: "20px",
          lineHeight: "100%",
          letterSpacing: "-0.5%",
        },
        ".table-text": {
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "100%",
          letterSpacing: "0%",
        },
        ".table-sub-text": {
          fontWeight: "700",
          fontSize: "20px",
          lineHeight: "100%",
          letterSpacing: "0%",
        },
      });
    }),
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        ".animate-shimmer": {
          animation: "shimmer 2s infinite",
        },
      });
    }),
  ],
};

export default config;

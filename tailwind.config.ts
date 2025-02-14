import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      outfit: "var(--font-outfit)",
      urbanist: "var(--font-urbanist)",
    },
    extend: {
      backgroundImage: {
        hero: "url('../public/background.svg')",
        cta: "url('../public/cta.webp')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        generalColors: {
          primary: "#2E68FD",
          secondary: "#932EFA",
          dark: "#01081B",
          white: "#FFFFFF",
          paragrah: "#4D525F",
        },
        badge: {
          success: "#37C390",
        },
        success: {
          20: "#E5FCF2",
          100: "#08A965",
        },
        darkShades: {
          20: "#F6F6F6",
          60: "#B1B2B2",
          90: "#4C4C4D",
        },
        primaryShades: {
          10: "#F3F7FF",
          20: "#ECF0FB",
        },
        warning: {
          20: "#FBF6EF",
          100: "#D77E1B",
        },
        danger: {
          20: "#FEEDED",
          100: "#FC4343",
        },
        tertiary: {
          20: "#EEF9FE",
          100: "#3B7793",
        },
        secondaryShades: {
          10: "#F4EDFC",
        },
        border: {
          10: "#CFD0D1",
          50: "#CBCBCB",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

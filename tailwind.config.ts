import type { Config } from "tailwindcss";

/**
 * All custom design tokens (colors, fonts, shadows) live here per the brief.
 * Palette + type sampled from the Artisan Kiln macets.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // editorial / vintage ceramic palette
        cream: "#F4ECDB",
        parchment: "#EFE4CC",
        ink: "#2A2620",
        kiln: {
          terracotta: "#C36B4E",
          clay: "#9E4528",
          mustard: "#D8A24A",
          ocean: "#4B6E8A",
          navy: "#39536B",
          sage: "#8A9A6B",
          fern: "#5E7350",
        },
        line: "#2A2620",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "4px 4px 0 0 #2A2620",
        "card-sm": "2px 2px 0 0 #2A2620",
      },
      keyframes: {
        pop: {
          "0%": { transform: "scale(0.85)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        pop: "pop 160ms ease-out",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

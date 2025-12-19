import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        surface: {
          DEFAULT: "hsl(222 47% 6%)",
          elevated: "hsl(222 47% 8%)",
        },
        content: {
          DEFAULT: "hsl(210 40% 98%)",
          muted: "hsl(215 20% 55%)",
          inverse: "hsl(222 47% 6%)",
        },
        brand: {
          DEFAULT: "hsl(173 80% 50%)",
          hover: "hsl(173 80% 40%)",
        },
        neutral: {
          DEFAULT: "hsl(222 47% 12%)",
          subtle: "hsl(222 47% 14%)",
        },
        danger: "hsl(0 84% 60%)",
        border: "hsl(222 30% 18%)",
        input: "hsl(222 30% 18%)",
        ring: "hsl(173 80% 50%)",
      },
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        heading: ["Outfit", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        "primary-soft": "var(--primary-soft)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        success: "var(--success)",
        warning: "var(--warning)",
        danger: "var(--danger)",
        info: "var(--info)",
        hero: {
          surface: "var(--hero-surface)",
          glow: "var(--hero-glow)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-surface)",
        },
        code: {
          surface: "var(--code-surface)",
        },
        table: {
          header: "var(--table-header)",
          hover: "var(--table-row-hover)",
        },
        spotlight: {
          border: "var(--spotlight-border)",
        },
        chart: {
          grid: "var(--chart-grid)",
        },
      },
      borderRadius: {
        lg: "var(--radius-md)",
        xl: "var(--radius-lg)",
        "2xl": "var(--radius-xl)",
        "3xl": "var(--radius-2xl)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        "elev-1": "var(--shadow-sm)",
        "elev-2": "var(--shadow-md)",
        "elev-3": "var(--shadow-lg)",
        "glow-blue": "var(--shadow-glow-blue)",
        "glow-emerald": "var(--shadow-glow-emerald)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        "display-xl": "var(--text-display-xl)",
        "display-lg": "var(--text-display-lg)",
        "display-md": "var(--text-display-md)",
        "title-lg": "var(--text-title-lg)",
        "title-md": "var(--text-title-md)",
        "body-lg": "var(--text-body-lg)",
        "body-md": "var(--text-body-md)",
        "body-sm": "var(--text-body-sm)",
        caption: "var(--text-caption)",
        "mono-sm": "var(--text-mono-sm)",
      },
    },
  },
  plugins: [],
};

export default config;

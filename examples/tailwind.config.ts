import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
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
        "success-foreground": "var(--success-foreground)",
        warning: "var(--warning)",
        "warning-foreground": "var(--warning-foreground)",
        danger: "var(--danger)",
        "danger-foreground": "var(--danger-foreground)",
        info: "var(--info)",
        "info-foreground": "var(--info-foreground)",
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
        sm: "var(--radius-xs)",
        md: "var(--radius-sm)",
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
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
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
      transitionDuration: {
        fast: "var(--motion-fast)",
        base: "var(--motion-base)",
        slow: "var(--motion-slow)",
        hero: "var(--motion-hero)",
      },
      transitionTimingFunction: {
        standard: "var(--ease-standard)",
        out: "var(--ease-out)",
        move: "var(--ease-move)",
        drawer: "var(--ease-drawer)",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
            filter: "blur(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
        "spotlight-pulse": {
          "0%, 100%": {
            opacity: "0.7",
          },
          "50%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-up": "fade-up var(--motion-slow) var(--ease-standard)",
        "spotlight-pulse": "spotlight-pulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [animate],
};

export default config;

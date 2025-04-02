import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(265, 89%, 60%)", // Rich purple
          foreground: "hsl(0, 0%, 100%)",
          50: "hsl(265, 89%, 95%)",
          100: "hsl(265, 89%, 90%)",
          200: "hsl(265, 89%, 80%)",
          300: "hsl(265, 89%, 70%)",
          400: "hsl(265, 89%, 65%)",
          500: "hsl(265, 89%, 60%)",
          600: "hsl(265, 89%, 50%)",
          700: "hsl(265, 89%, 40%)",
          800: "hsl(265, 89%, 30%)",
          900: "hsl(265, 89%, 20%)",
        },
        secondary: {
          DEFAULT: "hsl(220, 70%, 50%)", // Complementary blue
          foreground: "hsl(0, 0%, 100%)",
        },
        accent: {
          DEFAULT: "hsl(335, 78%, 60%)", // Accent pink
          foreground: "hsl(0, 0%, 100%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(220, 15%, 96%)",
          foreground: "hsl(220, 15%, 40%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(220, 15%, 20%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(220, 15%, 20%)",
        },
        sidebar: {
          DEFAULT: "hsl(265, 30%, 98%)",
          foreground: "hsl(265, 30%, 25%)",
          border: "hsl(265, 30%, 90%)",
          accent: "hsl(265, 30%, 94%)",
          "accent-foreground": "hsl(265, 30%, 25%)",
          ring: "hsl(265, 89%, 60%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config


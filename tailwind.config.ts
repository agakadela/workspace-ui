import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#171412",
          800: "#302c28",
          600: "#625b53",
        },
        paper: {
          50: "#fbfaf7",
          100: "#f2efe8",
        },
        moss: {
          700: "#4a6247",
          100: "#e6eddf",
        },
        clay: {
          600: "#9a5f45",
          100: "#f1e4dc",
        },
        steel: {
          700: "#41586b",
          100: "#e2eaf0",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        panel: "0 18px 50px rgb(48 44 40 / 0.10)",
      },
    },
  },
  plugins: [],
} satisfies Config;

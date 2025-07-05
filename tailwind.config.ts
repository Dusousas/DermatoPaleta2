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
        // Paleta1
        P1BlueD: "#2c4156",
        P1BlueM: "#39586d",
        P1BlueL: "#7f99b2",
        P1GrayD: "#98a1aa",
        P1GrayM: "#d2d7db",
        P1GrayL: "#f7f7f7",

        // Paleta2
        P2BYellow: "#C99B35",
        P2BlueD: "#2D405E",
        P2BlueL: "#B9C7D0",
        P2Brown: "#B14D29",
        P2Gray: "#DADAD6",

      },
    },
  },
  plugins: [],
} satisfies Config;

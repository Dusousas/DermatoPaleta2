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

        // Paleta2
        P2BYellow: "#C99B35",
        P2BlueD: "#2D405E",
        P2BlueL: "#B9C7D0",
        P2Brown: "#B14D29",
        P2Gray: "#DADAD6",
        P1BlueD: "#2c4156",
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Enables class-based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'polka-dots': 'radial-gradient(circle, #000 10%, transparent 10%)',
      },
      colors: {
        light: {
          background: "#ffffff",
          text: "#1f2937", 
          button: "#3b82f6", 
          buttonHover: "#2563eb", 
        },
        dark: {
          background: "#1f2937",
          text: "#ffffff",
          button: "#3b82f6", 
          buttonHover: "#2563eb",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

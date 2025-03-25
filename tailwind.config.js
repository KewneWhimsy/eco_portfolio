/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx  }"],
  theme: {
    extend: {
      colors: {
        // Palette pour thème sombre global
        primary: "#1a1a1a",
        secondary: "#2a2a2a",
        accent: "#3a773a", // Couleur verte écologique
        text: "#e0e0e0",
        "text-muted": "#a0a0a0",
      },
    },
  },
  plugins: [],
};

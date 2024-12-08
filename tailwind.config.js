/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Abilita la modalità dark (usando la classe 'dark')
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // Usa solo Montserrat per tutto
        mono: ["Fira Code", "monospace"],
      },
      spacing: {
        18: "4.5rem", // Aggiunta di uno spacing personalizzato
      },
      borderRadius: {
        xl: "1.25rem", // Aggiunta di un border-radius extra-large
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)", // Ombra personalizzata
      },
      fontWeight: {
        extraBold: '800', // Aggiunta di un font-weight extra-bold per i titoli
      },
      fontSize: {
        '5xl': '3rem', // Imposta la grandezza di default per h1
        '4xl': '2.25rem', // Imposta la grandezza di default per h2
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Per il supporto tipografico avanzato
    require("@tailwindcss/forms"), // Per stilizzare i form
    require("@tailwindcss/aspect-ratio"), // Per supportare proporzioni personalizzate
  ],
};

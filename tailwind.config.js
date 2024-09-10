/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "nuxt.config.ts"
  ],
  theme: {
    extend: {
      colors: {
        main: "#161616",
        second: "#f5f5f5",
        accent: "#d67129"
      },
      boxShadow: {
        'glow-sm': '0px 0px 24px 0px rgba(0,0,0,0.5)',
        'glow-md': '0px 0px 70px 0px rgba(0,0,0,0.5)',
        'glow-lg': '0px 0px 100px 0px rgba(0,0,0,0.5)',
        'glow-xl': '0px 0px 200px 0px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}


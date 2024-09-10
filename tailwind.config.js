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
    },
  },
  plugins: [],
}


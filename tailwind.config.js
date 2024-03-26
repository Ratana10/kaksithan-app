/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#6FAB37",
        "Secondary": "#2AABEE",
      },
      backgroundImage: {
        "hero": "url('/img/bg-hero.jpg')"
      }
    },
  },
  plugins: [],
}


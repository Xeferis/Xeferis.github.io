// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    "~/assets/css/custom/cursor.css",
    "~/assets/css/custom/main.css"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Xeferis Portfolio',
      titleTemplate: '%s - Xeferis Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#ffffff'},
        { hid: 'description', name: 'description', content: 'Xeferis Portfolio' },
      ],
      link: [
        { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-icon-57x57.png"},
        { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-icon-60x60.png"},
        { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-icon-72x72.png"},
        { rel: "apple-touch-icon", sizes: "76x76", href: "/apple-icon-76x76.png"},
        { rel: "apple-touch-icon", sizes: "114x114", href: "/apple-icon-114x114.png"},
        { rel: "apple-touch-icon", sizes: "120x120", href: "/apple-icon-120x120.png"},
        { rel: "apple-touch-icon", sizes: "144x144", href: "/apple-icon-144x144.png"},
        { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-icon-152x152.png"},
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon-180x180.png"},
        { rel: "icon", type:"image/png", sizes: "192x192", href: "/android-icon-192x192.png"},
        { rel: "icon", type:"image/png", sizes: "32x32", href: "/favicon-32x32.png"},
        { rel: "icon", type:"image/png", sizes: "96x96", href: "/favicon-96x96.png"},
        { rel: "icon", type:"image/png", sizes: "16x16", href: "/favicon-16x16.png"},
      ],
      htmlAttrs: {
        class: "w-full h-full box-border m-0 p-0"
      },
      bodyAttrs: {
        class: 'bg-main flex justify-center items-center h-screen w-screen'
      },
    },
  },
  modules: ['nuxt-aos'],
})
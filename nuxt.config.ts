// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '~/assets/css/main.scss'
  ],
  vite: { css: { preprocessorOptions: { scss: { additionalData: '@use "~/assets/css/media-queries-breakpoints.scss" as *;' } } } }
})

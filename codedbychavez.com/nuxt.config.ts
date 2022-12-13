// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vuestic/nuxt', '@nuxtjs/tailwindcss'],
  vuestic: {
    config: {
      // Config here
    }
  },
  css: [
    '~/assets/css/main.scss'
  ],
  vite: { css: { preprocessorOptions: { scss: { additionalData: '@use "~/assets/css/media-queries-breakpoints.scss" as *;' } } } }
})

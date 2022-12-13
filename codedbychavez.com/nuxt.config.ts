// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vuestic/nuxt'],
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

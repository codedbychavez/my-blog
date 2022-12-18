// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'codedbychavez | Learn CSS and HTML',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Learn CSS and HTML like never before while having fun along the way.' }
      ],
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '~/assets/css/main.scss'
  ],
  vite: { css: { preprocessorOptions: { scss: { additionalData: '@use "~/assets/css/media-queries-breakpoints.scss" as *;' } } } }
})

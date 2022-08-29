import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxt/content'
  ],
  css: [
    '@/assets/css/main.css',
  ],
  content: {
    highlight: {
      theme: 'github-dark',
      preload: [
        'python',
        'javascript',
        'docker'
      ]
    }
  }
})

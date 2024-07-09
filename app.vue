<template>

  <NuxtWelcome />  
</template>

<script setup lang="ts">
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
useSeoMeta({
  title: "My Amazing Site",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you about it",
  ogDescription: "This is my amazing site, let me tell you about it.",
  ogImage: "https://codedbychavez.netlify.app/og-image.png"
})
</script>


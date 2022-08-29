<script setup>
const route = useRoute();
const path = route.fullPath;
const { data } = await useAsyncData('article', () => queryContent(path).findOne())
definePageMeta({
  layout: 'article',
})
</script>

<template>
  <div>
    <ContentRenderer id="markdown" :value="data" />
  </div>
</template>


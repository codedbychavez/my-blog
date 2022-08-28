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
    <ArticleBanner 
      :title="data.title" 
      :description="data.description"
      :author="data.author"
      :githubProfileImage="data.githubProfileImage"
    />
    <div class="p-8 flex">
      <div class="mx-auto w-3/4">
        <ContentRenderer id="markdown" :value="data" />
      </div>
    </div>
  </div>
</template>


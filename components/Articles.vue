<script setup>
import ArticleCard from './ArticleCard.vue';
const { data } = useAsyncData('/', () => queryContent('/').only(['_id', 'title', 'description', '_path', 'date', 'author', 'githubProfileImage']).find())
</script>

<template>
  <section>
    <div class="text-left">
      <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 mt-4">Published Articles</h2>
      <p class="font-light text-gray-500 sm:text-xl pl-0 py-0 mt-0">Feel free to browse and read as much as you can
        about the topics below that sparks your interests.
        If you'd like to support my work click the button on the top right.
      </p>
    </div>
    <div class="grid gap-8 lg:grid-cols-2 mt-8">
      <ArticleCard v-for="article in data" :key="article._id" :title="article.title" :description="article.description"
        :path="article._path" :date="article.date" :author="article.author"
        :githubProfileImage="article.githubProfileImage" />
    </div>
  </section>
</template>
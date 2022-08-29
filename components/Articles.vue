<script setup>
import ArticleCard from './ArticleCard.vue';
const { data } = useAsyncData('/', () => queryContent('/articles/').only(['_id', 'title', 'description', '_path', 'date', 'author', 'githubProfileImage']).find())
</script>

<template>
  <section>
    <div class="text-left">
      <h2 class="text-3xl lg:text-4xl tracking-tight font-extrabold font-mono text-gray-700">Published Articles</h2>
    </div>
    <div class="grid gap-8 lg:grid-cols-2 mt-8">
      <ArticleCard v-for="article in data" :key="article._id" :title="article.title" :description="article.description"
        :path="article._path" :date="article.date" :author="article.author"
        :githubProfileImage="article.githubProfileImage" />
    </div>
  </section>
</template>
<script>
import ArticleIcon from './icons/ArticleIcon.vue';
export default {
    props: {
      title: String,
      description: String,
      path: String,
      date: String,
      author: String,
    },
    components: { ArticleIcon }
}
</script>

<template>
  <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
    <div class="flex justify-between items-center mb-5 text-gray-500">
      <span
        class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
        <ArticleIcon />
        <span class="ml-2">Article</span>
      </span>
      <span class="text-sm">{{ date }}</span>
    </div>
    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900"><NuxtLink :to="path">{{ title }}</NuxtLink></h2>
    <p class="mb-5 font-light text-gray-500">{{ description }}</p>
    <div class="flex justify-between items-center">
      <div class="flex items-center space-x-4">
        <img class="w-7 h-7 rounded-full"
          src="https://avatars.githubusercontent.com/u/74829200?v=4" :alt="author" />
        <span class="font-medium">
          {{ author }}
        </span>
      </div>
      <NuxtLink :to="path" class="inline-flex items-center font-medium text-primary-600 hover:underline">
        Read more
        <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </NuxtLink>
    </div>
  </article>
</template>
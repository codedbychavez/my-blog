<script>
import ArticleIcon from './icons/ArticleIcon.vue';
import ArrowNarrowRightIcon from './icons/ArrowNarrowRightIcon.vue';
export default {
    props: {
      title: String,
      description: String,
      path: String,
      date: String,
      author: String,
      githubProfileImage: String,
    },
    components: { ArticleIcon, ArrowNarrowRightIcon }
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
    <h2 class="mb-2 text-2xl font-bold tracking-tight text-blue-600 hover:underline"><a :href="path">{{ title }}</a></h2>
    <p class="mb-5 font-light text-gray-500">{{ description }}</p>
    <div class="flex justify-between items-center">
      <div class="flex items-center space-x-4">
        <img class="w-7 h-7 rounded-full"
          src="https://avatars.githubusercontent.com/u/74829200?v=4" :alt="author" />
        <span class="font-medium">
          {{ author }}
        </span>
      </div>
      <a :href="path" class="inline-flex items-center font-medium text-primary-600 hover:underline">
        Read more
        <ArrowNarrowRightIcon />
      </a>
    </div>
  </article>
</template>
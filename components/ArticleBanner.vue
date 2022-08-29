<script setup>
const route = useRoute();
const path = route.fullPath;
const { data } = await useAsyncData('/', () => queryContent(path).only(['_id', 'title', 'description', '_path', 'date', 'author', 'githubProfileImage']).findOne())
import ArrowNarrowLeftIcon from './icons/ArrowNarrowLeftIcon.vue';
</script>

<template>
    <div class="banner flex flex-col w-full px-4 lg:px-0">
      <h1 class="m-auto text-gray-700 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{{ data.title }}</h1>
      <h2 class="m-auto text-gray-500 md:text-xl lg:text-2xl lg:font-semibold mt-0">{{ data.description }}</h2>
    </div>
    <div class="flex">
    <div class="mt-8 mx-auto w-3/4">
      <div class="flex justify-between items-center flex-wrap">
        <a href="/" class="inline-flex items-center font-medium text-primary-600 hover:underline">
          <ArrowNarrowLeftIcon />
          <span class="ml-2">Back to Articles</span>
      </a>
        <div class="border w-max p-2 lg:p-4 rounded-full flex shadow">
          <img class="w-7 h-7 rounded-full"
            :src="data.githubProfileImage" />
           <div class="font-mono ml-2">By: {{ data.author }}</div>
        </div>
      </div>
      
      </div>
      </div>
</template>

<style>
.banner {
  height: 15rem;
  border-bottom: 2px dashed;
  @apply border-b-blue-100
}

</style>
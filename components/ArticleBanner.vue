<script setup>
const route = useRoute();
const path = route.fullPath;
const { data } = await useAsyncData("/", () =>
  queryContent(path)
    .only([
      "_id",
      "title",
      "description",
      "_path",
      "date",
      "author",
      "githubProfileImage",
    ])
    .findOne()
);
import ArrowNarrowLeftIcon from "./icons/ArrowNarrowLeftIcon.vue";
</script>

<template>
  <div class="banner py-8 flex flex-col text-white">
    <h1 class="text-center text-3xl md:text-4xl lg:text-5xl font-bold font-mono mb-4">
      {{ data.title }}
    </h1>

    <h2
      class="text-center text-gray-100 md:text-xl lg:text-2xl lg:font-semibold mt-0"
    >
      {{ data.description }}
    </h2>

    <div class="mt-8 mx-auto md:w-3/4">
      <div class="flex justify-between items-center flex-wrap gap-2">
        <a
          href="/"
          class="inline-flex items-center font-medium text-primary-600 hover:underline"
        >
          <ArrowNarrowLeftIcon />
          <span class="ml-2">Back to Articles</span>
        </a>
        <div class="border-2 border-green-500 w-max px-2 py-1 lg:p-4 rounded-full flex shadow">
          <img class="w-7 h-7 rounded-full" src="https://avatars.githubusercontent.com/u/74829200?v=4" />
          <div class="font-mono ml-2">By: {{ data.author }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.banner {
  min-height: 15rem;
  border-bottom: 2px dashed;
  @apply border-b-blue-50 bg-blue-500;
}
</style>

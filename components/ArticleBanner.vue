<script>
export default {
  props: {
    title: String,
    description: String,
    author: String,
    githubProfileImage: String,
  },
}
</script>

<template>
    <div class="banner flex flex-col w-full px-2">
      <h1 class="m-auto text-gray-700 text-2xl md:text-5xl font-bold mb-4">{{ title }}</h1>
      <h2 class="m-auto text-gray-500 text-sm md:text-2xl md:font-semibold mt-0">{{ description }}</h2>
    </div>
    <div class="flex px-8 mt-4">
      <div class="mx-auto w-3/4">
        <div class="border w-max p-4 rounded-full flex shadow">
          <img class="w-7 h-7 rounded-full"
            :src="githubProfileImage" />
           <div class="font-mono ml-2">{{ author }}</div>
        </div>
      </div>
    </div>
      <!-- <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business teams like yours</h2>
          <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      </div> -->
</template>

<style>
.banner {
  /* background-image: url('/images/blog_banner_cover.jpg'); */
  height: 15rem;
  border-bottom: 1px dashed;
  @apply border-b-gray-400
  /* background-size: cover; */
}

</style>
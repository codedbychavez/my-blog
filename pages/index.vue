<template>
  <h1>My Blog Posts</h1>
  <p>{{ data }}</p>
</template>

<script setup>

const query = groq`*[_type == "post"]`

const sanity = useSanity()

const { data } = await useAsyncData('articles', () => sanity.fetch(query))

// console.log(data)

</script>

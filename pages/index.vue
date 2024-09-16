<template>
  <h1>My Blog Posts</h1>
  <!-- {{ data }} -->
  <div class="post" v-for="post in data || []" :key="post._id" :post="post">

    <NuxtLink class="card" :to="`/post/${post.slug.current}`">
      <img
        v-if="post.mainImage"
        class="card-cover"
        :src="urlFor(post.mainImage).width(500).height(300).url()"
        alt="Cover image"
      />
  
      <div v-else class="card-cover-none" />
  
      <div class="card-container">
        <h3 class="card-title">{{ post.title }}</h3>
        <p class="card-excerpt">{{ post.excerpt }}</p>
        <p class="card-date">{{ formatDate(post._createdAt) }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>

const query = groq`*[_type == "post"] | order(_createdAt desc)`

const sanity = useSanity()

const { data } = await useAsyncData('articles', () => sanity.fetch(query))

</script>

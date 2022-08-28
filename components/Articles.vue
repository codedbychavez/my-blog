<script>
import ArticleCard from './ArticleCard.vue';
export default {
    props: {
      articles: Array,
    },
    components: { ArticleCard },
}
</script>

<template>
  <section class="bg-white">
  <div class="mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="max-w-screen-sm text-left lg:mb-16 mb-8">
          <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">Published Articles</h2>
          <p class="font-light text-gray-500 sm:text-xl">Feel free to browse and read as much as you can about the topics below that sparks your interests.
            If you'd like to support my work click the button on the top right.
          </p>
      </div> 
      <div class="grid gap-8 lg:grid-cols-2">
        <ArticleCard v-for="article in articles" :key="article._id" 
          :title="article.title"
          :description="article.description"
          :path="article._path"
          :date="article.date"
          :author="article.author"
        />
          
      </div>  
  </div>
</section>
</template>
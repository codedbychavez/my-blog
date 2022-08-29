<script>
  import Footer from '@/components/Footer.vue';
  import Nav from '@/components/Nav.vue';
  import ArticleBanner from '~~/components/ArticleBanner.vue';
  
  export default {
    components: { Nav, Footer, ArticleBanner }
  }
  </script>

<template>
  <div id="article-layout">
    <main>
      <ArticleBanner />
      <div id="markdown-content-wrapper">
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</template>
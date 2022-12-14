<template>
  <div class="banner-wrapper">
    <Banner />
  </div>

  <section class="about-wrapper">
    <About />
  </section>

</template>

<script>
import Banner from '@/components/Banner.vue';
import About from '@/components/About.vue';

export default {
  components: {
    Banner, About
  }
}

</script>

<style lang="scss">
section {
  @apply my-8 mx-auto;
  max-width: 90%;
}
</style>
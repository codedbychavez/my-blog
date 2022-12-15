<template>
  <div class="banner-wrapper">
    <Banner />
  </div>

  <section class="about-wrapper">
    <About />
  </section>

  <section class="services-wrapper">
    <Services />
  </section>

</template>

<script>
import Banner from '@/components/Banner.vue';
import About from '@/components/About.vue';
import Services from '~~/components/Services.vue';

export default {
  components: {
    Banner, About, Services
  }
}

</script>

<style lang="scss">
section {
  @apply my-8 mx-auto;
  max-width: 90%;
}
</style>
<template>

    <Banner />
    <About />
    <Work />

</template>

<script>
import Banner from '@/components/Banner.vue';
import About from '@/components/About.vue';
import Work from '@/components/Work.vue';

export default {
  components: {
    Banner,
    About,
    Work,
  }
}

</script>

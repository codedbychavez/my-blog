<template>

    <Banner />
    <About />
    <Work />
    <Project />
    <Footer />

</template>

<script>
import Banner from '@/components/Banner.vue';
import About from '@/components/About.vue';
import Work from '@/components/Work.vue';
import Project from '@/components/Project.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Banner,
    About,
    Work,
    Project,
    Footer,
  }
}

</script>

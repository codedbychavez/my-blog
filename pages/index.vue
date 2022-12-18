<template>

    <Banner />
    <About />
    <Work />
    <Project />

</template>

<script>
import Banner from '@/components/Banner.vue';
import About from '@/components/About.vue';
import Work from '@/components/Work.vue';
import Project from '../components/Project.vue';

export default {
  components: {
    Banner,
    About,
    Work,
    Project,
  }
}

</script>

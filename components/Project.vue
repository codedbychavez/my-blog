<template>
  <section class="section project">
    <h2 class="section-title">projects.</h2>
    <p class="paragraph">
      Here are some projects I've been actively pursuing lately. You can visit each one on GitHub by clicking the link.
    </p>
    <div class="project-cards">
      <div class="project-card-wrapper" v-for="project, index in projects">
        <ProjectCard
          :number="`0${index+1}.`"
          :title="project.name"
          :text="project.description"
          :link="{text: 'Visit on GitHub', href: project.html_url}"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './Card/ProjectCard.vue';
import { ref } from 'vue';

let projects = ref([]);

const { data } = await useFetch('https://api.github.com/users/codedbychavez/repos?per_page=6&direction=desc&sort=updated');

projects = data.value;

</script>

<style lang="scss">
.project {
  
  .project-cards {
    @apply mt-6 flex flex-wrap gap-6;
  }


  @include mq($from: tablet) {


  }

}
</style>
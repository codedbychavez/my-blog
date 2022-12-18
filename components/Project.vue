<template>
  <section class="section project">
    <h2 class="section-title">projects.</h2>
    <p class="paragraph">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta maxime quos excepturi.
    </p>
    <div class="project-cards">
      <div class="project-card-wrapper" v-for="project, index in projects">
        <ProjectCard
          :number="`0${index+1}.`"
          :title="project.name+'ttetetetetetettwtddgagdjagjdahj'"
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
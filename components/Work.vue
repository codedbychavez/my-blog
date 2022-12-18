<template>
  <section class="section work">
    <h2 class="section-title">work.</h2>
    <p class="paragraph">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta maxime quos excepturi.
    </p>
    <div class="work-cards">
      <div class="work-card-wrapper" v-for="workItem in workItems">
        <WorkCard
          :number="workItem.number"
          :title="workItem.title"
          :text="workItem.text"
          :link="workItem.link"
        />
      </div>
    </div>
  </section>
</template>

<script>
import WorkCard from './Card/WorkCard.vue';
export default {
  components: {
    WorkCard,
  },
  data() {
    return {
      workItems: [
        {
          number: "01.",
          title: "Landing pages",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta maxime quos excepturi.",
          link: {
            text: "Lets go!",
            href: "#someUrl"
          }
        },
        {
          number: "02.",
          title: "Vue.js Development",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta maxime quos excepturi.",
          link: {
            text: "Lets go!",
            href: "#someUrl"
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.work {
  
  .work-cards {
    @apply mt-6 flex flex-wrap gap-6;
  }

  .work-card-wrapper + .work-card-wrapper {
    @apply mt-8
  }

  @include mq($from: tablet) {

    .work-card-wrapper + .work-card-wrapper {
      @apply ml-32 mt-16;
    }
  }

}
</style>
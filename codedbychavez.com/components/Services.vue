<template>
  <div class="services">
    <h2 class="title">
      What I do
    </h2>
    <div class="services-card-container">
      <ServiceCard />
      <ServiceCard />
    </div>
  </div>
</template>

<script>
import ServiceCard from './Card/ServiceCard.vue';

export default {
  components: {
    ServiceCard
  }
}

</script>

<style lang="scss">
.services {

  @apply px-8 py-12;
  
  
  .title {
    @apply text-5xl uppercase text-gray-700;
    font-family: 'Archivo Black', sans-serif;

  }

  .services-card-container {
    @apply border-l-8 border-[#3e4b5d] pl-8 mt-8 flex gap-6 flex-wrap;

  }
}
</style>
<template>
  <div class="card project-card">
    <h3 class="card-title">{{ title }}</h3>
      <p class="paragraph card-text">
        {{ text }}
      </p>
      <div class="card-link-container">
        <a :href="link.href" target="_blank" class="card-link">
          {{ link.text }}
        </a>
      </div>
  
  </div>
</template>

<script>
export default {
  props: {
    number: String,
    title: String,
    text: String,
    link: {
      type: Object,
      default: {
        text: "Link",
        href: "#someUrl"
      }
    },
  }
}
</script>

<style lang="scss">

.project-card {
  @apply border-[#D9D9D9] border w-80 h-max p-6;

  .card-number {
    @apply text-3xl font-black;
    color: #D9D9D9;
  }

  .card-title {
    @apply font-bold text-xl break-words;
    color: #3A3A3A;
  }

  .card-text {
    @apply mt-4;
  }
  .card-link-container {
    @apply text-right;
  }
  .card-link {
    @apply mt-6 inline-block ml-auto text-blue-500 underline;
  }


  @include mq($from: tablet) {
    @apply p-6 w-96 h-max;

    .card-number {
      @apply text-6xl;
    }

    .card-title {
      @apply text-2xl;
    }

  }
}



</style>
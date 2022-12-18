<template>
  <div class="card work-card">
    <p class="card-number">{{ number }}</p>
    <h3 class="card-title">{{ title }}</h3>
    <div class="card-text-container">
      <p class="paragraph card-text">
        {{ text }}
      </p>
      <div class="card-button-container">
        <a :href="link.href" class="button card-button">
          {{ link.text }}
        </a>
      </div>
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

.work-card {
  @apply border-[#D9D9D9] border w-80 h-64 p-6;

  .card-number {
    @apply text-3xl font-black;
    color: #D9D9D9;
  }

  .card-title {
    @apply mt-4 font-bold text-2xl;
    color: #3A3A3A;
  }

  .card-text-container {
    @apply bg-gray-100 mt-4 p-4;
    height: max-content;

    .card-text {
      @apply mt-0;
    }

    .card-button-container {
      @apply text-right;
    }

    .card-button {
      @apply mt-6 inline-block ml-auto;
    }
  }


  @include mq($from: tablet) {
    @apply p-6 w-96 h-80;

    .card-number {
      @apply text-6xl;
    }

    .card-title {
      @apply text-4xl;
    }

    .card-text-container {
      width: 420px;
    }
  }
}



</style>
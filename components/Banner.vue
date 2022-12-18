<template>
  <div class="banner">
    <div class="title-wrapper">
      <h1 class="title">HI &nbsp; I'M &nbsp; CHAVEZ</h1>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.banner {
  @apply flex h-60 border border-b-8;
  border-bottom-color: rgba(255, 140, 21, 0.5);

  .title-wrapper {
    @apply m-auto;
  }

  .title {
    @apply uppercase font-black text-4xl text-[#3A3A3A];
  }

  @include mq($from: tablet) {
    @apply h-96;

    .title {
      @apply text-6xl;
    }
  }
}
</style>

<template>
<div class="banner">
  <div>
    <div class="box">
      <h1 class="title">Hello World!</h1>
    </div>
    <h2 class="subtitle">
      <span>I</span>
      <span>'</span>
      <span>M</span>
      <span></span>
      <span>C</span>
      <span>H</span>
      <span>A</span>
      <span>V</span>
      <span>E</span>
      <span>Z</span>
      <span></span>
      <span>H</span>
      <span>A</span>
      <span>R</span>
      <span>R</span>
      <span>I</span>
      <span>S</span>
    </h2>
  </div>
</div>
</template>

<script>
</script>

<style lang="scss">
.banner {
  @apply h-screen flex justify-center items-center;


  .box {
    @apply w-96 h-40 border-8 border-gray-700 border-solid flex;

    .title {
      @apply m-auto text-gray-400 uppercase font-black text-4xl;
      transform: rotate(-5deg);
    }

  }
  .subtitle {
    @apply text-lg flex justify-between text-gray-300;
  }
}
</style>
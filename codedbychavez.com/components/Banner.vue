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
  @apply h-80 flex justify-center items-center;
  background: linear-gradient(-45deg, transparent 15px, #3e4b5d 0);


  .box {
    @apply w-96 h-40 border-8 border-gray-200 border-solid flex;
    box-shadow: 5px 0 5px -5px black,
    -5px 0 5px -5px black;

    .title {
      @apply m-auto text-amber-400 uppercase font-black text-4xl;
    }

  }
  .subtitle {
    @apply text-lg flex justify-between text-slate-100;
  }
}
</style>
<template>
  <div class="footer">
    <div class="logo-text">CH</div>
    <p class="paragraph">&copy;{{ year }} codedbychavez.com</p>
  </div>
</template>

<script setup>

const year = new Date().getFullYear(); 

</script>

<style lang="scss">
.footer {
  @apply py-8 px-6 bg-gray-100;

  .logo-text {
    @apply text-5xl font-black text-[#D9D9D9];
    font-family: "Luckiest Guy", cursive;
  }

  .paragraph {
    margin-top: 0;
  }

  @include mq($from: tablet) {
    @apply py-16 px-16;}

}

</style>
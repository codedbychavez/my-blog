<script>
import HeartIcon from '../icons/HeartIcon.vue';
export default {
    components: { HeartIcon }
}
</script>
<template>
  <button
    href="#"
    class="
      subscribe-button
      text-white
      font-semibold
      rounded-lg
      text-sm
      px-4
      lg:px-5
      py-2
      lg:py-2.5
      mr-2
      hover:bg-red-600
      bg-red-500
      flex
      items-center
    "
  >
    <span class="mr-2">Patreon</span> <HeartIcon />
  </button>
</template>
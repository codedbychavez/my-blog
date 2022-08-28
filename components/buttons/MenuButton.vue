<script>
import HamburgerIcon from "../icons/HamburgerIcon.vue";
export default {
  setup() {},
  components: { HamburgerIcon },
};
</script>

<template>
  <button
    type="button"
    class="
      inline-flex
      items-center
      p-2
      ml-1
      text-sm text-gray-100
      rounded-lg
      lg:hidden
      hover:border-gray-100
      focus:outline-none focus:ring-2 focus:ring-gray-200
    "
  >
    <span class="sr-only">Open mobile menu</span>
    <HamburgerIcon />
  </button>
</template>
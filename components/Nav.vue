<script setup>
import CodeIcon from "./icons/CodeIcon.vue";
</script>

<template>
  <nav class="navbar px-4 lg:px-6 py-2.5 shadow-lg">
    <div
      class="
        flex flex-wrap
        justify-between
        items-center
        mx-auto
        max-w-screen-xl
      "
    >
      <a href="/" class="flex items-center font-mono font-semibold text-gray-100">
        <CodeIcon />
        <span class="self-center text-2xl whitespace-nowrap ml-2"
          >codedbychavez</span
        >
      </a>

    </div>
  </nav>
</template>

<style>
.navbar {
background-color: #4158D0;
}

</style>
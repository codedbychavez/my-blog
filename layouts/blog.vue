<script>
import Navbar from '@/components/Nav.vue';

export default {
  components: { Navbar }
}
</script>

<template>
  <div id="article-layout">
    <main>
      <div id="markdown-content-wrapper">
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</template>
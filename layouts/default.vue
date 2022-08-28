<script>
  import Footer from '@/components/Footer.vue';
  import Nav from '@/components/Nav.vue';
  
  export default {
    components: { Nav, Footer }
  }
  </script>

<template>
  <div id="layout" class="flex flex-col">
    <header>
      <Nav />
    </header>
    <main class="p-4">
      <slot />
    </main>
    <Footer />
  </div>
</template>
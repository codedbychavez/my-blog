<script>
  import Footer from '@/components/Footer.vue';
  import Nav from '@/components/Nav.vue';
  
  export default {
    components: { Nav, Footer }
  }
  </script>

<template>
  <div id="default-layout">
    <header>
      <Nav />
    </header>
    <main>
      <div>
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</template>
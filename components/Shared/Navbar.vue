<template>
  <div class="navbar">
    <div class="logo">
      <nuxt-link to="/">codedbychavez</nuxt-link>
    </div>

    <nav>
      <ul class="nav-links">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
  .navbar {
    background-color: #333;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
  }

  .nav-links {
    display: flex;
    list-style: none;
    gap: 1rem;
  }
</style>
<template>
  <div class="navbar">
    <div class="navbar-content">
      <div class="logo">
        <nuxt-link to="/">codedbychavez</nuxt-link>
      </div>

      <nav>
        <ul class="nav-links">
          <li><nuxt-link to="/">Blog</nuxt-link></li>
          <li><nuxt-link to="/about">Projects</nuxt-link></li>
        </ul>
        <div class="social-media-links">
          
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  @apply bg-gray-50;
}

.navbar-content {
 @apply flex justify-between items-center p-4 mx-auto;
 max-width: 1440px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1rem;
  font-family: 'Rubik', sans-serif;
}
</style>

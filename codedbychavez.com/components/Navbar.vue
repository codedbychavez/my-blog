<template>
  <div class="navbar">
    <div class="logo-wrapper">
      <a class="logo">codedbychavez</a>
    </div>
    <div class="navbar-items-wrapper">
      <div class="nav-menu-desktop">
        <a class="nav-item text-red-700">Blog</a>
        <a class="nav-item text-green-700">Courses</a>
        <a class="nav-item text-purple-700">Books</a>
      </div>
      <div class="nav-menu-mobile" :class="{ hide: !showMobileMenu }">
        <div class="logo-and-toggle-wrapper">
          <a class="logo">codedbychavez</a>
          <button @click="showMobileMenu = false" class="menu-toggle">
            <CloseIcon />
          </button>
        </div>
        <a class="nav-item">Blog</a>
        <a class="nav-item">Courses</a>
        <a class="nav-item">Books</a>
      </div>
      <div class="mobile-nav-toggle-wrapper">
        <button @click="showMobileMenu = true" class="toggle-button">
          <MenuIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import MenuIcon from "./Icons/MenuIcon.vue";
import CloseIcon from "./Icons/CloseIcon.vue";

export default {
  components: {
    MenuIcon,
    CloseIcon,
  },
  data() {
    return {
      showMobileMenu: false,
      navLinks: [
        {

        }
      ]
    };
  },
};
</script>

<style lang="scss">
.navbar {
  @apply flex justify-between h-16 items-center px-6 font-normal relative bg-gray-200;

  .hide {
    @apply hidden;
  }

  .menu-toggle {
    @apply stroke-gray-50 cursor-pointer;
    color: red;
  }

  .nav-menu-desktop {
    display: none;
  }

  .nav-menu-mobile {
    @apply absolute bg-gray-600 left-0 right-0 top-0 h-max p-6 z-10;

    .logo-and-toggle-wrapper {
      @apply mb-6 flex justify-between;
    }

    .nav-item {
      @apply block;
    }

    .nav-item + .nav-item {
      @apply mt-6;
    }
  }

  .nav-item {
    @apply cursor-pointer text-lg uppercase font-black underline underline-offset-8 decoration-1;
    text-decoration-style: wavy;
  }

  @include mq($from: tablet) {
    .nav-menu-desktop {
      display: flex;
      gap: 2em;
    }

    .nav-menu-mobile {
      display: none;
    }

    .mobile-nav-toggle-wrapper {
      display: none;
    }
  }
}
</style>

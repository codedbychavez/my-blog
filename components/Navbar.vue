<template>
  <div class="navbar">
    <div class="logo-text">CH.</div>
    <div class="navbar-items-wrapper">
      <div class="nav-menu-desktop">
        <a v-for="navLink in navLinks" :href="navLink.link" class="nav-item">{{ navLink.text }}</a>
      </div>
      <div class="nav-menu-mobile" :class="{ hide: !showMobileMenu }">
        <div class="logo-and-toggle-wrapper">
          <div class="logo-text">CH.</div>
          <button @click="showMobileMenu = false" class="menu-toggle">
            <CloseIcon />
          </button>
        </div>
        <a v-for="navLink in navLinks" :href="navLink.link" class="nav-item">{{ navLink.text }}</a>
        <button class="button nav-button">Hire me</button>
      </div>
      <div class="mobile-nav-toggle-wrapper">
        <button @click="showMobileMenu = true" class="toggle-button">
          <MenuIcon />
        </button>
      </div>
    </div>
    <button class="button nav-button">Hire me</button>
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
          text: "Blog",
          link: "#someUrl",
        },
        {
          text: "Courses",
          link: "#someUrl",
        },
        {
          text: "Books",
          link: "#someUrl",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.navbar {
  @apply flex justify-between items-center p-6 font-normal bg-gray-50 border border-b-8 border-[#6B7280];

  .hide {
    @apply hidden;
  }

  .logo-text {
    @apply text-5xl font-black text-[#ff8c15];
    font-family: "Luckiest Guy", cursive;
  }

  .nav-button {
    @apply hidden;
  }

  .nav-menu-desktop {
    display: none;
  }

  .nav-menu-mobile {
    @apply absolute bg-gray-100 left-0 right-0 top-0 h-max p-6 z-10 shadow;

    .logo-and-toggle-wrapper {
      @apply mb-6 flex justify-between;
    }

    .nav-button {
      @apply block mt-6;
    }

    .nav-item {
      @apply block;
    }

    .nav-item + .nav-item {
      @apply mt-4;
    }
  }

  .nav-item {
    @apply cursor-pointer text-lg uppercase font-black underline;
  }

  @include mq($from: tablet) {
    .nav-menu-desktop {
      @apply flex gap-8 justify-between items-center;
    }

    .nav-button {
      @apply block;
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

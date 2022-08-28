<script>
import CodeIcon from "./icons/CodeIcon.vue";
import HeartIcon from "./icons/HeartIcon.vue";
import HamburgerIcon from "./icons/HamburgerIcon.vue";
import MenuButton from "./buttons/MenuButton.vue";
import PatreonButton from "./buttons/PatreonButton.vue";
export default {
  data() {
    return {
      canShowMobileMenu: false,
      navigationItems: [
        {
          label: 'About',
          path: '/about'
        },
        {
          label: 'Active Projects',
          path: '/projects'
        },
        {
          label: 'My Work',
          path: '/work'
        },
        {
          label: "Let's Collaborate",
          path: '/collaborate'
        },
      ]
    }
  },
  components: { CodeIcon, HeartIcon, HamburgerIcon, MenuButton, PatreonButton },
};
</script>

<template>
  <nav class="navbar px-4 lg:px-6 py-2.5 shadow">
    <div
      class="
        flex flex-wrap
        justify-between
        items-center
        mx-auto
        max-w-screen-xl
      "
    >
      <router-link to="/" class="flex items-center font-mono font-semibold text-gray-100">
        <CodeIcon />
        <span class="self-center text-2xl whitespace-nowrap ml-2"
          >codedbychavez</span
        >
      </router-link>
      <div class="flex items-center lg:order-2">
        <!-- <PatreonButton /> -->

        <MenuButton @click="canShowMobileMenu = !canShowMobileMenu" />
      </div>
      <div
        :class="{hidden: !canShowMobileMenu}"
        class="
          justify-between
          items-center
          w-full
          lg:flex lg:w-auto lg:order-1
        "
        id="mobile-menu-2"
      >
        <ul
          class="
            flex flex-col
            mt-4
            font-medium
            lg:flex-row lg:space-x-8 lg:mt-0
          "
        >
          <li v-for="(navigationItem, index) in navigationItems" :key="index">
            <router-link
              :to="navigationItem.path"
              class="
                block
                py-2
                pr-4
                pl-3
                text-gray-100
                font-semibold
              "
              >{{ navigationItem.label }}</router-link
            >
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar {
background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);


}

</style>
<script>
import InstagramIcon from "./icons/InstagramIcon.vue";
import GitHubIcon from "./icons/GitHubIcon.vue";
import CodeIcon from "./icons/CodeIcon.vue";
export default {
    computed: {
        currentYear() {
            return new Date().getFullYear();
        }
    },
    components: { InstagramIcon, GitHubIcon, CodeIcon }
};
</script>

<template>
  <footer class="mt-auto text-gray-600 pb-6">
    <div class="mx-auto w-3/4">
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-600 sm:text-center"
          >© {{ currentYear }}
          <router-link to="/" class="hover:underline font-mono">codedbychavez</router-link>.
          All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a href="https://instagram.com/codedbychavez" class="social-icon-link">
            <InstagramIcon />
          </a>

          <a href="https://github.com/codedbychavez" class="social-icon-link">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
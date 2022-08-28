<script>
import FacebookIcon from "./icons/FacebookIcon.vue";
import InstagramIcon from "./icons/InstagramIcon.vue";
import TwitterIcon from "./icons/TwitterIcon.vue";
import GitHubIcon from "./icons/GitHubIcon.vue";
import DribbleIcon from "./icons/DribbleIcon.vue";
import CodeIcon from "./icons/CodeIcon.vue";
export default {
    data() {
        return {
            footerSections: [
                {
                    section: "Resources",
                    children: [
                        {
                            label: "Angular and Django",
                            path: "https://www.amazon.com/Connecting-Angular-Django-using-Framework-ebook/dp/B086JC4LHW/ref=sr_1_3?crid=1BKA5U3FXAK7E&keywords=chavez+harris&qid=1661519009&s=books&sprefix=chavez+harri,stripbooks,2035&sr=1-3",
                        },
                    ],
                },
                {
                    section: "Follow me",
                    children: [
                        {
                            label: "GitHub",
                            path: "https://github.com/codedbychavez",
                        },
                        {
                            label: "Instagram",
                            path: "https://instagram.com/codedbychavez",
                        },
                    ],
                },
                {
                    section: "Legal",
                    children: [
                        {
                            label: "Privacy Policy",
                            path: "/privacy-policy",
                        },
                        {
                            label: "Terms & Conditions",
                            path: "/terms-and-conditions",
                        },
                    ],
                },
            ],
        };
    },
    computed: {
        currentYear() {
            return new Date().getFullYear();
        }
    },
    components: { FacebookIcon, InstagramIcon, TwitterIcon, GitHubIcon, DribbleIcon, CodeIcon }
};
</script>

<template>
  <footer class="mt-auto p-4 bg-gray-800 sm:p-6 text-gray-100">
    <div class="mx-auto max-w-screen-xl">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <router-link to="/" class="flex items-center font-mono font-semibold">
            <CodeIcon />
            <span class="self-center text-2xl whitespace-nowrap ml-2"
              >codedbychavez</span
            >
          </router-link>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div
            v-for="footerSection in footerSections"
            :key="footerSection.section"
          >
            <h2 class="mb-6 text-sm font-semibold uppercase">
              {{ footerSection.section }}
            </h2>
            <ul>
              <li
                v-for="(child, index) in footerSection.children"
                :key="index"
                class="mb-4"
              >
                <a :href="child.path" target="_blank" class="hover:underline">{{
                  child.label
                }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-300 sm:text-center"
          >© {{ currentYear }}
          <router-link to="/" class="hover:underline font-mono">codedbychavez</router-link>.
          All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a href="#" class="social-icon-link">
            <FacebookIcon />
          </a>
          <a href="#" class="social-icon-link">
            <InstagramIcon />
          </a>

          <a href="#" class="social-icon-link">
            <GitHubIcon />
          </a>
          <a href="#" class="social-icon-link">
            <DribbleIcon />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
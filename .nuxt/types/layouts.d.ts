import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "blog" | "default"
declare module "/Users/chavez/Desktop/Creative Work/repos/codedbychavez.com/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}
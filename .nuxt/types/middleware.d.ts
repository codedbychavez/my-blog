import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/chavez/Desktop/Creative Work/repos/codedbychavez.com/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}
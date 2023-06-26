import { badgeEnum } from '../composables/badgeEnum'
export default defineNuxtPlugin(NuxtApp => {
  return {
    provide: {
      badgeEnum: badgeEnum,
    },
  }
})

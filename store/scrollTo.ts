export const useScrollTo = defineStore('scrollTo', () => {
  const state = reactive({
    ref: <any>{},
  })
  const actions = {
    scrollToSection(refName: any) {
      const ref = state.ref[refName]
      if (ref) {
        ref.scrollIntoView({ behavior: 'smooth' })
      }
    },
  }
  return {
    ...toRefs(state),
    ...actions,
  }
})

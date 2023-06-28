export const useLoading = defineStore('Loading', () => {
  const state = reactive({
    pageLoader: false,
  })
  const actions = {
    setPageLoader(value: boolean) {
      state.pageLoader = value
    },
  }

  return {
    ...toRefs(state),
    ...actions,
  }
})

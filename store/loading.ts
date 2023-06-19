export const useLoading = defineStore('Loading', () => {
  const state = reactive({
    pageLoader: false,
  })
  const actions = {
    setPageLoader(value: boolean) {
      console.log('setPageLoader', value)
      state.pageLoader = value
    },
  }

  return {
    ...toRefs(state),
    ...actions,
  }
})

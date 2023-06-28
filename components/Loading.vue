<script setup lang="ts">
  const { pageLoader } = storeToRefs(useLoading())
  const { setPageLoader } = useLoading()

  const nuxtApp = useNuxtApp()

  const progressBar = ref<any>({
    opacity: '0',
    transitionDuration: '0ms',
    width: '0%',
  })
  // const showLoader = computed(() => pageLoader)

  watch(
    () => pageLoader,
    () => {
      if (pageLoader.value == true) {
        progressBar.value.opacity = '1'
        progressBar.value.transitionDuration = '500ms'
        progressBar.value.width = '10%'
      } else if (pageLoader.value == false) {
        progressBar.value.transitionDuration = '500ms'
        progressBar.value.width = '100%'
        setTimeout(() => {
          progressBar.value.opacity = '0'
          progressBar.value.transitionDuration = '0ms'
          progressBar.value.width = '0%'
        }, 1000)
      }
    },
    {
      deep: true,
      immediate: true,
    },
  )

  nuxtApp.hook('page:finish', () => {
    if (pageLoader.value == true) {
      setPageLoader(false)
    }
  })
</script>

<template>
  <div
    class="loading"
    :style="{
      opacity: progressBar.opacity,
      transitionDuration: progressBar.transitionDuration,
      width: progressBar.width,
    }"
  />
</template>

<style scoped lang="scss">
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    height: 0.3rem;
    background-color: #ff8c00;
    z-index: 999999;
    opacity: 0;
    width: 0%;
    transition: all 0ms ease-in-out;
  }
</style>

<script setup lang="ts">
  import { useIntersectionObserver } from '@vueuse/core'
  import { TFadeIn } from '~/types'

  // const value = inject<TFadeIn['mode']>('fadeMode', 'left')

  // const props = defineProps<{
  //   mode: TFadeIn['mode']
  // }>()

  const props = withDefaults(
    defineProps<{
      mode: TFadeIn['mode']
    }>(),
    {
      mode: 'left',
    },
  )

  const toggleFade = ref(false)
  const fadeElement = ref<HTMLElement | null>(null)

  useIntersectionObserver(fadeElement, ([{ isIntersecting }]) => {
    if (!fadeElement.value) return

    toggleFade.value = isIntersecting
  })

  const fadeDirections: Record<TFadeIn['mode'], string> = {
    left: 'translate3d(-20%, 0, 0)',
    right: 'translate3d(20%, 0, 0)',
    up: 'translate3d(0, 50%, 0)',
    down: 'translate3d(0, -50%, 0)',
  }

  const fadeMode = computed(() => {
    // return fadeDirections[value] || fadeDirections['left']
    return fadeDirections[props.mode] || fadeDirections['left']
  })
</script>

<template>
  <div class="fade-container" ref="fadeElement">
    <div
      :style="{
        transition: 'all 1s ease-in-out',
        transform: fadeMode,
        zIndex: 10,
        position: 'relative',
      }"
      :class="{
        'fade-in': toggleFade,
        'fade-out': !toggleFade,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .fade-container {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .fade-in {
    width: 100%;
    height: 100%;
    opacity: 1;
    transform: translate3d(0, 0, 0) !important;
  }

  .fade-out {
    width: 100%;
    height: 100%;
    opacity: 0;
    /* transform: translate3d(50vw, 0, 0); */
  }
</style>

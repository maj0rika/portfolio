<script setup lang="ts">
  import { useWindowSize } from '@vueuse/core'
  const { width } = useWindowSize()

  const mouseX = ref(0)
  const mouseY = ref(0)
  const bigX = ref(0)
  const bigY = ref(0)
  const smallX = ref(0)
  const smallY = ref(0)

  const isMobile = computed(() => width.value < 768)

  const updateMousePosition = (e: MouseEvent) => {
    mouseX.value = e.clientX
    mouseY.value = e.clientY
  }

  const animate = () => {
    bigX.value += (mouseX.value - bigX.value) * 0.1
    bigY.value += (mouseY.value - bigY.value) * 0.1

    smallX.value += (mouseX.value - smallX.value) * 0.05
    smallY.value += (mouseY.value - smallY.value) * 0.05

    requestAnimationFrame(animate)
  }

  onMounted(() => {
    window.addEventListener('mousemove', updateMousePosition)
    animate()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', updateMousePosition)
  })
</script>

<template>
  <img
    v-if="!isMobile"
    class="circle big"
    src="~/assets/images/logo.png"
    alt="logo"
    :style="{ top: `${bigY}px`, left: `${bigX}px` }"
  />
  <img
    v-if="!isMobile"
    class="circle small"
    src="~/assets/images/logo.png"
    alt="logo"
    :style="{ top: `${smallY}px`, left: `${smallX}px` }"
  />
</template>

<style scoped>
  .circle {
    position: fixed;
    z-index: 100;
    cursor: none;
    pointer-events: none;
  }

  .big {
    width: 3rem;
    height: 3rem;
  }

  .small {
    width: 2rem;
    height: 2rem;
  }
</style>

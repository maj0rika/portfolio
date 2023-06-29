import { Style } from '../../../.nuxt/components';
<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      color: string
      icon: string
      wording: string
      content: string
    }>(),
    {
      color: 'gray',
    },
  )

  const isFlipped = ref(false)
</script>

<template>
  <div
    class="wrapper"
    :style="{
      borderColor: color,
    }"
    @mouseover="isFlipped = true"
    @mouseleave="isFlipped = false"
  >
    <ClientOnly>
      <Icon :name="icon" :color="color" size="4.2rem" />
    </ClientOnly>
    <div class="flip-card">
      <div
        class="flip-card-inner"
        :style="{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }"
      >
        <div class="flip-card-front">
          {{ wording }}
        </div>
        <div class="flip-card-back">
          {{ content }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    flex-flow: column;
    flex: 1 1 15rem;
    box-sizing: border-box;
    align-items: center;
    min-height: 15rem;
    padding: 2rem;
    box-shadow: 0 0 3rem -0.8rem rgba(0, 0, 0, 0.17);

    border-bottom: 0.25rem solid;
    font-weight: 600;
    gap: 2rem;
    transition: all 0.3s ease-in-out;

    //hover
    &:hover {
      transform: translateY(-0.5rem);
      box-shadow: 0 0 3rem -0.8rem rgba(0, 0, 0, 0.27);
    }
  }
</style>

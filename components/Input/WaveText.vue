<template>
  <div class="wave-text">
    <span
      v-for="(char, index) in text"
      :key="index"
      :style="{
        animationDelay: `${index * 0.3}s`,
        animationIterationCount: repeat,
      }"
      class="wave-animation"
    >
      {{ char }}
      <template v-if="char == ' '">&nbsp;</template>
    </span>
  </div>
</template>

<script setup>
  // const text = ref('Hello, World!')

  const props = defineProps({
    text: {
      type: String,
      default: 'Hello, World!',
    },
    repeat: {
      type: Number,
      default: 3,
    },
  })
</script>

<style scoped lang="scss">
  @keyframes wave {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-50%);
    }
    100% {
      transform: translateY(0);
    }
  }

  .wave-text {
    display: flex;
    width: 100%;
    height: fit-content;
  }

  .wave-animation {
    display: flex;
    flex-flow: row;
    animation: wave 2s;
  }
</style>

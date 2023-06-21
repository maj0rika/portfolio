import { Base } from '../../.nuxt/components';
<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      flow: 'row' | 'column'
    }>(),
    {
      flow: 'row',
    },
  )
</script>

<template>
  <div
    :class="{
      // 'wrapper-column': props.flow === 'column',
      // 'wrapper-row': props.flow === 'row',
      wrapper: true,
    }"
  >
    <div class="img-wrapper">
      <div class="card-image">
        <slot name="img" />
      </div>
    </div>
    <div class="content">
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/styles/index.scss';
  // .wrapper-column {
  //   display: flex;
  //   flex-flow: column;
  //   align-items: center;
  //   flex: 1 1;
  //   width: 100%;
  //   height: 100%;
  // }

  // .wrapper-row {
  //   display: grid;
  //   flex: 1;
  //   width: 100%;
  //   height: 100%;

  //   gap: 2rem;
  //   grid-template-columns: 1fr 2fr;
  // }

  .wrapper {
    @include mobile {
      display: flex;
      flex-flow: column;
      align-items: center;
      flex: 1 1;
      width: 100%;
      height: 100%;
    }
    @include mobile-over {
      display: grid;
      flex: 1;
      width: 100%;
      height: 100%;

      grid-template-columns: 1fr 2fr;
    }

    gap: 0.5rem;
  }
  .img-wrapper {
    display: flex;
    justify-content: center;
    // align-items: center;
    flex: 1;
    width: 100%;
    height: 100%;
    border: 0.1rem solid transparent;
  }
  .card-image {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    overflow: hidden;
    width: 100%;
    height: fit-content;
    border: 0.1rem solid transparent;
    border-radius: 1rem;
    cursor: pointer;

    object-fit: cover;
  }

  .content {
    display: flex;
    flex: 1;
    width: calc(100% - 3rem);
    padding: 1rem;
    word-break: break-all;
    border: 0.1rem solid #adc344;
    border-radius: 1rem;
  }
</style>

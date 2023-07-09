<script setup lang="ts"></script>

<template>
  <section class="container">
    <header class="header">
      <div class="title">
        <!-- <FadeIn :mode="'right'"> -->
        <slot name="title" />
        <!-- </FadeIn> -->
      </div>
      <div class="subTitle">
        <!-- <FadeIn :mode="'left'"> -->
        <slot name="subTitle" />
        <!-- </FadeIn> -->
      </div>
    </header>
    <article class="body">
      <slot name="body" />
    </article>
  </section>
</template>

<style scoped lang="scss">
  @import '@/assets/styles/index.scss';

  .container {
    //TODO: 테스트 지우기
    // min-height: 100vh; //test
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    z-index: 1;
    gap: 5rem;
  }

  .header {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    width: 100%;

    gap: 2rem;

    .title {
      @include mobile {
        font-size: 1rem;
      }

      display: flex;
      color: #888;
      font-size: 1rem;
      font-weight: 700;
    }

    .subTitle {
      @include mobile {
        font-size: 1rem;
      }

      display: flex;
      color: #862ddfb8;
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  .body {
    display: flex;
    flex-flow: column;
    width: 100%;
    font-size: 1.6rem;

    gap: 2rem;
  }
</style>

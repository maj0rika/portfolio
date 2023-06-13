<script setup lang="ts"></script>

<template>
  <section class="container">
    <header class="header">
      <div class="title">
        <slot name="title" />
      </div>
      <div class="subTitle">
        <slot name="subTitle" />
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
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }

  .header {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    gap: 2rem;

    .title {
      color: #888888;
      display: flex;
      font-size: 3rem;
      font-weight: 700;

      @include mobile {
        font-size: 2rem;
      }
    }

    .subTitle {
      display: flex;
      font-size: 2.5rem;
      font-weight: 700;
      color: #862ddfb8;
      @include mobile {
        font-size: 1.5rem;
      }
    }
  }

  .body {
    display: flex;
    flex-flow: column;
    width: 100%;
    gap: 2rem;

    font-size: 1.6rem;
  }
</style>

<script setup lang="ts"></script>

<template>
  <ContentsContainer>
    <template v-slot:title>Contact</template>
    <template v-slot:subTitle>나와는 이렇게 연락해요</template>

    <template v-slot:body>
      <section>
        <article>
          <div class="icon-box">
            <Icon class="icon" name="heroicons:at-symbol" />
          </div>
          <p>neu666632@gamil.com</p>
        </article>

        <article>
          <div class="icon-box">
            <Icon class="icon" name="heroicons:map-pin" />
          </div>
          <p>대한민국 서울시 관악구</p>
        </article>

        <article>
          <div class="icon-box">
            <Icon class="icon" name="heroicons:phone-arrow-down-left" />
          </div>
          <p>010-2243-8353</p>
        </article>
      </section>
    </template>
  </ContentsContainer>
</template>

<style scoped lang="scss">
  @import '@/assets/styles/index.scss';
  section {
    display: flex;
    flex-flow: column;
    width: 100%;

    gap: 2rem;

    article {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      height: 100%;

      gap: 1rem;

      @include mobile {
        flex-flow: column;
      }

      p {
        display: flex;
        font-size: 2rem;
        width: fit-content;
        // white-space: nowrap;
        flex-shrink: 1;
      }
    }
  }

  .icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 5.5rem;
    min-height: 5.5rem;
    padding: 1rem;
    background-color: #862ddfb8;
  }
  .icon {
    display: flex;
    width: 100%;
    height: 100%;
  }
</style>

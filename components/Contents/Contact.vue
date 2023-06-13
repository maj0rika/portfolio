<script setup lang="ts"></script>

<template>
  <ContentsContainer>
    <template v-slot:title>Contact</template>
    <template v-slot:subTitle></template>

    <template v-slot:body>
      <section>
        <article>
          <div class="icon-box">
            <Icon class="icon" name="heroicons:at-symbol" />
          </div>
          <p>ddd</p>
        </article>
        <article>
          <div class="icon-box">
            <Icon class="icon" name="heroicons:map-pin" />
          </div>
        </article>

        <article>
          <div class="icon-box">
            <Icon class="icon" name="heroicons:phone-arrow-down-left" />
          </div>
        </article>
        <!-- <article>
          <div class="icon-box">
            <Icon class="icon" name="heroicons:at-symbol" />
          </div>
        </article> -->
      </section>
    </template>
  </ContentsContainer>
</template>

<style scoped lang="scss">
  section {
    display: flex;
    flex-flow: column;
    width: 100%;

    gap: 2rem;

    article {
      display: flex;
      align-items: center;
      gap: 4rem;

      p {
        font-size: 2rem;
      }
    }
  }

  .icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12rem;
    height: 12rem;
    background-color: #862ddfb8;
  }
  .icon {
    width: 10rem;
    height: 10rem;
  }
</style>

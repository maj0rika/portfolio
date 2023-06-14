<script setup lang="ts"></script>

<template>
  <ContentsContainer class="mobile">
    <template v-slot:body>
      <img
        :style="{
          width: '100%',
          height: '100%',
        }"
        src="~/assets/images/logo.png"
        alt="logo"
      />
      <InputWaveText class="wave-text" text="maj0rika" />
    </template>
  </ContentsContainer>
</template>

<style scoped lang="scss">
  @import 'assets/styles/index.scss';
  .wave-text {
    font-size: 10rem;
    font-weight: bold;
    color: #252530;
    justify-content: center;

    @include mobile {
      font-size: 5rem;
    }
  }
</style>

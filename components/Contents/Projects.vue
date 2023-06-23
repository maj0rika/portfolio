import { Base } from '../../.nuxt/components';
<script setup lang="ts"></script>

<template>
  <ContentsContainer>
    <template v-slot:title>프로젝트 경험</template>
    <template v-slot:subTitle>나는 이런 프로젝트를 해왔어요</template>

    <template v-slot:body>
      <FadeIn :mode="'right'">
        <NuxtLink to="/project/quick">
          <div class="logo-wrapper">
            <img src="~/assets/images/logipasta.png" alt="image" />
          </div>
        </NuxtLink>
      </FadeIn>
      <FadeIn :mode="'right'">
        <NuxtLink to="/project/qnn24">
          <div class="logo-wrapper">
            <img src="~/assets/images/QNN24.png" alt="image" />
          </div>
        </NuxtLink>
      </FadeIn>
      <FadeIn :mode="'right'">
        <div>
          그외 경력으로는 C 언어를 이용한 임베디드 소프트웨어 개발 경험이
          있습니다.
        </div>
      </FadeIn>
    </template>
  </ContentsContainer>
</template>

<style scoped lang="scss">
.logo-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.logo-wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  /* Initially transparent */
  transition: background-color 0.3s ease;
  /* Transition effect */
}

.logo-wrapper:hover::after {
  background-color: rgba(0, 0, 0, 0.2);
  /* On hover, change to semi-transparent black */
}
</style>

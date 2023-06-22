<script setup lang="ts"></script>

<template>
  <FadeIn :mode="'left'">
    <ContentsContainer>
      <template v-slot:title>BLOG</template>
      <template v-slot:subTitle>내 블로그는 이렇게 있어요</template>

      <template v-slot:body>
        <FadeIn :mode="'right'">
          <NuxtLink to="https://maj0rika.com/react">
            REACT 블로그로 이동
          </NuxtLink>
        </FadeIn>
        <FadeIn :mode="'right'">
          <NuxtLink to="https://velog.io/@neu5563">Velog로 이동</NuxtLink>
        </FadeIn>
        <FadeIn :mode="'right'">
          <NuxtLink to="https://github.com/maj0rika">Github로 이동</NuxtLink>
        </FadeIn>
      </template>
    </ContentsContainer>
  </FadeIn>
</template>

<style scoped lang="scss"></style>

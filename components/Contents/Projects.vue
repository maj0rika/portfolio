<script setup lang="ts"></script>

<template>
  <ContentsContainer>
    <template v-slot:title>프로젝트 경험</template>
    <template v-slot:subTitle>나는 이런 프로젝트를 해왔어요</template>

    <template v-slot:body>
      <div>
        물류 온라인 솔루션 Sass, 뉴스 플랫폼 서비스, 팬 커뮤니티 서비스 등
        다양한 프로젝트 경험이 있습니다.
      </div>
      <div>
        그외 경력으로는 C 언어를 이용한 임베디드 소프트웨어 개발 경험이
        있습니다.
      </div>
    </template>
  </ContentsContainer>
</template>

<style scoped lang="scss"></style>

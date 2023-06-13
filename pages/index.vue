<script setup lang="ts"></script>

<template>
  <article>
    <ContentsHome />
    <ContentsAbout />
    <ContentsTechSkills />
    <ContentsCareer />
    <ContentsBlog />
    <ContentsExperience />
    <ContentsEducation />
    <ContentsProjects />
    <ContentsContact />
  </article>
</template>

<style scoped lang="scss">
  article {
    // height: 10000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }
</style>

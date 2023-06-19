<script setup lang="ts">
  const scrollTo = storeToRefs(useScrollTo())
  const sections = [
    'home',
    'about',
    'techSkills',
    'career',
    'blog',
    'experience',
    'education',
    'projects',
    'contact',
  ]
  const refs = <any>{}

  sections.forEach(section => {
    refs[section] = ref(null)
  })

  onMounted(() => {
    sections.forEach(section => {
      refs[section].value = document.getElementById(section)
      scrollTo.ref.value[section] = refs[section].value
    })
  })
</script>

<template>
  <article>
    <ContentsHome id="home" />
    <ContentsAbout id="about" />
    <ContentsTechSkills id="techSkills" />
    <ContentsProjects id="projects" />
    <ContentsCareer id="career" />
    <ContentsBlog id="blog" />
    <ContentsExperience id="experience" />
    <ContentsEducation id="education" />
    <ContentsContact id="contact" />
  </article>
</template>

<style scoped lang="scss">
  article {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 5rem;
    width: 100%;
    height: 100%;
  }
</style>

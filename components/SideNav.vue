<script setup lang="ts">
  const props = defineProps({
    isShow: {
      type: Boolean,
      default: false,
    },
  })

  const emit = defineEmits(['update:isShow'])
  const modelValue = useVModel(props, 'isShow', emit)

  const target = ref<HTMLElement | null>(null)

  onMounted(() => {
    target.value = document.querySelector('body')
    //target에 style 적용
  })

  watch(
    () => modelValue.value,
    (o, v) => {
      if (o != v && target.value) {
        if (v) {
          target.value.style.overflow = 'auto'
        } else {
          target.value.style.overflow = 'hidden'
        }
      }
    },
    { deep: true },
  )
</script>

<template>
  <section
    :style="{
      opacity: isShow ? 1 : 0,
      pointerEvents: isShow ? 'auto' : 'none',
    }"
  >
    <aside
      :style="{
        transform: isShow ? 'translateX(0)' : 'translateX(-100%)',
      }"
    >
      <figure>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="~/assets/images/logo.png" alt="logo" />
            </div>
            <div class="flip-card-back">
              <img src="~/assets/images/me.jpeg" alt="logo" />
            </div>
          </div>
        </div>
      </figure>

      <ul>
        <li><p to="/">HOME</p></li>
        <li><p to="/about">ABOUT</p></li>
        <li><p to="/tech-skills">TECH SKILLS</p></li>
        <li><p to="/projects">PROJECTS</p></li>
        <li><p to="/experience">EXPERIENCE</p></li>
        <li><p to="/career">CAREER</p></li>
        <li><p to="/education">EDUCATION</p></li>
        <li><p to="/blog">BLOG</p></li>
        <li><p to="/contact">CONTACT</p></li>
      </ul>
      <Icon
        class="mobile"
        name="heroicons:bars-3"
        size="36"
        color="#252530"
        @click="modelValue = !modelValue"
      />
    </aside>
  </section>
</template>

<style scoped lang="scss">
  @import 'assets/styles/index.scss';

  section {
    @include mobile {
      position: fixed;
      display: flex;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 999;
      opacity: 0;
    }
    @include mobile-over {
      opacity: 1 !important;
      pointer-events: auto !important;
    }
  }

  aside {
    @include mobile {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: calc(100% - 6rem);
      transform: translateX(-100%);
      transition: all 0.3s ease-in-out;
      background-color: #f5f5f5;
    }
    @include mobile-over {
      transform: none !important;
    }
    width: 100%;
    padding: 3rem 0;

    figure {
      display: flex;
      height: 22rem;
      @include mobile {
        height: 15rem;
      }

      img {
        @include mobile {
          height: 100%;
          width: auto;
        }
        @include mobile-over {
          height: auto;
          width: 100%;
        }
      }
      .flip-card {
        display: flex;
        width: 100%;
        @include mobile {
          height: 100%;
        }
        @include mobile-over {
          height: auto;
          width: 100%;
        }
        perspective: 1000px;
        transition: transform 0.6s;

        .flip-card-inner {
          position: relative;
          display: flex;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s;
          &:hover {
            transform: rotateY(180deg);
          }
        }
      }

      .flip-card-front,
      .flip-card-back {
        display: flex;
        justify-content: center;
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
      }

      .flip-card-front {
        z-index: 1;
        transform: rotateY(0deg);
      }

      .flip-card-back {
        transform: rotateY(180deg);
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      font-size: 1.2rem;
      list-style-type: none;

      gap: 2rem;

      li {
        display: flex;

        p {
          cursor: pointer;
          position: relative;
          display: flex;
          color: #000000b3;
          text-decoration: none;

          &::after {
            content: '';
            position: absolute;
            bottom: 0.3rem;
            left: 50%;
            width: 0;
            height: 0.1rem;
            background-color: #862ddff2; /* 언더라인 색상을 원하는 색으로 변경하세요 */
            transform: translateX(-50%);
            transition: all 0.1s ease-in-out;
          }
          &:hover {
            color: black;
            font-weight: 500;
          }
          &:hover::after {
            width: 100%;
          }
        }
      }
    }
  }
</style>

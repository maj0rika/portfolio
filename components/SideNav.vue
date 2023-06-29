<script setup lang="ts">
  const { scrollToSection } = useScrollTo()
  import { useWindowSize } from '@vueuse/core'

  const { width } = useWindowSize()
  const route = useRoute()
  const router = useRouter()
  const isFlipped = ref(false)

  const props = defineProps({
    isShow: {
      type: Boolean,
      default: false,
    },
  })

  const emit = defineEmits(['update:isShow'])
  const modelValue = useVModel(props, 'isShow', emit)

  const target = ref<HTMLElement | null>(null)

  const menuList = [
    // 'name',
    'about',
    'techSkills',
    'projects',
    'career',
    'blog',

    // 'experience',
    // 'education',
    'contact',
  ]

  const clickMenu = (name: string) => {
    if (route.fullPath !== '/') {
      router.push('/')

      setTimeout(() => {
        modelValue.value = false
        scrollToSection(name)
      }, 500)

      return
    }

    modelValue.value = false
    scrollToSection(name)
  }

  onMounted(() => {
    target.value = document.querySelector('body')
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

  watch(
    () => width.value,
    (o, v) => {
      if (o != v) {
        modelValue.value = false
      }
    },
  )
</script>

<template>
  <section
    :style="{
      opacity: isShow ? 1 : 0,
      pointerEvents: isShow ? 'auto' : 'none',
      transform: isShow ? 'translateX(0%)' : 'translateX(-100%)',
    }"
    @mouseover="isFlipped = true"
    @mouseleave="isFlipped = false"
  >
    <aside
      :style="{ transform: isShow ? 'translateX(0%)' : 'translateX(-100%)' }"
    >
      <figure>
        <div class="flip-card">
          <div
            class="flip-card-inner"
            :style="{
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }"
          >
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
        <li v-for="menu in menuList" :key="menu">
          <p @click="clickMenu(menu)">{{ menu.toUpperCase() }}</p>
        </li>
      </ul>
    </aside>
  </section>
</template>

<style scoped lang="scss">
  @import 'assets/styles/index.scss';

  section {
    background-color: #f5f5f5;

    @include mobile {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      display: flex;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }

    @include mobile-over {
      position: sticky;
      height: calc(100vh);
      top: 0;
      align-self: start;
      opacity: 1 !important;
      pointer-events: auto !important;
      transform: none !important;
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
    }

    @include mobile-over {
      transform: none !important;
      width: 30rem;
    }

    padding: 3rem 0;

    figure {
      @include mobile {
        height: 15rem;
      }

      display: flex;
      height: 22rem;

      img {
        @include mobile {
          width: auto;
          height: 100%;
        }

        @include mobile-over {
          width: 100%;
          height: auto;
        }
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      list-style-type: none;

      gap: 2rem;

      li {
        display: flex;

        p {
          position: relative;
          display: flex;
          color: #000000b3;
          text-decoration: none;
          cursor: pointer;
          font-size: 1.2rem;

          &::after {
            content: '';
            position: absolute;
            bottom: 0.3rem;
            left: 50%;
            width: 0;
            height: 0.1rem;
            background-color: #862ddff2;
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

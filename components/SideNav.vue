<script setup lang="ts">
  //TODO: 모바일 대응 하기
</script>

<template>
  <aside>
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
  </aside>
</template>

<style scoped lang="scss">
  aside {
    width: 100%;
    padding: 3rem 0;

    figure {
      display: flex;
      height: 22rem;

      img {
        width: 100%;
        height: auto;
      }
      .flip-card {
        display: flex;
        width: 100%;
        perspective: 1000px;
        transition: transform 0.6s;

        .flip-card-inner {
          position: relative;
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

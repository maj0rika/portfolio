<template>
  <section class="about-me">
    <p>About Me</p>
    <div class="me">
      <img src="~/assets/images/me.jpeg" alt="logo" />
      <div class="me-content">
        <div>
          <p>Front-End Developer</p>
          <InputWaveText style="font-size: 1.6rem" text="maj0rika" />
        </div>
      </div>
    </div>
    <article>
      <h2>UI/UX를 항상 생각합니다.</h2>
      <p>
        아무리 기능이 좋아도 사용자가 사용하기 어렵다면 그 가치를 떨어뜨릴 수
        있습니다.
        <br />
        기능을 구현하는 것 뿐만 아니라 사용자가 편리하게 사용할 수 있는 UI/UX를
        항상 생각하며 개발합니다.
      </p>
    </article>

    <article>
      <h2>소통을 중요시합니다.</h2>
      <p>
        개발자는 혼자서 일하는 것이 아닙니다.
        <br />
        그저 생각에만 머무르지 않고 생각을 표현하고, 팀원들과의 소통을 통해 더
        나은 서비스를 만들어 나갑니다.
      </p>
    </article>
  </section>
</template>

<style scoped lang="scss">
  .about-me {
    display: flex;
    flex-flow: column;

    p {
      font-size: 2rem;
      // padding: 1rem 0;
    }

    .me {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(3, 1fr);

      img {
        width: 100%;
        height: auto;
      }

      .me-content {
        div {
          display: flex;
          align-items: center;
        }

        p {
          white-space: nowrap;
          font-weight: 700;
          padding-right: 1rem;
        }

        display: flex;
        flex-flow: column;
        grid-column: span 2 / span 2;
      }
    }

    article {
      margin-top: 1rem;

      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1.5rem;
        margin-top: 1rem;
      }
    }
  }
</style>

<template>
  <article class="portfolio--content-entry">
    <header>
      <img :src="image" :alt="name">
    </header>

    <div class="description">
      <h3>{{ name }}</h3>
      <p v-html="description"></p>
      <div class="project-type"><img :src="typeImage" :alt="type"></div>
    </div>
  </article>
</template>

<script>
export default {
  name: "PortfolioItem",
  props: {
    image: String,
    video: String,
    name: String,
    description: String,
    type: String,
    typeImage: String
  }
}
</script>

<style lang="scss">
.portfolio--content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.portfolio--content-entry {
  width: calc(33% - (4vw / 3));
  margin-bottom: 4vw;
  box-shadow: 0 0 30px rgba(0,0,0,0.1);
  transition: 0.3s transform, 0.3s box-shadow;

  &:hover {
    transform: translateY(-0.3vw);
    box-shadow: 0 0 30px rgba(0,0,0,0.33);
  }

  header {
    background: #000;
  }

  .description {
    font-size: 14px;
    padding: 2vw;
    background: var(--med-gray-alpha);

    > h3 {
      margin-bottom: var(--space);
    }

    > p {
      margin-bottom: var(--space-2);
    }
  }

  .project-type {
    text-align: right;
  }
}
</style>

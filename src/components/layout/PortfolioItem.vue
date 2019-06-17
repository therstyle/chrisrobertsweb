<template>
  <article class="portfolio--content-entry">
    <header>
      <img :src="image">
    </header>

    <div class="description">
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
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
    type: String
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

  header {
    background: #000;
  }

  .description {
    font-size: 14px;
    padding: 2vw;
    background: var(--med-gray);
  }
}
</style>

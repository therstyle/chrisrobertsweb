<template>
  <article>
    <header>

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

  > article {
    width: 33%;
  }
}
</style>

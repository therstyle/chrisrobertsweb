<template>
  <section id="portfolio" class="portfolio" :class="{ viewed : viewed }">
    <Heading title="Portfolio"></Heading>

    <div class="portfolio--content content">
      <PorfolioItem v-for="(portfolioItem, index) in portfolioItems" 
        :count="index + 1"
        :key="index"
        :url="portfolioItem.url"
        :image="portfolioItem.image"
        :video="portfolioItem.video"
        :name="portfolioItem.name"
        :description="portfolioItem.description"
        :type="portfolioItem.type"
        :typeImage="portfolioItem.typeImage"
      ></PorfolioItem>
    </div>
  </section>
</template>

<script>
import Heading from './layout/Heading.vue';
import PorfolioItem from './layout/PortfolioItem.vue';
import observer from './helpers/observer.js';

export default {
  name: 'Portfolio',
  data() {
    return {
      i: 0
    }
  },
  mixins: [observer],
  components: {
    Heading,
    PorfolioItem
  },
  props: {
    portfolioItems: Array,
    viewed: Boolean
  },
  mounted() {
    this.wayPoint();
  }
}
</script>

<style lang="scss">
.portfolio--content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: calc(var(--space-1) + var(--space-half));
}
</style>


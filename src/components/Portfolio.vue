<template>
  <section id="portfolio" class="portfolio" :class="{ viewed : viewed }">
    <Heading title="Portfolio"></Heading>

    <div class="portfolio--content content">
      <PorfolioItem v-for="portfolioItem in portfolioItems" 
        :key="portfolioItem.name"
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
      viewed: false
    }
  },
  mixins: [observer],
  components: {
    Heading,
    PorfolioItem
  },
  props: {
    portfolioItems: Array
  },
  mounted() {
    this.wayPoint();
  }
}
</script>

<style lang="scss">
  .portfolio {
  }
</style>

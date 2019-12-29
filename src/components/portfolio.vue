<template>
  <section id="portfolio" class="portfolio" :class="{ viewed : viewed }">
    <heading title="Portfolio"></heading>

    <div class="portfolio--content content">
      <porfolioItem v-for="(portfolioItem, index) in portfolioItems" 
        :count="index + 1"
        :key="index"
        :url="portfolioItem.url"
        :image="portfolioItem.image"
        :video="portfolioItem.video"
        :name="portfolioItem.name"
        :description="portfolioItem.description"
        :type="portfolioItem.type"
        :typeImage="portfolioItem.typeImage"
        :source="portfolioItem.source"
      ></porfolioItem>
    </div>
  </section>
</template>

<script>
import heading from './layout/heading.vue';
import porfolioItem from './layout/portfolioItem.vue';
import observer from './helpers/observer.js';

export default {
  name: 'portfolio',
  data() {
    return {
      i: 0
    }
  },
  mixins: [observer],
  components: {
    heading,
    porfolioItem
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
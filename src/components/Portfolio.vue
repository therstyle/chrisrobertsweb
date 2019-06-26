<template>
  <section id="portfolio" class="portfolio">
    <Observer v-on:intersected="intersected"></Observer>
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
import Observer from './helpers/Observer.vue';

export default {
  name: 'Portfolio',
  components: {
    Heading,
    PorfolioItem,
    Observer
  },
  props: {
    portfolioItems: Array
  },
  methods: {
    intersected(currentSection) {
      this.$emit('intersected', currentSection);
    }
  }
}
</script>

<style lang="scss">
  .portfolio {
  }
</style>

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

export default {
  name: 'Portfolio',
  data() {
    return {
      viewed: false,
      observer: null,
      parentName: ''
    }
  },
  components: {
    Heading,
    PorfolioItem
  },
  props: {
    portfolioItems: Array
  },
  methods: {
    intersected(currentSection) {
      this.$emit('intersected', currentSection);
      this.viewed = true;
    },
    wayPoint() {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            if (this.$vnode.elm.id) {
              this.parentName = this.$vnode.elm.id;
              console.log(this.parentName + 'waypoint');
              this.intersected(this.parentName);
            }
          }
        });
      });

      this.observer.observe(this.$el);
    }
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

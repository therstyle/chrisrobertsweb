<template>
  <footer class="featured-brands">
    <h5>Brands I've Worked With</h5>

    <div class="brand-carousel" ref="carousel">
      <div class="brand" v-for="(featuredBrand, index) in featuredBrands" :key="index">
        <img :src="featuredBrand.logo" :alt="featuredBrand.name">
      </div>
    </div>
  </footer>
</template>

<script>
import Flickity from 'flickity';

export default {
  name: "FeaturedBrands",
  data() {
    return {
      carouselWidth: 0,
      shadowActive: false,
      brandWidth: 200,
      totalBrands: 0
    }
  },
  props: {
    featuredBrands: Array
  },
  methods: {
    shadow() {
      this.carouselWidth = this.$refs.carousel.offsetWidth;

      const threshold = this.carouselWidth - 50;
      const brandSpace = this.brandWidth * this.totalBrands;

      console.log(`threshold = ${threshold}`);
      console.log(`brandspace = ${brandSpace}`);

      if (threshold < brandSpace) {
        this.shadowActive = true;
        console.log('add a shadow!')
      }
      else {
        this.shadowActive = false;
        console.log('nah no shadow');
      }
    },
    initCarousel() {
      new Flickity( this.$refs.carousel, {
        freeScroll: true,
        contain: true,
        prevNextButtons: false,
        pageDots: false
      });

      this.shadow();
    }
  },
  mounted: function() {
    this.initCarousel();
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/vars';
@import '../../assets/css/flickity.min.css';

.featured-brands {
  margin-top: var(--space-2);
}

.brand {
  //min-width: calc(33.33% - 1px);
  min-width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  border-left: 1px solid var(--light-gray);
  padding: 0 1rem;
}

h5 {
  font-size: 1.3rem;
  text-transform: uppercase;
}
</style>
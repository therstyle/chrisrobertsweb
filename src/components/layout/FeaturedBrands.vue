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
  props: {
    featuredBrands: Array
  },
  methods: {
    initCarousel() {
      const flkty = new Flickity( this.$refs.carousel, {
        freeScroll: true,
        contain: true,
        prevNextButtons: false,
        pageDots: false
      });
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
  width: 33.33%;
  height: 40px;
  display: flex;
  justify-content: center;
}

h5 {
  font-size: 1.3rem;
  text-transform: uppercase;
}
</style>
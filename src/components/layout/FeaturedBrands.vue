<template>
  <footer class="featured-brands">
    <h5>Brands I've Worked With</h5>

    <div class="brand-carousel" :class="{ draggable : draggable }" ref="carousel">
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
      brandWidth: 200,
      draggable: false,
    }
  },
  props: {
    featuredBrands: Array
  },
  methods: {
    count(amount) {
      amount++;
      console.log(amount);
      return amount;
    },
    isDraggable() {
      this.carouselWidth = this.$refs.carousel.offsetWidth;

      let i = 0;

      this.featuredBrands.forEach(() => {
        i++;
      });

      const brands = i;
      const threshold = this.carouselWidth - 50;      
      const brandWidth = this.brandWidth * brands;

      if (threshold < brandWidth) {
        this.draggable = true;
      }
      else {
        this.draggable = false;
      }
    },
    initCarousel() {
      new Flickity( this.$refs.carousel, {
        freeScroll: true,
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        cellAlign: 'left'
      });

      this.isDraggable();
    }
  },
  mounted() {
    this.initCarousel();
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/vars';
@import '../../assets/css/flickity.min.css';

.featured-brands {
  margin-top: var(--space-2);
  outline: 0 !important;

  * {
    outline: 0 !important;
  }
}

h5 {
  font-size: 1.3rem;
  text-transform: uppercase;
}

.draggable {
  position: relative;
  &:hover {
    cursor: grab;
  }

  &:after {
    content: '';
    width: 15px;
    height: 100%;
    top: 0;
    right: -15px;
    bottom: 0;
    box-shadow: -14px 0 18px rgba(0, 0, 0, 0.33);
    position: absolute;
    display: block;
    z-index: 5000;
  }
}

.brand {
  min-width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  border-left: 1px solid var(--light-gray);
  padding: 0 var(--space-2);

  &:last-child {
    border-right: 1px solid var(--light-gray);
  }
}

@media only screen and (max-width: $phone-breakpoint) {
  .featured-brands {
    h5 {
      font-size: 1rem;
    }
  }
}
</style>
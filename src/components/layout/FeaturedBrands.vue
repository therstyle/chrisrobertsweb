<template>
  <footer class="featured-brands">
    <h5>Brands I've Worked With</h5>

    <ul>
      <li v-for="(featuredBrand, index) in featuredBrands" :key="index">
        <img :src="featuredBrand.logo" :alt="featuredBrand.name">
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "FeaturedBrands",
  props: {
    featuredBrands: Array
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/vars';

.featured-brands {
  margin-top: var(--space-2);

  > ul {
    margin: 0;
    padding: 0;
    display: flex;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;

    > li {
      min-width: calc(33% - 1px);
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;

      > img {
        display: block;
        max-height: 40px;
      }
    }
  }
}

h5 {
  font-size: 1.3rem;
  text-transform: uppercase;
}
</style>
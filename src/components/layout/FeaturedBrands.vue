<template>
  <footer class="featured-brands">
    <h5>Brands I've Worked With</h5>
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
}

h5 {
  font-size: 1.3rem;
  text-transform: uppercase;
}
</style>
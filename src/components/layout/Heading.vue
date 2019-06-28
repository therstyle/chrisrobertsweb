<template>
  <header class="heading">
    <h1>{{ title }}</h1>
    <div class="line-grid">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>

      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Heading',
  props: ['title']
}
</script>

<style lang="scss" scoped>
.heading {
  opacity: 0;
  transition: 0.3s all ease-in-out;
}

.viewed {
  .heading {
    opacity: 1;
  }
}
</style>


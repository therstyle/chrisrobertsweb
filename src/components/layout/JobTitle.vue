<template>
  <header class="animate" :class="{ viewed : viewed }">
    <img :src="logo" :alt="company">
    <div class="company-info">
      <h3>{{ company }}</h3>
      <small>{{ title }}</small>
    </div>
  </header>
</template>

<script>
import animate from '../helpers/animate.js';

export default {
  name: "JobTitle",
  mixins: [animate],
  data() {
    return {
      settings: {
        threshold: 1
      }
    }
  },
  props: {
    logo: String,
    company: String,
    title: String
  },
  mounted() {
    this.animate(this.settings);
  }
}
</script>
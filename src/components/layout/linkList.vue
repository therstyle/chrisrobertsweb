<template>
  <ul class="info animate" :class="{ viewed : viewed }">
    <li v-for="(link, index) in links" :key="index">
      <img :src="link.icon" :alt="link.text">
      <a :href="link.source" target="_blank" class="link">{{ link.text }}</a>
    </li>
  </ul>
</template>

<script>
import animate from '../helpers/animate.js';

export default {
  name: "linkList",
  mixins: [animate],
  data() {
    return {
      settings: {
        threshold: 1
      }
    }
  },
  props: {
    links: Object
  },
  mounted() {
    this.animate(this.settings);
  }
}
</script>
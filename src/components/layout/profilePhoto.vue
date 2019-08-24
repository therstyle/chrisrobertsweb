<template>
  <div class="photo animate" :class="{ viewed : viewed }">
    <picture>
      <source v-if="image.image_2x_webp" :srcset="`${image.image_1x_webp} 1x, ${image.image_2x_webp} 2x`" type="image/webp">
      <source v-if="image.image_2x" :srcset="`${image.image_1x} 1x, ${image.image_2x} 2x`" type="image/jpeg">
      <img v-if="image.image_1x" :src="image.image_1x" alt="Chris Roberts" class="skill-tree--photo">
    </picture>

    <h3 class="sig">{{ name }}</h3>
  </div>
</template>

<script>
import animate from '../helpers/animate.js';

export default {
  name: "profilePhoto",
  mixins: [animate],
  data() {
    return {
      settings: {
        threshold: 0.5
      }
    }
  },
  props: {
    image: Object,
    name: String
  },
  mounted() {
    this.animate(this.settings);
  }
}
</script>
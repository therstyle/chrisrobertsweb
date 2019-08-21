<template>
  <li class="animate" :class="{ viewed : viewed }">{{ detail }}</li>
</template>

<script>
import animate from '../helpers/animate';

export default {
  name: 'EntryDetail',
  mixins: [animate],
  props: {
    detail: String
  },
  mounted() {
    this.animate();
  }
}
</script>
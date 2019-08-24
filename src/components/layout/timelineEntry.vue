<template>
  <article class="timeline--entry" :class="{ viewed : viewed }" :data-year="year">
    <jobTitle 
      :logo="logo"
      :company="company"
      :title="title"
    ></jobTitle>

    <ul class="details">
      <entryDetail v-for="(detail, index) in details" 
        :key="index"
        :detail="detail"
        ></entryDetail>
    </ul>

    <template v-if="featuredBrands">
      <featuredBrands :featuredBrands="featuredBrands"></featuredBrands>
    </template>

    <template v-if="stats">
      <stats :stats="stats"></stats>
    </template>
  </article>
</template>

<script>
import featuredBrands from './featuredBrands.vue';
import stats from './stats.vue';
import entryDetail from './entryDetail.vue';
import jobTitle from './jobTitle.vue';
import animate from '../helpers/animate.js';

export default {
  name: 'timelineEntry',
  mixins: [animate],
  components: {
    featuredBrands, 
    stats, 
    entryDetail, 
    jobTitle
  },
  data() {
    return {
      settings: {
        threshold: 0.5
      }
    }
  },
  props: {
    year: Number,
    logo: String,
    company: String,
    title: String,
    details: Array,
    featuredBrands: Array,
    stats: Array
  },
  mounted() {
    this.animate(this.settings);
  }
}
</script>
<template>
  <article class="timeline--entry" :class="{ viewed : viewed }" :data-year="year">
    <JobTitle 
      :logo="logo"
      :company="company"
      :title="title"
    ></JobTitle>

    <ul class="details">
      <EntryDetail v-for="(detail, index) in details" 
        :key="index"
        :detail="detail"
        ></EntryDetail>
    </ul>

    <template v-if="featuredBrands">
      <FeaturedBrands :featuredBrands="featuredBrands"></featuredBrands>
    </template>

    <template v-if="stats">
      <Stats :stats="stats"></Stats>
    </template>
  </article>
</template>

<script>
import FeaturedBrands from './FeaturedBrands.vue';
import Stats from './Stats.vue';
import EntryDetail from './EntryDetail.vue';
import JobTitle from './JobTitle.vue';
import animate from '../helpers/animate.js';

export default {
  name: 'Timeline-Entry',
  mixins: [animate],
  components: {
    FeaturedBrands, Stats, EntryDetail, JobTitle
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
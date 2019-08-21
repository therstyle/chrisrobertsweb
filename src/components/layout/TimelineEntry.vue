<template>
  <article class="timeline--entry" :data-year="year">
    <header>
      <img :src="logo" :alt="company">
      <div class="company-info">
        <h3>{{ company }}</h3>
        <small>{{ title }}</small>
      </div>
    </header>

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
import animate from './../helpers/animate.js';

export default {
  name: 'Timeline-Entry',
  mixins: [animate],
  components: {
    FeaturedBrands, Stats, EntryDetail
  },
  props: {
    year: Number,
    logo: String,
    company: String,
    title: String,
    details: Array,
    featuredBrands: Array,
    stats: Array
  }
}
</script>
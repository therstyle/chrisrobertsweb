<template>
  <div class="skillset animate" :class="{ viewed : viewed }">
    <h3>{{ headline }}</h3>
    <ul class="skills">
      <skill v-for="(skill, index) in skillset" 
        :key="index"
        :logo="skill.logo"
        :name="skill.name"
        :startYear="skill.startYear"
      ></skill>
    </ul>
  </div>
</template>

<script>
import skill from './skill.vue';
import animate from '../helpers/animate.js';

export default {
  name: "skillset",
  mixins: [animate],
  components: {
    skill
  },
  data() {
    return {
      settings: {
        threshold: 0.33
      }
    }
  },
  props: {
    headline: String,
    skillset: Array,
  },
  mounted() {
    this.animate(this.settings);
  }
}
</script>
<template>
  <div class="skillset">
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
  props: {
    headline: String,
    skillset: Array,
  }
}
</script>
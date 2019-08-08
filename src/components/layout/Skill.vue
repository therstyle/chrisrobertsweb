<template>
  <li>
    <div>
      <img :src="logo" :alt="name">
      <h6>{{ name }}</h6>
      <small>{{ years }} Years</small>
      {{ experience() }}
    </div>
  </li>
</template>

<script>
export default {
  name: 'Skill',
  methods: {
    experience(startYear) {
      const date = new Date();
      const currentYear = date.getFullYear();

      console.log(currentYear);
    }
  },
  props: {
    logo: String,
    name: String,
    years: Number
  }
}
</script>


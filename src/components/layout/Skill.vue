<template>
  <li>
    <div>
      <img :src="logo" :alt="name">
      <h6>{{ name }}</h6>
      <small>{{ experience(startYear) }}</small>
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
      const years = currentYear - startYear;
      const label = years > 1 ? 'Years' : 'Year';
      console.log(currentYear);
      return `${years} ${label}`;
    }
  },
  props: {
    logo: String,
    name: String,
    startYear: Number
  }
}
</script>


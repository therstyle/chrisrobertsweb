<template>
  <li>
    <div>
      <img :src="logo" :alt="name">
      <h6>{{ name }}</h6>
      <small>{{ years }} Years</small>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    logo: String,
    name: String,
    years: Number
  }
}
</script>


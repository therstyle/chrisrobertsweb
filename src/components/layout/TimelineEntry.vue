<template>
  <article class="timeline--entry" :data-year="year">
    <header>
      <img src="https://dummyimage.com/42/fff/fff" alt="">
      <div class="company-info">
        <h3>{{ company }}</h3>
        <small>{{ title }}</small>
      </div>
    </header>

    <ul class="details">
      <li v-for="detail in details" :key="detail">{{ detail }}</li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'Timeline-Entry',
  props: {
    year: Number,
    logo: String,
    company: String,
    title: String,
    details: Array
  }
}
</script>
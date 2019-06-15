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
      <li>Develop and maintain custom WordPress themes for clients utilizing PHP, JavaScript, SASS/CSS</li>
      <li>Use REST APIs to develop SPAs with Vue.JS and React</li>
      <li>Work closely with design team to maintain design and web
development standards</li>
      <li>Mentor, assist, and provide code reviews for junior web developers</li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'Timeline-Entry',
  props: {
    year: Number,
    company: String,
    title: String,
    details: Array
  }
}
</script>
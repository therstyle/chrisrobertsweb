<template>
  <section class="contact">
    <Heading :title="headline"></Heading>
    <div class="contact--content content">
      <div class="contact-form">
        <picture>
          <img :src="photo" alt="">
        </picture>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from './layout/Heading.vue';

export default {
  name: 'Contact',
  components: {
    Heading
  },
  props: {
    headline: String,
    photo: String,
  }
}
</script>

<style lang="scss">
  .contact-form {
    position: relative;
  }


</style>

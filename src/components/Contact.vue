<template>
  <section id="contact" class="contact" :class="{ viewed : viewed }">
    <Heading :title="headline"></Heading>
    <div class="contact--content content">
      <div class="contact-form">
        <form>
          <input id="name" type="text" placeholder="NAME">
          <input id="email" type="email" placeholder="EMAIL ADDRESS">
          <textarea name="" id="message" placeholder="MESSAGE"></textarea>
          <button>{{ buttonText }}</button>
        </form>
        
        <picture class="contact-photo" :data-pixels="amountScrolled">
          <img :src="photo" alt="">
        </picture>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from './layout/Heading.vue';
import observer from './helpers/observer.js';

export default {
  name: 'Contact',
  data() {
    return {
      viewed: false,
      amountScrolled: 0,
    }
  },
  mixins: [observer],
  components: {
    Heading
  },
  props: {
    headline: String,
    photo: String,
    buttonText: String
  },
  methods: {
    getCurrentPosition() {
      this.amountScrolled = window.scrollY;
      this.amountScrolled = Math.round(this.amountScrolled);
    }
  },
  mounted() {
    this.wayPoint();
    window.addEventListener('scroll', this.getCurrentPosition);
  }
}
</script>

<style lang="scss">
  .contact-form {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: var(--white);
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: #FFF;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
      color: var(--white);
    }

    form {
      display: block;
      padding: 2vw;
      background: var(--med-gray-alpha-alt);
      box-shadow: 0 0 90px rgba(0,0,0,0.25);
      position: absolute;
      left: 0;
      width: 50%;

      > textarea,
      input {
        margin-bottom: 2vw;
        display: block;
        width: 100%;
        background: transparent;
        border: 1px solid var(--light-gray);
        padding: 1vw;
        font-size: 16px;
        color: var(--white);
      }

      button {
        text-transform: uppercase;
        border: none;
        background: var(--white);
        font-weight: 900;
        min-width: 160px;
        padding-top: 1vw;
        padding-bottom: 1vw;
        margin: auto;
        display: block;
        font-size: 16px;
      }
    }
  }

  .contact-photo {
    width: 100%;
    max-width: 60%;

    &:before {
      content: attr(data-pixels);
      display: block;
      font-size: 4vw;
      font-weight: 600;
      position: absolute;
      right: 4vw;
      top: -2.5vw;
    }

    &:after {
      content: 'Pixels Made With Style';
      font-family: var(--accent-font);
      font-size: 1vw;
      text-transform: uppercase;
      position: absolute;
      top: -2.5vw;
      margin-top: 4.9vw;
      right: 3.2vw;
    }

    img {
      max-width: none;
      width: 100%;
    }
  }
</style>

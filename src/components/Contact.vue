<template>
  <section id="contact" class="contact" :class="{ viewed : viewed }">
    <Heading :title="headline"></Heading>
    <div class="contact--content content">
      <div class="contact-form">
        <form v-on:submit.prevent="formSubmit">
          <input id="name" type="text" placeholder="NAME" v-model="formName">
          <input id="email" type="email" placeholder="EMAIL ADDRESS" v-model="formEmail">
          <textarea name="" id="message" placeholder="MESSAGE" v-model="formMessage"></textarea>
          <button>{{ buttonText }}</button>
        </form>
        
        <picture class="contact-photo" :data-pixels="amountScrolled">
          <img v-if="image.image_1x" :src="image.image_1x" :srcset="`${image.image_1x} 1x, ${image.image_2x} 2x`" alt="">
          <img v-else :src="image.image_1x" alt="">
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
      formName: '',
      formEmail: '',
      formMessage: ''
    }
  },
  mixins: [observer],
  components: {
    Heading
  },
  props: {
    headline: String,
    image: Object,
    buttonText: String
  },
  methods: {
    getCurrentPosition() {
      this.amountScrolled = window.scrollY;
      this.amountScrolled = Math.round(this.amountScrolled);
    },
    formSubmit() {
      console.log('you pressed submit');

      async () => {
        const apiURL = 'http://rstyledesign.com/mail.php';
        const args = {
          headers: {
            "content-type":"application/x-www-form-urlencoded"
          },
          method: 'POST',
          mode: "cors",
          body: `to=${this.formEmail}&name=${this.formName}&message=${this.formMessage}`
        };

        await fetch(apiURL, args)
        .then (response => {
          console.log(response);
          return response.text();
        })
        .then (
          body => {
            console.log(body);
            console.log('sent form data');
          }
        )

        // const data = await fetch(`http://${location}:9000/api/sensors/`, settings)
        // .then(response => response.json())
        // .then(json => {
        //     return json;
        // })
        // .catch(e => {
        //     return e
        // });

        // return data;

        //const data = response.text();

        //return data;
      }
    }
  },
  mounted() {
    this.wayPoint();
    window.addEventListener('scroll', this.getCurrentPosition);
  }
}
</script>

<style lang="scss">
  @import '../assets/css/vars';

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
        min-height: 46px;

        &:hover {
          cursor: pointer;
        }
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

  @media only screen and (max-width: $lg-tablet-breakpoint) {
    .contact--content.content {
      padding-left: 0;
      padding-right: 0;
    }

    .contact-form {
      flex-direction: column;
      margin-top: 75px;

      form {
        z-index: 10;
        width: calc(100% - 8vw);
        top: -75px;
        padding: 4vw;
        margin: 0 4vw;

        textarea {
          min-height: 120px;
        }

        > textarea,
        input {
            margin-bottom: 4vw;
        }
      }
    }

    .contact-photo {
      width: calc(100vw - var(--sidebar-width));
      max-width: none;
      height: 500px;
      overflow: hidden;
      z-index: 1;

      &:before {
        top: auto;
        bottom: -5.5vw;
        left: 0;
        right: 0;
        font-size: 7.5vw;
        text-align: center;
      }
      
      &:after {
        top: auto;
        bottom: -6vw;
        left: 0;
        right: 0;
        font-size: 1.5vw;
        text-align: center;
      }

      img {
        width: 100%;
      }
    }

    .contact-form form,
    .contact-photo {
      flex: 1 100%;
    }
  }

  @media only screen and (max-width: $tablet-breakpoint) {
    .contact-form {
      form {
        > input,
        textarea {
          padding: 1.5vw;
        }
      }
    }

    .contact-photo {
      &:before {
        bottom: -7.5vw;
        font-size: 10vw;
      }
      
      &:after {
        bottom: -8vw;
        font-size: 2vw;
      }

      img {
        width: auto;
      }
    }
  }

  @media only screen and (max-width: $phone-breakpoint) {
    .contact-form {
      form {
        padding: 5vw;

      > textarea,
      input {
          margin-bottom: 5vw;
        }
      }
    }
  }
</style>

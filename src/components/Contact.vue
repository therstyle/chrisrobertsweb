<template>
  <section id="contact" class="contact" :class="{ viewed : viewed }">
    <Heading :title="headline"></Heading>
    <div class="contact--content content">
      <div class="contact-form">
        <form v-on:submit.prevent="formSubmit">
          <div class="field-group">
            <input id="name" type="text" placeholder="NAME" v-model="formName">
            <span v-if="formAction && formName === ''" class="error">{{ formErrorMessage }}</span>
          </div>

          <div class="field-group">
            <input id="email" type="email" placeholder="EMAIL ADDRESS" v-model="formEmail">
            <span v-if="formAction && formEmail === ''" class="error">{{ formErrorMessage }}</span>
          </div>

          <div class="field-group">
            <textarea name="" id="message" placeholder="MESSAGE" v-model="formMessage"></textarea>
            <span v-if="formAction && formMessage === ''" class="error">{{ formErrorMessage }}</span>
          </div>

          <button>{{ buttonText }} <img :src="loaderImg" v-if="loading && loaderImg"></button>

          <div v-if="formResponse !== ''" class="form-response" v-html="formResponse"></div>
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
      amountScrolled: 0,
      formName: '',
      formNameError: false,
      formEmail: '',
      formEmailError: false,
      formMessage: '',
      formMessageError: false,
      formAction: false,
      formResponse: '',
      loading: false,
    }
  },
  mixins: [observer],
  components: {
    Heading
  },
  props: {
    headline: String,
    image: Object,
    buttonText: String,
    formErrorMessage: String,
    loaderImg: String,
    viewed: Boolean
  },
  methods: {
    getCurrentPosition() {
      this.amountScrolled = window.scrollY;
      this.amountScrolled = Math.round(this.amountScrolled);
    },
    async formSubmit() {
      this.formAction = true;

      if (this.formName !== '' && this.formEmail !== '' && this.formMessage !== '') {
        this.loading = true;

        try {
          const apiURL = 'https://mailer.chrisrobertsweb.dev';
          const args = {
            headers: {
              "content-type":"application/x-www-form-urlencoded"
            },
            method: 'POST',
            mode: "cors",
            body: `to=${this.formEmail}&name=${this.formName}&message=${this.formMessage}`
          };

          const data = await fetch(apiURL, args)
          .then (response => {
            //console.log(response);
            this.formAction = true;
            this.formNameError = false;
            this.formEmailError = false;
            this.formMessageError = false;
            return response.text();
          })
          .then (
            body => {
              //console.log(body);
              this.formAction = false;
              this.formName = '';
              this.formEmail = '';
              this.formMessage = '';
              this.formResponse = body;
            }
          )

          this.loading = false;
          return data;
        }
        catch (error) {
          console.error(error);
        }
      }
      else if (this.formName === '') {
        this.formNameError = true;
      }
      else if (this.formEmail === '') {
        this.formEmailError = true;
      }
      else if (this.formMessage === '') {
        this.formMessageError = true;
      }
      else {
        this.formNameError = true;
        this.formEmailError = true;
        this.formMessageError = true;
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
      padding: var(--space-2);
      background: var(--med-gray-alpha-alt);
      box-shadow: 0 0 90px rgba(0,0,0,0.25);
      position: absolute;
      left: 0;
      width: 50%;

      textarea,
      input {
        display: block;
        width: 100%;
        background: transparent;
        border: 1px solid var(--light-gray);
        padding: 1.2rem;
        font-size: 1.6rem;
        color: var(--white);
      }

      textarea {
        min-height: 100px;
      }

      button {
        text-transform: uppercase;
        border: none;
        background: var(--white);
        font-weight: 900;
        min-width: 208px;
        padding-top: 1vw;
        padding-bottom: 1vw;
        margin: auto;
        display: block;
        font-size: 1.6rem;
        min-height: 46px;
        position: relative;

        img {
          max-width: 24px;
          position: absolute;
          right: 10px;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .field-group {
    margin-bottom: calc(var(--space-1) + var(--space-half));
  }

  .contact-photo {
    width: 100%;
    max-width: 60%;

    &:before {
      content: attr(data-pixels);
      display: block;
      font-size: 6rem;
      font-weight: 600;
      position: absolute;
      right: 3.2rem;
      top: -3.6rem;
    }

    &:after {
      content: 'Pixels Made With Style';
      font-family: var(--accent-font);
      font-size: 1.4rem;
      text-transform: uppercase;
      position: absolute;
      top: -2.6rem;
      margin-top: 6rem;
      right: 3.2rem;
    }

    img {
      max-width: none;
      width: 100%;
    }
  }

  .error, 
  .form-response {
    font-size: 1.2rem;
    display: block;
    transition: 0.3s all;
    margin-top: 0.5vw;
  }

  .form-response {
    margin-top: 2vw;
  }

  @media only screen and (max-width: $lg-tablet-breakpoint) {
    .contact--content.content {
      padding-left: 0;
      padding-right: 0;
      padding-bottom: var(--space-8) !important;
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
      }
    }

    .field-group {
       margin-bottom: 4vw;
    }

    .contact-photo {
      //width: calc(100vw - (var(--sidebar-width) + 8vw));
      width: 100%;
      max-width: none;
      height: 500px;
      overflow-x: hidden;
      z-index: 1;

      &:before {
        top: auto;
        bottom: -5.5vw;
        left: 0;
        right: 0;
        font-size: 10.5rem;
        text-align: center;
      }
      
      &:after {
        top: auto;
        bottom: -6vw;
        left: 0;
        right: 0;
        font-size: 2rem;
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
        font-size: 14.4rem;
      }
      
      &:after {
        bottom: -8vw;
        font-size: 3rem;
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
      }
    }

    .field-group {
      margin-bottom: 5vw;
    }
  }
</style>

<template>
  <section id="intro" class="intro" :class="{ viewed : viewed }">
    <Observer v-on:intersected="intersected"></Observer>
    <div class="intro--content">
      <h6 class="sub-heading">Front End Developer | Boston, MA</h6>
      <h1 class="heading" v-html="introHeadline"></h1>

      <div v-html="introText"></div>
    </div>

    <div class="scroll-down">
      <a href="#" v-on:click.prevent="scrollRequest('resume')">
        <svg fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0C9.787 0 4.733 5.134 4.733 11.444v9.113C4.733 26.867 9.787 32 16 32c6.212 0 11.267-5.118 11.267-11.408v-9.148C27.267 5.134 22.212 0 16 0zm9.148 20.592c0 5.122-4.104 9.289-9.148 9.289s-9.148-4.183-9.148-9.325v-9.112c0-5.142 4.104-9.325 9.148-9.325s9.148 4.183 9.148 9.325v9.148z" fill="#fff" fill-opacity=".5"/><path d="M16 8.76a1.06 1.06 0 0 0-1.06 1.06v3.708a1.06 1.06 0 0 0 2.12 0V9.819A1.06 1.06 0 0 0 16 8.76z" fill="#fff" fill-opacity=".5"/></svg>

        <span class="sub-heading">{{ scrollText }}</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Intro',
  data() {
    return {
      viewed: false,
      observer: null,
      parentName: ''
    }
  },
  props: {
    introHeadline: String,
    introText: String,
    scrollText: String,
    video: String
  },
  methods: {
    intersected(currentSection) {
      this.$emit('intersected', currentSection);
      this.viewed = true;
    },
    scrollRequest(section) {
      this.$emit('scrollRequest', section);
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          if (this.$vnode.elm.id) {
            this.parentName = this.$vnode.elm.id;
            console.log(this.parentName);
            this.intersected(this.parentName);
          }
        }
      });
    });

    this.observer.observe(this.$el);
  }
}
</script>

<style lang="scss">
.intro {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 4vw;
}

.intro--content {
  max-width: 40vw;
  margin-bottom: 4vw;

  .heading {
    font-size: 6.6vw;
    line-height: 83%;  
  }

  .sub-heading {
    color: var(--red);
    font-size: 1.1vw;
  }
}

.scroll-down {
  display: flex;
  flex: 1;
  width: 100%;
  color: var(--white);
  font-size: 0.75vw;
  justify-content: center;
  align-items: center;
  text-align: center;

  a {
    display: block;
    color: var(--white);

    &:hover {
      cursor: pointer;
    }
  }

  svg {
    max-width: 32px;
    max-height: 32px;
    display: block;
    margin-bottom: 0.75vw;
  }

  span {
    display: block;
  }
}
</style>

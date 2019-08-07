<template>
  <article class="portfolio--content-entry" v-on:mouseover="startVideo" v-on:mouseout="endVideo">
    <a :href="url" target="_blank">
      <header>
        <video ref="video" muted autoplay loop v-if="video" :poster="image.image_2x">
          <source :src="video" type="video/mp4">
        </video>
        <!-- <img v-if="image.image_2x" :src="image.image_1x" :srcset="`${image.image_1x} 1x, ${image.image_2x} 2x`" :alt="name">
        <img v-else :src="image.image_1x" :alt="name"> -->
      </header>
    </a>

    <div class="description">
      <h3>{{ name }}</h3>
      <p v-html="description"></p>
      <div class="project-type"><img :src="typeImage" :alt="type"></div>
    </div>
  </article>
</template>

<script>
export default {
  name: "PortfolioItem",
  props: {
    url: String,
    image: Object,
    video: String,
    name: String,
    description: String,
    type: String,
    typeImage: String,
    count: Number
  },
  methods: {
    loadVideos() {
      this.$refs.video.load();
      this.$refs.video.pause();
    },
    startVideo() {
      this.$refs.video.play();
    },
    endVideo() {
      this.$refs.video.pause();
    }
  },
  mounted() {
    this.loadVideos();
  }
}
</script>

<style lang="scss">
@import '../../assets/css/vars';

.portfolio--content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: calc(var(--space-1) + var(--space-half));
}

.portfolio--content-entry {
  box-shadow: 0 0 30px rgba(0,0,0,0.1);
  transition: 0.3s transform, 0.3s box-shadow;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-0.3vw);
    box-shadow: 0 0 30px rgba(0,0,0,0.33);

    header {
      filter: grayscale(0);
    }
  }

  > a {
    color: var(--white);
  }

  header {
    filter: grayscale(1);
    transition: 1s filter ease-in-out;

    video {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  .description {
    font-size: 1.4rem;
    padding: var(--space-2);
    background: var(--med-gray-alpha);
    flex: 1;
    display: flex;
    flex-direction: column;

    > h3 {
      margin-bottom: var(--space);
    }

    > p {
      margin-bottom: var(--space-2);
      flex: 1;
    }

    a {
      color: var(--white);
      background-image: linear-gradient(120deg, var(--red) 0%, var(--red) 100%);
      background-repeat: no-repeat;
      background-size: 100% 0.3rem;
      background-position: 0 115%;
      padding-bottom: 0.3rem;
    }

    small {
      a {
        display: inline-block;
        margin-top: 8px;
      }
    }
  }

  .project-type {
    text-align: right;
  }
}

@media only screen and (max-width: $lg-tablet-breakpoint) {
  .portfolio--content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: $tablet-breakpoint) {
  .portfolio--content {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>

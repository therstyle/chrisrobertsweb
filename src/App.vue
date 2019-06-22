<template>
  <main id="app">
    <Sidebar 
      :github="github"
      :linkedin="linkedin"
    ></Sidebar>
    <Intro
      :introHeadline="introHeadline" 
      :introText="introText"
      :scrollText="scrollText"
      :video="video"
    ></Intro>
    <Resume 
      :entries="resumeEntries"
      :photo="photo"
      :devSkills="devSkills"
      :designSkills="designSkills"
      :sigText="sigText"
    ></Resume>
    <Portfolio :portfolioItems="portfolioItems"></Portfolio>
    <Contact></Contact>
    <div class="bg-video">
      <video autoplay="" muted="" loop="" class="full-height"> 
        <source src="/video/intro-web.mp4" type="video/mp4"> 
      </video>
    </div>
  </main>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Intro from './components/Intro.vue';
import Resume from './components/Resume.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'app',
  components: {
    Sidebar,
    Intro,
    Resume,
    Portfolio,
    Contact
  },
  data() {
    return {
      github: '',
      linkedin: '',
      introHeadline: '',
      introText: '',
      scrollText: '',
      video_mp4: '',
      video_ogv: '',
      resumeEntries: [],
      photo: '',
      sigText: '',
      devSkills: [],
      designSkills: [],
      portfolioItems: []
    }
  },
  methods: {
    activeItem: function() {
    },
    loadData: async function() {
      const response = await fetch('info.json');
      const info = await response.json();
      return info;
    }
  },
  created: function() {
    this.loadData().then(info => {
      this.github = info.nav.github;
      this.linkedin = info.nav.linkedin;
      this.introHeadline = info.intro.headline;
      this.introText = info.intro.introText;
      this.scrollText = info.intro.scrollText;
      this.video_mp4 = info.intro.video_mp4;
      this.video_ogv = info.intro.video_ogv;
      this.resumeEntries = info.resume.entries;
      this.photo = info.resume.photo;
      this.sigText = info.resume.sigText;
      this.devSkills = info.resume.skills.dev;
      this.designSkills = info.resume.skills.design;
      this.portfolioItems = info.portfolio.entries;
    });
  }
}
</script>

<style lang="scss">
@import 'assets/css/vars';
@import 'assets/css/reboot';
@import 'assets/css/fonts';

body {
  background: var(--body-bg);
  color: var(--white);
  font-family: var(--main-font);
  font-size: var(--font-size);
  line-height: 1.5;
}

#app {
  display: grid;
  padding-left: var(--sidebar-width);
  position: relative;

  > section {
    min-height: 100vh;

    &:not(.intro) {
      padding: 8vw 0;
    }
  }
}

img {
  max-width: 100%;
}

.heading {
  font-size: 6.1vw;
  margin-bottom: var(--space-2);
  text-transform: uppercase;
}

header.heading {
  padding-left: 4vw;

  h1 {
    font-size: 6.1vw;
    line-height: 1;
  }
}

.sub-heading {
  font-family: var(--accent-font);
  font-weight: normal;
  text-transform: uppercase;
}

a {
  text-decoration: none;
}

p {
  &:last-child {
    margin-bottom: 0;
  }
}

.content {
  padding: 4vw;
}

.bg-video {
  position: fixed;
  width: 100%;
  min-height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;

  video {
    width: 100%;
    min-height: 100vh;
    object-fit: fill;
  }
}

</style>

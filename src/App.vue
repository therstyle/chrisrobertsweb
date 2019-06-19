<template>
  <main id="app">
    <Sidebar></Sidebar>
    <Intro 
      :introText="introText"
    ></Intro>
    <Resume 
      :entries="entries"
      :photo="photo"
      :devSkills="devSkills"
      :designSkills="designSkills"
    ></Resume>
    <Portfolio :portfolioItems="portfolioItems"></Portfolio>
    <Contact></Contact>
    <div class="bg-video">

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
      introText: '',
      entries: [],
      photo: '',
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
      this.introText = info.intro.text;
      this.entries = info.resume.entries;
      this.photo = info.resume.photo;
      this.devSkills = info.resume.skills.dev;
      this.designSkills = info.resume.skills.design;
      this.portfolioItems = info.portfolio;
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
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

</style>

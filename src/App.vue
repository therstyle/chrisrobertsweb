<template>
  <main id="app">
    <Sidebar></Sidebar>
    <Intro 
      v-bind:introText="introText"
    ></Intro>
    <Resume 
      v-bind:entries="entries"
    ></Resume>
    <Portfolio></Portfolio>
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
      entries: []
    }
  },
  methods: {
    activeItem: function() {
    },
    loadData: function() {
      fetch('info.json')
      .then(response => response.json())
      .then(info => {
        this.introText = info.intro.text;
        this.entries = info.resume.entries;
        //this.entries.push(info.resume.entries);
        console.log(this.entries);
      })
    }
  },
  created: function() {
    this.loadData();
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

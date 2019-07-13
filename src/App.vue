<template>
  <main id="app">
    <Sidebar 
      :github="github"
      :linkedin="linkedin"
      :active="active"
      v-on:scrollRequest="scrollHere"
    ></Sidebar>

    <Intro
      ref="intro" 
      :introHeadline="introHeadline" 
      :introText="introText"
      :scrollText="scrollText"
      v-on:intersected="activeItem"
      v-on:scrollRequest="scrollHere"
    ></Intro>

    <Resume
      ref="resume"  
      :entries="resumeEntries"
      :image="resumePhoto"
      :devSkills="devSkills"
      :designSkills="designSkills"
      :sigText="sigText"
      :active="active"
      v-on:intersected="activeItem"
    ></Resume>

    <Portfolio
      ref="portfolio" 
      :portfolioItems="portfolioItems"
      v-on:intersected="activeItem"
    ></Portfolio>

    <Contact
      ref="contact" 
      :headline="contactHeadline"
      :image="contactPhoto"
      :buttonText="contactButtonText"
      v-on:intersected="activeItem"
    ></Contact>

    <div class="bg-video">
      <video ref="bgVideo" autoplay muted loop class="full-height"> 
        <source :src="introVideo.video_mp4" type="video/mp4"> 
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
      introVideo: {},
      resumeEntries: [],
      resumePhoto: {},
      sigText: '',
      devSkills: [],
      designSkills: [],
      portfolioItems: [],
      contactHeadline: '',
      contactPhoto: {},
      contactButtonText: '',
      active: {
        "intro": false,
        "portfolio": false,
        "resume": false,
        "contact": false
      }
    }
  },
  methods: {
    activeItem: function(currentSection) {
      //iterate thru active's keys, set one as active
      Object.keys(this.active).forEach(item => {
        if (item === currentSection) {
          this.active[item] = true;
        }
        else {
          this.active[item] = false;
        }
      });
    },
    scrollHere: function(section) {
      //iterate thru refs, look for a match
      Object.keys(this.$refs).forEach(item => {
        if (section === item) {
          let clickedSection = this.$refs[item];
          
          window.scroll({
            behavior: 'smooth',
            left: 0,
            top: clickedSection.$vnode.elm.offsetTop
          })
        }
      });
    },
    loadVideo: function () {
      this.$refs.bgVideo.load();
    },
    loadData: async function() {
      const response = await fetch('info.json');
      const info = await response.json();
      await this.loadVideo();
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
      this.introVideo = info.intro.video;
      this.resumeEntries = info.resume.entries;
      this.resumePhoto = info.resume.image;
      this.sigText = info.resume.sigText;
      this.devSkills = info.resume.skills.dev;
      this.designSkills = info.resume.skills.design;
      this.portfolioItems = info.portfolio.entries;
      this.contactHeadline = info.contact.headline;
      this.contactPhoto = info.contact.image;
      this.contactButtonText = info.contact.buttonText;
      //this.loadVideo();
    });
  },
  mounted: function() {
    
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
  //opacity: 0.02; //debug
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

.bg-video,
.bg-video:before,
.bg-video:after  {
  content: '';
  position: fixed;
  width: 100%;
  min-height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.bg-video {
  z-index: -1;

  &:before {
    background: -moz-linear-gradient(left,  rgba(51,51,51,1) 1%, rgba(51,51,51,1) 45%, rgba(51,51,51,0) 100%);
    background: -webkit-linear-gradient(left,  rgba(51,51,51,1) 1%,rgba(51,51,51,1) 45%,rgba(51,51,51,0) 100%);
    background: linear-gradient(to right,  rgba(51,51,51,1) 1%,rgba(51,51,51,1) 45%,rgba(51,51,51,0) 100%);
  }

  &:after {
    background: -moz-linear-gradient(top,  rgba(51,51,51,0) 0%, rgba(51,51,51,0.99) 99%, rgba(51,51,51,1) 100%);
    background: -webkit-linear-gradient(top,  rgba(51,51,51,0) 0%,rgba(51,51,51,0.99) 99%,rgba(51,51,51,1) 100%);
    background: linear-gradient(to bottom,  rgba(51,51,51,0) 0%,rgba(51,51,51,0.99) 99%,rgba(51,51,51,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00333333', endColorstr='#333333',GradientType=0 );
  }

  video {
    width: 100%;
    min-height: 100vh;
    object-fit: fill;
    margin-left: 15vw;
  }
}


</style>

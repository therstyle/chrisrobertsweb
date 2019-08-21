<template>
  <main id="app">
    <Sidebar 
      :github="github"
      :linkedin="linkedin"
      :sections="sections"
      v-on:scrollRequest="scrollHere"
    ></Sidebar>

    <Intro
      ref="intro" 
      :introHeadline="introHeadline" 
      :introSubHeadline="introSubHeadline" 
      :introText="introText"
      :scrollText="scrollText"
      :viewed="sections.intro.viewed"
      v-on:observed="activeItem"
      v-on:scrollRequest="scrollHere"
    ></Intro>

    <Resume
      ref="resume"  
      :entries="resumeEntries"
      :image="resumePhoto"
      :devSkills="devSkills"
      :designSkills="designSkills"
      :sigText="sigText"
      :pdf="pdf"
      :viewed="sections.resume.viewed"
      v-on:observed="activeItem"
      v-on:intersected="viewedItem"
    ></Resume>

    <Portfolio
      ref="portfolio" 
      :portfolioItems="portfolioItems"
      :viewed="sections.portfolio.viewed"
      v-on:observed="activeItem"
      v-on:intersected="viewedItem"
    ></Portfolio>

    <Contact
      ref="contact" 
      :headline="contactHeadline"
      :image="contactPhoto"
      :buttonText="contactButtonText"
      :formErrorMessage="formErrorMessage"
      :loaderImg="loaderImg"
      :viewed="sections.contact.viewed"
      v-on:observed="activeItem"
      v-on:intersected="viewedItem"
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
      introSubHeadline: '',
      introText: '',
      scrollText: '',
      introVideo: {},
      resumeEntries: [],
      resumePhoto: {},
      sigText: '',
      pdf: {},
      devSkills: [],
      designSkills: [],
      portfolioItems: [],
      contactHeadline: '',
      contactPhoto: {},
      contactButtonText: '',
      loaderImg: '',
      formErrorMessage: '',
      sections: {
        intro: {
          active: false,
          viewed: false,
          threshold: 0
        },
        resume: {
          active: false,
          viewed: false,
          threshold: 0
        },
        portfolio: {
          active: false,
          viewed: false,
          threshold: 0
        },
        contact: {
          active: false,
          viewed: false,
          threshold: 0
        }
      },
      highThreshold: 0
    }
  },
  methods: {
    activeItem: function(currentSection, threshold) {
      //Add each sections threshold to object
      Object.keys(this.sections).forEach(() => {
        this.sections[currentSection].threshold = threshold;
      });

      //Create an array of section thresholds and find the highest one
      let arr = Object.keys(this.sections).map(section => this.sections[section].threshold);
      //console.log(arr);
      this.highThreshold = Math.max(...arr);

      //console.log('high ' + this.highThreshold);

      //Set the section with highest threshold as active
      Object.keys(this.sections).forEach(section => {
        if (this.sections[section].threshold === this.highThreshold) {
          this.sections[section].active = true;
          //this.sections[section].viewed = true;
        }
        else {
          this.sections[section].active = false;
        }
      });
    },
    viewedItem: function(currentSection) {
      //console.log(currentSection + ' is viewed');
      this.sections[currentSection].viewed = true;
    },
    scrollHere: function(section) {
      //Loop thru refs, look for a match
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
      this.introSubHeadline = info.intro.subHeadline;
      this.introText = info.intro.introText;
      this.scrollText = info.intro.scrollText;
      this.introVideo = info.intro.video;
      this.resumeEntries = info.resume.entries;
      this.resumePhoto = info.resume.image;
      this.sigText = info.resume.sigText;
      this.pdf = info.resume.pdf;
      this.devSkills = info.resume.skills.dev;
      this.designSkills = info.resume.skills.design;
      this.portfolioItems = info.portfolio.entries;
      this.contactHeadline = info.contact.headline;
      this.contactPhoto = info.contact.image;
      this.contactButtonText = info.contact.buttonText;
      this.formErrorMessage = info.contact.formErrorMessage;
      this.loaderImg = info.contact.loaderImg;
    });
  }
}
</script>

<style lang="scss">
@import 'assets/css/vars';
@import 'assets/css/reboot';
@import 'assets/css/fonts';

*,
*:after,
*:after {
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
}

html {
  font-size: 62.5%;
}

body {
  background: var(--body-bg);
  color: var(--white);
  font-family: var(--main-font);
  font-size: var(--font-size);
  line-height: var(--line-height);
}

#app {
  //opacity: 0.1; //Debug
  display: flex;
  padding-left: var(--sidebar-width);
  position: relative;
  flex-direction: column;

  > section {
    min-height: 100vh;

    &:not(.intro) {
      .content {
        padding-top: 0;
        padding-bottom: 0;
        max-width: 1440px;
        margin-left: auto;
        margin-right: auto;
      }
    }

    &:not(.contact) {
      margin-bottom: var(--space-8); //Keep out of viewport for observer
    }
  }
}

img {
  max-width: 100%;
}

.heading {
  font-size: 8.8rem;
  text-transform: uppercase;
}

.sub-heading {
  font-family: var(--accent-font);
  font-weight: normal;
  text-transform: uppercase;
}

a {
  text-decoration: none;

  &.link {
    color: var(--white);
    background-image: linear-gradient(120deg, var(--red) 0%, var(--red) 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.3rem;
    background-position: 0 115%;
    padding-bottom: 0.3rem;
    transition: 0.3s all;

    &:hover {
      background-image: linear-gradient(120deg, var(--dark-red) 0%, var(--dark-red) 100%);
    }
  }
}

p {
  &:last-child {
    margin-bottom: 0;
  }
}

.content {
  padding: var(--space-4);
  overflow: hidden;
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
    background: -moz-linear-gradient(top,  rgba(51,51,51,0) 75%, rgba(51,51,51,0.99) 99%, rgba(51,51,51,1) 100%);
    background: -webkit-linear-gradient(top,  rgba(51,51,51,0) 75%,rgba(51,51,51,0.99) 99%,rgba(51,51,51,1) 100%);
    background: linear-gradient(to bottom,  rgba(51,51,51,0) 75%,rgba(51,51,51,0.99) 99%,rgba(51,51,51,1) 100%);
  }

  video {
    width: 100%;
    min-height: 100vh;
    object-fit: fill;
    margin-left: 15vw;
  }
}

@media only screen and (max-width: $md-phone-breakpoint) {
  .content {
    padding: var(--space-2);
  }
}
</style>

<template>
  <section id="resume" class="resume" :class="{ viewed : viewed }">
    <Heading title="Resume"></Heading>

    <div class="resume--content content">
      <div class="timeline">
        <Timeline-Entry 
          v-for="(entry, index) in entries"
          :key="index"
          :year="entry.year"
          :logo="entry.logo" 
          :company="entry.company"
          :title="entry.title"
          :details="entry.details"
        ></Timeline-Entry>
      </div>

      <aside class="skill-tree">
        <img v-if="image.image_2x" :src="image.image_1x" :srcset="`${image.image_1x} 1x, ${image.image_2x} 2x`" alt="Chris Roberts" class="skill-tree--photo">
        <img v-else :src="image.image_1x" alt="Chris Roberts" class="skill-tree--photo">
        <h3 class="sig">{{ sigText }}</h3>

        <h3>Dev Skills</h3>
        <ul class="skills">
          <Skill v-for="(devSkill, index) in devSkills" 
            :key="index"
            :logo="devSkill.logo"
            :name="devSkill.name"
            :startYear="devSkill.startYear"
          ></Skill>
        </ul>

        <h3>Design Skills</h3>
        <ul class="skills">
          <Skill v-for="(designSkill, index) in designSkills" 
            :key="index"
            :logo="designSkill.logo"
            :name="designSkill.name"
            :startYear="designSkill.startYear"
          ></Skill>
        </ul>
      </aside>
    </div>
  </section>
</template>

<script>
import Heading from './layout/Heading.vue';
import TimelineEntry from './layout/TimelineEntry.vue';
import Skill from './layout/Skill.vue';
import observer from './helpers/observer.js';

export default {
  name: 'Resume',
  mixins: [observer],
  components: {
    Heading,
    TimelineEntry,
    Skill
  },
  props: {
    entries: Array,
    image: Object,
    devSkills: Array,
    designSkills: Array,
    sigText: String,
    viewed: Boolean
  },
  mounted() {
    this.wayPoint();
  }
}
</script>


<style lang="scss">
@import '../assets/css/vars';

  .resume--content {
    display: flex;
    flex-direction: column;
  }

  .timeline {
    position: relative;
    margin: 0 7vw;

    article:first-child {
      padding-top: 0;
    }

    article:last-child {
      border-color: transparent;
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      width: 1px;
      height: 100%;
      background: var(--light-gray);
    }
  }

  .timeline--entry {
    padding: var(--space-3);
    border-bottom: 1px solid var(--light-gray);
    position: relative;

    &:before {
      content: '';
      position: absolute;
      display: block;
      border-radius: 100%;
      top: 6.1vw;
      left: calc(-4.1vw - 14px);
      margin-left: calc(4.1vw + 7px);
      width: 14px;
      height: 14px;
      border: 3px solid var(--red);
      background: var(--body-bg);
    }

    &:after {
      content: attr(data-year);
      font-weight: 600;
      color: var(--red);
      font-size: 5vw;
      left: -10vw;
      top: 2.1vw;
      writing-mode: vertical-rl;
      text-orientation: sideways;
      transform: rotate(180deg);
      position: absolute;
    }

    header {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: var(--space-2);

      img {
          margin-bottom: calc(var(--space-1) + var(--space-half));
          max-width: 30px;
          max-height: 30px;
          padding: 7px;
          background: var(--white);
      }

      .company-info {
        line-height: 90%;

        > :first-child {
          margin-bottom: 0;
          line-height: 1;
        }
      }
    }
  }

  .details {
    padding-left: 0;
    margin-bottom: 0;

    > li {
      font-size: 1.6rem;
      margin-left: 30px;
      line-height: 1.5;
      list-style: none;
      position: relative;
      margin-bottom: var(--space-2);

      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 5px;
        width: 12px;
        height: 12px;
        left: -30px;
        border-radius: 100%;
        background: var(--red);
        margin-right: 10px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .skill-tree {
    max-width: 40vw;
    min-width: 244px;
    margin-left: auto;
    margin-right: auto;

    .sig {
      margin-bottom: var(--space-7);
      text-transform: none;
    }

    h3 {
      text-align: center;
      text-transform: uppercase;
      font-size: 2.4rem;
    }
  }

  .skill-tree--photo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 0 40px rgba(0,0,0,0.66);
    margin-bottom: var(--space-2);
  }

  .sig {
    font-family: var(--sig-font);
    text-align: center;
    font-weight: normal;
  }

  .skills {
    margin-bottom: var(--space-4);
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    max-width: 244px;
    margin-left: auto;
    margin-right: auto;

    > li {
      list-style: none;
      background: var(--dark-gray-alpha);
      width: 50%;
      border: 0.5px solid var(--light-gray);
      max-width: 122px;
      height: 122px;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s all;

      &:hover {
        transform: scale(1.1);
        background: var(--dark-gray);
        box-shadow: 0 0 40px rgba(0,0,0,0.33);
      }

      > div {
        text-align: center;
      }

      img {
        display: block;
        margin: 0 auto 10px;
      }

      h6 {
        font-size: 14px;
        line-height: 1.2;
        margin: 0;
      }

      small {
        font-size: 11px;
        display: block;
      }

      &:first-child,
      &:nth-child(2) {
        border-top: 1px solid var(--light-gray);
      }

      &:last-child,
      &:nth-last-child(2) {
        border-bottom: 1px solid var(--light-gray);
      }
    }
  }

@media only screen and (min-width: $md-phone-breakpoint) {
  .timeline--entry {
    &:before {
      left: calc(-4.1vw - 18px);
      margin-left: calc(4.1vw + 9px);
      width: 18px;
      height: 18px;
      border: 4px solid var(--red);
      background: var(--body-bg);
    }
  }
}

@media only screen and (min-width: $tablet-breakpoint) {
  .timeline--entry {
    &:after {
      font-size: 4.1vw;
      left: -7vw;
    }

    header {
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        margin-right: calc(var(--space-1) + var(--space-half));
        margin-bottom: 0;
        max-width: 42px;
        max-height: 42px;
      }
    }

    .details {
      > li {
        font-size: 1.6rem;
        margin-left: 30px;

        &:before {
          width: 12px;
          height: 12px;
          left: -30px;
        }
      }
    }
  }
}

@media only screen and (min-width: $desktop-breakpoint) {
  .resume--content {
    display: flex;
  }

  .timeline {
    max-width: 60vw;
    margin-bottom: 0;
  }

  .timeline--entry {
    padding: var(--space-3);

    &:before {
      content: '';
      left: calc((var(--space-3) - var(--space-6)) - 24px);
      margin-left: calc(var(--space-3) + 12px);
      width: 24px;
      height: 24px;
      border: 5px solid var(--red);
    }
  }

  .skill-tree {

  }
}
</style>

<template>
  <section class="resume">
    <Observer></Observer>
    <Heading title="Resume"></Heading>

    <div class="resume--content">
      <div class="timeline">
        <Timeline-Entry 
          v-for="entry in entries"
          :year="entry.year"
          :logo="entry.logo" 
          :company="entry.company"
          :title="entry.title"
          :details="entry.details"
          :key="entry.id"
        ></Timeline-Entry>
      </div>

      <aside class="skill-tree">
        <img :src="photo" alt="Chris Roberts" class="skill-tree--photo">
        <h3 class="sig">{{ sigText }}</h3>

        <h3>Dev Skills</h3>
        <ul class="skills">
          <Skill v-for="devSkill in devSkills" 
            :key="devSkill.name"
            :logo="devSkill.logo"
            :name="devSkill.name"
            :years="devSkill.years"
          ></Skill>
        </ul>

        <h3>Design Skills</h3>
        <ul class="skills">
          <Skill v-for="designSkill in designSkills" 
            :key="designSkill.name"
            :logo="designSkill.logo"
            :name="designSkill.name"
            :years="designSkill.years"
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
import Observer from './helpers/Observer.vue';

export default {
  name: 'Resume',
  components: {
    Heading,
    TimelineEntry,
    Skill,
    Observer
  },
  props: {
    entries: Array,
    photo: String,
    devSkills: Array,
    designSkills: Array,
    sigText: String
  }
}
</script>


<style lang="scss">
  .resume--content {
    padding: 0 4vw;
    display: flex;
  }

  .timeline {
    position: relative;
    margin: 0 7vw;
    max-width: 60vw;

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
    padding: 4.1vw;
    border-bottom: 1px solid var(--light-gray);
    position: relative;

    &:before {
      content: '';
      position: absolute;
      display: block;
      border-radius: 100%;
      top: 6.1vw;
      left: calc(-4.1vw - 24px);
      margin-left: calc(4.1vw + 12px);
      width: 24px;
      height: 24px;
      border: 5px solid var(--red);
      background: var(--body-bg);
    }

    &:after {
      content: attr(data-year);
      font-weight: 600;
      color: var(--red);
      font-size: 4.1vw;
      writing-mode: vertical-rl;
      text-orientation: sideways;
      transform: rotate(180deg);
      position: absolute;
      left: -7vw;
      top: 2.1vw;
    }

    header {
      display: flex;
      align-items: center;
      margin-bottom: 1.3vw;

      img {
          margin-right: 1.3vw;
          max-width: 42px;
          padding: 7px;
          border: 1px solid var(--light-gray);
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
      font-size: 16px;
      line-height: 1.5;
      list-style: none;
      position: relative;
      margin-left: 30px;
      margin-bottom: var(--space-2);

      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 5px;
        left: -30px;
        width: 12px;
        height: 12px;
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

    .sig {
      margin-bottom: 7vw;
      text-transform: none;
    }

    h3 {
      text-align: center;
      text-transform: uppercase;
      font-size: 1.6vw;
    }
  }

  .skill-tree--photo {
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
</style>

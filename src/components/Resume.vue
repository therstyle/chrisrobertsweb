<template>
  <section class="resume">
    <Heading title="Resume"></Heading>

    <div class="resume--content">
      <div class="timeline">
        <Timeline-Entry 
          v-for="entry in entries"
          :year="entry.year" 
          :company="entry.company"
          :title="entry.title"
          :details="entry.details"
          :key="entry.id"
        ></Timeline-Entry>
      </div>

      <aside class="skill-tree">
        <img src="https://dummyimage.com/243x243/000/fff" alt="Chris Roberts" class="skill-tree--photo">
        <h2 class="sig">Chris Roberts</h2>

        <h3>Dev Skills</h3>
        <h3>Design Skills</h3>
      </aside>
    </div>
  </section>
</template>

<script>
import Heading from './layout/Heading.vue';
import TimelineEntry from './layout/TimelineEntry.vue';

export default {
  name: 'Resume',
  components: {
    Heading,
    TimelineEntry
  },
  props: {
    entries: Array
  }
}
</script>


<style lang="scss">
  .resume {
  }

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
</style>

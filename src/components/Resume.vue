<template>
  <section class="resume">
    <Heading title="Resume"></Heading>

    <div class="resume--content">
      <div class="timeline">
        <Timeline-Entry></Timeline-Entry>
      </div>

      <aside class="skill-tree">
        <img src="https://dummyimage.com/243x243/000/fff" alt="">
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
      //left: abs(calc(4.1vw - 1px) / 2);
      width: 24px;
      height: 24px;
      border: 5px solid var(--red);
      background: var(--body-bg);
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
  }
</style>

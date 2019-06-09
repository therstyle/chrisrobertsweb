<template>
  <section class="resume">
    <Heading title="Resume"></Heading>

    <div class="resume--content">
      <div class="timeline">
        <Timeline-Entry></Timeline-Entry>
      </div>

      <aside>

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
    padding: 4vw 0;
  }

  .resume--content {
    padding: 0 4vw;
    display: flex;
  }

  .timeline {
    position: relative;
    margin: 0 7vw;

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
      display: flex;
      align-items: flex-start;

      &:before {
        content: '';
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 100%;
        background: var(--red);
        margin-right: 10px;
      }
    }
  }
</style>

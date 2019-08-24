<template>
  <footer class="stats">
    <div class="stat animate" :class="{viewed : viewed}" v-for="(stat, index) in stats" :key="index">
      <div class="stat--focal">
        <div class="single-chart">
          <percentage 
            :amount="stat.percent"
            :viewed="viewed"
            :index="index"
          ></percentage>
        </div>
      </div>

      <div class="stat--summary">
        {{ stat.summary }}
      </div>
    </div>
  </footer>  
</template>

<script>
import animate from '../helpers/animate.js';
import percentage from './percentage.vue';

export default {
  name: "stats",
  data() {
    return {
       settings: {
        threshold: 1
      }
    }
  },
  mixins: [animate],
  components: {
    percentage
  },
  props: {
    stats: Array
  },
  mounted() {
    this.animate(this.settings);
  }
}

</script>

<style lang="scss">
@import '../../assets/css/vars';

.stats {
  margin-top: var(--space-2);
  display: flex;
  justify-content: space-between;
}

.stat {
  display: flex;
  width: calc(50% - var(--space-1));
  align-items: center;

  svg {
    text {
      font-family: var(--main-font);
      font-weight: 600;
    }
  }
}

.stat--focal {
  margin-right: var(--space-1);
  display: flex;
  align-items: center;
}

.stat--summary {
  font-size: 1.1rem;
  line-height: 1.5;
}

.flex-wrapper {
  display: flex;
  flex-flow: row nowrap;
}

.circular-chart {
  display: block;
  margin: 10px auto;
}

.circle-bg {
  fill: none;
  stroke: #c4c4c4;
  stroke-width: 2;
}

.circle {
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke: var(--red);
  //stroke-dasharray: 0 100;
  transition: 0.3s all ease-in-out;
}

.percentage {
  fill: var(--red);
  font-size: .9rem;
  text-anchor: middle;
}

@media only screen and (max-width: $tablet-breakpoint) {
  .stats {
    flex-direction: column;
  }

  .stat {
    width: 100%;
    margin-right: 0;
    margin-bottom: var(--space-1);
  }
}
</style>
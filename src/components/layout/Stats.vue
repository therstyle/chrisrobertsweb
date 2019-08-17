<template>
  <footer class="stats">
    <div class="stat" v-for="(stat, index) in stats" :key="index">
      <div class="stat--focal">
        <div class="single-chart">
    <svg width="64" height="64" viewBox="0 0 36 36" class="circular-chart orange">
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle"
        stroke-dasharray="30, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage">{{ stat.percent }}%</text>
    </svg>
  </div>
      </div>

      <div class="stat--summary">
        {{ stat.summary }}
      </div>
    </div>
  </footer>  
</template>

<script>
export default {
  name: "Stats",
  props: {
    stats: Array
  }
}

</script>

<style lang="scss" scoped>
.stats {
  margin-top: var(--space-2);
}

.stat {
  display: flex;
  width: calc(50% - var(--space-2));
  align-items: center;

  svg {
    text {
      font-family: var(--main-font);
      font-weight: 600;
    }
  }
}

.stat--focal {
  flex: 1;
  margin-right: var(--space-1);
  display: flex;
  align-items: center;
}

.stat--summary {
  font-size: 1.2rem;
}

.flex-wrapper {
  display: flex;
  flex-flow: row nowrap;
}

.circular-chart {
  display: block;
  margin: 10px auto;

  .circle {
    stroke: var(--red);
  }
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
  animation: progress 1s ease-out forwards;
}

.percentage {
  fill: var(--red);
  font-size: .9rem;
  //font-size: 0.5em;
  text-anchor: middle;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}
</style>
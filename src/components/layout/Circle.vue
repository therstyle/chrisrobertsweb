<template>
  <div>
    <svg width="64" height="64" viewBox="0 0 36 36" class="circular-chart">
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle"
        :stroke-dasharray="`0, 100`"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage">{{ amount }}%</text>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Circle",
  props: {
   amount: Number 
  }
}
</script>

<style lang="scss" scoped>
.viewed {
  .circle {
    animation: progress 1s ease-out;
    animation-fill-mode: forwards;
    stroke-dasharray: 0 100;
  }
}
</style>
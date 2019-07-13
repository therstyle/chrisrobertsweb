<template>
  <header class="heading">
    <h1>{{ title }}</h1>
    <div class="line-grid">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>

      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>

      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>

      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>

      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Heading',
  props: ['title']
}
</script>

<style lang="scss">
header.heading {
  padding: 20px 0 20px 4vw;
  transition: 0.3s all ease-in-out;
  position: relative;
  overflow: hidden;

  h1 {
    font-size: 6.1vw;
    line-height: 1;
    margin-bottom: 0;
    opacity: 0;
    transform: translateX(-7vw);
  }

  .line-grid {
    display: flex;
    position: absolute;
    top: -20px;
    left: -4vw;

    span {
      min-height: 150px;
      width: 4px;
      margin-right: 8px;
      display: block;
      background: rgba(255,255,255,0.10);
      transform: rotate(135deg);
      transition: 0.25s all;
      opacity: 0;
    }
  }
}

.viewed {
  header.heading {
    h1 {
      animation: headline-slide .30s ease-in-out;
      animation-fill-mode: both;
      animation-delay: .10s;
    }

    .line-grid {
      span {
        animation: span-line .10s ease-in-out;
        animation-fill-mode: both;

        @for $i from 1 through 50 {
          &:nth-child(#{$i}) {
            animation-delay: 0.01s * $i;
          }
        }
      }
    }
  }
}

@keyframes span-line {
  0% {
    opacity: 0;
    transform: rotate(135deg), translateX(-10px);
  }

  100% {
    opacity: 1;
    transform: rotate(135deg), translateX(0);
  }
}

@keyframes headline-slide {
  0% {
    opacity: 0;
    transform: translateX(-7vw);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>


<template>
  <section class="intro">
    <div class="intro--content">
      <h6 class="sub-heading">Front End Developer | Boston, MA</h6>
      <h1 class="heading">
        Chris <br>
        Roberts
      </h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor arcu ipsum, at elementum nisl rutrum nec.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style lang="scss">
.intro {
  padding: 4.4vw 4.4vw 0; 
  min-height: 100vh;
}

.intro--content {
  max-width: 40vw;

  .heading {
    font-size: 6.6vw;
    line-height: 83%;  
  }

  .sub-heading {
    color: var(--red);
    font-size: 1.1vw;
  }
}
</style>

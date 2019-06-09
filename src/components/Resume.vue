<template>
  <section class="resume">
    <Heading title="Resume"></Heading>

    <div class="resume--content">
      <div class="timline">
        
      </div>

      <aside>

      </aside>
    </div>
  </section>
</template>

<script>
import Heading from './layout/Heading.vue';

export default {
  name: 'Resume',
  components: {
    Heading
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
</style>

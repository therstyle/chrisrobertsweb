<template>
  <div id="app">
    <Sidebar></Sidebar>
    <Intro></Intro>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Intro from './components/Intro.vue';

export default {
  name: 'app',
  components: {
    Sidebar,
    Intro
  }
}
</script>

<style lang="scss">
@import 'assets/css/vars';
@import 'assets/css/reboot';
@import 'assets/css/fonts';

body {
  background: var(--body-bg);
  color: var(--white);
  font-family: var(--main-font);
  font-size: var(--font-size);
  line-height: 1.5;
}

#app {
  display: grid;
  padding-left: var(--sidebar-width);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  &.heading {
    text-transform: uppercase;
  }
}

h1.heading {
  font-size: 6.1vw;
  margin-bottom: var(--space-2);
}

.sub-heading {
  font-family: var(--accent-font);
  font-weight: normal;
  text-transform: uppercase;
}

a {
  text-decoration: none;
}

p {
  &:last-child {
    margin-bottom: 0;
  }
}

</style>

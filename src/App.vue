<template>
  <div id="app">
    <nav class="main">

    </nav>
    <Intro></Intro>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Intro from './components/Intro.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Intro
  }
}
</script>

<style lang="scss">
@import 'assets/css/vars';
@import 'assets/css/reboot';

body {
  background: var(--body-bg);
  color: var(--white);
  font-family: var(--main-font);
  font-size: var(--font-size);
}

#app {
  display: grid;
  padding-left: var(--sidebar-width);
}

nav.main {
 width: var(--sidebar-width);
 background: var(--black);
 min-height: 100vh;
 box-shadow: 0 15px 30px rgba(0,0,0,0.25);
 position: fixed;
 top: 0;
 left: 0;
 display: flex;
}

</style>

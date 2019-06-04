<template>
  <nav class="main-nav">
    <div class="main-nav--logo">

    </div>

    <div class="main-nav--internal">
      <ul>
        <li>
          <a href="#"></a>
        </li>

        <li>
          <a href="#"></a>
        </li>

        <li>
          <a href="#"></a>
        </li>

        <li>
          <a href="#"></a>
        </li>
      </ul>
    </div>

    <div class="main-nav--external">
      <ul>
        <li>
          <a href="#"></a>
        </li>

        <li>
          <a href="#"></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss">
nav.main-nav {
  width: var(--sidebar-width);
  background: var(--black);
  min-height: 100vh;
  box-shadow: 0 15px 30px rgba(0,0,0,0.25);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}
</style>


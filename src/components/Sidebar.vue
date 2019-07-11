<template>
  <nav class="main-nav">
    <div class="main-nav--logo">

    </div>

    <ul class="main-nav--internal">
      <li class="menu-home" :class="{ active : active.intro }">
        <a href="#" v-on:click.prevent="scrollRequest('intro')">
          <svg fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)" fill="#FFF" fill-opacity=".5"><path d="M33.406 19.624c-.65 0-1.152.501-1.152 1.154v15.758h-8.175v-6.434c0-.604-.503-1.132-1.112-1.132h-5.91c-.65 0-1.174.528-1.174 1.132v6.434H7.728V21.301c0-.608-.502-1.113-1.152-1.113A1.12 1.12 0 0 0 5.465 21.3v16.39a1.12 1.12 0 0 0 1.11 1.113h10.482a1.12 1.12 0 0 0 1.11-1.114v-6.435h3.647v6.435c0 .608.504 1.114 1.153 1.114h10.44a1.12 1.12 0 0 0 1.11-1.114V20.778c0-.653-.503-1.154-1.11-1.154z"/><path d="M39.673 20.523l-9.097-9.136V5.158c0-.648-.524-1.15-1.173-1.15-.608 0-1.111.502-1.111 1.15v3.944l-7.505-7.548c-.23-.233-.503-.358-.775-.358-.314 0-.587.13-.817.358L.35 20.398c-.452.451-.482 1.176 0 1.592.42.483 1.141.452 1.593 0L20.012 3.964 38.039 22.16c.187.188.46.295.817.295.314 0 .587-.107.817-.295.42-.42.451-1.18 0-1.637z"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h40v40H0z"/></clipPath></defs></svg>
        </a>
      </li>

      <li class="menu-resume" :class="{ active : active.resume }">
        <a href="#" v-on:click.prevent="scrollRequest('resume')">
          <svg fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.02 20.95a1.476 1.476 0 0 0-2.081-.09 1.476 1.476 0 0 0-.09 2.083 10.662 10.662 0 0 1 2.81 7.22V36.5a.546.546 0 0 1-.54.541H9.865a.546.546 0 0 1-.541-.541v-6.336c0-5.885 4.787-10.664 10.664-10.664 5.377 0 9.754-4.377 9.754-9.754S25.372 0 19.996 0c-5.377 0-9.754 4.377-9.754 9.754 0 1.607.401 3.205 1.155 4.615a1.473 1.473 0 0 0 2 .598 1.473 1.473 0 0 0 .599-2 6.807 6.807 0 0 1 6-10.016 6.807 6.807 0 0 1 6.803 6.803 6.807 6.807 0 0 1-6.803 6.803c-7.508 0-13.615 6.107-13.615 13.615v6.336A3.495 3.495 0 0 0 9.873 40h20.254a3.495 3.495 0 0 0 3.492-3.492v-6.336a13.59 13.59 0 0 0-3.599-9.221z" fill="#fff" fill-opacity=".5"/></svg>
        </a>
      </li>

      <li class="menu-portfolio" :class="{ active : active.portfolio }">
        <a href="#" v-on:click.prevent="scrollRequest('portfolio')">
          <svg fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0v40h40V0H0zm37.656 27.422H27.448V2.344h10.208v25.078zm-12.552-8.594H14.896V2.344h10.208v16.484zm-12.552 8.594H2.344V12.578h10.208v14.844zm2.344-6.25h10.208v16.484H14.896V21.172zM12.552 2.344v7.89H2.344v-7.89h10.208zM2.344 29.766h10.208v7.89H2.344v-7.89zm25.104 7.89v-7.89h10.208v7.89H27.448z" fill="#fff" fill-opacity=".5"/></svg>
        </a>
      </li>

      <li class="menu-contact" :class="{ active : active.contact }">
        <a href="#" v-on:click.prevent="scrollRequest('contact')">
          <svg fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.14 5.86C30.36 2.083 25.343 0 20 0 14.656 0 9.64 2.082 5.86 5.86 2.083 9.64 0 14.657 0 20c0 5.344 2.082 10.36 5.86 14.14C9.64 37.917 14.657 40 20 40c3.254 0 6.475-.795 9.336-2.312a1.474 1.474 0 0 0-1.377-2.606A17.071 17.071 0 0 1 20 37.049C10.598 37.05 2.95 29.402 2.95 20S10.599 2.95 20 2.95c9.402 0 17.05 7.648 17.05 17.05 0 3.164-.886 4.967-1.632 5.918-.795 1.025-1.86 1.607-2.926 1.607-1.484 0-2.984-1.18-2.984-3.82V12.22a1.48 1.48 0 0 0-1.475-1.475 1.48 1.48 0 0 0-1.476 1.475v.648a10.083 10.083 0 0 0-7.172-2.984C13.803 9.877 9.262 14.418 9.262 20s4.541 10.123 10.123 10.123c.992 0 1.967-.14 2.902-.426a1.48 1.48 0 0 0 .992-1.836 1.48 1.48 0 0 0-1.836-.992 7.267 7.267 0 0 1-2.058.303c-3.95 0-7.172-3.213-7.172-7.172 0-3.95 3.213-7.172 7.172-7.172A7.175 7.175 0 0 1 26.557 20v3.705c0 4.443 2.984 6.77 5.935 6.77 1.975 0 3.893-1 5.254-2.745C39.22 25.836 40 23.164 40 20c0-5.344-2.082-10.36-5.86-14.14z" fill="#fff" fill-opacity=".5"/></svg>
        </a>
      </li>
    </ul>

    <ul class="main-nav--external">
      <li>
        <a :href="github" class="menu-github" target="_blank">
          <svg fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.475 0 0 4.475 0 10a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.274.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 20 10c0-5.525-4.475-10-10-10z" fill="#fff" fill-opacity=".5"/></svg>
        </a>
      </li>

      <li>
        <a :href="linkedin" class="menu-linkedin" target="_blank">
          <svg fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 12.161v7.394h-4.287v-6.898c0-1.733-.62-2.916-2.171-2.916-1.185 0-1.89.797-2.2 1.568-.113.276-.142.66-.142 1.045v7.201H6.912s.058-11.684 0-12.895H11.2v1.828l-.028.042h.028v-.042c.57-.877 1.587-2.13 3.864-2.13C17.885 6.357 20 8.2 20 12.16zM2.426.444C.96.444 0 1.407 0 2.672 0 3.91.932 4.9 2.37 4.9h.028c1.496 0 2.426-.991 2.426-2.23C4.795 1.408 3.894.445 2.426.445zM.255 19.555H4.54V6.66H.255v12.895z" fill="#7F7F7F"/></svg>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    scrollRequest(section) {
      this.$emit('scrollRequest', section);
    }
  },
  props: {
    active: Object,
    github: String,
    linkedin: String
  }
}
</script>

<style lang="scss">
@keyframes fade-in-out {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

nav.main-nav {
  width: var(--sidebar-width);
  max-height: 460px;
  background: var(--black);
  min-height: 100vh;
  padding: 2vw 0;
  box-shadow: 0 15px 30px rgba(0,0,0,0.25);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  > * {
    background: var(--black); //Hide Active Element drop shadow
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  li {
    display: flex;

    &.active {
      > a {
        svg {
          opacity: 1;
        }
      }
    }

    > a {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      flex: 1;

      &:hover {
        svg {
          opacity: 1;
        }
      }
    }
  }
}

.main-nav--logo {
  min-height: 20vh;
}

.main-nav--internal {
  min-height: 40vh;
  flex: 2;

  li {
    flex: 1;
    align-items: center;
    background: #000;
    transition: 0.3s all;

    &.active {
      position: relative;

      svg {
        fill: var(--red);
        fill-opacity: 1;
        transition: 0.3s all;

        path,
        g {
          fill: var(--red);
          fill-opacity: 1;
          transition: 0.3s all;
        }
      }

      &:before {
        content: '';
        box-shadow: 0 0 75px var(--red);
        opacity: .5;
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        animation: fade-in-out ease-in-out infinite 3s;
      }

      a {
        &:before {
         background: var(--red);
         animation: fade-in-out ease-in-out infinite 3s;
        }
      }
    }

    a {
      padding: 1vw;
      position: relative;

      &:before {
        content: '';
        display: block;
        width: 2px;
        height: 100%;
        position: absolute;
        z-index: 99;
        right: 0;
      }
    }
  }

   svg {
    max-width: 40px;
    max-height: 40px;
    opacity: 0.5;
    transition: 0.3s ease-in-out;
  }
}

.main-nav--external {
  display: flex;
  min-height: 20vh;
  justify-items: flex-end;
  flex-direction: column;

  ul {
    justify-items: flex-end;
  }

  li {
    align-items: flex-end;    

    &:first-child {
      flex: 1;
    }

    a {
      padding: 1vw;
    }
  }

  svg {
    max-width: 20px;
    max-height: 20px;
    opacity: 0.5;
    transition: 0.3s ease-in-out;
  }
}
</style>


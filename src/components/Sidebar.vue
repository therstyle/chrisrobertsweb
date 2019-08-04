<template>
  <nav class="main-nav">
    <div class="main-nav--logo">

    </div>

    <ul class="main-nav--internal">
      <li class="menu-home" :class="{ active : sections.intro.active }">
        <a href="#" v-on:click.prevent="scrollRequest('intro')">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
          <path d="M33.4063 19.6243C32.7567 19.6243 32.2535 20.1251 32.2535 20.7779V36.5365H24.0787V30.1016C24.0787 29.498 23.5756 28.9703 22.9674 28.9703H17.0566C16.4064 28.9703 15.8827 29.4979 15.8827 30.1016V36.5365H7.72845V21.3011C7.72845 20.6929 7.22583 20.1877 6.57563 20.1877C5.96792 20.1877 5.46484 20.6929 5.46484 21.3011V37.6902C5.46484 38.2984 5.96792 38.8037 6.57563 38.8037H17.0566C17.6643 38.8037 18.1674 38.2984 18.1674 37.6902V31.2553H21.8145V37.6902C21.8145 38.2984 22.3176 38.8037 22.9674 38.8037H33.4063C34.0141 38.8037 34.5171 38.2984 34.5171 37.6902V20.778C34.5171 20.1252 34.0141 19.6243 33.4063 19.6243Z"  fill="white" fill-opacity="0.5"/>
          <path d="M39.6735 20.5231L30.5765 11.3873V5.15808C30.5765 4.50965 30.0524 4.00886 29.4026 4.00886C28.7945 4.00886 28.2915 4.50972 28.2915 5.15808V9.10221L20.7874 1.55382C20.5574 1.32127 20.2843 1.19604 20.012 1.19604C19.6976 1.19604 19.4248 1.32572 19.1945 1.55382L0.350385 20.3979C-0.101708 20.8495 -0.131643 21.574 0.350385 21.9898C0.769406 22.4728 1.49117 22.4415 1.94327 21.9898L20.012 3.96409L38.0386 22.1598C38.2264 22.3476 38.4997 22.4549 38.8561 22.4549C39.1704 22.4549 39.4427 22.3476 39.6735 22.1598C40.0929 21.7394 40.1242 20.9792 39.6735 20.5231Z"  fill="white" fill-opacity="0.5"/>
          </g>
          <defs>
          <clipPath id="clip0">
          <rect width="39.9999" height="40"  fill="white" fill-opacity="0.5" />
          </clipPath>
          </defs>
          </svg>

        </a>
      </li>

      <li class="menu-resume" :class="{ active : sections.resume.active }">
        <a href="#" v-on:click.prevent="scrollRequest('resume')">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.0204 20.9508C29.4713 20.3525 28.5368 20.3115 27.9385 20.8607C27.3401 21.4098 27.2991 22.3443 27.8483 22.9426C29.6598 24.918 30.6598 27.4836 30.6598 30.1639V36.5C30.6598 36.7951 30.4139 37.041 30.1188 37.041H9.86471C9.56963 37.041 9.32373 36.7951 9.32373 36.5V30.1639C9.32373 24.2787 14.1106 19.5 19.9877 19.5C25.3647 19.5 29.7418 15.123 29.7418 9.7459C29.7418 4.36885 25.3729 0 19.9959 0C14.6188 0 10.2418 4.37705 10.2418 9.7541C10.2418 11.3607 10.6434 12.959 11.3975 14.3689C11.7827 15.0902 12.6762 15.3525 13.3975 14.9672C14.1188 14.582 14.3811 13.6885 13.9959 12.9672C13.4713 11.9836 13.1926 10.877 13.1926 9.7541C13.1926 6 16.2418 2.95082 19.9959 2.95082C23.75 2.95082 26.7991 6 26.7991 9.7541C26.7991 13.5082 23.75 16.5574 19.9959 16.5574C12.4877 16.5574 6.3811 22.6639 6.3811 30.1721V36.5082C6.3811 38.4344 7.94668 40 9.87291 40H30.127C32.0532 40 33.6188 38.4344 33.6188 36.5082V30.1721C33.6188 26.7459 32.3401 23.4754 30.0204 20.9508Z" fill="white" fill-opacity="0.5"/>
          </svg>
        </a>
      </li>

      <li class="menu-portfolio" :class="{ active : sections.portfolio.active }">
        <a href="#" v-on:click.prevent="scrollRequest('portfolio')">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0V40H40V0H0ZM37.6562 27.4219H27.4478V2.34375H37.6562V27.4219ZM25.1041 18.8281H14.8959V2.34375H25.1044V18.8281H25.1041ZM12.5522 27.4219H2.34375V12.5781H12.5522V27.4219ZM14.8959 21.1719H25.1044V37.6562H14.8959V21.1719ZM12.5522 2.34375V10.2344H2.34375V2.34375H12.5522ZM2.34375 29.7656H12.5522V37.6562H2.34375V29.7656ZM27.4478 37.6562V29.7656H37.6562V37.6562H27.4478Z" fill="white" fill-opacity="0.5"/>
          </svg>
        </a>
      </li>

      <li class="menu-contact" :class="{ active : sections.contact.active }">
        <a href="#" v-on:click.prevent="scrollRequest('contact')">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M34.1393 5.86066C30.3607 2.08197 25.3443 0 20 0C14.6557 0 9.63934 2.08197 5.86066 5.86066C2.08197 9.63934 0 14.6557 0 20C0 25.3443 2.08197 30.3607 5.86066 34.1393C9.63934 37.918 14.6557 40 20 40C23.2541 40 26.4754 39.2049 29.3361 37.6885C30.0574 37.3115 30.3279 36.418 29.9508 35.6967C29.5738 34.9754 28.6803 34.7049 27.959 35.082C25.5246 36.3689 22.7787 37.0492 20 37.0492C10.5984 37.0492 2.95082 29.4016 2.95082 20C2.95082 10.5984 10.5984 2.95082 20 2.95082C29.4016 2.95082 37.0492 10.5984 37.0492 20C37.0492 23.1639 36.1639 24.9672 35.418 25.918C34.623 26.9426 33.5574 27.5246 32.4918 27.5246C31.0082 27.5246 29.5082 26.3443 29.5082 23.7049V12.2213C29.5082 11.4098 28.8443 10.7459 28.0328 10.7459C27.2213 10.7459 26.5574 11.4098 26.5574 12.2213V12.8689C24.7213 11.0246 22.1885 9.88525 19.3852 9.88525C13.8033 9.87705 9.26229 14.418 9.26229 20C9.26229 25.582 13.8033 30.1229 19.3852 30.1229C20.377 30.1229 21.3525 29.9836 22.2869 29.6967C23.0656 29.4672 23.5082 28.6393 23.2787 27.8607C23.0492 27.082 22.2213 26.6393 21.4426 26.8689C20.7787 27.0656 20.082 27.1721 19.3852 27.1721C15.4344 27.1721 12.2131 23.959 12.2131 20C12.2131 16.0492 15.4262 12.8279 19.3852 12.8279C23.3443 12.8279 26.5574 16.041 26.5574 20V23.7049C26.5574 28.1475 29.541 30.4754 32.4918 30.4754C34.4672 30.4754 36.3852 29.4754 37.7459 27.7295C39.2213 25.8361 40 23.1639 40 20C40 14.6557 37.918 9.63934 34.1393 5.86066Z" fill="white" fill-opacity="0.5"/>
          </svg>
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
import scrollRequest from './helpers/scrollRequest.js';

export default {
  name: 'Sidebar',
  mixins: [scrollRequest],
  props: {
    sections: Object,
    github: String,
    linkedin: String
  }
}
</script>

<style lang="scss">
@import '../assets/css/vars';

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
  padding: var(--space-4) 0;
  box-shadow: 0 15px 30px rgba(0,0,0,0.25);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transition: 0.3s all;

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
      padding: 1rem;
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
      //margin-bottom: 20px;
    }

    a {
      padding: 1rem;
    }
  }

  svg {
    max-width: 20px;
    max-height: 20px;
    opacity: 0.5;
    transition: 0.3s ease-in-out;
  }
}

@media only screen and (max-width: $phone-breakpoint) {
  .main-nav--internal {
    svg {
      max-width: 32px;
      max-height: 32px;
    }
  }
}

@media only screen and (max-width: $xs-breakpoint) {
  nav.main-nav {
    padding: var(--space-2) 0;
  }
}

@media only screen and (min-width: $phone-breakpoint) and (max-height: 500px) {
  .main-nav--internal {
    svg {
      max-width: 32px;
      max-height: 32px;
    }
  }
}
</style>


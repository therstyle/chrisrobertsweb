export default {
  data() {
    return {
      observer: null,
      isMobile: '(max-width: 992px)',
      sectionName: '',
      config: {
        threshold: 0
      }
    }
  },
  methods: {
    intersected(currentSection) {
      this.$emit('intersected', currentSection);
      this.viewed = true;
    },
    wayPoint() {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            console.log(`${this.$vnode.elm.id} ${entry.intersectionRatio}`);
            if (this.$vnode.elm.id) {
              this.sectionName = this.$vnode.elm.id;
              this.intersected(this.sectionName);
            }
          }
        });
      }, this.config);

      this.observer.observe(this.$el);
    },
    detectMobile() {
      if (window.matchMedia(this.isMobile).matches) {
        this.config.threshold = 0;
      }
      else {
        this.config.threshold = 0;
      }
    }
  },
  mounted() {
    window.matchMedia(this.isMobile).addListener(this.detectMobile);
  }
}
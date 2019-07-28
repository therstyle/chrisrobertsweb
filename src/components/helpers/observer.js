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
    intersected(currentSection, threshold) {
      this.$emit('intersected', currentSection, threshold);
      this.viewed = true;
    },
    wayPoint() {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (this.$vnode.elm.id) {
            this.sectionName = this.$vnode.elm.id;
            this.intersected(this.sectionName, entry.intersectionRatio);
            //console.log(`${this.sectionName} - ${entry.intersectionRatio}`);
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
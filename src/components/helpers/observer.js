export default {
  data() {
    return {
      observer: null,
      isMobile: '(max-width: 992px)',
      sectionName: '',
      section: {

      },
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
            console.log(`${this.sectionName} - ${entry.intersectionRatio}`);

            this.section[this.sectionName] = entry.intersectionRatio;
            this.intersected(this.sectionName, entry.intersectionRatio);
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
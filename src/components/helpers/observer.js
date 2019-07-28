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
    observed(currentSection, threshold) {
      this.$emit('observed', currentSection, threshold);
    },
    intersected(currentSection) {
      this.$emit('intersected', currentSection);
    },
    wayPoint() {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (this.$vnode.elm.id) {
            this.sectionName = this.$vnode.elm.id;
            this.observed(this.sectionName, entry.intersectionRatio);
            //console.log(`${this.sectionName} - ${entry.intersectionRatio}`);

            if (entry.isIntersecting) {
              //console.log(entry);
              //console.log('is viewed');
              this.intersected(this.sectionName);
            }
          }
        });
      }, this.config);

      this.observer.observe(this.$el);
    },
    detectMobile() {
      if (window.matchMedia(this.isMobile).matches) {
        this.config.threshold = 0.25;
      }
      else {
        this.config.threshold = 0;
      }
    }
  },
  mounted() {
    this.detectMobile();
    window.matchMedia(this.isMobile).addListener(this.detectMobile);
  }
}
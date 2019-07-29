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
    observed(currentSection, threshold) { //Add section name and threshold to object
      this.$emit('observed', currentSection, threshold);
    },
    intersected(currentSection) { //Set current section as viewed
      this.$emit('intersected', currentSection);
    },
    wayPoint() { //Watch all sections and determine if visible in the viewport
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (this.$vnode.elm.id) {
            this.sectionName = this.$vnode.elm.id;
            this.observed(this.sectionName, entry.intersectionRatio);

            if (entry.isIntersecting) {
              this.intersected(this.sectionName);
            }
          }
        });
      }, this.config);

      this.observer.observe(this.$el); //Init observing
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
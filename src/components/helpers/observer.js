export default {
  data() {
    return {
      observer: null,
      isMobile: '(max-width: 992px)',
      sectionName: '',
      config: {
        threshold: 0.25
      }
    }
  },
  methods: {
    intersected(currentSection) {
      this.$emit('intersected', currentSection);
      this.viewed = true;
      console.log(this.$el);
    },
    wayPoint() {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.intersectionRatio > 0) {
            if (this.$vnode.elm.id) {
              this.sectionName = this.$vnode.elm.id;
              this.intersected(this.sectionName);
            }
          }
        });
      }, this.config);

      // this.observer = new IntersectionObserver(entries => {
      //   entries.forEach(entry => {
      //     if(entry.isIntersecting) {
      //       if (this.$vnode.elm.id) {
      //         this.sectionName = this.$vnode.elm.id;
      //         this.intersected(this.sectionName);
      //       }
      //     }
      //   });
      // }, this.config);

      this.observer.observe(this.$el);
    },
    detectMobile() {
      if (window.matchMedia(this.isMobile).matches) {
        this.config.threshold = 0;
      }
      else {
        this.config.threshold = 0.25;
      }
    }
  },
  mounted() {
    window.matchMedia(this.isMobile).addListener(this.detectMobile);
  }
}
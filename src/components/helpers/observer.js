export default {
  data() {
    return {
      observer: null,
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
    },
    wayPoint() {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            if (this.$vnode.elm.id) {
              this.sectionName = this.$vnode.elm.id;
              this.intersected(this.sectionName);
            }
          }
        });
      }, this.config);

      this.observer.observe(this.$el);
    }
  }
}
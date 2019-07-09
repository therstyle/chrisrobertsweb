export default {
  data() {
    return {
      observer: null,
      parentName: '',
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
              this.parentName = this.$vnode.elm.id;
              console.log(this.parentName);
              this.intersected(this.parentName);
            }
          }
        });
      }, this.config);

      this.observer.observe(this.$el);
    }
  }
}
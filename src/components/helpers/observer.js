export default {
  data() {
    return {
      observer: null,
      parentName: ''
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
              console.log(this.parentName + 'waypoint');
              this.intersected(this.parentName);
            }
          }
        });
      });

      this.observer.observe(this.$el);
    }
  }
}
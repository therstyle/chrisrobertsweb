export default {
  data() {
    return {
      observer: null,
      viewed: false
    }
  },
  methods: {
    animate() {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.viewed = true;
            this.observer.unobserve(entry.target);
          }
        });
      });

      this.observer.observe(this.$el); //Init observer
    }
  }
}
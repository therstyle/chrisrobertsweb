export default {
  data() {
    return {
      observer: null
    }
  },
  methods: {
    animate() {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log('visible');
            this.observer.unobserve(entry.target);
          }
        });
      });
      console.log('init animate js');

      this.observer.observe(this.$el); //Init observer
    }
  }
}
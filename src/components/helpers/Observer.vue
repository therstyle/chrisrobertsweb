<template>
  <span class="observer"></span>
</template>

<script>
export default {
  name: 'Observer',
  data: function() {
    return{
      observer: null
    }
  },
  props: {
    active: Object
  },
  methods: {
    intersected(currentSection) {
      this.$emit('intersected', currentSection);
      console.log('this thing is visible');
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          this.intersected('resume');
        }
      });
    });

    this.observer.observe(this.$el);
  }
}
</script>

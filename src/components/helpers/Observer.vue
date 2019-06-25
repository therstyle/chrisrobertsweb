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
    intersected() {
      this.$emit('intersect', 'resume');
      console.log('this thing is visible');
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          this.intersected();
        }
      });
    });

    this.observer.observe(this.$el);
  }
}
</script>

<template>
  <span class="observer"></span>
</template>

<script>
export default {
  name: 'Observer',
  event: 'intersect',
  data: function() {
    return{
      observer: null
    }
  },
  props: {
    active: Object
  },
  mounted() {
    //console.log(this.active);
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          console.log('this thing is visible');
          this.$emit('intersect', true);
        }
      });
    });

    this.observer.observe(this.$el);
  }
}
</script>

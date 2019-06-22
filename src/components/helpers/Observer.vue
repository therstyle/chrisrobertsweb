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
  mounted() {
    this.observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if(entry.isIntersecting) {
          console.log('this thing is visible');
          //this.$emit('intersect');
        }
      });
    });

    this.observer.observe(this.$el);
  }
}
</script>

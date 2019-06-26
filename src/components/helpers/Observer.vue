<template>
  <span class="observer"></span>
</template>

<script>
export default {
  name: 'Observer',
  data: function() {
    return{
      observer: null,
      parentName: ''
    }
  },
  methods: {
    intersected(currentSection) {
      this.$emit('intersected', currentSection);
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          if (this.$parent.$vnode.elm.id) {
            this.parentName = this.$parent.$vnode.elm.id;
            //console.log(this.parentName);
            this.intersected(this.parentName);
          }
        }
      });
    });

    this.observer.observe(this.$el);
  }
}
</script>

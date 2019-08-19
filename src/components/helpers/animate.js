export default {
  data() {
    return {
      observer: null
    }
  },
  methods: {
    animate() {
      console.log('init animate js');
    }
  },
  mounted() {
    this.animate();
  }
}
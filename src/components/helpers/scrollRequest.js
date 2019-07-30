export default {
  methods: {
    scrollRequest(section) {
      this.$emit('scrollRequest', section);
    }
  }
}
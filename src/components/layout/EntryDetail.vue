<template>
  <li>{{ detail }}</li>
</template>

<script>
export default {
  name: 'EntryDetail',
  props: {
    detail: String
  }
}
</script>
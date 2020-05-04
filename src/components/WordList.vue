<template>
  <div>
    <h1>word list</h1>
    {{ words["0"] }}
  </div>
</template>

<script>
export default {
  computed: {
    words() {
      return this.$store.state.wordsList
    }
  },
  created() {},
}
</script>

<style>

</style>
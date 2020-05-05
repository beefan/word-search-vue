<template>
  <div>
    <h1>words found</h1>
    <b-list-group horizontal>
      <b-list-group-item v-for="(item, index) in found" v-bind:key="index" variant="info">
        {{ item }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  computed: {
    words() {
      return this.$store.state.wordsList
    },
    found() {
      return this.$store.state.found
    }
  },
  methods: {

  },
  created() {

  }
}
</script>

<style>

</style>
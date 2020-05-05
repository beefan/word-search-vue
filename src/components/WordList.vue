<template>
  <div id="words-found">
    <h1>words found</h1>
    <b-container>
      <b-button class="word" v-for="(item, index) in found" v-bind:key="index" variant="info">
        {{ item.toUpperCase() }}
      </b-button>
    </b-container>
  </div>
</template>

<script>
export default {
  computed: {
    found() {
      let found = this.$store.state.found
      return found.sort()
    }
  }
}
</script>

<style>
#words-found {
  margin-bottom: 20%;
}
.word {
  margin: 5px;
}
</style>
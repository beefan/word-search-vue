<template>
  <div id="words-found">
    <h1>{{ title }} </h1>
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
      return this.$store.state.found
    },
    title() {
      return 'words found (' + this.found.length + ')'
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
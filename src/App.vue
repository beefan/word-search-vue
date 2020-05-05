<template>
  <b-container id="app">
    <b-row>
      <word-search />
    </b-row>
    <b-row>
      <word-list />
    </b-row>
  </b-container>
</template>

<script>
import WordList from "./components/WordList.vue";
import WordSearch from "./components/WordSearch.vue";

export default {
  name: "App",
  components: {
    'word-list': WordList,
    'word-search': WordSearch
  },
  data () {
    return {
      grid: []
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  justify-content: center;
  align-items: center;
}
</style>

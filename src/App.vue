<template>
  <div id="app">
    <word-search />
    <word-list />
  </div>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>

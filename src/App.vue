<template>
  <b-container id="app">
    <b-row>
      <word-search @dataChanged="updateList()"/>
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
      searchStr: ''
    }
  },
  computed: {
    grid() {
      return this.$store.state.grid
    },
    words() {
      return this.$store.state.wordsList
    },
  },
  methods: {
    updateList() {
      this.searchStr = ''
      this.findWords()
    },
    addRows() {
     for (const row of this.grid) {
        const rowStr = row.join('')
        this.searchStr += ' ' + rowStr
        this.searchStr += ' ' + this.reverse(rowStr)
      }
    },
    addCols() {
      console.log('add cols')
      
    },
    addDiagnols() {
      console.log('add diags')
    },
    findWords() {
      let found = []

      // add to searchStr all possible:
      // rows, cols, diagnols
      this.addRows()
      this.addCols()
      this.addDiagnols()
      this.searchStr = this.searchStr.toLowerCase()

      // iterate through every word in the dictionary
      // and see if the word is in the search string
      for (let prop in this.words) {
          let word = this.words[prop]
          if (this.searchStr.includes(word)) {
            found.push(word)
          }
      }
      console.log('found words ')
      console.log(found)
      // set the vuex store found variable
      this.$store.commit('fillFound', found)
    },
    reverse(str) {
      return str.split("").reverse().join("")
    },
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

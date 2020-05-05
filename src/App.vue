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
      let colStrings = this.grid[0]
      
      for (let i = 1; i < this.grid.length; i++) {
        colStrings = colStrings.map( (value, index) => {
          return value+=this.grid[i][index]
        });
      }

      for (const str of colStrings) {
        this.searchStr += ' ' + str
        this.searchStr += ' ' + this.reverse(str)
      }
    },
    addDiagnols() {
      // top starts
      let diag = this.grid[0].map( (x, index) => { 
        return { 
          "left": index === 0 ? null : x, 
          "right": index === this.grid[0].length -1 ? null : x
          } 
        })
      // bottom starts
      let diagB = this.grid[this.grid.length - 1].map( (x, index) => { 
        const ends = (index === 0 || index === this.grid[0].length - 1)
        return { 
          "left": ends ? null : x, 
          "right": ends ? null : x
          } 
       })

      // get diagnols from the top
      for (let i = 1; i < this.grid.length; i++) {
        diag = diag.map( (o, index) => { 
          return {
            "left": (index - i >= 0 && o.left) ?
        o.left + this.grid[i][index - i]:o.left, 
            "right": (index + i < this.grid[i].length && o.right) ? 
            o.right + this.grid[i][index + i] : o.right
            }
        })
      }

      // get diagnols from the bottom
      for (let i = this.grid.length - 2; i > 0; i--) {
        diagB = diagB.map( (o, index) => {
          const l = this.grid[i].length - 1
          return {
            "left": (index - (l-i) >= 0 && o.left) ?
        o.left + this.grid[i][index - (l-i)]:o.left, 
            "right": (index + (l-i) <= l && o.right) ? 
            o.right + this.grid[i][index + (l-i)] : o.right
            }
        })
      }

      // parse results and add to string
      for (let i = 0; i < diag.length; i++) {
        if (diag[i].left) {
          this.searchStr += ' ' + diag[i].left
          this.searchStr += ' ' + this.reverse(diag[i].left)
        }
        if (diag[i].right) {
          this.searchStr += ' ' + diag[i].right
          this.searchStr += ' ' + this.reverse(diag[i].right)
        }
        if (diagB[i].left) {
          this.searchStr += ' ' + diagB[i].left
          this.searchStr += ' ' + this.reverse(diagB[i].left)
        }
        if (diagB[i].right) {
          this.searchStr += ' ' + diagB[i].right
          this.searchStr += ' ' + this.reverse(diagB[i].right)
        }
      }
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

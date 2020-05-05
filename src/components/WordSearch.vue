<template>
  <div id="search">
    <div class="row" v-for="(row, index) in grid" v-bind:key="index">
      <div class="letter" v-for="(letter, index) in row" v-bind:key="index">
        {{ letter }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      size: 10
    }
  },
  created () {
   this.fillGrid()
  },
  computed: {
    rows() {
      let x = []
      for (let i = 1; i <= this.size; i++) {
        x.push(i)
      }
      return x
    },
    grid() {
      return this.$store.state.grid
    },
  },
  methods: {
    fillGrid() {
      const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      const grid = [[]]

      while (grid.length < 10 || grid[grid.length-1].length < 10) {
        let index = Math.floor(Math.random()*abc.length)
        let rand = abc.charAt(index)

        if (grid[grid.length-1].length < this.size) {
          grid[grid.length - 1].push(rand)
        } else {
          grid.push([rand])
        }
      }
      this.$store.commit('fillGrid', grid)
    }
  }
}
</script>

<style>
#search {
  display: flex;
  flex-flow: column;
  padding: 2%;
  border-radius: 3px;
}
.row {
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
}
.letter {
  text-align: center;
  width: 1%;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
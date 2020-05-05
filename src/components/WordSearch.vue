<template>
  <div id="search">
   <b-form-group label="grid size">
      <b-form-radio-group
        id="grid-settings"
        v-model="size"
        :options="gridOptions"
        name="radio-options"
        @input="fillGrid()"
      ></b-form-radio-group>
    </b-form-group>
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
      size: 10,
      gridOptions: [
          { text: '10', value: 10 },
          { text: '15', value: 15 },
          { text: '20', value: 20 },
          { text: '25', value: 25 },
          { text: '30', value: 30 },
        ]
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

      while (grid.length < this.size || grid[grid.length-1].length < this.size) {
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
.controls {
  padding: 10px;
}
</style>
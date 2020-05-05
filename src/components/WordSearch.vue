<template>
  <div id="search">
    <div class="row" v-for="x in rows" v-bind:key="x">
      <div class="letter" v-for="x in rows" v-bind:key="x">
        {{randomLetter()}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      size: 10,
      grid: [[]]
    }
  },
  computed: {
    rows() {
      let x = []
      for (let i = 1; i <= this.size; i++) {
        x.push(i)
      }
      return x
    }
  },
  methods: {
    randomLetter() {
      const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      const index = Math.floor(Math.random()*abc.length)
      return abc.charAt(index)
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
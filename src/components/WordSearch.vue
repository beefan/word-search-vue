<template>
  <div id="search">
    <div class="row" v-for="x in rows" v-bind:key="x">
      <div class="letter" v-for="x in rows" v-bind:key="x">
        {{'A'}}
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
  computed: {
    rows() {
      let x = []
      for (let i = 1; i <= this.size; i++) {
        x.push(i)
      }
      return x
    }
  }
}
</script>

<style>
#search {
  border: 2px solid black;
  display: flex;
  flex-flow: column;
  padding: 2%;
}
.row {
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
}
.letter {
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
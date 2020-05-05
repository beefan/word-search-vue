import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    //variables here to maintain state of
    grid: [],
    found: ["words", "found", "go", "here"],
    wordsList: require("../assets/words-list.json")
  },
  getters: {
    //vuex supports getter properties for various elements of state
    getGrid: state => {
      return state.grid;
    },
    getWords: state => {
      return state.wordsList;
    },
    getFound: state => {
      return state.found;
    }
  },
  mutations: {
    //only way to change state in vuex is with mutations
    //store.commit('increment') to call this in other components
    //can pass another arg such as   increment (state, n) {
    //https://vuex.vuejs.org/guide/mutations.html
    // increment (state) {
    //   state.count++
    // },
    fillGrid(state, grid) {
      state.grid = grid;
    },
    fillFound(state, found) {
      state.found = found;
    }
  },
  actions: {
    //like mutations but async allowed
    //used for api calls
    //this.$store.dispatch('xxx') in child components
  }
});

export default store;

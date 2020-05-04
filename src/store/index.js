import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    //variables here to maintain state of
    grid: [],
    found: [],
    wordsList: require("../assets/words-list.json")
  },
  getters: {
    //vuex supports getter properties for various elements of state
    getGrid: state => {
      return state.grid;
    },
    getWords: state => {
      return state.wordsList;
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
  },
  actions: {
    //like mutations but async allowed
    //used for api calls
    //this.$store.dispatch('xxx') in child components
  }
});

export default store;

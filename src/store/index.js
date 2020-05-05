import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    grid: [],
    found: [],
    wordsList: require("../assets/words-list.json")
  },
  getters: {
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
    fillGrid(state, grid) {
      state.grid = grid;
    },
    fillFound(state, found) {
      state.found = found.sort();
    }
  }
});

export default store;

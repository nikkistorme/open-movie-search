import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    history: []
  },
  getters: {
    appHistory: state => {
      return state.history;
    }
  },
  mutations: {
    addToHistory: (state, { data }) => {
      state.history.unshift(data);
      localStorage.setItem("history", JSON.stringify(state.history));
    }
  }
});

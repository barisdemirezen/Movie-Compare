import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  basket: [],
};
const getters = {
  getBasket(state) {
    return state.basket;
  },
  getBasketLength(state) {
    return state.basket.length;
  },
};
const mutations = {
  addToBasket(state, movie) {
    state.basket.push({
      id: movie.id,
      image: "https://image.tmdb.org/t/p/w200" + movie.poster_path,
    });
  },
};
const actions = {
  addToBasket({ commit }, movie) {
    var already = false;
    state.basket.forEach(function(e) {
      if (e.id == movie.id) {
        already = true;
        return;
      }
    });
    if (!already) {
      commit("addToBasket", movie);
    }
  },
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

export default store;

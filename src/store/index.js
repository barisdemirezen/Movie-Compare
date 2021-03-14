import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  basket: [],
  leftImage: [],
  rightImage: [],
};
const getters = {
  getBasket(state) {
    return state.basket;
  },
  getBasketLength(state) {
    return state.basket.length;
  },
  getLeftImage(state) {
    return state.leftImage;
  },
  getRightImage(state) {
    return state.rightImage;
  },
};
const mutations = {
  addToBasket(state, movie) {
    state.basket.push({
      id: movie.id,
      image: "https://image.tmdb.org/t/p/w200" + movie.poster_path,
    });
  },
  changeCompareImage(state, res) {
    if (res.option === "right") {
      state.rightImage = res.res;
    } else {
      state.leftImage = res.res;
    }
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
  changeCompareImage({ commit }, { id, option }) {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.VUE_APP_ENV_APIKEY}`
    )
      .then((response) => response.json())
      .then((res) => {
        commit("changeCompareImage", { res: res, option: option });
      });
  },
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

export default store;

import Vue from "vue";
import vuex from "vuex";

Vue.use(vuex);

export default new vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment(state, param) {
      state.count += 1;
    }
  }
});

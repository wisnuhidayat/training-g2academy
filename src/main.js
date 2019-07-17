import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import RouterConfig from "./router";
import store from "./store";

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router: RouterConfig,
  store: store,
  render: h => h(App)
}).$mount("#app");

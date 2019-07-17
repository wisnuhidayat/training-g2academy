import Router from "vue-router";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

const config = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Page1
    },
    {
      path: "/page1",
      component: Page1
    },
    {
      path: "/page2",
      component: Page2
    }
  ]
});

export default config;

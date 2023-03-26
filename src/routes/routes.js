import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import CheckList from "../components/time_CheckList.vue";
export default new VueRouter({
  mode: "history", //해쉬값 제거 방식
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/CheckList",
      name: "CheckList",
      component: CheckList,
    },
  ],
});

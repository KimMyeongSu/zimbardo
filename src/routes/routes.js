import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history", //해쉬값 제거 방식
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/example1/:id",
      component: { template: "<h1>Router 1</h1>" },
    },
    {
      path: "/test",
      component: { template: "<h1>Router 2</h1>" },
    },
  ],
});

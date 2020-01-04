import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/photo",
    name: "photo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Photo.vue")
  },
  {
    path: "/mtest",
    name: "mtest",
    component: ()=>
      import("../views/Mtest.vue")
  },
  {
    path: "/guide",
    name: "guide",
    component: ()=>
      import("../views/Guide.vue")
  },
  {
    path: "/case",
    name: "case",
    component: ()=>
      import("../views/Case.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;

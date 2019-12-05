import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Service from "./views/Service.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home",
      name: "home",
      component:  () =>
        import("./views/home/Home.vue")
    },
    {
      path: "/home",
      name: "home",
      component:  () =>
        import("./views/home/Home.vue")
    },
    {
      path: "/medieco",
      name: "/medieco",
      component:   () =>
      import("./views/medieco/Medieco.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import("./views/About.vue")
    },
    {
      path: "/service",
      name: "service",
      component: Service
    },
    {
      path: "/shared",
      name: "shared",
      component: () =>
        import("./views/Shared.vue")
    },
    {
      path: "/disease",
      name: "disease",
      component: () =>
        import("./views/Disease.vue")
    },
    {
      path: "/einMatrix",
      name: "einMatrix",
      component:  () =>
        import("./views/Einmatrix.vue")
    },
  ]
});

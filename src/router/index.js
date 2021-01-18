import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/ProfessorsIndex.vue";
import ProfessorsIndex from "../views/ProfessorsIndex.vue";
import ProfessorsShow from "../views/ProfessorsShow.vue";
import ProfessorsNew from "../views/ProfessorsNew.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/professors",
    name: "professors-index",
    component: ProfessorsIndex,
  },
  {
    path: "/professors/new",
    name: "professors-new",
    component: ProfessorsNew,
  },
  {
    path: "/professors/:id",
    name: "professors-show",
    component: ProfessorsShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

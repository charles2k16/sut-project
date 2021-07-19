import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import TrackingShipments from "../components/TrackingShipments.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/manage-everblueshippers/account-adminitration-0b0",
    name: "Login",
    component: Login,
  },
  {
    path: "/shipments-tracking",
    name: "TrackingShipments",
    component: TrackingShipments,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TrackingShipments from "../components/TrackingShipments.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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

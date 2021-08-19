import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import School from "@/views/School.vue";
import About from "@/views/About.vue";
import Partner from "@/views/Partner.vue";
import Contact from "@/views/Contact.vue";
import SingleBlog from "@/views/SingleBlog"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/partner",
    name: "Partner",
    component: Partner,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/schools/:name",
    name: "School",
    component: School,
  },
  {
    path: "/blog/:title",
    name: "Blog",
    component: SingleBlog,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

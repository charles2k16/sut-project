import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import School from "@/views/School.vue";
import Partner from "@/views/Partner.vue";
import Contact from "@/views/Contact.vue";
import SingleBlog from "@/views/SingleBlog";
import ImagesPortal from "@/views/ImagesPortal";
import SchoolsPortal from "@/views/SchoolsPortal";
import DistrictsPortal from "@/views/DistrictsPortal";

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
  {
    path: "/images-portal",
    name: "ImagesPortal",
    component: ImagesPortal,
  },
  {
    path: "/schools-portal",
    name: "SchoolPortal",
    component: SchoolsPortal,
  },
  {
    path: "/districts-portal",
    name: "DistrictsPortal",
    component: DistrictsPortal,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

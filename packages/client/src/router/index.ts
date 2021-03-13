import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "@/components/app/Layout.vue";
import Preview from "@/views/Preview.vue";
import CreateView from "@/views/CreateView.vue";
import Auxiliary from "@/views/Auxiliary.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        name: "Home",
        redirect: { name: "Preview" }
      },
      {
        path: "preview",
        name: "Preview",
        component: Preview
      },
      {
        path: "auxiliary",
        name: "Auxiliary",
        component: Auxiliary
      }
    ]
  },
  {
    path: "/create-view/",
    name: "CreateView",
    component: CreateView,
    children: [
      {
        name: "CreateRoute",
        path: "route",
        component: () => import("@/components/modules/CreateRoute.vue")
      },
      {
        name: "CreateInterface",
        path: "interface",
        component: () => import("@/components/modules/CreateInterface.vue")
      },
      {
        name: "CreateTemplate",
        path: "template",
        component: () => import("@/components/modules/CreateTemplate.vue")
      }
    ]
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;

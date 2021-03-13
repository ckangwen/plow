import {
  InsertNewRoutePayload,
  RouteState,
  RootState,
  DeleteNodePayload
} from "../types";
import { RouteConfig } from "@/types";
import { get, remove } from "lodash";
import { MutationTree, ActionTree } from "vuex";
import { post } from "../../libs/request";

const initRouteConfigs = [
  {
    path: "/",
    name: "dashboard",
    title: "Dashboard",
    redirect: "/dashboard",
    icon: "el-icon-s-promotion",
    viewPath: "dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboardIndex",
        title: "Dashboard",
        viewPath: "@/views/dashboard/index.vue",
        icon: "el-icon-s-promotion",
        children: []
      },
      {
        path: "element",
        name: "element",
        icon: "el-icon-document",
        title: "Element",
        viewPath: "@/views/dashboard/element.vue",
        hidden: false,
        children: []
      }
    ]
  }
];

const state: RouteState = {
  routeConfigs: initRouteConfigs,
  activeRouteConfig: null
};
const mutations: MutationTree<RouteState> = {
  SET_ROUTE_CONFIGS(state, routeConfigs: RouteConfig[]) {
    state.routeConfigs = routeConfigs;
    // TODO socket提交
  },
  SET_ACTIVE_CONFIG(state, activeRouteConfig: RouteConfig) {
    state.activeRouteConfig = activeRouteConfig;
  }
};
const actions: ActionTree<RouteState, RootState> = {
  async insert({ state }, { path, route }: InsertNewRoutePayload) {
    const res = await post("/route/add", {
      path,
      route: JSON.stringify(route)
    });
    if (res.code === 200) {
      if (!path) {
        state.routeConfigs = [...state.routeConfigs, route];
      } else {
        const parentRouteConfig = get(state.routeConfigs, path);
        if (!parentRouteConfig.children) {
          parentRouteConfig.children = [];
        }
        parentRouteConfig.children = [...parentRouteConfig.children, route];
      }
    }
  },
  deleteNode({ state }, { path }: DeleteNodePayload) {
    if (path.length === 1) {
      state.routeConfigs.splice(0, 1);
    } else {
      let item = state.routeConfigs[path[0]].children || [];
      for (let i = 1; i < path.length - 2; i++) {
        item = item[i].children || [];
      }
      item.splice(path[path.length - 1], 1);
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};

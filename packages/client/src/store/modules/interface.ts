import Vue from "vue";
import { ActionTree, Module, MutationTree } from "vuex";
import { InterfaceMainData } from "../../types/yapi";
import {
  InterfaceState,
  UpdateInterfaceTypePayload,
  RootState
} from "../types";

const state: InterfaceState = {
  cookie: "",
  interfaceData: [] as InterfaceMainData[]
};

const mutations: MutationTree<InterfaceState> = {
  SET_COOKIE(state, cookie) {
    state.cookie = cookie;
  },
  UPDATE_INTERFACE_TYPE_DATA(
    state: InterfaceState,
    payload: UpdateInterfaceTypePayload
  ) {
    state.interfaceData.push(payload.data);
  }
};

const actions: ActionTree<InterfaceState, RootState> = {
  async setCookie({ commit, dispatch }, cookie) {
    await dispatch(
      "db/set",
      {
        path: "cookie",
        value: cookie
      },
      {
        root: true
      }
    );
    commit("SET_COOKIE", cookie);
  }
};

const interfaceModule: Module<InterfaceState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions
};

export default interfaceModule;

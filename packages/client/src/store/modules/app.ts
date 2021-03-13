import { AppState, RootState } from "../types";
import { MutationTree, ActionTree } from "vuex";

const state: AppState = {
  created: false,
  projectName: "__default-vue-admin__"
};
const mutations: MutationTree<AppState> = {
  SET_CREATED(state, created: boolean) {
    state.created = created;
  },
  SET_PROJECTNAME(state, name: string) {
    state.projectName = name;
  }
};
const actions: ActionTree<AppState, RootState> = {
  setProjectName({ commit, dispatch }, name: string) {
    commit("SET_PROJECTNAME", name);
    dispatch(
      "db/set",
      {
        path: "projectName",
        value: name
      },
      {
        root: true
      }
    );
  },
  async init({ state, dispatch }) {
    const projectName = await dispatch(
      "db/get",
      {
        path: "projectName",
        global: true
      },
      {
        root: true
      }
    );
    const name = projectName || state.projectName || "__default-vue-admin__";
    await dispatch("setProjectName", name);
    const cookie = await dispatch(
      "db/get",
      {
        path: "cookie"
      },
      {
        root: true
      }
    );
    await dispatch("interface/setCookie", cookie, {
      root: true
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};

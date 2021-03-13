import Vue from "vue";
import Vuex from "vuex";
import route from "./modules/route";
import interfaceModule from "./modules/interface";
import db from "./modules/db";
import app from "./modules/app";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    route,
    interface: interfaceModule,
    db,
    app
  }
});

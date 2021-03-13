import { createLocalVue } from "@vue/test-utils";
import VueCompositionApi from "@vue/composition-api";
import ElementUI from "element-ui";

export const localVue = createLocalVue();

localVue.use(ElementUI);
localVue.use(VueCompositionApi);

/**
 * 等待 ms 毫秒，返回 Promise
 * @param {Number} ms
 */
export const wait = function(ms = 50) {
  return new Promise(resolve => setTimeout(() => resolve(""), ms));
};

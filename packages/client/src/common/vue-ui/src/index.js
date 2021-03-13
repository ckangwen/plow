import VTooltip from "v-tooltip";
import VueResize from "vue-resize";
import "focus-visible";
import "vue-resize/dist/vue-resize.css";
import VueButton from "./components/VueButton.vue";
import VueDisable from "./components/VueDisable.vue";
import VueDropdown from "./components/VueDropdown.vue";
import VueDropdownButton from "./components/VueDropdownButton.vue";
import VueGroup from "./components/VueGroup.vue";
import VueGroupButton from "./components/VueGroupButton.vue";
import VueIcon from "./components/VueIcon.vue";
import VueInput from "./components/VueInput.vue";
import VueModal from "./components/VueModal.vue";
import VueSelect from "./components/VueSelect.vue";
import VueSelectButton from "./components/VueSelectButton.vue";
import VueSwitch from "./components/VueSwitch.vue";
import VueTab from "./components/VueTab.vue";
import VueTabs from "./components/VueTabs.vue";
import VueIcons from "./icon";
import "./icon.css";

export function install(Vue, options = {}) {
  Vue.use(
    VTooltip,
    Object.assign(
      {
        defaultDelay: { show: 1000, hide: 0 },
        defaultBoundariesElement: document.body,
        popover: {
          defaultHandleResize: false
        }
      },
      options.vtooltip
    )
  );

  Vue.use(VueResize);
  Vue.use(VueIcons);
  Vue.component("VueButton", VueButton);
  Vue.component("VueDisable", VueDisable);
  Vue.component("VueDropdown", VueDropdown);
  Vue.component("VueDropdownButton", VueDropdownButton);
  Vue.component("VueGroup", VueGroup);
  Vue.component("VueGroupButton", VueGroupButton);
  Vue.component("VueIcon", VueIcon);
  Vue.component("VueInput", VueInput);
  Vue.component("VueModal", VueModal);
  Vue.component("VueSelect", VueSelect);
  Vue.component("VueSelectButton", VueSelectButton);
  Vue.component("VueSwitch", VueSwitch);
  Vue.component("VueTab", VueTab);
  Vue.component("VueTabs", VueTabs);
}

const plugin = {
  install
};

export default plugin;

// Auto-install
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
import Responsive from "@/libs/responsive";
import VueUI from "@/common/vue-ui/src/index";
// import VueUI from "@/common/vue-ui/vue-ui.umd.js";
import {
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Form,
  FormItem,
  Tree,
  Loading,
  Table,
  TableColumn,
  Card
} from "element-ui";
import VueVirtualScroller from "vue-virtual-scroller";
Vue.use(VueUI);
Vue.use(VueCompositionApi);
Vue.use(Responsive, {
  computed: {
    mobile() {
      return this.width <= 768;
    },
    tablet() {
      return this.width <= 900;
    },
    desktop() {
      return !this.tablet;
    },
    wide() {
      return this.width >= 1300;
    }
  }
});

Vue.use(VueVirtualScroller);

Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Tree.name, Tree);
Vue.component(Checkbox.name, Checkbox);
Vue.component(CheckboxButton.name, CheckboxButton);
Vue.component(CheckboxGroup.name, CheckboxGroup);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Card.name, Card);
Vue.use(Loading);

import "@/common/element-vue-theme/index.css";
// import "@vue/ui/dist/vue-ui.css";
import "@/common/vue-ui/vue-ui.css";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

<template>
  <div class="route-module-wrapper">
    <div class="aside">
      <div class="tree-top-button" @click="onCreateNewRoute">创建新路由</div>
      <div class="tree-content">
        <el-tree
          :data="routeConfigs"
          node-key="name"
          default-expand-all
          :renderContent="renderContent"
          @node-contextmenu="onNodeContextmenu"
        ></el-tree>
      </div>
    </div>

    <div class="main">
      <div class="scroll-content">
        <create-route-form-vue
          v-loading="formLoading"
          v-if="showForm"
          :viewPathPrefix="viewPath"
          @cancel="onFormCreateCancel"
          @success="onFormCreateSuccess"
          @fail="onFormCreateFail"
        />

        <div class="bottom-btn-group">
          <VueButton class="big round">取消</VueButton>
          <VueButton
            :disabled="!canNext"
            class="big round primary"
            @click="toNext"
            >下一步</VueButton
          >
          <!-- <el-button
            type="primary"
            style="margin-left: 50px;"
            :disabled="!canNext"
            @click="toNext"
          >
            下一步
            <i class="el-icon-arrow-right el-icon--right"></i>
          </el-button> -->
        </div>
      </div>
    </div>
    <context-menu id="context-menu" ref="contextmenu">
      <li class="contextmenu-item" @click="onDeleteNode">
        删除
      </li>
      <li class="contextmenu-item" @click="onAddRouteChildren">
        添加子节点
      </li>
    </context-menu>
  </div>
</template>
<script lang="ts">
import ContextMenu from "vue-context-menu";
import CreateRouteFormVue from "@/components/CreateRouteForm.vue";
import { defineComponent, ref } from "@vue/composition-api";
import { MessageBox } from "element-ui";
import { camelCase, upperFirst } from "lodash";
import {
  useNamespacedActions,
  useNamespacedMutations,
  useNamespacedState
} from "vuex-composition-helpers";

import useCanNext from "@/use/useCanNext";

import { CreateElement } from "vue";
import { RouteConfig } from "@/types";
import { RouteActions, RouteMutations, RouteState } from "@/store/types";
import Vue from "vue";

const getNodePath = (node: any, child: any, paths: any[] = []) => {
  if (node.parent) {
    const res = getNodePath(node.parent, node, paths);
    paths = res.concat(paths);
  }
  let index = -1;
  if (node.childNodes && node.childNodes.length > 0 && child) {
    const itemIndex = node.childNodes.findIndex((item: any) => {
      return item.key === child.key;
    });
    index = itemIndex;
  }
  if (index > -1) {
    return paths.concat(index);
  }
  return paths;
};

export default defineComponent({
  name: "RouteModule",
  components: {
    CreateRouteFormVue,
    ContextMenu
  },
  setup(props, context) {
    /* vuex */
    const { routeConfigs } = useNamespacedState<RouteState>("route", [
      "routeConfigs"
    ]);
    const { insert, deleteNode } = useNamespacedActions<RouteActions>("route", [
      "insert",
      "deleteNode"
    ]);
    const { SET_ACTIVE_CONFIG } = useNamespacedMutations<RouteMutations>(
      "route",
      ["SET_ACTIVE_CONFIG"]
    );

    /* 前往下一项 */
    const { canNext, toNext } = useCanNext(context, false);

    /* 右键菜单 */
    const contextmenu = ref<any | null>(null);

    /* 路由树相关 */
    const activeRoute = ref<RouteConfig>({} as any);
    const activeRoutePath = ref("");
    const onDeleteNode = (node: any) => {
      const path = getNodePath(node, null);
      deleteNode({ path });
      Vue.nextTick(() => {
        //
      });
    };
    const renderContent = (h: CreateElement, { node, data }: any) => {
      return h(
        "div",
        {
          class: "tree-node-content"
        },
        [
          h("div", [
            h("i", { class: node.data.icon }),
            h("span", { style: { "margin-left": "15px" } }, node.data.title)
          ]),
          h("span", {
            class: "el-icon-delete",
            on: { click: () => onDeleteNode(node) }
          })
        ]
      );
    };
    const onNodeContextmenu = (e: MouseEvent, data: any, node: any) => {
      contextmenu.value?.open();
      contextmenu.value.ctxTop = e.clientY - 46;

      const routePath = getNodePath(node, null)
        .reverse()
        .join(".");

      activeRoute.value = data;
      activeRoutePath.value = routePath;
    };

    /* 表单相关 */
    const showForm = ref(true);
    const formLoading = ref(false);
    /**
     * 将要生成的路由的视图文件的路径
     * 如果是子路由，则文件路径前要加上父级路由的name
     */
    const viewPath = ref("@/views/");
    const onCreateNewRoute = () => {
      // showForm.value = true;
    };
    const onFormCreateCancel = () => {
      // showForm.value = false;
    };
    const onFormCreateSuccess = (data: RouteConfig) => {
      insert({
        path: activeRoutePath.value,
        route: data
      });
      SET_ACTIVE_CONFIG(activeRoute.value);

      canNext.value = true;
    };
    const onFormCreateFail = () => {
      MessageBox({
        type: "warning",
        message: "请确保表单输入正确"
      });
    };

    const onAddRouteChildren = () => {
      formLoading.value = true;
      viewPath.value = `@/views/${upperFirst(
        camelCase(activeRoute.value.name)
      )}/`;
      setTimeout(() => {
        formLoading.value = false;
      }, 500);
    };

    return {
      contextmenu,
      onDeleteNode,
      onAddRouteChildren,
      onNodeContextmenu,
      showForm,
      formLoading,
      viewPath,
      onCreateNewRoute,
      renderContent,
      onFormCreateCancel,
      onFormCreateSuccess,
      onFormCreateFail,
      canNext,
      toNext,
      routeConfigs
    };
  }
});
</script>
<style>
.el-scrollbar__wrap {
  overflow-y: scroll;
  overflow-x: hidden;
}
.tree-node-content {
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding-right: 4px;
}
</style>
<style lang="scss" scoped>
.route-module-wrapper {
  display: flex;
  box-sizing: border-box;
  min-height: 100%;
  transition: all 1s ease-in-out;

  .aside {
    display: flex;
    flex-direction: column;
    flex: 0 0 200px;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    .tree-top-button {
      padding: 12px 20px;
      text-align: left;
      border-radius: 17px;
      text-align: center;
      background-color: rgba(66, 185, 131, 0.05);
      cursor: pointer;

      &:hover {
        background-color: #e4f5ef;
      }
    }
  }
  .main {
    flex: 1;
    padding-left: 10px;

    .scroll-content {
      height: calc(100vh - 56px);
      overflow-y: auto;
    }
  }

  .tree-content {
    position: relative;
    margin-top: 15px;
    flex: 1;

    ::v-deep .el-tree-node__content {
      padding: 20px 0;
      height: 30px;
    }
  }

  .bottom-btn-group {
    text-align: center;
    margin-top: 15px;
    ::v-deep .el-button {
      padding: 12px 35px;
    }
  }

  .contextmenu-item {
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
      background-color: #f5f7fa;
    }
  }
}
</style>

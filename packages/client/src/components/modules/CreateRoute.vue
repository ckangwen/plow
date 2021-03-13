<template>
  <div class="route-module-wrapper">
    <div class="aside">
      <div class="tree-top-button" @click="onCreateNewRoute">创建新路由</div>
      <div class="tree-content">
        <el-tree
          v-loading="routeState.loading"
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
        <CreateRouteForm
          v-loading="formLoading"
          v-if="showForm"
          ref="routeForm"
          :viewPathPrefix="baseViewPath"
          @cancel="onFormCreateCancel"
          @success="onFormCreateSuccess"
          @fail="onFormCreateFail"
        />

        <div class="bottom-btn-group">
          <VueButton class="big">取消</VueButton>
          <VueButton :disabled="!canNext" class="big primary" @click="toNext"
            >下一步</VueButton
          >
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
import CreateRouteForm from "@/components/CreateRouteForm.vue";
import { defineComponent, ref, onBeforeMount } from "@vue/composition-api";
import { MessageBox, Message } from "element-ui";
import { camelCase, upperFirst } from "lodash";
import {
  useNamespacedActions,
  useNamespacedMutations,
  useNamespacedState
} from "vuex-composition-helpers";

import { CreateElement } from "vue";
import { RouteConfig } from "@/types";
import { RouteActions, RouteMutations, RouteState } from "@/store/types";
import Vue from "vue";
import useRouter from "../../use/useRouter";
import useRequest from "../../use/useRequest";
import { post } from "@/libs/request";

const getNodePath = (node: any, child: any, paths: any[] = []) => {
  if (node.parent) {
    const res = getNodePath(node.parent, node, paths);
    paths = res.concat(paths);
  }
  let name = "";
  if (node.childNodes && node.childNodes.length > 0 && child) {
    const itemNode = node.childNodes.find((item: any) => {
      return item.key === child.key;
    });
    name = itemNode.data.name;
  }
  if (name) {
    return paths.concat(name);
  }
  return paths;
};

export default defineComponent({
  name: "RouteModule",
  components: {
    CreateRouteForm,
    ContextMenu
  },
  setup(props, context) {
    const router = useRouter();

    /* vuex */
    const { routeConfigs } = useNamespacedState<RouteState>("route", [
      "routeConfigs"
    ]);
    const { insert, deleteNode } = useNamespacedActions<RouteActions>("route", [
      "insert",
      "deleteNode"
    ]);
    const { SET_ACTIVE_CONFIG, SET_ROUTE_CONFIGS } = useNamespacedMutations<
      RouteMutations
    >("route", ["SET_ACTIVE_CONFIG", "SET_ROUTE_CONFIGS"]);

    const routeState = ref<{
      loading: boolean;
      data: RouteConfig[];
      error: null | Error;
    }>({
      loading: true,
      data: [],
      error: null
    });

    const fetchData = async () => {
      const requestData = await useRequest<RouteConfig[]>({
        url: "/route/list"
      });

      routeState.value.data = requestData.data.value || [];
      routeState.value.loading = requestData.loading.value;
      routeState.value.error = requestData.error.value;
      SET_ROUTE_CONFIGS(routeState.value.data);
    };

    onBeforeMount(async () => {
      await fetchData();
    });

    /* 前往下一项 */
    const canNext = ref(false);
    const toNext = () => {
      router?.push("/create-view/interface");
    };

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
    const renderContent = (h: CreateElement, { node }: any) => {
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


      const routePath = getNodePath(node, null).join(".");

      activeRoute.value = data;
      activeRoutePath.value = routePath;
    };

    /* 表单相关 */
    const routeForm = ref();
    const showForm = ref(true);
    const formLoading = ref(false);
    /**
     * 将要生成的路由的视图文件的路径
     * 如果是子路由，则文件路径前要加上父级路由的name
     */
    const baseViewPath = ref("@/views/");
    const onCreateNewRoute = () => {
      // showForm.value = true;
    };
    const onFormCreateCancel = () => {
      // showForm.value = false;
    };
    const onFormCreateSuccess = async (data: RouteConfig) => {
      formLoading.value = true;
      console.log(data, activeRoute.value);

        SET_ACTIVE_CONFIG(data);
      // if (!activeRoute.value.name) {
      // } else {
      //   SET_ACTIVE_CONFIG(activeRoute.value);
      // }

      const res = await post("/route/add", {
        path: activeRoutePath.value,
        route: JSON.stringify(data)
      });
      if (res.code === 200) {
        Message.success({
          type: "success",
          message: "路由添加成功"
        });
      }
      await fetchData();
      routeForm.value?.resetFields();
      formLoading.value = false;
      canNext.value = true;
    };
    const onFormCreateFail = () => {
      Message({
        type: "warning",
        message: "请确保表单输入正确"
      });
    };

    const onAddRouteChildren = () => {
      formLoading.value = true;
      baseViewPath.value = `@/views/${upperFirst(
        camelCase(activeRoute.value.name)
      )}/`;
      // routeForm.value?.resetFields();
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
      baseViewPath,
      onCreateNewRoute,
      renderContent,
      routeForm,
      onFormCreateCancel,
      onFormCreateSuccess,
      onFormCreateFail,
      canNext,
      toNext,
      routeConfigs,
      routeState
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
    background: $content-bg-primary-light;

    .scroll-content {
      height: 100vh;
      overflow-y: auto;
      padding: 15px;
      box-sizing: border-box;
    }
  }

  .tree-content {
    position: relative;
    margin-top: 15px;
    flex: 1;
    padding-right: 10px;
    box-sizing: border-box;

    ::v-deep .el-tree-node__content {
      padding: 20px 0;
      height: 30px;
    }
  }

  .bottom-btn-group {
    text-align: center;
    width: 600px;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    margin-top: 15px;
    ::v-deep .vue-ui-button {
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

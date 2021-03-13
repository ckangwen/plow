<template>
  <div class="interface-module-container">
    <div class="table-container">
      <div class="form-top">
        <VueSwitch class="right" v-model="importFromYApi">
          从YApi导入
        </VueSwitch>
      </div>
      <InterfaceTable :simple="!importFromYApi" @success="onSuccess" />
    </div>

    <div class="bottom-btn-group">
      <VueButton class="big" label="取消" />
      <VueButton
        :disabled="!canNext"
        class="big primary"
        style="margin-left: 50px;"
        @click="toNext"
        label="下一步"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { InterfaceActions, InterfaceState, RouteState } from "@/store/types";
import { defineComponent, ref, watch } from "@vue/composition-api";
import {
  useNamespacedActions,
  useNamespacedState
} from "vuex-composition-helpers";
import { Message, MessageBox } from "element-ui";
import useRouter from "@/use/useRouter";
import { post } from "@/libs/request";

type InterfaceFormItemDef = {
  label: string;
  prop: string;
};

export default defineComponent({
  name: "InterfaceModule",
  setup() {
    const router = useRouter();
    const { activeRouteConfig } = useNamespacedState<RouteState>("route", [
      "activeRouteConfig"
    ]);

    /* 填写cookie的相关状态 */
    const { cookie: interfaceCookie } = useNamespacedState<InterfaceState>(
      "interface",
      ["cookie"]
    );
    const { setCookie } = useNamespacedActions<InterfaceActions>("interface", [
      "setCookie"
    ]);

    const canNext = ref(false);
    const toNext = () => {
      router?.push("/create-view/template");
    };

    /* yapi */
    const importFromYApi = ref(false);

    watch(importFromYApi, () => {
      if (importFromYApi.value && !interfaceCookie.value) {
        setTimeout(() => {
          MessageBox.prompt("请填写YApi的cookie，用于请求接口", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消"
          }).then(({ value }: any) => {
            if (value) {
              setCookie(value);
            }
          });
        }, 1000);
      }
    });

    const onSuccess = async (data: any[]) => {
      const res = await post("/interface/set", {
        name: activeRouteConfig.value?.name,
        interfaces: JSON.stringify(data)
      });
      if (res.code === 200) {
        Message.success("接口文件已生成");
        canNext.value = true;
      } else {
        Message.error("接口文件生成失败");
        canNext.value = false;
      }
    };

    return {
      canNext,
      toNext,
      importFromYApi,
      onSuccess
    };
  }
});
</script>
<style>
.vue-ui-dropdown-content.vue-ui-disable > :not(.vue-ui-grid) {
  min-width: 100px;
}
.el-table td,
.el-table th.is-leaf {
  border: 0;
}
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #fff !important;
}
</style>
<style lang="scss" scoped>
.interface-module-container {
  .form-top {
    margin: 10px 0;
    text-align: left;
  }
  .bottom-btn-group {
    display: flex;
    justify-content: center;
    text-align: left;
    margin-top: 15px;
  }

  .input-control {
    width: 500px;
  }
}
.form-header {
  padding-left: 100px;
  height: 40px;
  line-height: 40px;

  .form-cell {
    display: inline-block;
  }
}
.table-container {
  width: 920px;
  margin: 0 auto;
}
</style>

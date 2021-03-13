<template>
  <div class="interface-table-container">
    <el-collapse accordion v-model="collapseName">
      <el-collapse-item name="1">
        <div
          slot="title"
          class="collapse-trigger-area"
          @click="collapsed = !collapsed"
        >
          <div class="collapse-trigger-icon">
            <i
              class="el-icon-arrow-down"
              :style="{
                transform: collapsed ? 'rotate(0)' : 'rotate(180deg)',
                transition: 'all .3s'
              }"
            ></i>
          </div>
          <el-input
            @click.native="stopPropagation"
            style="flex: 0 0 200px;"
            placeholder="请传入接口的id"
            v-model="interfaceId"
          >
            <el-button
              @click="fetchInterface"
              slot="append"
              icon="el-icon-search"
            ></el-button>
          </el-input>
          <div style="flex: 1" @click="stopPropagation"></div>
        </div>

        <div class="table-top">
          <span class="table-top__title">{{ interfaceData.title }}</span>
          <span class="table-top__path">{{ interfaceData.interface }}</span>
          <el-tag v-if="!loading" size="medium" type="success">{{
            interfaceData.method
          }}</el-tag>
        </div>
        <el-table
          v-loading="loading"
          :border="true"
          :data="interfaceData.reqBody"
          size="small"
        >
          <el-table-column
            prop="name"
            label="参数名称"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="type"
            label="参数类型"
            width="180"
          ></el-table-column>
          <el-table-column prop="required" label="是否必须" width="180">
            <template slot-scope="scope">
              <span>
                {{ scope.row.required === "1" ? "是" : "否" }}
              </span>
            </template>
          </el-table-column>
          <el-table-column
            prop="example"
            label="示例"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="desc"
            label="备注"
            width="180"
          ></el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "@vue/composition-api";
import { InterfaceMainData } from "@/types/yapi";
import { getInterfaceDef } from "../api/interface";
import { useNamespacedState } from "vuex-composition-helpers";
import { InterfaceState } from "@/store/types";

export default defineComponent({
  name: "InterfaceBodyTable",
  setup(props, context) {
    const { cookie: interfaceCookie } = useNamespacedState<InterfaceState>(
      "interface",
      ["cookie"]
    );
    // 折叠面板
    const collapseName = ref("");
    const collapsed = ref(true);
    const stopPropagation = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    // 接口数据定义
    const interfaceData = ref<InterfaceMainData>({
      interface: "",
      title: "",
      method: "",
      reqBody: [],
      resBody: ""
    });
    const interfaceId = ref("");

    // 表格
    const loading = computed(() => {
      return interfaceData.value.reqBody?.length === 0;
    });
    const fetchInterface = async () => {
      const res =
        (await getInterfaceDef({
          id: interfaceId.value,
          cookie: interfaceCookie.value
        })) || {};
      if (res.code === 200) {
        const data = res.data;
        if (data.errcode === 0) {
          collapseName.value = "1";
          const {
            path,
            method,
            req_body_form: reqBodyForm,
            res_body: resBody,
            title
          } = data.data;

          interfaceData.value.interface = path;
          interfaceData.value.title = title;
          interfaceData.value.method = method;
          interfaceData.value.reqBody = reqBodyForm;

          context.emit("success", {
            interface: path,
            title,
            method,
            reqBody: reqBodyForm,
            resBody
          });
        }
      }
    };

    return {
      collapseName,
      collapsed,
      stopPropagation,
      interfaceData,
      interfaceId,
      loading,
      fetchInterface
    };
  }
});
</script>
<style lang="scss" scoped>
.collapse-trigger-area {
  display: flex;
  width: 100%;
}
.collapse-trigger-icon {
  flex: 0 0 auto;
  padding: 0 10px;

  i {
    font-size: 17px;
  }
}
.interface-table-container .collapse-trigger-area + .el-collapse-item__arrow {
  display: none;
}
.interface-table-container .el-collapse-item__header {
  border: 0;
}
.table-top {
  background: #f2f6fc;
  padding: 10px;
  &__title {
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    margin-right: 15px;
  }
  &__path {
    display: inline-block;
    color: #909399;
    margin-right: 15px;
  }
}
</style>

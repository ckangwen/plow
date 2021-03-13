<template>
  <div class="interface-table-container">
    <div class="header">
      <VueButton
        class="primary"
        style="width: 100px"
        label="完成"
        @click="onSubmit"
      />
    </div>
    <el-table :data="formData">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form
            label-position="left"
            class="table-expand"
            v-if="!props.row.disabled"
          >
            <el-form-item label="接口名称">
              <span>{{ props.row.body.title }}</span>
            </el-form-item>
            <el-form-item label="接口路径">
              <span>{{ props.row.body.interface }}</span>
            </el-form-item>
            <el-form-item label="请求参数">
              <el-table :data="props.row.body.reqBody" stripe size="mini">
                <el-table-column prop="name" label="参数名称"></el-table-column>
                <el-table-column prop="type" label="参数类型"></el-table-column>
                <el-table-column prop="required" label="是否必须">
                  <template slot-scope="itemScope">
                    <span>{{
                      itemScope.row.required == "1" ? "是" : "否"
                    }}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="example" label="示例"></el-table-column>
                <el-table-column prop="desc" label="备注"></el-table-column>
              </el-table>
            </el-form-item>
            <el-form-item label="返回数据">
              <el-table :data="props.row.body.resBodyArr" stripe size="mini">
                <el-table-column prop="name" label="名称"></el-table-column>
                <el-table-column prop="type" label="类型"></el-table-column>
                <el-table-column prop="required" label="是否必须">
                  <template slot-scope="itemScope">
                    <span>{{ itemScope.row.required ? "是" : "否" }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="default"
                  label="默认值"
                ></el-table-column>
                <el-table-column
                  prop="description"
                  label="备注"
                ></el-table-column>
              </el-table>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        v-if="!simple"
        prop="id"
        label="Interface Id"
        width="200px"
      >
        <template slot-scope="scope">
          <div style="display: flex;">
            <VueInput
              v-model="formData[scope.$index].id"
              placeholder="接口ID"
              style="min-width: 130px; margin-right: 10px;"
            ></VueInput>
            <VueButton
              class="icon-button round"
              icon-left="search"
              @click="fetchInterface(scope.$index)"
            />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="method" label="Method" width="110px">
        <template slot-scope="scope">
          <VueSelect
            v-model="formData[scope.$index].method"
            :disabled="!simple && formData[scope.$index].disabled"
          >
            <VueSelectButton value="GET" label="GET" />
            <VueSelectButton value="POST" label="POST" />
          </VueSelect>
        </template>
      </el-table-column>
      <el-table-column prop="interface" label="Interface" width="240px">
        <template slot-scope="scope">
          <VueInput
            v-model="formData[scope.$index].interface"
            placeholder="接口定义"
            :disabled="!simple && formData[scope.$index].disabled"
          ></VueInput>
        </template>
      </el-table-column>
      <el-table-column prop="functionName" label="FunctionName" width="240px">
        <template slot-scope="scope">
          <VueInput
            v-model="formData[scope.$index].functionName"
            placeholder="接口方法名"
            :disabled="!simple && formData[scope.$index].disabled"
          ></VueInput>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot="header">
          <VueButton
            class="icon-button round"
            icon-left="plus"
            @click="createNewInterface"
          />
        </template>
        <VueButton
          slot-scope="scope"
          class="icon-button round"
          icon-left="minus"
          @click="deleteInterface(scope.$index)"
        />
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "@vue/composition-api";
import { InterfaceMainData, YApiInterfaceResponse } from "@/types/yapi";
import { useNamespacedState } from "vuex-composition-helpers";
import { InterfaceState } from "@/store/types";
import { post } from "@/libs/request";

interface InterfaceMainDataWithState extends InterfaceMainData {
  id?: string;
  disabled?: boolean;
  body?: Record<string, any>;
}

const formatResData = (data: any) => {
  const requiredList = data.required || [];
  if (data.properties) {
    return Object.keys(data.properties).map(key => {
      const value = data.properties[key] || {};
      const finalValue = {
        name: key,
        required: requiredList.indexOf(key) > -1,
        ...value
      };
      if (value.properties) {
        const children = formatResData(value.properties);
        finalValue.children = children;
      }
      if (value.items) {
        finalValue.children = [
          {
            type: value.items.type,
            description: value.items.description
          }
        ];
      }
      return finalValue;
    });
  }
  return null;
};

export default defineComponent({
  name: "InterfaceTable",
  props: {
    simple: Boolean
  },
  setup(props, context) {
    const initData: InterfaceMainDataWithState = {
      method: "POST",
      interface: "",
      functionName: "",
      id: "",
      disabled: true
    };
    const formData = ref<InterfaceMainDataWithState[]>([initData]);

    const createNewInterface = () => {
      formData.value.push({
        method: "POST",
        interface: "",
        functionName: ""
      });
    };
    const deleteInterface = (index: number) => {
      formData.value.splice(index, 1);
    };

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
      resBody: "",
      resBodyArr: [] as any[]
    });
    const interfaceId = ref("");

    // 表格
    const loading = computed(() => {
      return interfaceData.value.reqBody?.length === 0;
    });
    const fetchInterface = async (index: number) => {
      const id = formData.value[index].id;
      const res =
        (await post<YApiInterfaceResponse>("/interface/get", {
          id,
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
            req_query: resQuery,
            title
          } = data.data;

          formData.value[index].body = {
            interface: path,
            title,
            method,
            reqBody:
              reqBodyForm && reqBodyForm.length > 0 ? reqBodyForm : resQuery,
            resBodyArr: formatResData(JSON.parse(resBody)) || []
          };

          formData.value[index].disabled = false;
          formData.value[index].interface = path;
          formData.value[index].method = method;
          formData.value[index].functionName = "";
        }
      }
    };

    const onSubmit = () => {
      context.emit("success", formData.value);
    };

    return {
      formData,
      collapseName,
      collapsed,
      stopPropagation,
      interfaceData,
      interfaceId,
      loading,
      fetchInterface,
      createNewInterface,
      deleteInterface,
      onSubmit
    };
  }
});
</script>
<style>
.table-expand .el-form-item {
  display: flex;
}
.table-expand .el-form-item .el-form-item__label {
  flex: 0 0 100px;
}
.table-expand .el-form-item .el-form-item__content {
  flex: 1;
}
</style>
<style lang="scss" scoped>
.interface-table-container {
  position: relative;
  .header {
    width: 100%;
    text-align: right;
  }
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

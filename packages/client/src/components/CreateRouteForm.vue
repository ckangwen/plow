<template>
  <div class="card">
    <div slot="header">创建路由</div>

    <el-form
      ref="form"
      label-width="100px"
      :model="formData"
      :rules="formRules"
    >
      <el-form-item prop="path" label="Path" required>
        <VueInput
          :value="formData.path"
          placeholder="路由路径"
          @input="onPathInput"
        />
      </el-form-item>

      <el-form-item prop="name" label="Name" required>
        <VueInput v-model="formData.name" placeholder="路由Name" />
      </el-form-item>

      <el-form-item prop="icon" label="Icon">
        <VueInput
          v-model="formData.icon"
          :icon-left="formData.icon"
          placeholder="导航菜单的图标"
        />
      </el-form-item>

      <el-form-item prop="title" label="Title">
        <VueInput v-model="formData.title" placeholder="导航菜单的文字" />
      </el-form-item>

      <el-form-item prop="viewPath" label="ViewPath" required>
        <VueInput v-model="formData.viewPath" placeholder="路由视图路径" />
      </el-form-item>

      <el-form-item prop="hidden" label="hidden" style="text-align: left">
        <VueSwitch v-model="formData.hidden"></VueSwitch>
      </el-form-item>
    </el-form>

    <div class="footer">
      <VueButton class="default round" style="width: 100px" @click="onCancel"
        >取消</VueButton
      >
      <VueButton
        class="primary round"
        style="width: 100px;margin-left: 50px;"
        @click="onConfirm"
        >确定</VueButton
      >
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRaw } from "@vue/composition-api";
import { camelCase, upperFirst, cloneDeep } from "lodash";

export default defineComponent({
  name: "CreateRouteForm",
  props: {
    viewPathPrefix: {
      type: String,
      default: "@/views/"
    }
  },
  setup(props, ctx) {
    const formData = ref({
      path: "",
      name: "",
      icon: "el-icon-document",
      title: "",
      viewPath: "",
      hidden: false,
      children: []
    });
    const formRules = ref({
      path: [{ required: true, message: "请输入路由路径", trigger: "blur" }],
      name: [{ required: true, message: "请输入路由名称", trigger: "blur" }],
      viewPath: [{ required: true, message: "请输入页面路径", trigger: "blur" }]
    });

    /**
     * 输入路径后，自动填充path、name、viewPath的值
     */
    const onPathInput = (e: any) => {
      const val = e.target.value;
      let name = val;
      if (val.charAt(0) === "/") {
        name = val.substring(1);
      }
      formData.value.path = val;
      formData.value.name = upperFirst(camelCase(name));
      formData.value.viewPath = `${props.viewPathPrefix}${formData.value.name}.vue`;
    };

    const form = ref<null | any>(null);
    const onConfirm = () => {
      form.value?.validate((valid: boolean) => {
        if (valid) {
          ctx.emit("success", cloneDeep(formData.value));
        } else {
          ctx.emit("fail");
          return false;
        }
      });
    };

    const resetFields = () => {
      form.value?.resetFields();
    };

    const onCancel = () => {
      resetFields();
      ctx.emit("cancel");
    };

    return {
      form,
      formData,
      formRules,
      onPathInput,
      onConfirm,
      onCancel,
      resetFields
    };
  }
});
</script>
<style lang="scss" scoped>
.card {
  width: 600px;
  margin: 0 auto;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 4px 15px rgb(0 0 0 / 5%);
  padding: 16px;
  box-sizing: border-box;
}
.footer {
  text-align: left;
}
</style>

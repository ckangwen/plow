import { mount } from "@vue/test-utils";
import CreateRouteForm from "@/components/CreateRouteForm.vue";
import { localVue } from "./utils";

describe("测试CreateRouteForm组件", () => {
  const wrapper = mount(CreateRouteForm, {
    localVue
  });
  const pathFormItem = wrapper
    .findAllComponents({ name: "el-form-item" })
    .at(0);
  const nameFormItem = wrapper
    .findAllComponents({ name: "el-form-item" })
    .at(1);
  const iconFormItem = wrapper
    .findAllComponents({ name: "el-form-item" })
    .at(2);
  const titleFormItem = wrapper
    .findAllComponents({ name: "el-form-item" })
    .at(3);
  const viewPathFormItem = wrapper
    .findAllComponents({ name: "el-form-item" })
    .at(4);
  it("非空校验", async () => {
    await wrapper.find(".footer .el-button:first-child").trigger("click");

    expect((pathFormItem.vm as any).validateMessage).toBe("请输入路由路径");

    expect((nameFormItem.vm as any).validateMessage).toBe("请输入路由名称");

    expect((viewPathFormItem.vm as any).validateMessage).toBe("请输入页面路径");
  });

  it("判断是否name,title,viewPath是否自动填充", async () => {
    await pathFormItem.find(".el-input__inner").setValue("/dashboard");
    expect((wrapper.vm as any).formData).toEqual({
      path: "/dashboard",
      name: "Dashboard",
      icon: "el-icon-document",
      title: "",
      viewPath: "@/views/Dashboard.vue",
      hidden: false,
      children: []
    });
  });

  it("检测事件触发", async () => {
    await wrapper.find(".footer .el-button:first-child").trigger("click");
    expect(wrapper.emitted().fail).toBeTruthy();

    await pathFormItem.find(".el-input__inner").setValue("/dashboard");
    await titleFormItem.find(".el-input__inner").setValue("仪表盘");

    await wrapper.find(".footer .el-button:first-child").trigger("click");
    expect((wrapper.emitted().success as any[])[0][0]).toEqual({
      path: "/dashboard",
      name: "Dashboard",
      icon: "el-icon-document",
      title: "仪表盘",
      viewPath: "@/views/Dashboard.vue",
      hidden: false,
      children: []
    });

    await wrapper.find(".footer .el-button:last-child").trigger("click");
    expect(wrapper.emitted().cancel).toBeTruthy();
  });
});

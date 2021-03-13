import { mount } from "@vue/test-utils";
import RouteModule from "@/modules/RouteModule.vue";
import { localVue } from "./utils";
import store from "@/store";

describe("测试RouteModule.vue", () => {
  const wrapper = mount(RouteModule, {
    localVue,
    store
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
  it("添加路由", async () => {
    const treeVm: any = wrapper.findComponent({ name: "el-tree" }).vm;
    const preData = treeVm.data;

    await pathFormItem.find(".el-input__inner").setValue("/table");
    await titleFormItem.find(".el-input__inner").setValue("表格");
    const nextBtnVm: any = await wrapper.find(
      ".bottom-btn-group .el-button:last-child"
    ).vm;
    expect(nextBtnVm.disabled).toBeTruthy();
    await wrapper.find(".footer .el-button:first-child").trigger("click");
    expect(nextBtnVm.disabled).toBeFalsy();

    expect(treeVm.data).toHaveLength(preData.length + 1);
    expect(treeVm.data[treeVm.data.length - 1]).toEqual({
      path: "/table",
      name: "Table",
      icon: "el-icon-document",
      title: "表格",
      viewPath: "@/views/Table.vue",
      hidden: false,
      children: []
    });
  });

  it("添加子路由", async () => {
    // const contextmenu = wrapper.find("#context-menu");
    // expect(contextmenu.isVisible()).toBeFalsy();
    // await wrapper
    //   .findComponent({ name: "el-tree" })
    //   .findAllComponents({ name: "el-tree-node" })
    //   .at(0)
    //   .find(".tree-node-content")
    //   .trigger("contextmenu");
    // expect(contextmenu.isVisible()).toBeTruthy();
  });
});

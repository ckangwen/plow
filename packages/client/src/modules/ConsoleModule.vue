<template>
  <el-tabs type="border-card" class="tab-container" v-model="activeTab">
    <el-tab-pane name="select">
      <span slot="label">
        <i class="el-icon-aim"></i>
      </span>
    </el-tab-pane>
    <el-tab-pane name="tree">
      <span slot="label">
        <i class="el-icon-menu"></i>
      </span>
      <ComponentTree :parent-window="iframe" :data="componentTree" />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import { defineComponent, onMounted, ref } from "@vue/composition-api";
import ComponentTree from "@/components/ComponentTree";

export default defineComponent({
  name: "Console",
  components: {
    ComponentTree
  },
  props: ["iframe"],
  setup() {
    const activeTab = ref("select");
    const componentTree = ref([]);

    onMounted(() => {
      window.addEventListener("message", e => {
        const { data } = e;
        const { name, value } = data;

        if (name === "componentTree") {
          componentTree.value = value;
        }
      });
    });

    return {
      activeTab,
      componentTree
    };
  }
});
</script>
<style>
.el-tabs__header {
  margin: 0;
  height: 40px;
}
.el-tabs__content {
  height: calc(100% - 40px);
  padding: 0 20px;
}
</style>
<style lang="scss" scoped>
.tab-container {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  border: 0;

  .tree-panel {
    height: 100%;
  }
}
</style>

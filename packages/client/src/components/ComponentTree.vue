<template>
  <div class="component-tree">
    <splitPane split="vertical" :default-percent="50" :min-percent="10">
      <div slot="paneL" class="left-panel">
        <el-tree
          :data="data"
          default-expand-all
          :indent="25"
          nodeKey="id"
          :expand-on-click-node="false"
          :render-content="renderContent"
        ></el-tree>
      </div>
      <div slot="paneR" class="right-panel">
        <el-form :model="formData" label-width="80px">
          <el-form-item></el-form-item>
        </el-form>
      </div>
    </splitPane>
  </div>
</template>
<script>
import splitPane from "vue-splitpane";
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "ComponentTree",
  components: {
    splitPane
  },
  props: ["parentWindow", "data"],
  setup(props) {
    const formData = ref({});

    const onComponentItemClick = ({ data }) => {
      const { propKeys, propData } = data;
      if (propKeys && propKeys.length > 0) {
        propKeys.forEach(k => {
          formData.value[k] = "";
        });
      }
    };
    const onMouseEnter = (e, node) => {
      e.stopImmediatePropagation();
      e.preventDefault();
      if (props.parentWindow && props.parentWindow.postMessage) {
        props.parentWindow.postMessage(
          { name: "mouseover", value: node.data.id },
          "*"
        );
      }
    };
    const renderContent = (h, { node = {} }) => {
      if (!node.data) return;
      return h(
        "div",
        {
          class: "flex main-between flex-stretch",
          on: {
            click: () => onComponentItemClick(node),
            mouseover: e => onMouseEnter(e, node)
          }
        },
        [
          h("span", { class: "component-tag" }, [
            "<",
            h(
              "span",
              {
                class: "component-name"
              },
              [node.data.name]
            ),
            ">"
          ]),
          h(
            "span",
            {
              class: "extra-icon"
            },
            [h("i", { class: "el-icon-view" })]
          )
        ]
      );
    };

    return {
      renderContent,
      formData
    };
  }
});
</script>
<style lang="scss">
@import "~@/styles/variables.scss";
.component-tag {
  font-family: Fira Code;
}

.el-tree-node {
  .component-name {
    color: #3ba776;
  }
  &:focus > .el-tree-node__content {
    background-color: #3ba776;
    color: #000;
    &:hover {
      background-color: #3ba776;
      color: #fff;
      .component-name {
        color: #fff;
      }
    }
  }
  .el-tree-node__content:hover {
    background-color: #e5f2ff;
  }
}
.el-tree-node__content {
  height: 30px;
}
.el-tree-node__expand-icon {
  height: 30px;
  box-sizing: border-box;
  font-size: 18px;

  &.expanded {
    width: 30px;
  }
}
.el-tab-pane {
  height: 100%;
}
</style>
<style lang="scss" scoped>
.component-tree {
  height: 100%;
  .component-node-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
  }

  .extra-icon {
    font-size: 18px;
  }

  .right-panel,
  .left-panel {
    overflow: auto;
    height: 100%;
  }
  .right-panel {
    padding: 10px;
  }
}
</style>

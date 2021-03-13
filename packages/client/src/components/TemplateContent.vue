<template>
  <div class="template-content">
    <el-card
      class="template-item"
      body-style="padding: 0"
      v-for="(item, index) in list"
      :key="index"
    >
      <img class="image" :src="item.screenshot" />
      <div style="padding: 14px;">
        <div class="bottom clearfix">
          <div class="card-title">{{ item.name }}</div>
          <div class="card-description">{{ item.description }}</div>
          <VueButton
            icon-left="eye"
            :margin-left="5"
            type="text"
            class="button"
            @click="toDetail(item)"
            style="margin-right: 15px"
            >查看详情</VueButton
          >
          <VueButton
            icon-left="download"
            :margin-left="5"
            type="text"
            class="button"
            @click="onDownload(item)"
            >下载</VueButton
          >
        </div>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { post } from "@/libs/request";
import { TemplateConfig } from "@/types";
import useRouter from "@/use/useRouter";
import { defineComponent } from "@vue/composition-api";
import { Message } from "element-ui";
import { useNamespacedState } from "vuex-composition-helpers";
export const ViewRootDevPath =
  "C:\\all\\code\\cli\\fast-admin-view\\fast-admin-view-default\\src\\views";

export default defineComponent({
  props: {
    list: Array
  },
  setup() {
    const router = useRouter();
    const { activeRouteConfig } = useNamespacedState("route", [
      "activeRouteConfig"
    ])
    const onDownload = async (item: TemplateConfig) => {
      const res = await post("/template/downloadTemplate", {
        name: item.name,
        output: (activeRouteConfig as any).value.viewPath,
        url: item.url,
        dependencies: item.dependencies
      });

      if (res.code === 200) {
        Message.success("下载成功");
      } else {
        Message.success("下载失败");
      }
    };
    const toDetail = (item: TemplateConfig) => {
      router?.push(`/template/detail/${item.id}`);
    };
    return {
      onDownload,
      toDetail
    };
  }
});
</script>
<style lang="scss" scoped>
.template-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 15px 30px;
  box-sizing: border-box;

  .template-item {
    flex: 0 0 40%;

    .image {
      width: 100%;
      max-height: 220px;
      object-fit: contain;
    }

    .card-title {
      font-weight: bold;
    }
    .card-description {
      margin: 10px 0 10px 10px;
      color: #999;
    }
  }
}
</style>

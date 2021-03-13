<template>
  <div class="page-content">
    <div class="header">
      <VueTabs :tab-id.sync="tabName">
        <VueTab id="template" label="Template">
          <div class="inner-tab-content">
            <TemplateContent
              v-loading="templateState.loading"
              :list="templateState.data"
            />
          </div>
        </VueTab>
        <VueTab id="library" label="Library">
          <div class="tab-content">
            <LibraryContent />
          </div>
        </VueTab>
      </VueTabs>
    </div>

    <VueButton
      class="primary"
      style="width: 100px"
      label="返回首页"
      @click="backPreview"
    />
  </div>
</template>
<script>
import useRequest from "@/use/useRequest";
import useRouter from "@/use/useRouter";
import { defineComponent, onMounted, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const tabName = ref("template");
    const router = useRouter();

    const templateState = ref({
      data: [],
      loading: true
    });

    onMounted(async () => {
      const res = await useRequest({
        url: "/template/list"
      });
      let data = [];
      Object.values(res.data.value).forEach(item => {
        if (item) data = data.concat(item);
      });
      templateState.value.data = data;
      templateState.value.loading = res.loading.value;
    });

    const backPreview = () => {
      router.push({ name: "Preview" });
    };

    return {
      tabName,
      templateState,
      backPreview
    };
  }
});
</script>
<style lang="scss" scoped>
.page-content {
  height: 100vh;
  width: 100%;
}
</style>

<template>
  <div
    class="project-home page"
    :class="{
      wide: $responsive.wide
    }"
  >
    <div class="panes">
      <ViewNav />

      <div class="content vue-ui-disable-scroll">
        <router-view class="router-view" />
      </div>
    </div>
  </div>
</template>
<script>
import ViewNav from "@/components/base/ViewNav";
export default {
  name: "ProjectHome",
  components: {
    ViewNav
  },
  data() {
    return {
      ready: false
    };
  },

  async created() {
    // this.ready = true;
  }
};
</script>
<style lang="scss" scoped>
.project-home {
  height: 100%;
  display: flex;
  flex-direction: column;
  &.wide {
    .project-nav {
      width: 220px;
    }
  }
}
.panes {
  flex: auto 1 1;
  height: 100%;
  display: flex;
  overflow: hidden;
}
.top-bar,
.project-nav {
  flex: auto 0 0;
}
.project-nav {
  width: 46px;
}
.content {
  flex: auto 1 1;
  width: 0;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.top-bar {
  flex: auto 0 0;
}
.router-view {
  flex: 1;
  height: 0;
  overflow: hidden;
}
</style>

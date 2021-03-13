<template>
  <div class="main-container">
    <div class="navbar">
      <VueButton
        icon-left="plus"
        label="创建新的路由"
        :margin-left="10"
        @click="toCreateRoutePage"
      ></VueButton>
    </div>
    <section class="app-main">
      <iframe
        ref="iframe"
        class="iframe"
        src="http://localhost:7070"
        frameborder="0"
      ></iframe>
    </section>
  </div>
</template>
<script>
export default {
  methods: {
    toCreateRoutePage() {
      this.$router.push("/create-view/route");
    }
  }
};
</script>
<style lang="scss" scoped>
.main-container {
  .navbar {
    padding: 0 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  }
  .app-main {
    height: calc(100% - 50px);
    width: 100%;
    position: relative;
    overflow: hidden;
    .iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

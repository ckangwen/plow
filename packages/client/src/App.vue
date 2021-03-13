<template>
  <div id="app">
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
}
.connection-status,
.status-bar {
  flex: auto 0 0;
}
.content {
  flex: auto 1 1;
  height: 100%;
  overflow: hidden;
}
.app-init-loading {
  z-index: 100000;
}
</style>
<style>
.vue-ui-switch > .content > .wrapper {
  width: 36px;
}
.vue-ui-switch.selected > .content > .wrapper .bullet {
  margin-left: 17px;
}
</style>

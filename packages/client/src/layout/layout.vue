<template>
  <div :class="classObj" class="app-wrapper">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :collapse="collapsed"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <el-menu-item class="submenu-title-noDropdown">Hello</el-menu-item>
        <el-menu-item class="submenu-title-noDropdown">Demo</el-menu-item>
      </el-menu>
    </el-scrollbar>
    <div class="main-container">
      <div class="fixed-header">
        <div class="navbar">
          <span class="el-icon-s-unfold" @click="toggleCollapse"></span>
        </div>
      </div>
      <section class="app-main">
        <transition name="fade-transform" mode="out-in">
          hello
        </transition>
      </section>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "@vue/composition-api";

const useCollapse = () => {
  const collapsed = ref(false);
  const toggleCollapse = () => {
    collapsed.value = !collapsed.value;
  };
  return {
    collapsed,
    toggleCollapse
  };
};

export default defineComponent({
  setup() {
    const { collapsed, toggleCollapse } = useCollapse();

    const classObj = computed(() => {
      return {
        hideSidebar: !collapsed.value,
        openSidebar: collapsed.value,
        withoutAnimation: true
      };
    });

    return {
      collapsed,
      toggleCollapse,
      classObj
    };
  }
});
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}

.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}

.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>
<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>

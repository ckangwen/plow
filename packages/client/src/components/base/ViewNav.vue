<template>
  <div
    class="project-nav"
    :class="{
      wide: $responsive.wide
    }"
  >
    <div class="header">
      <div class="project-quick-dropdown">
        <VueDropdown
          v-if="$responsive.wide"
          class="current-project"
          label="fast-admin-view"
          icon-right="arrow_drop_down"
          button-class="round"
        >
          <VueDropdownButton
            label="在编辑器中打开"
            icon-left="open_in_browser"
            @click="openInEditor(projectCurrent)"
          />

          <div class="dropdown-separator" />
        </VueDropdown>
      </div>
    </div>

    <div class="content">
      <VueGroup v-model="currentViewName" class="vertical primary" indicator>
        <ViewNavButton v-for="view of views" :key="view.id" :view="view" />
      </VueGroup>

      <div class="project-nav-more">
        <VueDropdown placement="right-end" style="width: 100%">
          <VueButton
            slot="trigger"
            icon-left="more_horiz"
            class="big flat"
            :class="{
              'icon-button': !$responsive.wide
            }"
          >
            <span v-if="$responsive.wide" class="label">更多</span>
          </VueButton>

          <VueDropdownButton icon-left="home" label="其他" />
        </VueDropdown>
      </div>
    </div>
  </div>
</template>
<script>
import { isSameRoute, isIncludedRoute } from "@/libs/route";
import ViewNavButton from "@/components/base/ViewNavButton";

const Views = [
  { id: "preview", tooltip: "预览", name: "Preview", icon: "" },
  { id: "auxiliary", tooltip: "辅助工具", name: "Auxiliary", icon: "" }
];
export default {
  components: {
    ViewNavButton
  },
  data() {
    return {
      views: Views,
      projectCurrent: {}
    };
  },

  computed: {
    currentView() {
      const currentRoute = this.$route;
      return this.views.find(item =>
        isIncludedRoute(
          currentRoute,
          this.$router.resolve({ name: item.name }).route
        )
      );
    },

    currentViewName: {
      get() {
        const view = this.currentView;
        return view && view.name;
      },
      set(name) {
        if (!isSameRoute(this.$route, this.$router.resolve({ name }).route)) {
          this.$router.push({ name });
        }
      }
    }
  },

  watch: {
    currentView: {
      handler(value, oldValue) {
        if (!value) return;
        if (oldValue && value.id === oldValue.id) return;

        this.checkProjectType();
      },
      immediate: true
    },

    projectCurrent: {
      handler: "checkProjectType",
      immediate: true
    }
  },

  methods: {
    hasProjectType(view) {
      return (
        (!view.projectTypes && this.projectCurrent.type === "vue") ||
        (view.projectTypes &&
          view.projectTypes.includes(this.projectCurrent.type))
      );
    },
    async openInEditor(project) {
      //
    },
    checkProjectType() {
      if (!this.currentView) return;

      if (!this.hasProjectType(this.currentView)) {
        const view = this.views.find(v => this.hasProjectType(v));
        if (view) {
          this.currentViewName = view.name;
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.current-project {
  width: 100%;

  ::v-deep .trigger {
    .vue-ui-button {
      .vue-ui-icon.right {
        width: 20px;
        height: 20px;
      }
    }
  }
}
.vue-ui-empty {
  padding: 6px;
}
.project-nav {
  background: $vue-ui-color-light;
  box-shadow: 2px 0 10px rgba(black, 0.1);
  position: relative;
  z-index: 2;
  @include v-box();
  .vue-ui-dark-mode & {
    background: $vue-ui-color-darker;
  }
  .header {
    padding: $padding-item;
    display: flex;
    .project-quick-dropdown {
      flex: 1;
    }
  }
  .content {
    flex: 1;
    @include v-box();
    height: 100%;
    padding: 8px 0;
    box-sizing: border-box;
    .vertical.primary ::v-deep .content {
      justify-content: flex-start;
    }
    .vue-ui-group {
      flex: auto 1 1;
      height: 0;
      overflow: hidden;
    }
    ::v-deep .indicator {
      justify-content: flex-start;
      margin-left: 4px;
      .content {
        width: 6px;
        height: 6px !important;
        border-radius: 50%;
        border: none !important;
        background: $vue-ui-color-primary;
      }
    }
    ::v-deep .v-popover .trigger,
    ::v-deep .vue-ui-dropdown {
      display: block !important;
    }
    ::v-deep .vue-ui-button {
      border-radius: 0;
      padding-left: 0;
      padding-right: 0;
      @include h-box();
      @include box-center();
      width: 100%;
      &.selected {
        @include button-colors($vue-ui-color-primary, transparent);
      }
    }
  }
  &.wide {
    .content {
      ::v-deep .vue-ui-button {
        justify-content: flex-start;
        padding-left: $padding-item;
        padding-right: $padding-item;
        > .content {
          width: 100%;
          text-align: left;
          > .default-slot {
            flex: auto 1 1;
            width: 0;
            @include ellipsis();
            padding: 4px 0;
          }
        }
      }
    }
  }
}
.project-nav-more {
  .vue-ui-dropdown.open .dropdown-trigger .vue-ui-button {
    &,
    &:hover {
      background: lighten($vue-ui-color-dark, 10%) !important;
      color: $md-white !important;
      ::v-deep .content > .button-icon {
        svg {
          fill: $md-white !important;
        }
      }
    }
  }
}
</style>

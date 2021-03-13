<template>
  <div
    class="vue-ui-tabs"
    :class="[
      `direction-${direction}`,
      {
        animate
      }
    ]"
  >
    <VueGroup
      v-model="currentTabId"
      class="tabs"
      :class="groupClass"
      :indicator="!groupNoIndicator"
    >
      <VueGroupButton
        v-for="(tab, index) of children"
        :key="tab.id"
        ref="tabButtons"
        class="tab-button"
        :class="tabClass"
        :value="tab.id"
        :label="tab.label"
        :icon-left="tab.icon"
        :disabled="tab.disabled"
        role="tab"
        tabindex="0"
        :aria-controls="`tab-${index}`"
        @keyup.native.left="activateChild(index - 1)"
        @keyup.native.right="activateChild(index + 1)"
      >
        <TabButtonContent :tab="tab" />
      </VueGroupButton>
    </VueGroup>

    <div class="tabs-content">
      <slot />
    </div>
  </div>
</template>

<script>
import CoupledParent from "../mixins/CoupledParent";

export default {
  name: "VueTabs",

  mixins: [CoupledParent("VueTabsCoupling")],

  components: {
    TabButtonContent: {
      functional: true,

      props: {
        tab: {
          required: true
        }
      },

      render(h, { props }) {
        const { tab } = props;
        return tab.$slots.button;
      }
    }
  },

  provide() {
    return {
      VueTabs: {
        data: this.injectedData
      }
    };
  },

  props: {
    animate: {
      type: Boolean,
      default: false
    },

    groupClass: {
      type: [String, Array, Object],
      default: "primary"
    },

    groupNoIndicator: {
      type: Boolean,
      default: false
    },

    tabClass: {
      type: [String, Array, Object],
      default: "flat big"
    },

    tabId: {
      type: [String, Number],
      default: null
    }
  },

  data() {
    return {
      currentTabId: this.tabId,
      direction: "to-right",
      injectedData: {
        animate: this.animate
      }
    };
  },

  watch: {
    animate(value, oldValue) {
      if (value !== oldValue) {
        this.injectedData.animate = value;
      }
    },

    currentTabId(value, oldValue) {
      if (value !== oldValue) {
        const index = this.findTabIndex(value);
        if (index !== -1 && index !== this.activeChildIndex) {
          this.activateChild(index, true);
        }

        if (value !== this.tabId) {
          this.$emit("update:tabId", value);
        }
      }
    },

    tabId(value, oldValue) {
      if (value !== oldValue && value !== this.currentTabId) {
        this.currentTabId = value;
      }
    }
  },

  methods: {
    childActivated(index, oldIndex, external) {
      const tab = this.children[index];
      if (tab && tab.id !== this.currentTabId) {
        this.currentTabId = tab.id;
      }

      this.direction =
        index === oldIndex ? "" : index < oldIndex ? "to-left" : "to-right";

      if (!external) {
        this.$nextTick(() => {
          const item = this.$refs.tabButtons[index];
          if (item) {
            item.$el.focus();
          }
        });
      }
    },

    findTabIndex(id) {
      return this.children.findIndex(c => c.id === id);
    }
  }
};
</script>

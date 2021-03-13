<template>
  <div
    class="vue-ui-form-field"
    :class="{
      focused: injectedData.focused,
      [`status-${injectedData.status}`]: injectedData.status
    }"
  >
    <div class="wrapper">
      <div class="title">
        <slot name="title">
          <span v-html="title" />
        </slot>
      </div>
      <div class="content">
        <slot />
      </div>
      <div
        class="subtitle"
        :class="{
          [`vue-ui-text ${injectedData.status}`]: injectedData.status
        }"
      >
        <VueIcon v-if="subtitleIconId" :icon="subtitleIconId" />
        <slot name="subtitle">
          <span v-html="subtitle" />
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
const statusIcons = {
  danger: "error",
  warning: "warning",
  info: "info",
  success: "check_circle"
};

export default {
  name: "VueFormField",

  provide() {
    return {
      VueFormField: {
        data: this.injectedData
      }
    };
  },

  props: {
    subtitle: {
      type: String,
      default: undefined
    },

    subtitleIcon: {
      type: String,
      default: undefined
    },

    statusIcon: {
      type: Boolean,
      default: false
    },

    title: {
      type: String,
      default: undefined
    }
  },

  data() {
    return {
      injectedData: {
        focused: false,
        status: null
      }
    };
  },

  computed: {
    subtitleIconId() {
      if (this.subtitleIcon) {
        return this.subtitleIcon;
      }

      if (this.statusIcon) {
        const status = this.injectedData.status;
        if (status) {
          return statusIcons[status];
        }
      }
      return "";
    }
  }
};
</script>

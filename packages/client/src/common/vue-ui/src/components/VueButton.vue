<template>
  <component
    :is="component"
    class="vue-ui-button"
    :class="[
      component,
      {
        disabled: finalDisabled,
        loading,
        ghost
      }
    ]"
    v-bind="$attrs"
    :type="type"
    :tabindex="ghost ? -1 : 0"
    role="button"
    :aria-disabled="ghost"
    @click.capture="handleClick"
  >
    <VueLoadingIndicator v-if="loading" />

    <span class="content">
      <VueLoadingIndicator
        v-if="loadingSecondary"
        class="inline small loading-secondary"
      />
      <VueIcon v-else-if="iconLeft" :icon="iconLeft" class="button-icon left" />

      <span class="default-slot" :style="{ 'margin-left': `${marginLeft}px` }">
        <slot>
          {{ label }}
        </slot>
      </span>

      <div v-if="tag != null" class="tag-wrapper">
        <div class="tag">{{ tag }}</div>
      </div>

      <VueIcon v-if="iconRight" :icon="iconRight" class="button-icon right" />
    </span>
  </component>
</template>

<script>
import DisabledChild from "../mixins/DisabledChild";

export default {
  name: "VueButton",

  inheritAttrs: false,

  mixins: [DisabledChild],

  props: {
    iconLeft: {
      type: String,
      default: null
    },

    iconRight: {
      type: String,
      default: null
    },

    label: {
      type: String,
      default: null
    },

    loading: {
      type: Boolean,
      default: false
    },

    loadingSecondary: {
      type: Boolean,
      default: false
    },

    type: {
      type: String,
      default: "button"
    },

    tag: {
      type: [Number, String],
      default: null
    },

    marginLeft: {
      type: Number,
      default: 0
    }
  },
  computed: {
    component() {
      if (this.$attrs.to) {
        return "router-link";
      } else if (this.$attrs.href) {
        return "a";
      } else {
        return "button";
      }
    },

    ghost() {
      return this.finalDisabled || this.loading || this.loadingSecondary;
    }
  },

  methods: {
    handleClick(event) {
      if (this.ghost) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
      } else {
        this.$emit("click", event);
      }
    }
  }
};
</script>
<style>
/* .default-slot {
  margin-left: 5px;
} */
</style>

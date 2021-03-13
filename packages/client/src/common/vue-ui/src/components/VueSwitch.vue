<template>
  <div
    class="vue-ui-switch"
    :class="{
      selected: value,
      disabled: finalDisabled,
      focus: focused
    }"
    :tabindex="disabled ? -1 : 0"
    role="checkbox"
    :aria-disabled="disabled"
    :aria-checked="!!value"
    @click="toggleValue"
    @keydown.enter="
      focused = true;
      toggleValue($event);
    "
    @keydown.space="
      focused = true;
      toggleValue($event);
    "
    @blur="focused = false"
  >
    <div class="content">
      <VueIcon v-if="icon" :icon="icon" />
      <span class="slot">
        <slot />
      </span>
      <div class="wrapper">
        <div class="bullet" />
      </div>
    </div>
  </div>
</template>

<script>
import DisabledChild from "../mixins/DisabledChild";

export default {
  name: "VueSwitch",

  model: {
    event: "update"
  },

  mixins: [DisabledChild],

  props: {
    icon: {
      type: String,
      default: null
    },

    value: {}
  },

  data() {
    return {
      focused: false
    };
  },

  computed: {
    valueModel: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("update", value);
      }
    }
  },

  methods: {
    toggleValue() {
      if (this.finalDisabled) return;
      this.valueModel = !this.valueModel;
    }
  }
};
</script>

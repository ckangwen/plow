<template>
  <VueButton
    class="vue-ui-group-button"
    :class="{
      selected,
      flat: flat && !selected
    }"
    :aria-selected="selected"
    v-bind="$attrs"
    @click="handleClick"
  >
    <slot />
  </VueButton>
</template>

<script>
export default {
  name: "VueGroupButton",

  inheritAttrs: false,

  inject: ["VueGroup"],

  props: {
    value: {},

    flat: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    selected() {
      return this.value === this.VueGroup.data.value;
    }
  },

  watch: {
    selected(value, oldValue) {
      if (value !== oldValue) {
        this.$emit("selected", value);
      }
    }
  },

  methods: {
    handleClick(...args) {
      this.$emit("click", ...args);
      this.VueGroup.setValue(this.value);
    }
  }
};
</script>

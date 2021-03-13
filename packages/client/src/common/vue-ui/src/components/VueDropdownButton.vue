<template>
  <VueButton
    class="vue-ui-dropdown-button"
    v-bind="$attrs"
    v-on="$listeners"
    v-close-popover="!keepOpen"
  >
    <slot />
  </VueButton>
</template>

<script>
export default {
  name: "VueDropdownButton",

  inheritAttrs: false,

  props: {
    keepOpen: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<template>
  <transition
    name="vue-ui-modal"
    :duration="{
      enter: 1000,
      leave: 300
    }"
    appear
  >
    <div
      class="vue-ui-modal"
      :class="{
        locked
      }"
      tabindex="0"
      role="dialog"
      aria-modal="true"
      @keyup.esc="close()"
    >
      <div class="backdrop" @click="close()" />

      <div class="shell" @keyup.esc="close()">
        <div class="header">
          <slot name="header">
            <div v-if="title" class="title" v-html="title" />
          </slot>
        </div>
        <div class="body">
          <slot />
        </div>
        <div class="footer">
          <slot name="footer" />
        </div>

        <VueButton
          v-if="!locked"
          class="close-button icon-button flat round"
          icon-left="close"
          @click="close()"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import DisableScroll from "../mixins/DisableScroll";

export default {
  name: "VueModal",

  mixins: [DisableScroll],

  props: {
    locked: {
      type: Boolean,
      default: false
    },

    title: {
      type: String,
      default: null
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.$el.focus();
    });
  },

  methods: {
    close() {
      if (!this.locked) {
        this.$emit("close");
      }
    }
  }
};
</script>

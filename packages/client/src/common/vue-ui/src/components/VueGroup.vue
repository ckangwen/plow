<template>
  <div
    class="vue-ui-group"
    :class="{
      'has-indicator': indicator
    }"
  >
    <div class="content">
      <slot />
    </div>

    <div
      v-if="indicator && indicatorStyle"
      class="indicator"
      :style="{
        top: `${indicatorStyle.top}px`,
        left: `${indicatorStyle.left}px`,
        width: `${indicatorStyle.width}px`,
        height: `${indicatorStyle.height}px`
      }"
    >
      <div class="content">
        <slot name="indicator" />
      </div>
    </div>

    <resize-observer v-if="indicator" @notify="updateIndicator()" />
  </div>
</template>

<script>
export default {
  name: "VueGroup",

  model: {
    event: "update"
  },

  provide() {
    return {
      VueGroup: {
        data: this.injection,
        setValue: this.setValue
      }
    };
  },

  props: {
    value: {},

    indicator: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      injection: {
        value: this.value
      },

      indicatorStyle: null
    };
  },

  watch: {
    value(value, oldValue) {
      if (value !== oldValue) {
        this.injection.value = value;
        this.updateIndicator();
      }
    }
  },

  mounted() {
    this.updateIndicator();
  },

  methods: {
    setValue(value) {
      this.$emit("update", value);
    },

    updateIndicator() {
      this.$nextTick(() => {
        const el = this.$el.querySelector(".selected");
        if (el) {
          const offset = {
            top: el.offsetTop,
            left: el.offsetLeft,
            width: el.offsetWidth,
            height: el.offsetHeight
          };
          let parent = el.offsetParent;
          while (parent && parent !== this.$el) {
            offset.top += parent.offsetTop;
            offset.left += parent.offsetLeft;
            parent = parent.offsetParent;
          }
          this.indicatorStyle = offset;
        } else {
          this.indicatorStyle = null;
        }
      });
    }
  }
};
</script>

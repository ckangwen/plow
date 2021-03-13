<template>
  <div
    class="vue-ui-input"
    :class="[
      `type-${type}`,
      {
        disabled: finalDisabled,
        focused,
        'show-suggestion': showSuggestion,
        [`status-${status}`]: status
      }
    ]"
    @click="focus()"
  >
    <div class="content">
      <VueLoadingIndicator v-if="loadingLeft" class="small left" />

      <VueIcon v-else-if="iconLeft" :icon="iconLeft" class="input-icon left" />

      <slot name="left" />

      <div class="input-wrapper">
        <component
          :is="type === 'textarea' ? type : 'input'"
          ref="input"
          class="input"
          :type="type"
          :value.prop="valueModel"
          :placeholder="placeholder"
          :disabled="finalDisabled"
          v-bind="$attrs"
          v-on="$listeners"
          @input="valueModel = $event.currentTarget.value"
          @focus="onFocus"
          @blur="onBlur"
          @keydown.tab="onKeyTab"
        />

        <input
          v-if="showSuggestion"
          class="input suggestion"
          :value="suggestion"
          disabled
        />
      </div>

      <slot name="right" />

      <VueIcon v-if="iconRight" :icon="iconRight" class="input-icon right" />

      <VueLoadingIndicator v-if="loadingRight" class="small right" />

      <!-- Focus animation -->
      <div class="border" />
    </div>
  </div>
</template>

<script>
import DisabledChild from "../mixins/DisabledChild";

export default {
  name: "VueInput",

  inheritAttrs: false,

  mixins: [DisabledChild],

  inject: {
    VueFormField: { default: null }
  },

  model: {
    event: "update"
  },

  props: {
    iconLeft: {
      type: String,
      default: null
    },

    iconRight: {
      type: String,
      default: null
    },

    loadingLeft: {
      type: Boolean,
      default: false
    },

    loadingRight: {
      type: Boolean,
      default: false
    },

    placeholder: {
      type: String,
      default: undefined
    },

    selectAll: {
      type: Boolean,
      default: false
    },

    status: {
      type: String,
      default: undefined
    },

    suggestion: {
      type: [String, Number],
      default: null
    },

    type: {
      type: String,
      default: "text"
    },

    value: {}
  },

  data() {
    return {
      focused: false
    };
  },

  computed: {
    showSuggestion() {
      return (
        this.suggestion !== null &&
        this.suggestion !== this.value &&
        this.focused &&
        this.value
      );
    },

    valueModel: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("update", value);
      }
    }
  },

  watch: {
    focused: {
      handler(value) {
        if (this.VueFormField) {
          this.VueFormField.data.focused = value;
        }
      },
      immediate: true
    },

    status: {
      handler(value) {
        if (this.VueFormField) {
          this.VueFormField.data.status = value;
        }
      },
      immediate: true
    }
  },

  methods: {
    focus() {
      const input = this.$refs.input;
      input.focus();
      if (this.selectAll) {
        input.setSelectionRange(0, input.value.length);
      }
    },

    onBlur(event) {
      this.focused = false;
      this.$emit("blur", event);
    },

    onFocus(event) {
      this.focused = true;
      this.$emit("focus", event);
    },

    onKeyTab(event) {
      if (this.showSuggestion) {
        this.valueModel = this.suggestion;
        event.preventDefault();
        event.stopPropagation();
      }
    }
  }
};
</script>

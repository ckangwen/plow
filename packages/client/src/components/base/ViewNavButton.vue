<template>
  <div class="project-nav-button">
    <v-popover
      trigger="hover"
      handle-resize
      popover-class="force-tooltip"
      placement="right"
      offset="4"
      :delay="{ show: 300, hide: 0 }"
    >
      <VueGroupButton
        class="flat big"
        :class="{
          'icon-button': !$responsive.wide,
          'has-image-icon': imageIcon
        }"
        :value="view.name"
        :icon-left="!imageIcon ? view.icon : null"
      >
        <img v-if="imageIcon" :src="icon" class="image-icon" />

        <span v-if="$responsive.wide" class="label">{{ view.tooltip }}</span>
      </VueGroupButton>

      <template slot="popover">
        <div class="title">{{ view.tooltip }}</div>
      </template>
    </v-popover>

    <div
      v-if="firstNotHiddenBadge"
      class="bullet"
      :class="[`type-${firstNotHiddenBadge.type}`]"
    />
  </div>
</template>

<script>
export default {
  props: {
    view: {
      type: Object,
      required: true
    }
  },

  computed: {
    firstNotHiddenBadge() {
      return this.badges && this.badges.find(b => !b.hidden);
    },

    imageIcon() {
      return this.view.icon && this.view.icon.includes("/");
    },

    icon() {
      return "";
      // return getImageUrl(this.view.icon);
    }
  }
};
</script>

<style lang="scss" scoped>
$bg: $vue-ui-color-light-neutral;
$bg-dark: $vue-ui-color-dark;

.project-nav-button {
  position: relative;
  .bullet {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    bottom: 12px;
    left: 27px;
    pointer-events: none;
    border: solid 2px $bg;
    transition: border-color 0.1s;
    &.type-info {
      background: $vue-ui-color-info;
    }
    &.type-success {
      background: $vue-ui-color-success;
    }
    &.type-error {
      background: $vue-ui-color-danger;
    }
    &.type-warning {
      background: $vue-ui-color-warning;
    }
    &.type-accent {
      background: $vue-ui-color-accent;
    }
    &.type-dim {
      background: $md-grey;
    }
    .vue-ui-dark-mode & {
      border-color: $bg-dark;
    }
  }
  .wide & {
    .bullet {
      left: 28px;
    }
  }
  &:hover {
    .bullet {
      border-color: lighten($bg, 25%);
      .vue-ui-dark-mode & {
        border-color: lighten($bg-dark, 25%);
      }
    }
  }
  &:active {
    .bullet {
      border-color: darken($bg, 8%);
      .vue-ui-dark-mode & {
        border-color: darken($bg-dark, 8%);
      }
    }
  }
  .image-icon {
    max-width: 24px;
    max-height: 6px;
    .wide & {
      margin-right: 6px;
      position: relative;
      left: -2px;
    }
  }
  .vue-ui-group-button {
    &.has-image-icon {
      ::v-deep .default-slot {
        display: flex;
        align-items: center;
        overflow: visible !important;
        .label {
          display: block;
          max-width: 150px;
          @include ellipsis();
        }
      }
    }
    &.default-plugin-icon {
      .image-icon {
        border-radius: 50%;
      }
    }
    &.selected {
      background: rgba($vue-ui-color-primary, 0.05) !important;
    }
  }
}
.badges {
  margin: $padding-item / 2 0;
  display: grid;
  grid-template-columns: auto;
  grid-gap: 4px;
}
</style>

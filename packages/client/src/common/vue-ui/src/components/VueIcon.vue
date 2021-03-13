<script>
export default {
  name: "VueIcon",

  functional: true,

  props: {
    icon: {
      type: String,
      required: true
    }
  },

  render(h, { props, data }) {
    return h("span", {
      class: `vue-ui-icon vue-ui-icon-${props.icon} ${props.icon}`
    });
  }
};
</script>

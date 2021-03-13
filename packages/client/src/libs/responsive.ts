export let responsive: any;

export type ResponsiveDataDef = {
  width: number;
  height: number;
};

export default {
  install(Vue: any, options: Record<string, any>) {
    const finalOptions = Object.assign(
      {},
      {
        computed: {}
      },
      options
    );

    responsive = new Vue({
      data() {
        return {
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      computed: finalOptions.computed
    });

    Object.defineProperty(Vue.prototype, "$responsive", {
      get: () => responsive
    });

    window.addEventListener("resize", () => {
      responsive.width = window.innerWidth;
      responsive.height = window.innerHeight;
    });
  }
};

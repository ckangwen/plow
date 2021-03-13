import Vue from "vue";
type MapData = {
  componentTree: any[];
  changed: Record<string, boolean>;
};
type Keys = keyof MapData;
export const messageDataMap = Vue.observable<MapData>({
  componentTree: [],
  changed: {
    tree: false
  }
});

window.addEventListener("message", e => {
  const { data } = e;
  const { name, value } = data;

  if (name === "componentTree") {
    Vue.set(messageDataMap, "componentTree", value);
  }
  messageDataMap.changed.tree = false;
});

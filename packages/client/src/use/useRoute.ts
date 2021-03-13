import { getCurrentInstance } from "@vue/composition-api";

export default function useRoute() {
  return getCurrentInstance()?.proxy.$route;
}

import { getCurrentInstance } from "@vue/composition-api";

export default function useRouter() {
  return getCurrentInstance()?.proxy.$router;
}

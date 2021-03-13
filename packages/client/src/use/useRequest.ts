import { post, get } from "../libs/request";
import { ref } from "@vue/composition-api";
import request from "../libs/request";

export default async function useRequest<T = any>(
  option: {
    url: string;
    data?: any;
    method?: "GET" | "POST";
  } = { data: {}, method: "POST", url: "" }
) {
  const loading = ref(true);
  const data = ref<T>();
  const error = ref<Error | null>(null);
  // let promiseFn: Promise<any> | undefined = undefined;
  // let promiseFn: any = "";
  // if (option.method === "GET") {
  //   promiseFn = get;
  //   // promiseFn = get(option.url, option.data);
  // } else {
  //   promiseFn = post;
  //   // promiseFn = post(option.url, option.data);
  // }
  try {
    const res = await request<T>(option.url, option.data, option.method);
    loading.value = false;
    data.value = res.data;
    error.value = null;
  } catch (err) {
    loading.value = false;
    data.value = undefined;
    error.value = err;
  }

  return {
    data,
    loading,
    error
  };
}

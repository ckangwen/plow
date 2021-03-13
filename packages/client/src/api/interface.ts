import { post } from "@/libs/request";
import { YApiInterfaceResponse } from "@/types/yapi";

type RequestYapiInterface = {
  // 接口的id
  id: string;
  // http://yapi.yunyuer.com 的cookie
  cookie: string;
};
export function getInterfaceDef(data: RequestYapiInterface) {
  return post<YApiInterfaceResponse>("/interface/get", data);
}

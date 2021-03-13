export interface YApiInterfaceResponse {
  errcode: number;
  errmsg: string;
  data: Data;
}

export type YapiResponseData = {
  name?: string;
  type?: string;
  required?: boolean;
  description?: string;
};

export type InterfaceMainData = {
  path?: string;
  interface: string;
  method: string;
  functionName?: string;
  title?: string;
  reqBody?: Reqbodyform[];
  resBody?: string;
  resBodyArr?: YapiResponseData[];
};

interface Data {
  query_path: Querypath;
  edit_uid: number;
  status: string;
  type: string;
  req_body_is_json_schema: boolean;
  res_body_is_json_schema: boolean;
  api_opened: boolean;
  index: number;
  tag: any[];
  _id: number;
  method: string;
  catid: number;
  title: string;
  path: string;
  project_id: number;
  req_params: any[];
  res_body_type: string;
  uid: number;
  add_time: number;
  up_time: number;
  req_query: any[];
  req_headers: Reqheader[];
  req_body_form: Reqbodyform[];
  __v: number;
  markdown: string;
  desc: string;
  res_body: string;
  req_body_type: string;
  username: string;
}

export interface Reqbodyform {
  required: string;
  _id: string;
  name: string;
  type: string;
  example?: string;
  desc?: string;
}

interface Reqheader {
  required: string;
  _id: string;
  name: string;
  value: string;
}

interface Querypath {
  path: string;
  params: any[];
}

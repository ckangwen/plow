import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const _request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000
});

_request.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

_request.interceptors.response.use(
  (res: AxiosResponse) => {
    const data = res.data;
    return data;
  },
  (error: any) => {
    return Promise.reject(new Error(error));
  }
);

interface ResponseData<T> {
  code: number;
  msg: string;
  data: T;
}

export function post<Response extends any>(
  url: string,
  data: any = {},
  config: AxiosRequestConfig = {}
) {
  return _request.post(url, data, config) as Promise<
    AxiosResponse<ResponseData<Response>>["data"]
  >;
}

export function get<Response extends any>(
  url: string,
  data: any = {},
  config: AxiosRequestConfig = {}
) {
  return _request.get(url, { params: data, ...config }) as Promise<
    AxiosResponse<ResponseData<Response>>["data"]
  >;
}

export function request<T>(
  url: string,
  data: any,
  method: "GET" | "POST" = "POST"
) {
  if (method === "GET") {
    return get<T>(url, data);
  } else {
    return post<T>(url, data);
  }
}

export default request;

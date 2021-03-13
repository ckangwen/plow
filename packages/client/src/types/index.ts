export type RouteConfig = {
  path: string;
  redirect?: string;
  name: string;
  icon: string;
  title: string;
  viewPath?: string;
  hidden?: boolean;
  children?: RouteConfig[];
};

export type TemplateConfig = {
  id: string;
  name: string;
  screenshot: string;
  url: string;
  description?: string;
  tag?: string[];
  dependencies?: string[];
};

export interface RouteConfigData {
  title: string
  name: string
  path: string
  hidden?: boolean
  icon?: string
  redirect?: string
  viewPath: string
  children?: RouteConfigData[]
}

export type ApiTemplateRenderData = {
  method: 'GET' | 'POST'
  interface: string
  functionName: string
  desc?: string
}

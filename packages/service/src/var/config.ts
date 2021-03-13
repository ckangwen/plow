import { resolve } from 'path'
export const PORT = 3000
export const ROUTES_DIR = './dist/routes/**/*.js'
export const MODELS_DIR = './dist/models/**/*.js'
export const USE_DB = false
export const DB_CONNECTION_STRING =
  process.env.NODE_ENV === 'docker'
    ? 'mongodb://mongo:27017/express-typescript-starter'
    : 'mongodb://localhost:27017/express-typescript-starter'

export const VIEW_ROOT_PATH = 'C:/all/code/cli/fast-admin-view/fast-admin-view-default'
export const SERVICE_ROOT_PATH = 'C:/all/code/cli/plow/packages/service'

export const ROUTER_CONFIG_JSON_PATH = resolve(VIEW_ROOT_PATH, './.settings/route.config.json')
export const PAGE_ROUTE_PATH = resolve(VIEW_ROOT_PATH, './src/router/page-routes.js')
export const API_TEMPLATE_PATH = resolve(VIEW_ROOT_PATH, '../template/ejs/api.ejs')
export const API_DIR_PATH = resolve(VIEW_ROOT_PATH, './src/api')

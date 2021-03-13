"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_DIR_PATH = exports.API_TEMPLATE_PATH = exports.PAGE_ROUTE_PATH = exports.ROUTER_CONFIG_JSON_PATH = exports.SERVICE_ROOT_PATH = exports.VIEW_ROOT_PATH = exports.DB_CONNECTION_STRING = exports.USE_DB = exports.MODELS_DIR = exports.ROUTES_DIR = exports.PORT = void 0;
var path_1 = require("path");
exports.PORT = 3000;
exports.ROUTES_DIR = './dist/routes/**/*.js';
exports.MODELS_DIR = './dist/models/**/*.js';
exports.USE_DB = false;
exports.DB_CONNECTION_STRING = process.env.NODE_ENV === 'docker'
    ? 'mongodb://mongo:27017/express-typescript-starter'
    : 'mongodb://localhost:27017/express-typescript-starter';
exports.VIEW_ROOT_PATH = 'C:/all/code/cli/fast-admin-view/fast-admin-view-default';
exports.SERVICE_ROOT_PATH = 'C:/all/code/cli/plow/packages/service';
exports.ROUTER_CONFIG_JSON_PATH = path_1.resolve(exports.VIEW_ROOT_PATH, './.settings/route.config.json');
exports.PAGE_ROUTE_PATH = path_1.resolve(exports.VIEW_ROOT_PATH, './src/router/page-routes.js');
exports.API_TEMPLATE_PATH = path_1.resolve(exports.VIEW_ROOT_PATH, '../template/ejs/api.ejs');
exports.API_DIR_PATH = path_1.resolve(exports.VIEW_ROOT_PATH, './src/api');

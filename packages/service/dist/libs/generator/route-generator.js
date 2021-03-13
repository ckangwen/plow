"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRouteGenerator = exports.RouteGenerator = void 0;
/* eslint-disable @typescript-eslint/no-non-null-assertion */
var template_1 = __importDefault(require("@babel/template"));
var generator_1 = __importDefault(require("@babel/generator"));
var types = __importStar(require("@babel/types"));
var traverse_1 = __importDefault(require("@babel/traverse"));
var fse = __importStar(require("fs"));
var path_1 = require("path");
var prettier = __importStar(require("prettier"));
var chokidar = __importStar(require("chokidar"));
var config_1 = require("../../var/config");
var log_1 = require("../utils/log");
var db_1 = require("../../shared/db");
var base_generator_1 = require("./base-generator");
var routeConfigTemplates = [
    "\n  const __route__ = {\n    path: PATH,\n    name: NAME,\n    hidden: HIDDEN,\n    meta: {\n      icon: ICON,\n      title: TITLE,\n    },\n    component: COMPONENT,\n    children: CHILDREN\n  }\n  ",
    "\n  const __route__ = {\n    path: PATH,\n    name: NAME,\n    redirect: REDIRECT,\n    hidden: HIDDEN,\n    meta: {\n      icon: ICON,\n      title: TITLE,\n    },\n    component: COMPONENT,\n    children: CHILDREN\n  }\n"
];
var defaultRouteGeneratorConstructorParams = {
    base: config_1.VIEW_ROOT_PATH,
    settings: '.settings/route.config.json',
    route: './src/router/page-routes.js'
};
var RouteGenerator = /** @class */ (function (_super) {
    __extends(RouteGenerator, _super);
    function RouteGenerator(options) {
        if (options === void 0) { options = defaultRouteGeneratorConstructorParams; }
        var _this = _super.call(this) || this;
        _this.lazyLoadingRouteTemplate = '() => import(PATH)';
        options = Object.assign({}, defaultRouteGeneratorConstructorParams, options);
        _this.viewRootPath = options.base;
        _this.routeConfigFilePath = path_1.resolve(_this.viewRootPath, options.settings);
        _this.routeDefinitionPath = path_1.resolve(_this.viewRootPath, options.route);
        _this.db = db_1.createViewDB(_this.routeConfigFilePath);
        return _this;
    }
    /**
     * 获取项目路由定义列表ast
     */
    RouteGenerator.prototype.getPageRouteFileAST = function () {
        var content = fse.readFileSync(this.routeDefinitionPath, 'utf-8');
        return this.codeToAST(content);
    };
    /**
     * 从route.config.json中获取路由配置列表
     */
    RouteGenerator.prototype.readRouteConfigs = function () {
        var appJSON = fse.readFileSync(this.routeConfigFilePath, { encoding: 'utf-8' });
        var staticConfig = JSON.parse(appJSON);
        if (staticConfig.routes && !Array.isArray(staticConfig.routes)) {
            throw new Error('配置文件中routes应该是一个数组');
        }
        return staticConfig.routes;
    };
    RouteGenerator.prototype.writeRouteConfig = function (nameChain, newRoute) {
        log_1.log.info('[RouteGenerator.writeRouteConfig] 添加路由配置');
        var db = this.db.get('routes');
        // 搜寻最后一级路由对象
        nameChain.split('.').forEach(function (name) {
            if (name) {
                db = db.find({ name: name });
                db = db.get('children');
            }
        });
        db.push(newRoute).write();
    };
    /**
     * 在router文件夹下生成vue router的routes
     */
    RouteGenerator.prototype.generatePageRoutes = function () {
        var _this = this;
        log_1.log.info('[RouteGenerator.generatePageRoutes] 生成路由文件');
        var routeAsts = this.readRouteConfigs().map(function (item) { return _this.generateRouteConfigAST(item); });
        var ast = this.getPageRouteFileAST();
        traverse_1.default(ast, {
            ArrayExpression: function (_a) {
                var node = _a.node, parent = _a.parent;
                if (parent && parent.id && parent.id.name === 'PAGE_ROUTES') {
                    node.elements = routeAsts;
                }
            }
        });
        var content = generator_1.default(ast).code;
        content = prettier.format(content, {
            parser: 'babel'
        });
        fse.writeFileSync(this.routeDefinitionPath, content, 'utf-8');
    };
    /**
     * 生成路由配置对象的ast
     */
    RouteGenerator.prototype.generateRouteConfigAST = function (config) {
        var _this = this;
        var path = config.path, name = config.name, icon = config.icon, _a = config.title, title = _a === void 0 ? '' : _a, _b = config.redirect, redirect = _b === void 0 ? '' : _b, hidden = config.hidden, _c = config.viewPath, viewPath = _c === void 0 ? '' : _c, _d = config.children, children = _d === void 0 ? [] : _d;
        var routeConfigTemplate = routeConfigTemplates[1];
        if (!redirect)
            routeConfigTemplate = routeConfigTemplates[0];
        var buildRequire = template_1.default(routeConfigTemplate);
        var childrenAST = types.arrayExpression();
        if (children && children.length > 0) {
            var arr = children.map(function (child) { return _this.generateRouteConfigAST(child); }).filter(function (item) { return !!item; });
            childrenAST = types.arrayExpression(arr);
        }
        var buildArg = {
            PATH: types.stringLiteral(path || '/'),
            NAME: types.stringLiteral(name),
            HIDDEN: types.booleanLiteral(hidden || false),
            TITLE: types.stringLiteral(title),
            ICON: types.stringLiteral(icon || ''),
            COMPONENT: this.generateRouteComponentAST(path, viewPath),
            CHILDREN: childrenAST
        };
        if (redirect) {
            buildArg.REDIRECT = types.stringLiteral(redirect || '');
        }
        var ast = buildRequire(buildArg);
        return ast.declarations[0].init;
    };
    /**
     * router.config.js
     * 添加新的路由配置
     */
    RouteGenerator.prototype.pushToRouteConfig = function (newRouteAST) {
        var ast = this.getPageRouteFileAST();
        traverse_1.default(ast, {
            ArrayExpression: function (_a) {
                var node = _a.node, parent = _a.parent;
                if (parent && parent.id && parent.id.name === 'ROUTES') {
                    node.elements.push(newRouteAST);
                }
            }
        });
        return ast;
    };
    RouteGenerator.prototype.pushAsChildren = function (routeName, newRouteAST) {
        var ast = this.getPageRouteFileAST();
        traverse_1.default(ast, {
            ObjectProperty: function (_a) {
                var node = _a.node, parent = _a.parent;
                // 键名是一个Identifier，且对应的值是一个string类型
                if (types.isIdentifier(node.key) && types.isStringLiteral(node.value)) {
                    var keyName = node.key.name;
                    var valueName = node.value.value;
                    // 判断name的值是否与所查的字符串一致
                    if (keyName === 'name' && valueName === routeName) {
                        // 查找出与 name 同级的 children 的ast
                        var childNode = parent.properties.find(function (item) {
                            if (types.isObjectProperty(item) && types.isIdentifier(item.key)) {
                                var keyName_1 = item.key.name;
                                return keyName_1 === 'children';
                            }
                            return false;
                        });
                        if (childNode) {
                            childNode.value.elements.push(newRouteAST);
                        }
                    }
                }
            }
        });
        return ast;
    };
    /**
     * 生成路由组件的ast
     */
    RouteGenerator.prototype.generateRouteComponentAST = function (routePath, viewPath, WrapperComponent) {
        if (WrapperComponent === void 0) { WrapperComponent = 'Layout'; }
        if (routePath.charAt(0) === '/') {
            return types.identifier(WrapperComponent);
        }
        var ast = types.arrowFunctionExpression([], types.callExpression(types.import(), [types.stringLiteral(viewPath)]));
        return ast;
    };
    /**
     * 如果route.config.json文件发生变化，则重新生成页面路由
     */
    RouteGenerator.prototype.watchRouteConfigFile = function () {
        var _this = this;
        log_1.log.info('[RouteGenerator.watchRouteConfigFile] 监听路由配置文件router.config.json');
        var watcher = chokidar.watch(config_1.ROUTER_CONFIG_JSON_PATH, {
            ignoreInitial: true
        });
        watcher.on('change', function () {
            _this.generatePageRoutes();
        });
        watcher.on('error', function () {
            console.log('route.config.js监听失败');
            process.exit(1);
        });
    };
    return RouteGenerator;
}(base_generator_1.BaseGenerator));
exports.RouteGenerator = RouteGenerator;
var createRouteGenerator = function (options) {
    var generator = null;
    if (generator)
        return generator;
    generator = new RouteGenerator(options);
    return generator;
};
exports.createRouteGenerator = createRouteGenerator;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewRootDevPath = exports.createResolveVueAliasFactory = exports.__DEV__ = exports.error = exports.success = void 0;
var path_1 = require("path");
var success = function (data, msg) {
    if (msg === void 0) { msg = 'OK'; }
    return {
        code: 200,
        msg: msg,
        data: data
    };
};
exports.success = success;
var error = function (data, msg) {
    if (msg === void 0) { msg = 'Error'; }
    return {
        code: 500,
        msg: msg,
        data: data
    };
};
exports.error = error;
exports.__DEV__ = process.env.NODE_ENV !== 'production';
var createResolveVueAliasFactory = function (viewPath) {
    return function resolveVueAlias(path) {
        // @/component
        if (path.charAt(0) === '@') {
            var _path = path.substring(1);
            return path_1.resolve(viewPath, "./src" + _path);
        }
        // ./component
        if (path.charAt(0) === '.' || (path.charAt(0) === '.' && path.charAt(1) === '.')) {
            return path_1.resolve(viewPath, path);
        }
        // c://components
        return path;
    };
};
exports.createResolveVueAliasFactory = createResolveVueAliasFactory;
exports.ViewRootDevPath = 'C:\\all\\code\\cli\\fast-admin-view\\fast-admin-view-default';

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.success = void 0;
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

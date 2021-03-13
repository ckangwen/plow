"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServiceDB = exports.createViewDB = void 0;
var lowdb_1 = __importDefault(require("lowdb"));
var FileSync_1 = __importDefault(require("lowdb/adapters/FileSync"));
// const FileSync = require('lowdb/adapters/FileSync')
// const Lowdb = require('lowdb')
var createViewDB = function (path) {
    var viewDB = lowdb_1.default(new FileSync_1.default(path));
    viewDB.defaults({ routes: {} }).write();
    return viewDB;
};
exports.createViewDB = createViewDB;
var createServiceDB = function (path) {
    if (path === void 0) { path = '../../data/db.json'; }
    var serviceDB = lowdb_1.default(new FileSync_1.default(path));
    serviceDB.defaults({ packages: {}, templates: {} }).write();
    return serviceDB;
};
exports.createServiceDB = createServiceDB;

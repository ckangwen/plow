"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var template_controller_1 = __importDefault(require("../controllers/template.controller"));
var router = express_1.Router();
router.post('/list', template_controller_1.default.list);
router.post('/downloadPackage', template_controller_1.default.downloadPackage);
router.post('/downloadTemplate', template_controller_1.default.downloadTemplate);
exports.default = router;

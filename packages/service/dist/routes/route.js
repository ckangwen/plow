"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router_controller_1 = __importDefault(require("../controllers/router.controller"));
var router = express_1.Router();
router.post('/list', router_controller_1.default.list);
router.post('/add', router_controller_1.default.add);
exports.default = router;

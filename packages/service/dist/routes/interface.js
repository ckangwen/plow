"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var interface_controller_1 = __importDefault(require("../controllers/interface.controller"));
var router = express_1.Router();
router.post('/get', interface_controller_1.default.get);
router.post('/set', interface_controller_1.default.set);
exports.default = router;

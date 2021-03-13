"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var view_1 = __importDefault(require("./view"));
var route_1 = __importDefault(require("./route"));
var interface_1 = __importDefault(require("./interface"));
var template_1 = __importDefault(require("./template"));
var router = express_1.Router();
router.use('/', view_1.default);
router.use('/route', route_1.default);
router.use('/interface', interface_1.default);
router.use('/template', template_1.default);
exports.default = router;

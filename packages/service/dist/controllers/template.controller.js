"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var response_1 = require("../libs/utils/response");
var template_service_1 = require("../service/template.service");
var service = new template_service_1.TemplateService();
var TemplateController = /** @class */ (function () {
    function TemplateController() {
    }
    TemplateController.prototype.list = function (req, res) {
        var list = service.list();
        res.json(response_1.success(list, '模板列表获取成功'));
    };
    TemplateController.prototype.downloadPackage = function (req, res) {
        var result = service.downloadPackage(req.body);
        res.json(result ? response_1.success([], '下载成功') : response_1.error([], '下载失败'));
    };
    TemplateController.prototype.downloadTemplate = function (req, res) {
        var result = service.downloadTemplate(req.body);
        res.json(result ? response_1.success([], '下载成功') : response_1.error([], '下载失败'));
    };
    return TemplateController;
}());
var controller = new TemplateController();
exports.default = controller;

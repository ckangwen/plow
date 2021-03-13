"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_service_1 = require("../service/route.service");
var response_1 = require("../libs/utils/response");
var service = new route_service_1.RouteService();
var RouteController = /** @class */ (function () {
    function RouteController() {
    }
    RouteController.prototype.list = function (req, res, next) {
        var list = service.list();
        res.json(response_1.success(list, '路由列表获取成功'));
    };
    RouteController.prototype.add = function (req, res, next) {
        var isSuccess = service.add(req.body);
        if (isSuccess) {
            res.json(response_1.success([]));
        }
        else {
            res.json(response_1.error([]));
        }
    };
    return RouteController;
}());
var routeController = new RouteController();
exports.default = routeController;

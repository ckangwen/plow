"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteService = void 0;
var route_generator_1 = require("../libs/generator/route-generator");
var index_1 = require("../shared/index");
var devViewRooPath = 'C:\\all\\code\\cli\\fast-admin-view\\fast-admin-view-default';
var generator = route_generator_1.createRouteGenerator({
    base: index_1.__DEV__ ? devViewRooPath : process.cwd()
});
var RouteService = /** @class */ (function () {
    function RouteService() {
    }
    RouteService.prototype.list = function () {
        return generator.readRouteConfigs();
    };
    RouteService.prototype.add = function (_a) {
        var path = _a.path, route = _a.route;
        try {
            var routeObj = JSON.parse(route);
            generator.writeRouteConfig(path, routeObj);
            return true;
        }
        catch (err) {
            return false;
        }
    };
    return RouteService;
}());
exports.RouteService = RouteService;

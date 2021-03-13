"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController() {
    }
    IndexController.prototype.index = function (req, res) {
        res.render('index');
    };
    return IndexController;
}());
var indexController = new IndexController();
exports.default = indexController;

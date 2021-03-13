"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateService = void 0;
var template_generator_1 = require("../libs/generator/template-generator");
var index_1 = require("../shared/index");
var generator = template_generator_1.createTemplateGenerator(index_1.ViewRootDevPath);
var TemplateService = /** @class */ (function () {
    function TemplateService() {
    }
    TemplateService.prototype.list = function () {
        return generator.getTemplateList();
    };
    TemplateService.prototype.downloadPackage = function (_a) {
        var dirName = _a.dirName, packageName = _a.packageName, output = _a.output, _b = _a.overWrite, overWrite = _b === void 0 ? false : _b;
        try {
            generator.downloadPackageToLocal({
                dirName: dirName,
                packageName: packageName,
                output: output,
                overWrite: overWrite
            });
            return true;
        }
        catch (err) {
            return false;
        }
    };
    TemplateService.prototype.downloadTemplate = function (_a) {
        var output = _a.output, url = _a.url, name = _a.name;
        try {
            generator.downloadTemplateToLocal({ output: output, url: url, name: name });
            return true;
        }
        catch (err) {
            return false;
        }
    };
    return TemplateService;
}());
exports.TemplateService = TemplateService;

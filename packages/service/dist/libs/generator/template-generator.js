"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTemplateGenerator = void 0;
var Path = __importStar(require("path"));
var fse = __importStar(require("fs-extra"));
var axios_1 = __importDefault(require("axios"));
var ice_npm_utils_1 = require("ice-npm-utils");
var db_1 = require("../../shared/db");
var log_1 = require("../utils/log");
var index_1 = require("../../shared/index");
var path_1 = require("path");
var TemplateGenerator = /** @class */ (function () {
    function TemplateGenerator(base) {
        this.cache = {};
        this.viewRootPath = base;
        this.db = db_1.createServiceDB(path_1.resolve(__dirname, '../../data/db.json'));
        this.resolveVueAlias = index_1.createResolveVueAliasFactory(index_1.__DEV__ ? index_1.ViewRootDevPath : base);
    }
    TemplateGenerator.prototype.getTemplateList = function () {
        return this.db.get('templates').value() || {};
    };
    /**
     * dirName 文件夹名
     * packageName 包名
     * output: 输出的文件夹路径
     */
    TemplateGenerator.prototype.downloadPackageToLocal = function (_a) {
        var dirName = _a.dirName, packageName = _a.packageName, output = _a.output, _b = _a.overWrite, overWrite = _b === void 0 ? false : _b;
        return __awaiter(this, void 0, void 0, function () {
            var tarballURL, blockDir, blockTempDir, pkgData, error_1, source;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        log_1.log.info("[TemplateGenerator.downloadPackageToLocal] \u4E0B\u8F7D" + packageName + "\u5305\u81F3\u672C\u5730");
                        tarballURL = '';
                        blockDir = Path.join(output, dirName);
                        if (fse.existsSync(blockDir) && !overWrite) {
                            return [2 /*return*/];
                        }
                        blockTempDir = Path.join(output, "." + dirName + ".temp");
                        return [4 /*yield*/, this.checkPackageData(packageName)];
                    case 1:
                        pkgData = _c.sent();
                        tarballURL = pkgData.tarball;
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 4, , 5]);
                        // 将包下载到blockTempDir
                        return [4 /*yield*/, ice_npm_utils_1.getAndExtractTarball(blockTempDir, tarballURL)];
                    case 3:
                        // 将包下载到blockTempDir
                        _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _c.sent();
                        throw new Error(packageName + "\u4E0B\u8F7D\u5931\u8D25");
                    case 5:
                        source = Path.join(blockTempDir, 'src');
                        return [4 /*yield*/, fse.copySync(source, blockDir)];
                    case 6:
                        _c.sent();
                        fse.removeSync(blockTempDir);
                        return [2 /*return*/];
                }
            });
        });
    };
    TemplateGenerator.prototype.downloadTemplateToLocal = function (_a) {
        var output = _a.output, url = _a.url, name = _a.name;
        return __awaiter(this, void 0, void 0, function () {
            var content, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        log_1.log.info('[TemplateGenerator.downloadTemplateToLocal] 下载模板至本地 ' + output);
                        if (!(output && url)) return [3 /*break*/, 4];
                        content = '';
                        if (!this.cache[name]) return [3 /*break*/, 1];
                        content = this.cache[name];
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, axios_1.default(url)];
                    case 2:
                        res = _b.sent();
                        content = res.data;
                        _b.label = 3;
                    case 3:
                        output = this.resolveVueAlias(output);
                        fse.writeFileSync(output, content, 'utf-8');
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TemplateGenerator.prototype.checkPackageData = function (packageName) {
        return __awaiter(this, void 0, void 0, function () {
            var pkgData, data, lastestVersion, lastestVersionData, keys;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pkgData = this.db.get("packages." + packageName).value();
                        return [4 /*yield*/, axios_1.default("https://registry.npmjs.org/" + packageName)
                            // 最新版本号
                        ];
                    case 1:
                        data = (_a.sent()).data;
                        lastestVersion = data['dist-tags'].latest;
                        lastestVersionData = data.versions[lastestVersion];
                        keys = ['version', 'description', 'keywords'];
                        // 如果版本变动，或是没有该包，则更新本地数据库
                        if (!pkgData || (pkgData && pkgData.version !== lastestVersion)) {
                            keys.forEach(function (key) {
                                _this.db
                                    .set("packages." + packageName + "." + key, lastestVersionData[key])
                                    .write();
                            });
                            this.db
                                .set("packages." + packageName + ".tarball", lastestVersionData.dist.tarball)
                                .write();
                        }
                        return [2 /*return*/, this.db.get("packages." + packageName).value()];
                }
            });
        });
    };
    return TemplateGenerator;
}());
exports.default = TemplateGenerator;
var createTemplateGenerator = function (viewRootPath) {
    var generator = null;
    if (generator)
        return generator;
    generator = new TemplateGenerator(viewRootPath);
    return generator;
};
exports.createTemplateGenerator = createTemplateGenerator;

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInterfaceGenerator = exports.InterfaceGenerator = void 0;
var Types = __importStar(require("@babel/types"));
var ejs = __importStar(require("ejs"));
var prettier = __importStar(require("prettier"));
var fse = __importStar(require("fs"));
var path_1 = require("path");
var log_1 = require("../utils/log");
var base_generator_1 = require("./base-generator");
var ApiTemplateDir = path_1.resolve('../../templates/api.ejs');
var InterfaceGenerator = /** @class */ (function (_super) {
    __extends(InterfaceGenerator, _super);
    function InterfaceGenerator(path) {
        var _this = _super.call(this) || this;
        _this.apiFileBasePath = path;
        _this.collection = {};
        return _this;
    }
    InterfaceGenerator.prototype.render = function (filename, apis) {
        log_1.log.info('[ApiGenerator.render] 生成接口对接文件');
        var content = fse.readFileSync(ApiTemplateDir, 'utf-8');
        content = ejs.render(content, {
            apis: apis
        });
        content = prettier.format(content, {
            parser: 'babel'
        });
        var apiFilePath = path_1.resolve(this.apiFileBasePath, "./" + filename + ".js");
        fse.writeFileSync(apiFilePath, content, 'utf-8');
    };
    InterfaceGenerator.prototype.readApiContent = function (filename) {
        var filepath = path_1.resolve(this.apiFileBasePath, filename);
        var content = fse.readFileSync(filepath, 'utf-8');
        return content;
    };
    InterfaceGenerator.prototype.parseApiFile = function (filename) {
        var _this = this;
        var nameNoExt = '';
        if (filename.endsWith('.js')) {
            nameNoExt = filename.slice(0, -3);
        }
        else {
            nameNoExt = filename;
            filename = filename + ".js";
        }
        var ast = this.codeToAST(this.readApiContent(filename));
        var body = ast.program.body;
        this.collection[nameNoExt] = [];
        var parseFunctionDeclaration = function (node) {
            if (!node)
                return;
            if (Types.isFunctionDeclaration(node)) {
                if (Types.isIdentifier(node.id)) {
                    var functionName = node.id.name;
                    if (Types.isBlockStatement(node.params)) {
                        var returnStatement = node.params.body.find(function (t) { return Types.isReturnStatement(t); });
                        var url = _this.getRequestUrl(returnStatement.argument);
                        if (url && functionName) {
                            return {
                                functionName: functionName,
                                url: url
                            };
                        }
                    }
                }
            }
            if (Types.isVariableDeclaration(node)) {
                node.declarations.forEach(function (item) {
                    if (Types.isIdentifier(item.id)) {
                        var functionName = item.id.name;
                        if (Types.isArrowFunctionExpression(item.init)) {
                            if (Types.isBlockStatement(item.init.body)) {
                                var returnStatement = item.init.body.body.find(function (t) { return Types.isReturnStatement(t); });
                                var url = _this.getRequestUrl(returnStatement.argument);
                                if (url && functionName) {
                                    return {
                                        functionName: functionName,
                                        url: url
                                    };
                                }
                            }
                        }
                    }
                });
            }
        };
        body.forEach(function (node) {
            if (Types.isExportNamedDeclaration(node)) {
                var obj = parseFunctionDeclaration(node.declaration);
                if (obj) {
                    _this.collection[nameNoExt].push(obj);
                }
            }
        });
    };
    InterfaceGenerator.prototype.getRequestUrl = function (node) {
        var url = '';
        if (Types.isIdentifier(node.callee)) {
            var requestFunctionName = node.callee.name;
            if (requestFunctionName === 'request') {
                node.arguments.forEach(function (arg) {
                    // request({ url, method, data })
                    if (Types.isObjectExpression(arg)) {
                        var urlPropNode = arg.properties.find(function (prop) {
                            if (Types.isObjectProperty(prop)) {
                                return prop.key.name === 'url';
                            }
                            return false;
                        });
                        if (Types.isStringLiteral(urlPropNode.value)) {
                            url = urlPropNode.value.value;
                        }
                    }
                    // request(url, method, data)
                    if (Types.isStringLiteral(arg)) {
                        var str = arg.value;
                        if (str.indexOf('/') > -1) {
                            url = str;
                        }
                    }
                });
            }
        }
        return url;
    };
    return InterfaceGenerator;
}(base_generator_1.BaseGenerator));
exports.InterfaceGenerator = InterfaceGenerator;
var createInterfaceGenerator = function (options) {
    var generator = null;
    if (generator)
        return generator;
    generator = new InterfaceGenerator(options);
    return generator;
};
exports.createInterfaceGenerator = createInterfaceGenerator;

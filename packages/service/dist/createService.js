"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var morgan_1 = __importDefault(require("morgan"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var routes_1 = __importDefault(require("./routes"));
var path_1 = __importDefault(require("path"));
var ejs_1 = __importDefault(require("ejs"));
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.run = function () {
        var app = express_1.default();
        this.loadPlugins(app);
        var port = Number(process.env.PORT || 3000);
        app.listen(port, function () {
            console.log('Express server started on port: ' + port);
        });
    };
    Service.prototype.loadPlugins = function (app) {
        app.use(cors_1.default());
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: true }));
        // Show routes called in console during development
        if (process.env.NODE_ENV !== 'production') {
            app.use(morgan_1.default('dev'));
        }
        if (process.env.NODE_ENV === 'production') {
            app.use(helmet_1.default());
        }
        app.use('/', routes_1.default);
        app.use(function (err, req, res, next) {
            return res.status(500).json({
                error: err.message
            });
        });
        var viewsDir = path_1.default.join(__dirname, './views');
        app.set('views', viewsDir);
        app.engine('html', ejs_1.default.__express);
        app.set('view engine', 'html');
        app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
    };
    return Service;
}());
exports.default = new Service();

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsRoutes = exports.addressRoutes = exports.sessionRoutes = exports.carRoutes = exports.userRoutes = void 0;
const user_routes_1 = __importDefault(require("./user.routes"));
exports.userRoutes = user_routes_1.default;
const address_routes_1 = __importDefault(require("./address.routes"));
exports.addressRoutes = address_routes_1.default;
const session_routes_1 = __importDefault(require("./session.routes"));
exports.sessionRoutes = session_routes_1.default;
const car_routes_1 = __importDefault(require("./car.routes"));
exports.carRoutes = car_routes_1.default;
const comments_routes_1 = __importDefault(require("./comments.routes"));
exports.commentsRoutes = comments_routes_1.default;
//# sourceMappingURL=index.js.map
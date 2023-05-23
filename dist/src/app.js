"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const appError_error_1 = require("./error/appError.error");
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/user", routes_1.userRoutes);
app.use("/login", routes_1.sessionRoutes);
app.use("/car", routes_1.carRoutes);
app.use("/address", routes_1.addressRoutes);
app.use("/comments", routes_1.commentsRoutes);
app.use(appError_error_1.handleError);
exports.default = app;
//# sourceMappingURL=app.js.map
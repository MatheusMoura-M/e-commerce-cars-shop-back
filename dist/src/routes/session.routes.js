"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = require("../controllers/session/login.controller");
const sessionRoutes = (0, express_1.Router)();
sessionRoutes.post("", login_controller_1.userLoginController);
exports.default = sessionRoutes;
//# sourceMappingURL=session.routes.js.map
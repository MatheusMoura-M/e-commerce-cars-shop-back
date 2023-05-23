"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const address_1 = require("../controllers/address");
const address_2 = require("../schemas/address");
const getUserAddressLogged_controller_1 = require("../controllers/address/getUserAddressLogged.controller");
const addressRoutes = (0, express_1.Router)();
addressRoutes.get("/profile", middlewares_1.validateTokenMiddleware, getUserAddressLogged_controller_1.getUserAddressLoggedController);
addressRoutes.patch("", middlewares_1.validateTokenMiddleware, (0, middlewares_1.bodyValidator)(address_2.addressUpdateRequestSchema), address_1.updateAddressController);
exports.default = addressRoutes;
//# sourceMappingURL=address.routes.js.map
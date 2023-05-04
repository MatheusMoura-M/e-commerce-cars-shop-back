"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const user_1 = require("../controllers/user");
const car_1 = require("../controllers/car");
const user_2 = require("../schemas/user");
const userRoutes = (0, express_1.Router)();
userRoutes.post("", 
// bodyValidator(userCreateRequestSchema),
user_1.createUserController);
userRoutes.get("/profile", middlewares_1.validateTokenMiddleware, user_1.userProfileController);
userRoutes.get("/cars", middlewares_1.validateTokenMiddleware, car_1.listUserCarsController);
userRoutes.patch("", middlewares_1.validateTokenMiddleware, (0, middlewares_1.bodyValidator)(user_2.userUpdateRequestSchema), user_1.updateUserController);
userRoutes.delete("", middlewares_1.validateTokenMiddleware, user_1.deleteUserController);
userRoutes.post("/reset-password", user_1.resetPasswordEmailController);
userRoutes.patch("/reset-password/:token", user_1.resetPasswordUserController);
userRoutes.get("/:id", user_1.getUserController);
exports.default = userRoutes;
//# sourceMappingURL=user.routes.js.map
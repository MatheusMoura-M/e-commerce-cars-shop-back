"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginController = void 0;
const login_service_1 = require("../../services/session/login.service");
const userLoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield (0, login_service_1.loginService)(req.body);
    return res.status(200).json(token);
});
exports.userLoginController = userLoginController;
//# sourceMappingURL=login.controller.js.map
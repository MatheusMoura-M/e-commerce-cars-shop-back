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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginService = void 0;
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const appError_error_1 = require("../../error/appError.error");
const repositories_1 = require("../../utils/repositories");
const loginService = ({ email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield repositories_1.userRepo.findOneBy({
        email: email,
    });
    if (!user) {
        throw new appError_error_1.AppError("User not found!", 404);
    }
    const passwordCheck = yield (0, bcryptjs_1.compare)(password, user === null || user === void 0 ? void 0 : user.password);
    if (!passwordCheck) {
        throw new appError_error_1.AppError("Invalid User or password!", 403);
    }
    const token = jsonwebtoken_1.default.sign({
        email: user.email,
        id: user.id,
    }, process.env.SECRET_KEY, {
        subject: String(user.id),
        expiresIn: process.env.EXPIRES_IN
    });
    return { token: token };
});
exports.loginService = loginService;
//# sourceMappingURL=login.service.js.map
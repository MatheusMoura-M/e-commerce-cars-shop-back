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
exports.resetUserPasswordService = void 0;
const bcryptjs_1 = require("bcryptjs");
const appError_error_1 = require("../../error/appError.error");
const repositories_1 = require("../../utils/repositories");
const resetUserPasswordService = (password, resetToken) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = yield repositories_1.userRepo.findOne({
        where: {
            reset_token: resetToken,
        },
    });
    if (!userFound) {
        throw new appError_error_1.AppError("User not found or token expired!", 404);
    }
    const userUpdated = Object.assign(Object.assign({}, userFound), { password: (0, bcryptjs_1.hashSync)(password, 10), reset_token: null });
    repositories_1.userRepo.save(userUpdated);
});
exports.resetUserPasswordService = resetUserPasswordService;
//# sourceMappingURL=resetUserPassword.service.js.map
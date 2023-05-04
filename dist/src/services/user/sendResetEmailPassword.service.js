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
exports.sendResetEmailPasswordService = void 0;
const uuid_1 = require("uuid");
const appError_error_1 = require("../../error/appError.error");
const repositories_1 = require("../../utils/repositories");
const sendEmail_utils_1 = require("../../utils/resetPassword/sendEmail.utils");
const sendResetEmailPasswordService = (email, protocol, host) => __awaiter(void 0, void 0, void 0, function* () {
    const getUser = yield repositories_1.userRepo.findOneBy({
        email: email,
    });
    if (!getUser) {
        throw new appError_error_1.AppError("User not found!", 404);
    }
    const resetToken = (0, uuid_1.v4)();
    const userWithResetCamp = Object.assign(Object.assign({}, getUser), { reset_token: resetToken });
    yield repositories_1.userRepo.save(userWithResetCamp);
    const resetPasswordTemplate = sendEmail_utils_1.emailService.resetPasswordTemplate(email, getUser.name, protocol, host, resetToken);
    yield sendEmail_utils_1.emailService.sendEmail(resetPasswordTemplate);
});
exports.sendResetEmailPasswordService = sendResetEmailPasswordService;
//# sourceMappingURL=sendResetEmailPassword.service.js.map
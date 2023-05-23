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
exports.userProfileService = void 0;
const appError_error_1 = require("../../error/appError.error");
const getSpecificUser_schema_1 = require("../../schemas/user/getSpecificUser.schema");
const repositories_1 = require("../../utils/repositories");
const userProfileService = (id_user) => __awaiter(void 0, void 0, void 0, function* () {
    const getUser = yield repositories_1.userRepo.findOne({
        where: { id: id_user },
    });
    if (!getUser) {
        throw new appError_error_1.AppError("User not found!", 404);
    }
    const clientWithoutPassword = yield getSpecificUser_schema_1.getSpecificUserSchema.validate(getUser, {
        stripUnknown: true,
    });
    return clientWithoutPassword;
});
exports.userProfileService = userProfileService;
//# sourceMappingURL=getUserProfile.service.js.map
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
exports.deleteUserService = void 0;
const appError_error_1 = require("../../error/appError.error");
const repositories_1 = require("../../utils/repositories");
const deleteUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = yield repositories_1.userRepo.findOne({
        where: {
            id: id,
        },
        relations: {
            cars: true,
            address: true,
        },
    });
    if (!userFound) {
        throw new appError_error_1.AppError("User not found!", 404);
    }
    yield repositories_1.userRepo.delete(id);
    return {};
});
exports.deleteUserService = deleteUserService;
//# sourceMappingURL=deleteUser.service.js.map
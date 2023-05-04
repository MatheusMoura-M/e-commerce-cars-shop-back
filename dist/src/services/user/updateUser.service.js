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
exports.updateUserService = void 0;
const appError_error_1 = require("../../error/appError.error");
const user_1 = require("../../schemas/user");
const repositories_1 = require("../../utils/repositories");
const updateUserService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (payload.birthdate === "") {
        delete payload.birthdate;
    }
    if (payload.name === "") {
        delete payload.name;
    }
    if (payload.description === "") {
        delete payload.description;
    }
    if (payload.cpf === "") {
        delete payload.cpf;
    }
    if (payload.email === "") {
        delete payload.email;
    }
    if (payload.image_url === "") {
        delete payload.image_url;
    }
    if (payload.password === "") {
        delete payload.password;
    }
    if (payload.telephone === "") {
        delete payload.telephone;
    }
    const userFound = yield repositories_1.userRepo.findOneBy({
        id: id,
    });
    if (!userFound) {
        throw new appError_error_1.AppError("User not found!", 404);
    }
    const userUpdated = Object.assign(Object.assign({}, userFound), payload);
    yield repositories_1.userRepo.save(userUpdated);
    const userWithout = yield user_1.userUpdateResponseSchema.validate(userUpdated, {
        stripUnknown: true,
    });
    return userWithout;
});
exports.updateUserService = updateUserService;
//# sourceMappingURL=updateUser.service.js.map
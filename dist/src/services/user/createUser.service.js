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
exports.createUserService = void 0;
const appError_error_1 = require("../../error/appError.error");
const user_1 = require("../../schemas/user");
const repositories_1 = require("../../utils/repositories");
const createUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield repositories_1.userRepo.findOne({
        where: {
            email: userData.email,
        },
    });
    if (user) {
        throw new appError_error_1.AppError("E-mail already registered", 409);
    }
    const isCpf = yield repositories_1.userRepo.findOneBy({ cpf: userData.cpf });
    if (isCpf) {
        throw new appError_error_1.AppError("CPF already registered", 409);
    }
    let userUrl = "";
    if (!userData.image_url) {
        userUrl = "https://encurtador.com.br/dmwCE";
    }
    else {
        userUrl = userData.image_url;
    }
    const { password, name, isSeller, image_url, email, description, cpf, birthdate, telephone, state, city, street, number, zipcode, complement, } = userData;
    const newUser = repositories_1.userRepo.create({
        name,
        password,
        isSeller,
        image_url: userUrl,
        email,
        description,
        cpf,
        birthdate,
        telephone,
    });
    yield repositories_1.userRepo.save(newUser);
    const newAddress = repositories_1.addressRepo.create({
        state,
        city,
        street,
        number,
        zipcode,
        complement,
        user: newUser,
    });
    yield repositories_1.addressRepo.save(newAddress);
    const clientWithoutPassword = yield user_1.userCreateAndUpdateResponseSchema.validate(Object.assign(Object.assign({}, newUser), newAddress), {
        stripUnknown: true,
    });
    return clientWithoutPassword;
});
exports.createUserService = createUserService;
//# sourceMappingURL=createUser.service.js.map
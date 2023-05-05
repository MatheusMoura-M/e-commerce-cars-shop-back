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
exports.updateAddressService = void 0;
const appError_error_1 = require("../../error/appError.error");
const address_1 = require("../../schemas/address");
const repositories_1 = require("../../utils/repositories");
const repositories_2 = require("../../utils/repositories");
const updateAddressService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (payload.city === "") {
        delete payload.city;
    }
    if (payload.complement === "") {
        delete payload.complement;
    }
    if (payload.number === "") {
        delete payload.number;
    }
    if (payload.state === "") {
        delete payload.state;
    }
    if (payload.street === "") {
        delete payload.street;
    }
    if (payload.zipcode === "") {
        delete payload.zipcode;
    }
    const userFound = yield repositories_1.userRepo.findOne({
        where: {
            id: id,
        },
        relations: {
            address: true,
        },
    });
    if (!userFound) {
        throw new appError_error_1.AppError("User not found!", 404);
    }
    const addressFound = yield repositories_2.addressRepo.findOneBy({
        id: userFound.address.id,
    });
    const addressUpdated = Object.assign(Object.assign({}, addressFound), payload);
    yield repositories_2.addressRepo.save(addressUpdated);
    const addressValidated = yield address_1.addressUpdateResponseSchema.validate(addressUpdated, {
        stripUnknown: true,
    });
    return addressValidated;
});
exports.updateAddressService = updateAddressService;
//# sourceMappingURL=updateUser.service.js.map
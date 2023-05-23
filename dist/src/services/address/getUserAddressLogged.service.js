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
exports.getUserAddressLoggedService = void 0;
const addressUpdateRequest_schema_1 = require("../../schemas/address/addressUpdateRequest.schema");
const repositories_1 = require("../../utils/repositories");
const getUserAddressLoggedService = (idUser) => __awaiter(void 0, void 0, void 0, function* () {
    const address = yield repositories_1.addressRepo.createQueryBuilder("address")
        .innerJoinAndSelect("address.user", "user")
        .where("user.id = :id", { id: idUser })
        .getOne();
    const responseFormated = addressUpdateRequest_schema_1.addressResponseSchema.validate(address, {
        stripUnknown: true
    });
    return responseFormated;
});
exports.getUserAddressLoggedService = getUserAddressLoggedService;
//# sourceMappingURL=getUserAddressLogged.service.js.map
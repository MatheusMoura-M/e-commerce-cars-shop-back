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
exports.listSellerCarsService = void 0;
const appError_error_1 = require("../../error/appError.error");
const repositories_1 = require("../../utils/repositories");
const listSellerCarsService = (idSeller) => __awaiter(void 0, void 0, void 0, function* () {
    const isUser = repositories_1.userRepo.findOneBy({ id: idSeller });
    if (!isUser) {
        throw new appError_error_1.AppError("User not found", 404);
    }
    const res = yield repositories_1.userRepo.findOne({
        where: {
            id: idSeller,
        },
        relations: {
            cars: true,
        },
    });
    return res;
});
exports.listSellerCarsService = listSellerCarsService;
//# sourceMappingURL=listSellerCars.service.js.map
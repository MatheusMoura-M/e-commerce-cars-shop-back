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
exports.getSpecificCarService = void 0;
const appError_error_1 = require("../../error/appError.error");
const car_1 = require("../../schemas/car");
const repositories_1 = require("../../utils/repositories");
const getSpecificCarService = (carId) => __awaiter(void 0, void 0, void 0, function* () {
    const car = yield repositories_1.carRepo.findOne({
        where: {
            id: carId,
        },
        relations: {
            user: true,
            images: true,
        },
    });
    if (!car) {
        throw new appError_error_1.AppError("Car not found!", 404);
    }
    const carValidated = yield car_1.specificCarResponseSchema.validate(car, {
        stripUnknown: true,
    });
    return carValidated;
});
exports.getSpecificCarService = getSpecificCarService;
//# sourceMappingURL=getSpecificCar.service.js.map
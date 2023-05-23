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
exports.updateCarService = void 0;
const appError_error_1 = require("../../error/appError.error");
const car_1 = require("../../schemas/car");
const repositories_1 = require("../../utils/repositories");
const updateCarService = (carUpdateData, userId, carId, isGoodPrice) => __awaiter(void 0, void 0, void 0, function* () {
    for (let elem in carUpdateData) {
        if (carUpdateData[elem] === "") {
            delete carUpdateData[elem];
        }
    }
    const user = yield repositories_1.userRepo.findOneBy({
        id: userId,
    });
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
    if (car.user.id !== user.id) {
        throw new appError_error_1.AppError("You don't have permission to update this car", 403);
    }
    const updatedCar = repositories_1.carRepo.create(Object.assign(Object.assign(Object.assign({}, car), carUpdateData), { is_good_price: isGoodPrice }));
    yield repositories_1.carRepo.save(updatedCar);
    const returnCar = yield car_1.carUpdateSchema.validate(updatedCar, {
        stripUnknown: true,
    });
    return returnCar;
});
exports.updateCarService = updateCarService;
//# sourceMappingURL=updateCar.service.js.map
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
exports.deleteCarService = void 0;
const appError_error_1 = require("../../error/appError.error");
const repositories_1 = require("../../utils/repositories");
const deleteCarService = (userId, carId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield repositories_1.userRepo.findOneBy({
        id: userId,
    });
    const car = yield repositories_1.carRepo.findOne({
        where: {
            id: carId,
        },
        relations: {
            user: true,
        },
    });
    if (!car) {
        throw new appError_error_1.AppError("Car not found!", 404);
    }
    if (car.user.id !== user.id) {
        throw new appError_error_1.AppError("You don't have permission to delete this car", 403);
    }
    yield repositories_1.carRepo.delete(car.id);
    return {};
});
exports.deleteCarService = deleteCarService;
//# sourceMappingURL=deleteCar.service.js.map
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
exports.createCarService = void 0;
const car_1 = require("../../schemas/car");
const repositories_1 = require("../../utils/repositories");
const createCarService = (carData, userEmail, isGoodPrice) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = yield repositories_1.userRepo.findOneBy({
        email: userEmail,
    });
    const getBrand = yield repositories_1.brandRepo.findOneBy({ name: carData.brand });
    const car = Object.assign(Object.assign({}, carData), { user: userData, is_good_price: isGoodPrice, brand_car: getBrand });
    const newCar = repositories_1.carRepo.create(car);
    yield repositories_1.carRepo.save(newCar);
    const returnCar = yield car_1.carResponseSchema.validate(newCar, {
        stripUnknown: true,
    });
    return returnCar;
});
exports.createCarService = createCarService;
//# sourceMappingURL=createCar.service.js.map
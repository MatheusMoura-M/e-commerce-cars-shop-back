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
const appError_error_1 = require("../../error/appError.error");
const car_1 = require("../../schemas/car");
const repositories_1 = require("../../utils/repositories");
const createCarService = (carData, userId, isGoodPrice) => __awaiter(void 0, void 0, void 0, function* () {
    for (let elem in carData) {
        if (carData[elem] === "") {
            delete carData[elem];
        }
    }
    const userData = yield repositories_1.userRepo.findOneBy({
        id: userId,
    });
    if (!userData) {
        throw new appError_error_1.AppError("User not found", 404);
    }
    if (!userData.isSeller) {
        throw new appError_error_1.AppError("User is not a seller", 409);
    }
    const getBrand = yield repositories_1.brandRepo.findOneBy({ name: carData.brand });
    let brand = getBrand;
    if (!brand) {
        const newBrand = repositories_1.brandRepo.create({ name: carData.brand });
        yield repositories_1.brandRepo.save(newBrand);
        brand = newBrand;
    }
    let carImage = carData.cover_image;
    if (!carData.cover_image) {
        carImage =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcwHeo1aZFE29ryE5ZNrOA1SvJ0Xe_wXt5FnqqvI68h1m10xjF7fRHRoWoO5H2fX7xPPw&usqp=CAU";
    }
    const car = {
        brand: carData.brand,
        model: carData.model,
        year: carData.year,
        fuel: carData.fuel,
        km: carData.km,
        color: carData.color,
        price: carData.price,
        fipe: carData.fipe,
        description: carData.description,
        published: carData.published,
        cover_image: carData.cover_image,
        brand_car: brand,
        user: userData,
        is_good_price: isGoodPrice,
    };
    const newCar = repositories_1.carRepo.create(Object.assign(Object.assign({}, car), { cover_image: carImage }));
    yield repositories_1.carRepo.save(newCar);
    const carCreated = yield repositories_1.carRepo.findOneBy({
        id: newCar.id,
    });
    if (!carCreated) {
        throw new appError_error_1.AppError("Car not found", 404);
    }
    for (let elem in carData) {
        if (elem.includes("images") && carData[elem] !== "") {
            const newImageCar = repositories_1.imageRepo.create({
                image_url: carData[elem],
                car: carCreated,
            });
            yield repositories_1.imageRepo.save(newImageCar);
        }
    }
    const carWithImages = yield repositories_1.carRepo.findOne({
        where: {
            id: newCar.id,
        },
        relations: {
            images: true,
            user: true,
        },
    });
    const returnCar = yield car_1.carResponseSchema.validate(carWithImages, {
        stripUnknown: true,
    });
    return returnCar;
});
exports.createCarService = createCarService;
//# sourceMappingURL=createCar.service.js.map
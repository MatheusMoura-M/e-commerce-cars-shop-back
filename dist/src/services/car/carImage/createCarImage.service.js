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
exports.createCarImageService = void 0;
const appError_error_1 = require("../../../error/appError.error");
const repositories_1 = require("../../../utils/repositories");
const createCarImageService = (url_image, id, id_user) => __awaiter(void 0, void 0, void 0, function* () {
    const findCar = yield repositories_1.carRepo.findOneBy({ id: id });
    if (!findCar) {
        throw new appError_error_1.AppError("Car not found", 404);
    }
    const is_Owner = yield repositories_1.carRepo
        .createQueryBuilder("cars")
        .innerJoinAndSelect("cars.user", "user")
        .where("cars.id = :id_car", { id_car: id })
        .andWhere("user.id = :id_user", { id_user: id_user })
        .getOne();
    if (!is_Owner) {
        throw new appError_error_1.AppError("You don't have permission to delete this car", 403);
    }
    const createImage = repositories_1.imageRepo.create({
        image_url: url_image,
        car: findCar,
    });
    yield repositories_1.imageRepo.save(createImage);
    return createImage;
});
exports.createCarImageService = createCarImageService;
//# sourceMappingURL=createCarImage.service.js.map
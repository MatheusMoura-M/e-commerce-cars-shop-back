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
exports.deleteCarImageService = void 0;
const appError_error_1 = require("../../../error/appError.error");
const repositories_1 = require("../../../utils/repositories");
const deleteCarImageService = (id_image, id_user) => __awaiter(void 0, void 0, void 0, function* () {
    const is_image = yield repositories_1.imageRepo.findOneBy({ id: id_image });
    const is_Owner = yield repositories_1.carRepo
        .createQueryBuilder("cars")
        .innerJoinAndSelect("cars.user", "user")
        .innerJoinAndSelect("cars.images", "image")
        .where("image.id = :id_image", { id_image: id_image })
        .andWhere("user.id = :id_user", { id_user: id_user })
        .getOne();
    if (!is_Owner) {
        throw new appError_error_1.AppError("You don't have permission to delete this car", 403);
    }
    if (!is_image) {
        throw new appError_error_1.AppError("image not found", 404);
    }
    yield repositories_1.imageRepo.delete({ id: id_image });
});
exports.deleteCarImageService = deleteCarImageService;
//# sourceMappingURL=deleteCarImage.service.js.map
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
exports.listCarImageService = void 0;
const appError_error_1 = require("../../../error/appError.error");
const repositories_1 = require("../../../utils/repositories");
const listCarImageService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const findCar = yield repositories_1.carRepo.findOneBy({ id: id });
    if (!findCar) {
        throw new appError_error_1.AppError("Car not found", 404);
    }
    const images = yield repositories_1.carRepo.findOne({
        where: {
            id: id,
        },
        relations: {
            images: true,
        },
    });
    return images.images;
});
exports.listCarImageService = listCarImageService;
//# sourceMappingURL=listCarImage.service.js.map